<template>
    <div :class="['daliy-msg', isMorning ? 'morning' : 'night']">
      <div class="overlay">
        <h2>
          " يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُم مَّوْعِظَةٌ مِّن رَّبِّكُمْ
          وَشِفَاءٌ لِّمَا فِي الصُّدُورِ وَهُدًى وَرَحْمَةٌ لِّلْمُؤْمِنِينَ "
        </h2>
        <button @click="fetchAndPlayAyah" v-if="!isClickedToday">
          رسالتك اليوم من القرآن
        </button>
        <div v-if="ayah && ayah.text" class="content">
          <h2>بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
          <div class="ayah">
            <img src="@/assets/images/pattern-top.png" alt="" />
            <h1>{{ ayah.text }}</h1>
            <img src="@/assets/images/pattern-bottom.png" alt="" />
          </div>
  
          <p v-if="tafsir && tafsir.text" class="tafsir">
            <b>تفسير الآية: </b>{{ tafsir.text }}
          </p>
          <div class="name">
            <audio ref="ayahAudioRef" controls v-if="ayah.audio">
              <source :src="ayah.audio" type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
            <p>( {{ ayah.surah.name }}: {{ ayah.numberInSurah }} )</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const ayah = ref(null);
  const tafsir = ref(null);
  const isClickedToday = ref(false);
  const audioEdition = ref('');
  const isMorning = ref(false);
  const ayahAudioRef = ref(null); 
  
  const fetchAndPlayAyah = async () => {
    await fetchAyah();
    if (ayah.value && ayah.value.audio) { // Check if ayahAudioRef.value is not null/undefined
        ayahAudioRef.value.play();
    }
  };
  
  const fetchAyah = async () => {
    let surahNumber;
    let ayahNumber;
  
    do {
      surahNumber = Math.floor(Math.random() * 114) + 1;
      const responseMeta = await axios.get(`http://api.alquran.cloud/v1/surah/${surahNumber}`);
  
      if (responseMeta.data && responseMeta.data.data) {
        const ayahCount = responseMeta.data.data.numberOfAyahs;
        ayahNumber = Math.floor(Math.random() * ayahCount) + 1;
      }
      // Corrected code
try {
    const response = await axios.get('http://api.alquran.cloud/v1/edition?format=audio&language=ar');
    if (response.data && response.data.data && response.data.data.length > 0) {
        audioEdition.value = response.data.data[0].identifier; // Use audioEdition.value
    }
} catch (error) {
    console.error("Error fetching audio editions:", error);
}

  
      const responseArabic = await axios.get(`http://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}/${audioEdition.value}`);
      if (responseArabic.data && responseArabic.data.data) {
        ayah.value = responseArabic.data.data;
      }
    } while (!ayah.value || containsKeyword(ayah.value.text));
  
    try {
      const responseTafsir = await axios.get(`http://api.quran-tafseer.com/tafseer/1/${surahNumber}/${ayahNumber}`);
      if (responseTafsir.data && responseTafsir.data.text) {
        tafsir.value = { text: responseTafsir.data.text };
      }
    } catch (error) {
      console.error("Error fetching Tafsir:", error);
    }
    
  
    if (ayah.value) {
      localStorage.setItem('ayah', JSON.stringify(ayah.value));
    }
    if (tafsir.value) {
      localStorage.setItem('tafsir', JSON.stringify(tafsir.value));
    }
  
    isClickedToday.value = true;
    localStorage.setItem('clickedDate', new Date().toDateString());
  };
  
  const containsKeyword = (text) => {
    const keywords = ['ألم', 'كهيعص', 'الۤـمۤـصۤـحۤ', 'الۤر', 'الۤـمۤـر', 'طـه', 'طـسۤـمۤ', 'طـسۤ', 'يـسۤ', 'صۤ', 'حـمۤ', 'حـمۤ عۤـسۤـقۤ', 'قۤ', 'نۤ'];
    for (const keyword of keywords) {
      if (text.includes(keyword)) {
        return true;
      }
    }
    return false;
  };
  
  // Check the time of day
  const checkTimeOfDay = () => {
    const now = new Date();
    const hour = now.getHours();
  
    // You can adjust these values to match your desired time range
    isMorning.value = hour >= 5 && hour < 12; // Assuming morning is from 5 AM to 12 PM
  };
  
  // Call the checkTimeOfDay method to set the initial time of day
  checkTimeOfDay();
  
  // Set an interval to check and update the time of day every minute
  onMounted(() => {
    setInterval(() => {
      checkTimeOfDay();
    }, 60000); // Check every minute
  });
  
  // Load the initial data from localStorage
  const storedAyah = localStorage.getItem('ayah');
  const storedTafsir = localStorage.getItem('tafsir');
  
  if (storedAyah) {
    ayah.value = JSON.parse(storedAyah);
  }
  if (storedTafsir) {
    tafsir.value = JSON.parse(storedTafsir);
  }
  
  // Check if the user has already clicked today
  const clickedDate = localStorage.getItem('clickedDate');
  if (clickedDate === new Date().toDateString()) {
    isClickedToday.value = true;
  }
  </script>
  
  <style scoped lang="scss">
  .daliy-msg {
    background-image: url("@/assets/images/night.jpg");
    background-size: cover;
    color: #fff;
    background-position: center;
  
    .overlay {
      background-color: rgba(#000, 0.1);
      padding: 60px 40px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      justify-content: space-between;
    }
  
    &.morning {
      background-image: url("@/assets/images/morning.jpg");
    }
  
    &.night {
      background-image: url("@/assets/images/night.jpg");
    }
  
    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 32px;
      margin-top: 60px;
  
      h1 {
        @media (max-width: 767px) {
          font-size: 32px;
        }
      }
    }
  
    .ayah {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 24px;
      width: 800px;
      margin: 0 auto;
  
      @media (max-width: 767px) {
        width: 100%;
      }
  
      h1 {
        line-height: 50px;
      }
  
      img {
        width: 500px;
        height: 100px;
        align-self: center;
  
        @media (max-width: 767px) {
          width: 100%;
        }
      }
    }
  
    .tafsir {
      font-size: 24px;
      border-radius: 5px;
      line-height: 32px;
      border: 1px solid #D2BC82;
      background-color: rgba(#D2BC82, 0.5);
      padding: 16px;
      margin-top: 30px;
  
      b {
        color: #E8D11F;
      }
    }
  
    .name {
      display: flex;
      justify-content: space-between;
      align-items: center;
  
      @media (max-width: 767px) {
        flex-direction: column;
        gap: 16px;
      }
    }
  }
  </style>
  