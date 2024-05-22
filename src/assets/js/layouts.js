"use strict";

function $(tag) {
    return document.querySelector(tag);
}
const menuBtn = $(".menu");
const nav = $(".nav");
menuBtn.onclick = () => {
    nav.classList.toggle("navbar");
};

// Add Animation To Hero Sections
/*
document.addEventListener("DOMContentLoaded", () => {
    var imgs = "No_Bg_Removed_By_Ghs_Julian_";
    const heroText = $(".hero");
    const heroImg = $("#hero-logo");
    var count = 1;
    setInterval(() => {
        heroImg.src = "images/" + imgs + count + ".png";
        count += 1;
        if (count >= 25) {
            count = 1;
        }
    }, 7000);
});

*/