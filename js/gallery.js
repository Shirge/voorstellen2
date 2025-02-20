
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
let imageGallery1 = ["img/GarfieldPlanet.png", "img/GarfieldPlanet.png", "img/GarfieldPlanet.png", "img/Pipebomb.jpg", "img/Pipebomb.jpg", "img/Pipebomb.jpg"];
let imageGallery2 = ["img/GarfieldPlanet.png", "img/GarfieldPlanet.png", "img/GarfieldPlanet.png", "img/Pipebomb.jpg", "img/Pipebomb.jpg", "img/Pipebomb.jpg"];
let imageGallery3 = ["img/GarfieldPlanet.png", "img/GarfieldPlanet.png", "img/GarfieldPlanet.png", "img/Pipebomb.jpg", "img/Pipebomb.jpg", "img/Pipebomb.jpg"];
let imageGallery4 = ["img/GarfieldPlanet.png", "img/GarfieldPlanet.png", "img/GarfieldPlanet.png", "img/Pipebomb.jpg", "img/Pipebomb.jpg", "img/Pipebomb.jpg"];
let counter = 0;
let index = new Range([0, 1, 2]);

if (imageGallery1) {
    imgElements[0].src = imageGallery1[index.value[0]];
    imgElements[1].src = imageGallery1[index.value[1]];
    imgElements[2].src = imageGallery1[index.value[2]];
}
else if (imageGallery2) {
    imgElements[0].src = imageGallery2[index.value[0]];
    imgElements[1].src = imageGallery2[index.value[1]];
    imgElements[2].src = imageGallery2[index.value[2]];
}
else if (imageGallery3) {
    imgElements[0].src = imageGallery3[index.value[0]];
    imgElements[1].src = imageGallery3[index.value[1]];
    imgElements[2].src = imageGallery3[index.value[2]];
}
else if (imageGallery4) {
    imgElements[0].src = imageGallery4[index.value[0]];
    imgElements[1].src = imageGallery4[index.value[1]];
    imgElements[2].src = imageGallery4[index.value[2]];
}

leftButton.onclick = function () {
    index.previous();

    if (imageGallery1) {
        imgElements[0].src = imageGallery1[index.value[0]];
        imgElements[1].src = imageGallery1[index.value[1]];
        imgElements[2].src = imageGallery1[index.value[2]];
    }
    else if (imageGallery2) {
        imgElements[0].src = imageGallery2[index.value[0]];
        imgElements[1].src = imageGallery2[index.value[1]];
        imgElements[2].src = imageGallery2[index.value[2]];
    }
    else if (imageGallery3) {
        imgElements[0].src = imageGallery3[index.value[0]];
        imgElements[1].src = imageGallery3[index.value[1]];
        imgElements[2].src = imageGallery3[index.value[2]];
    }
    else if (imageGallery4) {
        imgElements[0].src = imageGallery4[index.value[0]];
        imgElements[1].src = imageGallery4[index.value[1]];
        imgElements[2].src = imageGallery4[index.value[2]];
    }
}

rightButton.onclick = function () {
    index.next();

    if (imageGallery1) {
        imgElements[0].src = imageGallery1[index.value[0]];
        imgElements[1].src = imageGallery1[index.value[1]];
        imgElements[2].src = imageGallery1[index.value[2]];
    }
    else if (imageGallery2) {
        imgElements[0].src = imageGallery2[index.value[0]];
        imgElements[1].src = imageGallery2[index.value[1]];
        imgElements[2].src = imageGallery2[index.value[2]];
    }
    else if (imageGallery3) {
        imgElements[0].src = imageGallery3[index.value[0]];
        imgElements[1].src = imageGallery3[index.value[1]];
        imgElements[2].src = imageGallery3[index.value[2]];
    }
    else if (imageGallery4) {
        imgElements[0].src = imageGallery4[index.value[0]];
        imgElements[1].src = imageGallery4[index.value[1]];
        imgElements[2].src = imageGallery4[index.value[2]];
    }
}