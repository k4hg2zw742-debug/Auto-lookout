const cars = [
  {key:'porsche',maker:'PORSCHE / STUTTGART',name:'911 GT3 RS',tagline:'Form follows performance.',caption:'ENGINEERED TO FEEL EVERYTHING.',power:'518 hp',acceleration:'3.2 s',speed:'296 km/h',image:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=85',alt:'Porsche 911 sports car'},
  {key:'ferrari',maker:'FERRARI / MARANELLO',name:'488 GTB',tagline:'The art of Italian performance.',caption:'A STUDY IN POWER AND BEAUTY.',power:'661 hp',acceleration:'3.0 s',speed:'330 km/h',image:'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=2200&q=85',alt:'Ferrari sports car'},
  {key:'lamborghini',maker:'LAMBORGHINI / SANT’AGATA',name:'AVENTADOR',tagline:'Unmistakably extraordinary.',caption:'AN ICON OF PURE PRESENCE.',power:'700 hp',acceleration:'2.9 s',speed:'350 km/h',image:'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=2200&q=85',alt:'Lamborghini sports car'}
];
const imageElement=document.getElementById('stageImage');
const buttons=[...document.querySelectorAll('.car-option')];
const fields={carMaker:'maker',carName:'name',carTagline:'tagline',carCaption:'caption',carPower:'power',carAcceleration:'acceleration',carSpeed:'speed'};
let current=0,request=0;
function selectCar(index){
  current=(index+cars.length)%cars.length;
  const car=cars[current],token=++request;
  buttons.forEach((button,i)=>{button.classList.toggle('selected',i===current);button.setAttribute('aria-pressed',String(i===current));});
  imageElement.classList.add('changing');
  const apply=()=>{
    if(token!==request)return;
    Object.entries(fields).forEach(([id,property])=>document.getElementById(id).textContent=car[property]);
    imageElement.style.backgroundImage=`url("${car.image}")`;
    imageElement.setAttribute('aria-label',car.alt);
    document.getElementById('carIndex').textContent=`0${current+1} — 03`;
    document.getElementById('carCount').textContent=`0${current+1} / 03`;
    imageElement.classList.remove('changing');
  };
  const preload=new Image();preload.onload=apply;preload.onerror=apply;preload.src=car.image;
  if(preload.complete)apply();
}
buttons.forEach((button,index)=>button.addEventListener('click',()=>selectCar(index)));
document.getElementById('previous').addEventListener('click',()=>selectCar(current-1));
document.getElementById('next').addEventListener('click',()=>selectCar(current+1));
document.getElementById('year').textContent=new Date().getFullYear();
selectCar(0);
