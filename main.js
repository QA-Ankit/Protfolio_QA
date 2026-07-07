/*=========================================
PORTFOLIO MAIN JAVASCRIPT
Author : Ankit Kumar Bhartiya Portfolio
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
    LOADER
    =========================================*/

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.classList.add("hide");

            document.body.classList.remove("loading");

        }, 1200);

    });

    /*=========================================
    LENIS SMOOTH SCROLL
    =========================================*/

    const lenis = new Lenis({

        duration: 1.3,

        smoothWheel: true,

        smoothTouch: false,

        wheelMultiplier: 1

    });

    function raf(time) {

        lenis.raf(time);

        requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

    /*=========================================
    STICKY NAVBAR
    =========================================*/

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /*=========================================
    SCROLL PROGRESS
    =========================================*/

    const progress = document.querySelector(".progress-bar");

    window.addEventListener("scroll", () => {

        const scrollTop = window.scrollY;

        const docHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage = (scrollTop / docHeight) * 100;

        progress.style.width = percentage + "%";

    });

    /*=========================================
    CUSTOM CURSOR
    =========================================*/

    const cursor = document.querySelector(".cursor");

    const blur = document.querySelector(".cursor-blur");

    window.addEventListener("mousemove", (e) => {

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        blur.style.left = e.clientX + "px";
        blur.style.top = e.clientY + "px";

    });

    /*=========================================
    CURSOR SCALE
    =========================================*/

    document.querySelectorAll("a, button").forEach(item => {

        item.addEventListener("mouseenter", () => {

            cursor.style.transform =
                "translate(-50%,-50%) scale(2)";

        });

        item.addEventListener("mouseleave", () => {

            cursor.style.transform =
                "translate(-50%,-50%) scale(1)";

        });

    });

    /*=========================================
    MOBILE MENU
    =========================================*/

    const menu = document.querySelector(".menu-toggle");

    const nav = document.querySelector(".nav-links");

    menu.addEventListener("click", () => {

        menu.classList.toggle("active");

        nav.classList.toggle("show");

    });

    /*=========================================
    ACTIVE NAVIGATION
    =========================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 150;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

});

/*=========================================
MAGNETIC BUTTONS
=========================================*/

const magneticItems = document.querySelectorAll(".magnetic");

magneticItems.forEach(item => {

    item.addEventListener("mousemove", (e) => {

        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left - rect.width / 2;

        const y = e.clientY - rect.top - rect.height / 2;

        item.style.transform =
            `translate(${x * 0.25}px, ${y * 0.25}px)`;

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "translate(0,0)";

    });

});

/*=========================================
TYPING EFFECT
=========================================*/

const typing = document.getElementById("typing");

if (typing) {

const roles = [

"Software Test Engineer",

"Automation Engineer",

"Manual Tester",

"Java Developer",

"Selenium Specialist",

"API Tester"

];

let roleIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

const current = roles[roleIndex];

if(!deleting){

typing.textContent =
current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}else{

typing.textContent =
current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

roleIndex++;

if(roleIndex >= roles.length){

roleIndex = 0;

}

}

}

setTimeout(typeEffect,
deleting ? 50 : 90);

}

typeEffect();

}

/*=========================================
COUNTER
=========================================*/

const counters =
document.querySelectorAll(".counter");

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target =
+counter.dataset.target;

let value = 0;

const speed = target/80;

const update = ()=>{

value += speed;

if(value < target){

counter.innerText =
Math.ceil(value);

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

};

update();

observer.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

observer.observe(counter);

});

/*=========================================
SCROLL REVEAL
=========================================*/

const reveals =
document.querySelectorAll(

".fade-up,.fade-left,.fade-right,.zoom"

);

const revealObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{
threshold:.15
});

reveals.forEach(item=>{

revealObserver.observe(item);

});

/*=========================================
3D CARD TILT
=========================================*/

const cards = document.querySelectorAll(

".glass"

);

cards.forEach(card=>{

card.addEventListener(

"mousemove",

e=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateY =
((x / rect.width)-0.5)*12;

const rotateX =
((y / rect.height)-0.5)*-12;

card.style.transform =

`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-6px)`;

});

card.addEventListener(

"mouseleave",

()=>{

card.style.transform =

"perspective(900px) rotateX(0) rotateY(0)";

});

});

/*=========================================
PARALLAX BLOBS
=========================================*/

const blobs =
document.querySelectorAll(".blob");

window.addEventListener(

"mousemove",

e=>{

const x =

(e.clientX/window.innerWidth)-0.5;

const y =

(e.clientY/window.innerHeight)-0.5;

blobs.forEach((blob,index)=>{

const speed =
(index+1)*20;

blob.style.transform =

`translate(${x*speed}px,
${y*speed}px)`;

});

});

/*=========================================
PERFORMANCE
=========================================*/

window.addEventListener(

"blur",

()=>{

document.body.classList.add("paused");

});

window.addEventListener(

"focus",

()=>{

document.body.classList.remove("paused");

});
