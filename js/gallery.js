
class Range {
    constructor(index) {
        this.value = index;
        this.length = 6;
        this.incrementAmount = 1;
        this.decrementAmount = 1;
    }

    next() {
        this.value[0] = (this.value[0] + this.length + this.incrementAmount) % this.length;
        this.value[1] = (this.value[1] + this.length + this.incrementAmount) % this.length;
        this.value[2] = (this.value[2] + this.length + this.incrementAmount) % this.length;
        return this.value
    }

    previous() {
        this.value[0] = (this.value[0] + this.length - this.decrementAmount) % this.length;
        this.value[1] = (this.value[1] + this.length - this.decrementAmount) % this.length;
        this.value[2] = (this.value[2] + this.length - this.decrementAmount) % this.length;
        return this.value
    }
}

let leftButton = document.getElementById("galleryLeftButton");
let rightButton = document.getElementById("galleryRightButton");
let imgElements = document.getElementsByClassName("galleryImage");
let imageGallery = ["img/GarfieldPlanet.png", "img/GarfieldPlanet.png", "img/GarfieldPlanet.png", "img/Pipebomb.jpg", "img/Pipebomb.jpg", "img/Pipebomb.jpg"];
let counter = 0;
let index = new Range([0, 1, 2]);

imgElements[0].src = imageGallery[0];
imgElements[1].src = imageGallery[1];
imgElements[2].src = imageGallery[2];

leftButton.onclick = function () {
    index.previous();

    imgElements[0].src = imageGallery[index.value[0]];
    imgElements[1].src = imageGallery[index.value[1]];
    imgElements[2].src = imageGallery[index.value[2]];
}

rightButton.onclick = function () {
    index.next();

    imgElements[0].src = imageGallery[index.value[0]];
    imgElements[1].src = imageGallery[index.value[1]];
    imgElements[2].src = imageGallery[index.value[2]];
}