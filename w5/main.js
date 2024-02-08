const cfpData = [];

function determineHomeSizePts(homeSize) {
    let impactScore = 0;
    if (homeSize === "large") {
        impactScore += 10;
    } else if (homeSize === "medium") {
        impactScore += 7;
    } else if (homeSize === "small") {
        impactScore += 4;
    } else if (homeSize === "apartment") {
        impactScore += 2;
    }
    return impactScore;
}


function determineHouseHoldPts(numberInHousehold) {
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    }
    return houseHoldPoints;
}

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


function start(numberInHousehold, homeSize) {
    const houseHoldPTS = determineHouseHoldPts(numberInHousehold);
    const impactSCR = determineHomeSizePts(homeSize);
    const total = houseHoldPTS + impactSCR;
    cfpData.push({
        myPTS: houseHoldPTS,
        mySCR: impactSCR,
        mySize: homeSize,
        myPeople: numberInHousehold,
        myTotal: total,
    });

}

function displayOutput() {
    for (obj of cfpData){
        console.log(obj)
        const output = document.getElementById("output");
        const newH2 = document.createElement("h2");
        newH2.textContent = `Carbon Footprint ${obj.myTotal}`;
//        const newH3 = document.createElement("h3");
//        newH3.textContent = `Based on number in and size of home`
//        const newP = document.createElement("p");
//        newP.textContent = `This number is based on the number of people in the house of ${cfpData[i][0]} (score: ${arr[3]})`;
//        newP.textContent += ` and a ${arr[1]} size of home (score:${arr[2]})`;
        output.appendChild(newH2);
//        output.appendChild(newH3);
//        output.appendChild(newP);
    }
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

start(5, "apartment");
start(4, "large");
start(3, "medium");
start(2, "small");
start(1, "apartment");
start(0, "large");
start(6, "medium");
start(7, "small");

displayOutput();