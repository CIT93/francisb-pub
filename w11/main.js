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

// Attach blur event listeners
FNAME.addEventListener('blur', validateField);
LNAME.addEventListener('blur', validateField);

document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault();
    if (FNAME.value !== '' && LNAME.value !== '') {
        SUBMIT.textContent = '';
        //start(parseInt(FORM.numberofpeople.value), FORM.typeofhome.value, FNAME.value, LNAME.value);
        const fpObj = new FP(FNAME.value, LNAME.value, parseInt(FORM.numberofpeople.value), FORM.typeofhome.value, FORM.foodconsumption.value)
        // fpObj.homeSizePts();
        // fpObj.houseHoldPts();
        cfpData.push(fpObj);
        saveLS(cfpData);
        renderTbl(cfpData);
        FORM.reset();
    }
    else {
        SUBMIT.textContent = "Form requires first name and last name"
    }
})

// const me = {
//     name: "Francis",
//     hairColor: "Black",
//     location: "House",
//     sleepScore: 95,
//     introduce: function() {
//         console.log(this);
//         console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location}`)
//     }
// }

// const you = {
//     name: "Axel",
//     hairColor: "Brown",
//     location: "Apartment",
//     sleepScore: 55,
//     introduce: function() {
//         console.log(this);
//         console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location}`)
//     }
// }

//  me.introduce()
//  you.introduce()

renderTbl(cfpData);

class Human {
    constructor(name, hairColor, location, sleepScore) {
        this.name = name
        this.hairColor = hairColor
        this.location = location
        this.sleepScore = sleepScore
    }
    introduce () {
        console.log(`This is ${this.name} with ${this.hairColor} hair color is in ${this.location} and had a sleepScore of ${this.sleepScore}!`)
    }
}

const francis = new Human("Francis", "Black", "Home", 95);
const axel = new Human ("Jan", "Brown", "Apartment", 99);
francis.introduce();
axel.introduce();
francis.hrv = 50;
