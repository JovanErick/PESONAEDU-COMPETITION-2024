const upBtn = document.getElementById("upBtn");

function backToTop() {
  window.scrollTo({ top: 0 });
}


function showUpBtn() {
  if (window.scrollY !== 0) {
    upBtn.style.display = "block";
  } else {
    upBtn.style.display = "none";
  }
}

const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let currentSlide = 0;

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

const manualNav = function (manual) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[manual].classList.add("active");
};

manualNav(currentSlide);

const nextSlide = function () {
  currentSlide = (currentSlide + 1) % slides.length;
  manualNav(currentSlide);
};

const prevSlide = function () {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  manualNav(currentSlide);
};

rightArrow.addEventListener("click", nextSlide);
leftArrow.addEventListener("click", prevSlide);

document.getElementById("carbon-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const milesDriven = parseFloat(document.getElementById("miles-driven").value);
  const electricityConsumption = parseFloat(
    document.getElementById("electricity-consumption").value
  );
  const waste = parseFloat(document.getElementById("waste").value);

  const carEmissionFactor = 0.256;
  const electricityEmissionFactor = 0.92;
  const wasteEmissionFactor = 0.5;

  const carEmissions = milesDriven * carEmissionFactor * 52;
  const electricityEmissions =
    electricityConsumption * electricityEmissionFactor * 12;
  const wasteEmissions = waste * wasteEmissionFactor * 52;

  const totalCarbonFootprint =
    carEmissions + electricityEmissions + wasteEmissions;

  document.getElementById("carbon-output").textContent =
    totalCarbonFootprint.toFixed(2);
});
