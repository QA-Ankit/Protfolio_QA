/*==================================================
 GSAP + SCROLLTRIGGER ANIMATIONS
==================================================*/

gsap.registerPlugin(ScrollTrigger);

/*==================================================
 PAGE LOAD
==================================================*/

const tl = gsap.timeline({
    defaults: {
        ease: "power4.out",
        duration: 1
    }
});

tl.from(".header", {
    y: -80,
    opacity: 0
})

.from(".hero-badge", {
    y: 30,
    opacity: 0
}, "-=.6")

.from(".hero-title", {
    y: 60,
    opacity: 0
}, "-=.6")

.from(".hero-description", {
    y: 40,
    opacity: 0
}, "-=.7")

.from(".hero-buttons .btn", {
    y: 40,
    opacity: 0,
    stagger: .15
}, "-=.7")

.from(".hero-social a", {
    y: 30,
    opacity: 0,
    stagger: .08
}, "-=.7")

.from("#three-container", {
    scale: .8,
    opacity: 0,
    rotate: 10
}, "-=.9");

/*==================================================
 SECTION TITLES
==================================================*/

gsap.utils.toArray(".section-header").forEach(section => {

    gsap.from(section, {

        scrollTrigger: {
            trigger: section,
            start: "top 80%"
        },

        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out"

    });

});

/*==================================================
 GLASS CARDS
==================================================*/

gsap.utils.toArray(".glass").forEach(card => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 88%"
        },

        y: 70,
        opacity: 0,
        duration: .9,
        ease: "power3.out"

    });

});

/*==================================================
 TIMELINE
==================================================*/

gsap.utils.toArray(".timeline-item").forEach(item => {

    gsap.from(item, {

        scrollTrigger: {
            trigger: item,
            start: "top 85%"
        },

        x: -80,
        opacity: 0,
        duration: 1

    });

});

/*==================================================
 EXPERIENCE
==================================================*/

gsap.utils.toArray(".experience-card").forEach(card => {

    gsap.from(card, {

        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },

        x: 80,
        opacity: 0,
        duration: 1

    });

});

/*==================================================
 SKILL CARDS
==================================================*/

gsap.from(".skill-card", {

    scrollTrigger: {

        trigger: ".skills-grid",

        start: "top 75%"

    },

    y: 80,

    opacity: 0,

    stagger: .15,

    duration: 1

});

/*==================================================
 PROJECT
==================================================*/

gsap.from(".project-card", {

    scrollTrigger: {

        trigger: ".projects",

        start: "top 75%"

    },

    y: 100,

    opacity: 0,

    duration: 1.2

});

gsap.from(".feature-card", {

    scrollTrigger: {

        trigger: ".feature-grid",

        start: "top 80%"

    },

    y: 60,

    opacity: 0,

    stagger: .12,

    duration: .8

});

/*==================================================
 STATISTICS
==================================================*/

gsap.from(".stat-card", {

    scrollTrigger: {

        trigger: ".stats-grid",

        start: "top 80%"

    },

    scale: .8,

    opacity: 0,

    stagger: .12,

    duration: .8

});

/*==================================================
 CONTACT
==================================================*/

gsap.from(".contact-info", {

    scrollTrigger: {

        trigger: ".contact",

        start: "top 75%"

    },

    x: -80,

    opacity: 0,

    duration: 1

});

gsap.from(".contact-form", {

    scrollTrigger: {

        trigger: ".contact",

        start: "top 75%"

    },

    x: 80,

    opacity: 0,

    duration: 1

});

/*==================================================
 PARALLAX BACKGROUND
==================================================*/

gsap.to(".blob-one", {

    y: -120,

    scrollTrigger: {

        trigger: "body",

        start: "top top",

        end: "bottom bottom",

        scrub: true

    }

});

gsap.to(".blob-two", {

    y: 120,

    scrollTrigger: {

        trigger: "body",

        start: "top top",

        end: "bottom bottom",

        scrub: true

    }

});

gsap.to(".blob-three", {

    y: -80,

    scrollTrigger: {

        trigger: "body",

        start: "top top",

        end: "bottom bottom",

        scrub: true

    }

});

/*==================================================
 BUTTON HOVER ANIMATION
==================================================*/

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        gsap.to(btn, {

            scale: 1.05,

            duration: .3,

            ease: "power2.out"

        });

    });

    btn.addEventListener("mouseleave", () => {

        gsap.to(btn, {

            scale: 1,

            duration: .3,

            ease: "power2.out"

        });

    });

});

/*==================================================
 FLOATING ANIMATION
==================================================*/

gsap.to(".floating-card", {

    y: -15,

    duration: 3,

    ease: "sine.inOut",

    stagger: .4,

    repeat: -1,

    yoyo: true

});

/*==================================================
 HERO PARTICLE EFFECT
==================================================*/

gsap.to("#three-container", {

    rotate: 3,

    duration: 8,

    repeat: -1,

    yoyo: true,

    ease: "sine.inOut"

});
