console.log("Bio Medical Website Loaded Successfully");
const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 12;
        const rotateX = -(y / rect.height - 0.5) * 12;

        card.style.transform =
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.04)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0)";

    });

});
// Small vibration on buttons
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        if ("vibrate" in navigator) {
            navigator.vibrate(20);
        }
    });
});

// Small vibration on cards
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        if ("vibrate" in navigator) {
            navigator.vibrate(15);
        }
    });
});
// Hero Animation

gsap.from(".hero h1",{

    y:80,

    opacity:0,

    duration:1.2,

    ease:"power4.out"

});

gsap.from(".hero p",{

    y:60,

    opacity:0,

    duration:1,

    delay:.4,

    ease:"power3.out"

});

gsap.from(".btn",{

    scale:.5,

    opacity:0,

    duration:.8,

    delay:.8,

    ease:"back.out(1.8)"

});
gsap.from(".card",{

    y:80,

    opacity:0,

    duration:1,

    stagger:.15,

    ease:"power3.out"

});
gsap.from("header",{

    y:-100,

    opacity:0,

    duration:1,

    ease:"power4.out"

});