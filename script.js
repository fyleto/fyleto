const base = "./images/";
var merged = document.getElementById("merged"); // logo
var state = false; // logo state

class ImageShowcase {
    /* Get the element's id by the given name and get their respective image links. */
    constructor(name) {
        this.img = document.getElementById(name);
        this.img.style.transition = "opacity 1s"; // Add a CSS transition for smooth opacity changes
        let imageLink = `${base}${name}/`;
        this.images = [`${imageLink}git.png`, `${imageLink}discord.png`];
    }
}

/* Sort 2 images with classes. */
var yet = new ImageShowcase("yet");
var flo = new ImageShowcase("flo");

var currentImageIndex = 0; // image index for image switching
const dummyArr = new Array(yet.images.length).fill(""); // length of user images array. should match yet since yet = flo

function changeImage() {
    // Smoothly fade in the new image by changing opacity
    yet.img.style.opacity = 0;
    flo.img.style.opacity = 0;

    setTimeout(() => {
        yet.img.src = yet.images[currentImageIndex];
        flo.img.src = flo.images[currentImageIndex];

        // Smoothly fade in the new image by changing opacity
        yet.img.style.opacity = 1;
        flo.img.style.opacity = 1;
    }, 200); // Wait for 200ms before changing the source
    currentImageIndex = (currentImageIndex + 1) % dummyArr.length;
}

function toggleState() {
    // switch logo state
    state = !state;
    merged.classList.toggle("switch", state);
}

var interval = 1000; // 3 seconds
var toggleInterval = 4000; // 6 seconds
setInterval(changeImage, interval);
setInterval(toggleState, toggleInterval);
