// Select all slides and buttons (dots)
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
let currentSlide = 0; // Start at the first slide (index 0)

// Hamburger Button
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});
// Function to navigate slides manually and synchronize with dots
const manualNav = function (manual) {
  // Remove active class from all slides and dots
  slides.forEach((slide) => slide.classList.remove('active'));

  // Add active class to the selected slide and dot
  slides[manual].classList.add('active');
};

// Initially set the first slide and button as active
manualNav(currentSlide); // Ensure the first slide and dot are active on load

// Add click event to navigation buttons (dots)

// Function to move to the next slide
const nextSlide = function () {
  currentSlide = (currentSlide + 1) % slides.length;  // Circular navigation
  manualNav(currentSlide);
};

// Function to move to the previous slide
const prevSlide = function () {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;  // Circular navigation
  manualNav(currentSlide);
};

// Add click events to arrows
rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

document.getElementById('carbon-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get values from the form
  const milesDriven = parseFloat(document.getElementById('miles-driven').value);
  const electricityConsumption = parseFloat(document.getElementById('electricity-consumption').value);
  const waste = parseFloat(document.getElementById('waste').value);

  // CO2 emission factors (approximate values)
  const carEmissionFactor = 0.256; // kg CO2 per mile (average car)
  const electricityEmissionFactor = 0.92; // kg CO2 per kWh (average grid)
  const wasteEmissionFactor = 0.5; // kg CO2 per kg of waste

  // Calculate emissions for each category
  const carEmissions = milesDriven * carEmissionFactor * 52; // Weekly miles to yearly
  const electricityEmissions = electricityConsumption * electricityEmissionFactor * 12; // Monthly to yearly
  const wasteEmissions = waste * wasteEmissionFactor * 52; // Weekly to yearly

  // Total Carbon Footprint
  const totalCarbonFootprint = carEmissions + electricityEmissions + wasteEmissions;

  // Display the result
  document.getElementById('carbon-output').textContent = totalCarbonFootprint.toFixed(2);
});