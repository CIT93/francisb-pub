import { renderTbl } from "./render.js";
import { determineHomeSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js"; 

console.log("global scope");

const validateField = function(event) {
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
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    if (FNAME.value !== '' && LNAME.value !== '') {
        SUBMIT.textContent = '';
        start(parseInt(FORM.numberofpeople.value), FORM.typeofhome.value, FNAME.value, LNAME.value);
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset();
    }
    else {
        SUBMIT.textContent = "Form requires first name and last name"
    }
})

const start = function(numberInHousehold, homeSize, firstname, lastname) {
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

const add2 = function(...a) {
    return 2 + a[3];
}

const result = add2(1, 2, 3, 4);

//spread argument

//IIFE

const a = 3;

(function(a){
    console.log("inside IIFE");
    console.log(a);
})(a);