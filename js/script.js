"use strict";
const service_mune = document
    .querySelector(".service_mune")
    .addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            const oldTab = document.querySelector(".service_mune .active");
            const id = e.target.getAttribute("data-tab");
            const oldText = document.querySelector(".jon .active_jon");
            const content = document.querySelector(id);

            if (oldTab !== e.target) {
                oldTab.classList.remove("active");
                e.target.classList.add("active");
                oldText.classList.remove("active_jon");
                content.classList.add("active_jon");
            }
        }
    });

const  work_mune = document
    .querySelector(".work_mune")
    .addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            const oldTab = document.querySelector(".work_mune .active");
            const id = e.target.getAttribute("data-tab");
            const oldText = document.querySelector(".all_img .active_all_img");
            const content = document.querySelector(id);

            if (oldTab !== e.target) {
                oldTab.classList.remove("active");
                e.target.classList.add("active");
                oldText.classList.remove("active_all_img");
                content.classList.add("active_all_img");
            }
        }
    });

const  btnLoad = document.querySelector('.load_more').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON'){
        const twelveImg = document.querySelector('.twelve_img')
        twelveImg.classList.toggle('active_all_img')
        document.querySelector('.load_more').style.display = 'none'
    }
} )
setTimeout(btnLoad, 1000);
$(document).ready(function (){
    $('.characteristic').slick({
        dots: true,
    });
})

