import { renderTbl } from "./render.js";
import { determineHomeSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
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
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

document.getElementById('form').addEventListener('submit', event => {
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

const start = (...x) => {
    const houseHoldPTS = determineHouseHoldPts(x[0]);
    const impactSCR = determineHomeSizePts(x[1]);
    const total = houseHoldPTS + impactSCR;
    cfpData.push({
        firstName: x[2],
        lastName: x[3],
        myPTS: houseHoldPTS,
        mySCR: impactSCR,
        myPeople: x[0],
        mySize: x[1],
        myTotal: total,
    });

}

renderTbl(cfpData);
//rest operator
// const add2 = function(...a) {
//     return 2 + a[3];
// }

// const result = add2(1, 2, 3, 4);

// arrow function

// const add2 = a => 2 + a;

// const result = add2(100);

// //IIFE

// const a = 3;

// (function(a){
//     console.log("inside IIFE");
//     console.log(a);
// })(a);