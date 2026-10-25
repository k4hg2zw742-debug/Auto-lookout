const cars = {
  porsche: {
    maker: 'PORSCHE / GERMANY', name: '911 GT3 RS',
    description: 'Purpose, distilled into performance.',
    power: '518 hp', acceleration: '3.2 s', speed: '296 km/h',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85',
    alt: 'Porsche sports car driving on the road', counter: '01 / 03'
  },
  ferrari: {
    maker: 'FERRARI / ITALY', name: '488 GTB',
    description: 'An expression of Italian performance.',
    power: '661 hp', acceleration: '3.0 s', speed: '330 km/h',
    image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=2000&q=85',
    alt: 'Red Ferrari sports car', counter: '02 / 03'
  },
  lamborghini: {
    maker: 'LAMBORGHINI / ITALY', name: 'Aventador',
    description: 'A striking vision of automotive power.',
    power: '700 hp', acceleration: '2.9 s', speed: '350 km/h',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=2000&q=85',
    alt: 'Lamborghini sports car', counter: '03 / 03'
  }
};
const photo = document.getElementById('heroPhoto');
const buttons = [...document.querySelectorAll('.car-option')];
const fields = {
  carMaker: 'maker', carName: 'name', carDescription: 'description',
  carPower: 'power', carAcceleration: 'acceleration',
  carSpeed: 'speed', carCounter: 'counter'
};
let changeToken = 0;
function showCar(key) {
  const car = cars[key];
  if (!car) return;
  const token = ++changeToken;
  buttons.forEach(button => {
    const active = button.dataset.car === key;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  const update = () => {
    if (token !== changeToken) return;
    for (const [id, field] of Object.entries(fields)) {
      document.getElementById(id).textContent = car[field];
    }
    photo.style.backgroundImage = `url("${car.image}")`;
    photo.setAttribute('aria-label', car.alt);
    photo.classList.remove('is-changing');
  };
  photo.classList.add('is-changing');
  const image = new Image();
  image.onload = update;
  image.onerror = update;
  image.src = car.image;
  if (image.complete) update();
}
buttons.forEach(button => button.addEventListener('click', () => showCar(button.dataset.car)));
document.getElementById('year').textContent = new Date().getFullYear();
showCar('porsche');
