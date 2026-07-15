const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

window.addEventListener("load",()=>{
  setTimeout(()=>{
    const l=document.getElementById("loading");
    l.style.opacity="0";
    setTimeout(()=>l.style.display="none",800);
  },1400);
  music.play().catch(()=>{musicBtn.textContent="🎵 Дуу тоглуулах";});
});

function toggleMusic(){
  if(music.paused){
    music.play().then(()=>musicBtn.textContent="🎵 Дуу зогсоох").catch(()=>alert("music хавтас дотор love.mp3 хийгээрэй."));
  }else{
    music.pause();
    musicBtn.textContent="🎵 Дуу тоглуулах";
  }
}

const startDate=new Date("2025-12-04T00:00:00");
function updateCounter(){
  const diff=Math.max(0,Date.now()-startDate.getTime());
  const total=Math.floor(diff/1000);
  days.textContent=Math.floor(total/86400);
  hours.textContent=String(Math.floor((total%86400)/3600)).padStart(2,"0");
  minutes.textContent=String(Math.floor((total%3600)/60)).padStart(2,"0");
  seconds.textContent=String(total%60).padStart(2,"0");
}
setInterval(updateCounter,1000);updateCounter();

const photos=["images/photo1.jpg","images/photo2.jpg","images/photo3.jpg"];
let current=0;
function renderPhoto(){
  galleryImage.style.opacity="0";
  setTimeout(()=>{
    galleryImage.src=photos[current];
    photoCount.textContent=`${current+1} / ${photos.length}`;
    document.querySelectorAll(".dot").forEach((d,i)=>d.classList.toggle("active",i===current));
    galleryImage.style.opacity="1";
  },220);
}
function nextImage(){current=(current+1)%photos.length;renderPhoto()}
function prevImage(){current=(current-1+photos.length)%photos.length;renderPhoto()}
setInterval(nextImage,4000);

function openLetter(){
  const ok=passwordInput.value==="224";
  passwordStatus.textContent=ok?"Захидал нээгдлээ ❤️":"Нууц код буруу байна";
  if(ok)secretLetter.classList.remove("hidden");
}
function closeLetter(){secretLetter.classList.add("hidden")}

function moveNoButton(){
  const b=document.getElementById("noBtn");
  b.style.transform=`translate(${Math.random()*180-90}px,${Math.random()*80-40}px)`;
}
function sayYes(){
  finalMessage.textContent="❤️ Бидний түүх үргэлжилсээр байх болно ❤️";
  for(let i=0;i<45;i++)setTimeout(()=>{
    const h=document.createElement("div");
    h.className="floating-heart";
    h.textContent=["❤️","💗","💕","✨"][Math.floor(Math.random()*4)];
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=(18+Math.random()*28)+"px";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),4200);
  },i*70);
}

for(let i=0;i<120;i++){
  const s=document.createElement("div");
  s.className="star";
  s.style.left=Math.random()*100+"vw";
  s.style.top=Math.random()*100+"vh";
  s.style.animationDelay=Math.random()*2+"s";
  document.getElementById("stars").appendChild(s);
}