import { renderTbl } from "./render.js";
import { determineHomeSizePts, determineHouseHoldPts } from "./cfp.js";
import { FORM, FNAME, LNAME, SUBMIT } from "./global.js";
import { saveLS, cfpData } from "./storage.js"; 
import { FP } from "./fp.js";

console.log("global scope");

const start = (numberInHousehold, homeSize, first, last) => {
    const houseHoldPTS = determineHouseHoldPts(numberInHousehold);
    const impactSCR = determineHomeSizePts(homeSize);
    const total = houseHoldPTS + impactSCR;
    cfpData.push({
        firstName: first,
        lastName: last,
        myPTS: houseHoldPTS,
        mySCR: impactSCR,
        myPeople: numberInHousehold,
        mySize: homeSize,
        myTotal: total,
    });
}

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

FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

document.getElementById('form').addEventListener('submit', e => {
    event.preventDefault();
    if (FNAME.value !== '' && LNAME.value !== '') {
        SUBMIT.textContent = '';
        const fpObj = new FP(FNAME.value, LNAME.value, parseInt(e.target.numberofpeople.value), e.target.typeofhome.value, e.target.foodconsumption.value, e.target.foodconvenience.value, parseInt(e.target.dishwasher.value))
        cfpData.push(fpObj);
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset();
    }
    else {
        SUBMIT.textContent = "Form requires first name and last name"
    }
})

renderTbl(cfpData);

