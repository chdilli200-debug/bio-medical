console.log("BioMed Learn V3.0 Loaded Successfully");

/* ==========================================
   CARD 3D HOVER EFFECT
========================================== */

const cards = document.querySelectorAll(".equipment-card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 10;
        const rotateX = -(y / rect.height - 0.5) * 10;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
            scale(1.02)
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0)
            scale(1)
        `;

    });

});


/* ==========================================
   MOBILE VIBRATION
========================================== */

if ("vibrate" in navigator) {

    document.querySelectorAll(".btn").forEach(btn => {

        btn.addEventListener("click", () => {

            navigator.vibrate(18);

        });

    });

    document.querySelectorAll(".equipment-card").forEach(card => {

        card.addEventListener("click", () => {

            navigator.vibrate(12);

        });

    });

}


/* ==========================================
   GSAP HERO ANIMATION
========================================== */
/*
gsap.from(".hero-tag", {

    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"

});

gsap.from(".hero h1", {

    y: 80,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power4.out"

});

gsap.from(".hero p", {

    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power3.out"

});


/* ==========================================
   HERO BUTTONS ONLY
========================================== */
/*
gsap.from(".hero-buttons .btn", {

    y: 40,
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    delay: 0.8,
    stagger: 0.15,
    ease: "back.out(1.7)"

});


/* ==========================================
   FEATURED EQUIPMENT
========================================== */
/*
gsap.from(".equipment-card", {

    y: 70,
    opacity: 0,
    duration: 0.8,
    delay: 1.1,
    stagger: 0.12,
    ease: "power2.out"

});


/* ==========================================
   CATEGORY BOXES
========================================== */
/*
gsap.from(".category-box", {

    y: 60,
    opacity: 0,
    duration: 0.7,
    delay: 1.4,
    stagger: 0.08,
    ease: "power2.out"

});


/* ==========================================
   ARTICLE CARDS
========================================== */
/*
gsap.from(".article-card", {

    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: 1.6,
    stagger: 0.1,
    ease: "power2.out"

});


/* ==========================================
   STATS
========================================== */
/*
gsap.from(".stat-box", {

    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    delay: 1.8,
    stagger: 0.1,
    ease: "back.out(1.5)"

});


/* ==========================================
   INTERNSHIP SECTION
========================================== */
/*
gsap.from(".inte rnship-content", {

    y: 70,
    opacity: 0,
    duration: 1,
    delay: 2,
    ease: "power2.out"

});*/

console.log("Animations Loaded Successfully");