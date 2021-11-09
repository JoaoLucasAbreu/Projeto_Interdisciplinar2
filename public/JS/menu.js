//JS do menu responsivo
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector("nav");
const profile = document.querySelector(".profile");
const login = document.querySelector(".login");

profile.addEventListener("click", () => {
    login.classList.toggle("active");
});

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

//JS video slider
const btns = document.querySelectorAll(".slider-nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
       sliderNav(i); 
    });
});