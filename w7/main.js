import { renderTbl } from "./render.js";
import { determineHomeSizePts, determineHouseHoldPts } from "./cfootprint.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

console.log("global scope");

function displayOutObj(obj) {
    console.log(obj);
    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint ${obj.myTotal}`;
    output.appendChild(newH2);
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home`
    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.myPeople} (score: ${obj.myPTS})`;
    newP.textContent += ` and a ${obj.mySize} size of home (score:${obj.mySCR})`;;
    output.appendChild(newH3);
    output.appendChild(newP);
}


function start(numberInHousehold, homeSize, firstname, lastname) {
    const houseHoldPTS = determineHouseHoldPts(numberInHousehold);
    const impactSCR = determineHomeSizePts(homeSize);
    const total = houseHoldPTS + impactSCR;
    cfpData.push({
        myPTS: houseHoldPTS,
        mySCR: impactSCR,
        mySize: homeSize,
        myPeople: numberInHousehold,
        myTotal: total,
        firstName: firstname,
        lastName: lastname,
    });

}

//function displayOutput() {
//    for (let i = 0; i < cfpData.length; i++) {
//        const output = document.getElementById("output");
//        const newH2 = document.createElement("h2");
//        newH2.textContent = `Carbon Footprint ${cfpData[i][4]}`;
//        const newH3 = document.createElement("h3");
//        newH3.textContent = `Based on number in and size of home`
//        const newP = document.createElement("p");
//        newP.textContent = `This number is based on the number of people in the house of ${cfpData[i][0]} (score: ${cfpData[i][3]})`;
//        newP.textContent += ` and a ${cfpData[i][1]} size of home (score:${cfpData[i][2]})`;
//        output.appendChild(newH2);
//        output.appendChild(newH3);
//        output.appendChild(newP);
//    }
//}

// couldn't figure it out myself so I watched the second video to give me an idea and completed the rest

//start(5, "apartment");
//start(4, "large");
//start(3, "medium");
//start(2, "small");
//start(1, "apartment");
//start(0, "large");
//start(6, "medium");
//start(7, "small");

//displayOutput();
   

FORM.addEventListener('submit', function(e){ 
    e.preventDefault();
    //console.log('I am inside the callback function');
    //console.log(e);
    const fName = FORM.firstname.value;
    const lName = FORM.lastname.value;
    const householdNumber = parseInt(FORM.numberofpeople.value);
    const sizeOfHome = FORM.typeofhome.value;
    start(householdNumber, sizeOfHome, fName, lName);
    OUTPUT.innerHTML = "";
    //displayOutput();
    renderTbl(cfpData);
    FORM.reset();
})

//callback
//explain in your understand what is happening in the event listener

// the apartment score is correct

// we are doing all this work in the form to make sure that the user is giving us good/useful data