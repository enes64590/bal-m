// ŞİFRELER
const PASS1 = "reyyan";
const PASS2 = "aşk";

// NOT (BUNU SEN DOLDURACAKSIN)
const NOTE = `
Bitanem seni çok seviyorum bunu biliyosun biz şu geçen zamanda birbirimizi çok iyi tanıdığımızı düşünüyorum. Kavga etsek küssek tartışsak bile işin sonunda barışıp yine mutlu oluyoruz. Bence birbirimizi yeteri kadar tanıdığımızı neye kırıldığımızı falan anladığımızı düşünüyoruz tabi daha zaman lazım hala orta iyi arasıyız ama bunu artık biraz daha yakın olarak mı yapsak diyorum :) neyse çok fazla uzatmak istemiyorum sen benim herşeyimsin bunu unutma seni canımdan çok seviyorum ve içimdeki sevgi her geçen gün büyüyor aşağıdaki şifreyi girmeni istiyorum tekrardan iyi ki benimsin iyi kahaytımdasın iyi ki tanımışım seni güzelim...
`;

// GİRİŞ
function login(){
let p=document.getElementById("pass1").value;

if(p===PASS1){
document.getElementById("login").style.display="none";
document.getElementById("main").style.display="flex";
document.getElementById("music").play();
}else{
alert("Yanlış şifre ❤️");
}
}

// NOT AÇ
function openNote(){
document.getElementById("noteText").innerText = NOTE;
document.getElementById("noteModal").style.display="flex";
}

function closeNote(){
document.getElementById("noteModal").style.display="none";
}

// 2. ŞİFRE
function check(){
let p=document.getElementById("pass2").value;

if(p===PASS2){
startProposal();
}else{
alert("Yanlış şifre ❤️");
}
}

// TEKLİF
function startProposal(){

document.getElementById("proposal").style.display="flex";

let text="Artık gerçekten beklemek istemiyorum Birbirimizi asla bırakmamak her koşulda sevmek şartı ile ";

let el=document.getElementById("text");
el.innerHTML="";

let i=0;

let interval=setInterval(()=>{

el.innerHTML+=text[i];
i++;

if(i>=text.length){
clearInterval(interval);
document.querySelector(".buttons").style.display="block";
}

},50);

createHearts();
}

// EVET
function yes(){
document.getElementById("proposal").innerHTML=`
<h1>❤️ Artık gerçekten bana aitsiiiiin ❤️</h1>
<p>Artık gerçekten bana aitsiiiiin ❤️</p>
`;
createHearts();
}

// KALPLER
function createHearts(){
setInterval(()=>{
let h=document.createElement("div");
h.classList.add("heart");
h.innerHTML="🤍";
h.style.left=Math.random()*100+"%";
document.body.appendChild(h);

setTimeout(()=>h.remove(),6000);
},200);
}