(function(){"use strict";var a={5009:function(a,t,e){var n=e(9242),r=e(3396);function o(a,t,e,n,o,u){const l=(0,r.up)("MessageOfTheDay");return(0,r.wg)(),(0,r.j4)(l)}var u=e(7139),l=e.p+"img/pattern-top.893adad5.png",i=e.p+"img/pattern-bottom.473b67e9.png",s=e(4870),c=e(4161);const d=a=>((0,r.dD)("data-v-504a0ae6"),a=a(),(0,r.Cn)(),a),f={class:"overlay"},v=d((()=>(0,r._)("h2",null,' " يَا أَيُّهَا النَّاسُ قَدْ جَاءَتْكُم مَّوْعِظَةٌ مِّن رَّبِّكُمْ وَشِفَاءٌ لِّمَا فِي الصُّدُورِ وَهُدًى وَرَحْمَةٌ لِّلْمُؤْمِنِينَ " ',-1))),g={key:1,class:"content"},p=d((()=>(0,r._)("h2",null,"بِسْمِ ٱللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ",-1))),h={class:"ayah"},y=d((()=>(0,r._)("img",{src:l,alt:""},null,-1))),m=d((()=>(0,r._)("img",{src:i,alt:""},null,-1))),w={key:0,class:"tafsir"},_=d((()=>(0,r._)("b",null,"تفسير الآية: ",-1))),b={class:"name"},k=["src"];var O={__name:"MessageOfTheDay",setup(a){const t=(0,s.iH)(null),e=(0,s.iH)(null),n=(0,s.iH)(!1),o=(0,s.iH)(""),l=(0,s.iH)(!1),i=(0,s.iH)(null),d=async()=>{await O(),t.value&&t.value.audio&&i.value.play()},O=async()=>{let a,r;do{a=Math.floor(114*Math.random())+1;const e=await c.Z.get(`https://api.alquran.cloud/v1/surah/${a}`);if(e.data&&e.data.data){const a=e.data.data.numberOfAyahs;r=Math.floor(Math.random()*a)+1}try{const a=await c.Z.get("https://api.alquran.cloud/v1/edition?format=audio&language=ar");a.data&&a.data.data&&a.data.data.length>0&&(o.value=a.data.data[0].identifier)}catch(u){console.error("Error fetching audio editions:",u)}const n=await c.Z.get(`https://api.alquran.cloud/v1/ayah/${a}:${r}/${o.value}`);n.data&&n.data.data&&(t.value=n.data.data)}while(!t.value||D(t.value.text));try{const t=await c.Z.get(`https://api.quran-tafseer.com/tafseer/1/${a}/${r}`);t.data&&t.data.text&&(e.value={text:t.data.text})}catch(u){console.error("Error fetching Tafsir:",u)}t.value&&localStorage.setItem("ayah",JSON.stringify(t.value)),e.value&&localStorage.setItem("tafsir",JSON.stringify(e.value)),n.value=!0,localStorage.setItem("clickedDate",(new Date).toDateString())},D=a=>{const t=["ألم","كهيعص","الۤـمۤـصۤـحۤ","الۤر","الۤـمۤـر","طـه","طـسۤـمۤ","طـسۤ","يـسۤ","صۤ","حـمۤ","حـمۤ عۤـسۤـقۤ","قۤ","نۤ"];for(const e of t)if(a.includes(e))return!0;return!1},x=()=>{const a=new Date,t=a.getHours();l.value=t>=5&&t<12};x(),(0,r.bv)((()=>{setInterval((()=>{x()}),6e4)}));const S=localStorage.getItem("ayah"),q=localStorage.getItem("tafsir");S&&(t.value=JSON.parse(S)),q&&(e.value=JSON.parse(q));const I=localStorage.getItem("clickedDate");return I===(new Date).toDateString()&&(n.value=!0),(a,o)=>((0,r.wg)(),(0,r.iD)("div",{class:(0,u.C_)(["daliy-msg",l.value?"morning":"night"])},[(0,r._)("div",f,[v,n.value?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("button",{key:0,onClick:d}," رسالتك اليوم من القرآن ")),t.value&&t.value.text?((0,r.wg)(),(0,r.iD)("div",g,[p,(0,r._)("div",h,[y,(0,r._)("h1",null,(0,u.zw)(t.value.text),1),m]),e.value&&e.value.text?((0,r.wg)(),(0,r.iD)("p",w,[_,(0,r.Uk)((0,u.zw)(e.value.text),1)])):(0,r.kq)("",!0),(0,r._)("div",b,[t.value.audio?((0,r.wg)(),(0,r.iD)("audio",{key:0,ref_key:"ayahAudioRef",ref:i,controls:""},[(0,r._)("source",{src:t.value.audio,type:"audio/mp3"},null,8,k),(0,r.Uk)(" Your browser does not support the audio element. ")],512)):(0,r.kq)("",!0),(0,r._)("p",null,"( "+(0,u.zw)(t.value.surah.name)+": "+(0,u.zw)(t.value.numberInSurah)+" )",1)])])):(0,r.kq)("",!0)])],2))}},D=e(89);const x=(0,D.Z)(O,[["__scopeId","data-v-504a0ae6"]]);var S=x,q={name:"App",components:{MessageOfTheDay:S}};const I=(0,D.Z)(q,[["render",o]]);var M=I;(0,n.ri)(M).mount("#app")}},t={};function e(n){var r=t[n];if(void 0!==r)return r.exports;var o=t[n]={exports:{}};return a[n].call(o.exports,o,o.exports,e),o.exports}e.m=a,function(){var a=[];e.O=function(t,n,r,o){if(!n){var u=1/0;for(c=0;c<a.length;c++){n=a[c][0],r=a[c][1],o=a[c][2];for(var l=!0,i=0;i<n.length;i++)(!1&o||u>=o)&&Object.keys(e.O).every((function(a){return e.O[a](n[i])}))?n.splice(i--,1):(l=!1,o<u&&(u=o));if(l){a.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}o=o||0;for(var c=a.length;c>0&&a[c-1][2]>o;c--)a[c]=a[c-1];a[c]=[n,r,o]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var n in t)e.o(t,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.p="/TodayMessage/"}(),function(){var a={143:0};e.O.j=function(t){return 0===a[t]};var t=function(t,n){var r,o,u=n[0],l=n[1],i=n[2],s=0;if(u.some((function(t){return 0!==a[t]}))){for(r in l)e.o(l,r)&&(e.m[r]=l[r]);if(i)var c=i(e)}for(t&&t(n);s<u.length;s++)o=u[s],e.o(a,o)&&a[o]&&a[o][0](),a[o]=0;return e.O(c)},n=self["webpackChunkquran_message_of_the_day"]=self["webpackChunkquran_message_of_the_day"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(5009)}));n=e.O(n)})();
//# sourceMappingURL=app.4d904a69.js.map