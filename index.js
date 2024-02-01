import gsap from 'https://cdn.skypack.dev/gsap';

function showFromBottom(selector, delay) {
    gsap.from(selector, {
        opacity: 0,
        y: 100,
        duration: 0.8,
        ease: "power2.out",
        delay
    });
}

function changeOpacity(selector, delay, duration) {
    gsap.from(selector, {
        opacity: 0,
        duration,
        ease: "slow(0.5,0.7,false)",
        delay
    });
}

function growingElement(selector, delay, duration) {
    gsap.from(selector, {
        scale: 0.75,
        duration,
        ease: "power2.out",
        delay
    });
}

showFromBottom(".hero__title, .hero__btn", 0.8);
changeOpacity(".hero__descr", 1.28, 1);
changeOpacity(".photos__author", 1.82, 1);

growingElement(".photos-1", 1.30, 0.35);
growingElement(".photos-2", 1.52, 0.35);
growingElement(".photos-3", 1.82, 0.35);
changeOpacity(".photos-1", 1.30, 0.5);
changeOpacity(".photos-2", 1.52, 0.5);
changeOpacity(".photos-3", 1.82, 0.5);