const houseMembers = 4;
const houseSize = 7;
const foodChoices = 8;
const waterConsumption = 1;
const housePurchases = 10;
const wasteProduction = 30;
const wasteRecyclage = 12;
const annualTransportation = 6;

const total = houseMembers + houseSize + foodChoices + waterConsumption + housePurchases + wasteProduction + wasteRecyclage + annualTransportation
const footprint = document.querySelector("h3");
footprint.textContent = total