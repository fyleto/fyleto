const base = "./images/";
var merged = document.getElementById("merged"); // logo
var state = false; // logo state
var header = document.getElementById("header");
var radioButtons = document.getElementsByName("radioGroup");
var socials = {
    ind: document.getElementById("ind"),
    org: document.getElementById("org"),
};

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

function toggleState(newState = undefined /* override state*/) {
    // switch logo state
    state = newState !== undefined ? newState : !state;
    if (state === true) {
        header.innerText = "flo + yet";
        socials.ind.style.display = "block";
        socials.org.style.display = "none";
    } else {
        header.innerText = "fyleto";
        socials.ind.style.display = "none";
        socials.org.style.display = "block";
    }
    merged.classList.toggle("switch", state);
}

var interval = 1000; // 3 seconds
var toggleInterval = 4000; // 6 seconds
setInterval(changeImage, interval);
var toggleStateId;

function startToggleState() {
    toggleStateId = setInterval(toggleState, toggleInterval);
}

function stopToggleState(state) {
    toggleState(state);
    clearInterval(toggleStateId);
}

startToggleState();
for (var i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener("change", function () {
        if (this.checked) {
            switch (this.value) {
                case "ind":
                    stopToggleState(true);
                    break;
                case "org":
                    stopToggleState(false);
                    break;
                default:
                    startToggleState();
            }
        }
    });
}
