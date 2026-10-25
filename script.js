
const cars = {
  porsche: {
    name: "PORSCHE 911 GT3 RS",
    description:
      "Precision engineered for the track.",
    power: "518 HP",
    acceleration: "3.2 S",
    speed: "296 KM/H",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=85"
  },

  ferrari: {
    name: "FERRARI 488 GTB",
    description:
      "Italian engineering meets pure emotion.",
    power: "661 HP",
    acceleration: "3.0 S",
    speed: "330 KM/H",
    image:
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1800&q=85"
  },

  lamborghini: {
    name: "LAMBORGHINI AVENTADOR",
    description:
      "An unmistakable expression of power.",
    power: "700 HP",
    acceleration: "2.9 S",
    speed: "350 KM/H",
    image:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1800&q=85"
  }
};

const showroomImage =
  document.getElementById("showroomImage");

const carName =
  document.getElementById("carName");

const carDescription =
  document.getElementById("carDescription");

const carPower =
  document.getElementById("carPower");

const carAcceleration =
  document.getElementById("carAcceleration");

const carSpeed =
  document.getElementById("carSpeed");

const buttons =
  document.querySelectorAll(".car-option");

function changeCar(carKey) {
  const car = cars[carKey];
  if (!car) return;

  showroomImage.style.opacity = "0.3";

  setTimeout(() => {
    showroomImage.style.backgroundImage =
      `url("${car.image}")`;

    carName.textContent = car.name;
    carDescription.textContent =
      car.description;
    carPower.textContent = car.power;
    carAcceleration.textContent =
      car.acceleration;
    carSpeed.textContent = car.speed;

    showroomImage.style.opacity = "1";
  }, 250);

  buttons.forEach(button => {
    const selected =
      button.dataset.car === carKey;

    button.classList.toggle(
      "active", selected
    );

    button.setAttribute(
      "aria-pressed", String(selected)
    );
  });
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    changeCar(button.dataset.car);
  });
});

changeCar("porsche");
