//global variables
let currentIndex = 0;
const imgs = [];
let timer = undefined;

//start application
start();

function start() {
    //setup the page
    loadImages();
    createDots();

    //start timers
    updateImagePage(currentIndex);
    assignEventHandlers();
}

//functions
function updateDots() {
    const dots = document.querySelector("#dots").children;
    for(let i = 0; i < imgs.length; i++) {
        const dot = dots[i];
        if(currentIndex === i) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    }

}

function createDots() {
    const dotsArea = document.querySelector("#dots");

    for(let i = 0; i < imgs.length; i++) {
        

        //add a new dot
        const dot = document.createElement("span");
        dot.classList.add("dot");

        dot.addEventListener("click", () => {
            currentIndex = i;
            updateImagePage(currentIndex);
        })

        dotsArea.appendChild(dot);

    }
}

function assignEventHandlers() {
    const nextBtn = document.querySelector("#next");
    const prevBtn = document.querySelector("#prev");

    nextBtn.addEventListener("click", next);
    prevBtn.addEventListener("click", prev);
}

function updateImagePage(index) {
    showImage(index);
    resetInterval();
    updateDots();
}

function next() {
    currentIndex = (currentIndex + 1) % imgs.length;
    
    updateImagePage(currentIndex);
}

function prev() {
    if(currentIndex === 0) currentIndex = imgs.length - 1;
    else currentIndex--;

    updateImagePage(currentIndex);
}

function resetInterval() {
    clearInterval(timer);
    timer = setInterval(next, 3000);
}

function showImage(index) {
    const carouselImg = document.querySelector("#image");
    carouselImg.src = imgs[index];
}

function loadImages() {
    for(let i = 1; i <= 10; i++) {
        imgs.push(`images/image${i}.jpg`);
    }
}

