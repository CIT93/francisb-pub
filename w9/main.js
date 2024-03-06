import { renderTbl } from "./render.js";
import { determineHomeSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM } from "./global.js";
import { saveLS, cfpData } from "./storage.js"; 

console.log("global scope");

const validateField = event => {
    const field = event.target.value;
    const fieldId = event.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`);

    if (field === '') {
        fieldError.textContent = `${fieldId} is required`;
        event.target.classList.add('invalid');
    } else {
        fieldError.textContent = '';
        event.target.classList.remove('invalid');
    }
};

// Attach blur event listeners
document.getElementById('firstname').addEventListener('blur', validateField);
document.getElementById('lastname').addEventListener('blur', validateField);

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const firstNameIsValid = document.getElementById('firstname').value !== '';
    const lastNameIsValid = document.getElementById('lastname').value !== '';
    if (firstNameIsValid && lastNameIsValid) {
        alert('Form is valid. You can proceed with submitting the form to the server.');
        const fName = FORM.firstname.value;
        const lName = FORM.lastname.value;
        const householdNumber = parseInt(FORM.numberofpeople.value);
        const sizeOfHome = FORM.typeofhome.value;
        start(householdNumber, sizeOfHome, fName, lName);
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset();
    }
})

function start(numberInHousehold, homeSize, firstname, lastname) {
    const houseHoldPTS = determineHouseHoldPts(numberInHousehold);
    const impactSCR = determineHomeSizePts(homeSize);
    const total = houseHoldPTS + impactSCR;
    cfpData.push({
        firstName: firstname,
        lastName: lastname,
        myPTS: houseHoldPTS,
        mySCR: impactSCR,
        myPeople: numberInHousehold,
        mySize: homeSize,
        myTotal: total,
    });

}

renderTbl(cfpData);
