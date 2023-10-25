const sliderWrap = document.querySelector(".slider-wrap");
const sliders = document.querySelectorAll(".slider_a");
const len = sliders.length;
const interval = 3000;
let num = 0;
let timer = null;

function startRolling() {
    timer = setInterval(rolling, interval);
}

function setActive(index) {
    for (let i = 0; i < len; i++) {
        sliders[i].classList.remove("on");
    }
    sliders[index].classList.add("on");
    num = index;
}

function rolling() {
    if (num < len - 1) {
        num++;
    } else {
        num = 0;
    }
    setActive(num);
    sliderWrap.style.transform = `translateX(-${num * 100}%)`;
}

setActive(num);
startRolling();