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