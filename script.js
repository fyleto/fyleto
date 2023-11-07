const base = "./images/";
var merged = document.getElementById("merged"); // logo
var state = false; // logo state

class ImageShowcase {
    /* Get the element's id by the given name and get their respective image links.*/
    constructor(name) {
        this.img = document.getElementById(name);
        let imageLink = `${base}${name}/`;
        this.images = [`${imageLink}git.png`, `${imageLink}discord.png`];
    }
}

/* Sort 2 images with classes.*/
var yet = new ImageShowcase("yet");
var flo = new ImageShowcase("flo");

var currentImageIndex = 0; // image index for image switching
const dummyArr = ["", ""]; // length of user images array

function changeImage() { // Change the image for both yet and flo if there are multiple images.
    yet.img.src = yet.images[currentImageIndex];
    flo.img.src = flo.images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % dummyArr.length;
}

function toggleState() { // switch logo state
    state = !state;
    merged.classList.toggle("switch", state);
}

var interval = 1000; // 3 seconds
var toggleInterval = 4000; // 6 seconds
setInterval(changeImage, interval);
setInterval(toggleState, toggleInterval);
