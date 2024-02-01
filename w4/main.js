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

function start(numberInHousehold, homeSize) {
    const houseHoldPTS = determineHouseHoldPts(numberInHousehold);
    const impactSCR = determineHomeSizePts(homeSize);
    const total = houseHoldPTS + impactSCR;
    cfpData.push([numberInHousehold, homeSize, houseHoldPTS, impactSCR, total]);

}

function displayOutput() {
    for (arr of cfpData){
        console.log(arr);
        const output = document.getElementById("output");
        const newP = document.createElement("h3");
        newP.textContent = `Your Carbon Footprint Total is ${arr[4]}`
        const newP2 = document.createElement("ul");
        newP2.textContent = `${arr[3]} points for your ${arr[1]} home, and ${arr[2]} points for the number of people in your home being ${arr[0]}.`
        newP2.style.padding = "0 0 40px 40px";
        output.appendChild(newP);
        output.appendChild(newP2);
    }
}

start(5, "apartment");
start(4, "large");
start(3, "medium");
start(2, "small");
start(1, "apartment");
start(0, "large");
start(6, "medium");
start(7, "small");

displayOutput()