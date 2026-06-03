
const ACCESS_PASSWORD='fernetazo';
function validatePassword(){
 if(document.getElementById('passwordInput').value===ACCESS_PASSWORD){
 document.getElementById('accessScreen').style.display='none';
 }
}
const music=document.getElementById('weddingMusic');
document.getElementById('musicBtn').onclick=()=>music.paused?music.play():music.pause();

const target=new Date('2026-10-10T18:00:00');
setInterval(()=>{
 const d=target-new Date();
 const days=Math.floor(d/86400000);
 const h=Math.floor((d%86400000)/3600000);
 const m=Math.floor((d%3600000)/60000);
 document.getElementById('timer').innerHTML=`${days} días · ${h} hs · ${m} min`;
},1000);

const obs=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('active');});
});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
