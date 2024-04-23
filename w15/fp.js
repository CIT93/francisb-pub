class FP {
    constructor(first, last, houseMembers, houseSize, dietType, dietConvenience) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.dietType = dietType;
        this.dietConvenience = dietConvenience
        this.homeSizePts();
        this.houseHoldPts();
        this.dietTypePts();
        this.dietConveniencePts();
        this.total();
    }
    homeSizePts() { 
        if (this.houseSize === "large") {
            this.homeSizePts = 10;
        } else if (this.houseSize === "medium") {
            this.homeSizePts = 7;
        } else if (this.houseSize === "small") {
            this.homeSizePts = 4;
        } else if (this.houseSize === "apartment") {
            this.homeSizePts = 2;
        }
    }
    houseHoldPts() {
        if (this.houseMembers === 1) {
            this.houseHoldPts = 14;
        } else if (this.houseMembers === 2) {
            this.houseHoldPts = 12;
        } else if (this.houseMembers === 3) {
            this.houseHoldPts = 10;
        } else if (this.houseMembers === 4) {
            this.houseHoldPts = 8;
        } else if (this.houseMembers === 5) {
            this.houseHoldPts = 6;
        } else if (this.houseMembers === 6) {
            this.houseHoldPts = 4;
        } else if (this.houseMembers > 6) {
            this.houseHoldPts = 2;
        }
    }
    dietTypePts() {
        if (this.dietType === "meat (daily)") {
            this.dietTypePts = 10;
        } else if (this.dietType === "meat (few)") {
            this.dietTypePts = 8;
        } else if (this.dietType === "vegetarian") {
            this.dietTypePts = 4;
        } else if (this.dietType === "vegan") {
            this.dietTypePts = 2
        }
    } 
    dietConveniencePts() {
        if (this.dietConvenience === "prepackaged") {
            this.dietConveniencePts = 12;
        } else if (this.dietConvenience === "balanced") {
            this.dietConveniencePts = 6;
        } else if (this.dietConvenience === "local") {
            this.dietConveniencePts = 2;
        }
    }

    total() {
        this.total = this.houseHoldPts + this.homeSizePts + this.dietTypePts + this.dietConveniencePts;
    }
}

export {FP}
