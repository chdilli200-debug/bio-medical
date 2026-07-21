/* ======================================================
   BioMed Learn V3.1
   Professional JavaScript
====================================================== */

"use strict";

console.clear();
console.log("✅ BioMed Learn V3.1 Loaded");

/* ======================================================
   GSAP
====================================================== */

if (typeof gsap !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

/* ======================================================
   DOM Elements
====================================================== */

const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const progressBar = document.getElementById("progress-bar");

/* ======================================================
   Sticky Header
====================================================== */

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 60) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

}

/* ======================================================
   Scroll Progress Bar
====================================================== */

function updateProgressBar() {

    if (!progressBar) return;

    const scrollTop =
        document.documentElement.scrollTop;

    const pageHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";

}

/* ======================================================
   Scroll Events
====================================================== */

window.addEventListener("scroll", () => {

    updateHeader();

    updateProgressBar();

});

/* ======================================================
   Mobile Navigation
====================================================== */

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        menuBtn.classList.toggle("active");

    });

}

/* ======================================================
   Close Navigation
====================================================== */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) {

            navbar.classList.remove("active");

        }

        if (menuBtn) {

            menuBtn.classList.remove("active");

        }

    });

});

/* ======================================================
   Button Vibration
====================================================== */

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("click", () => {

        if ("vibrate" in navigator) {

            navigator.vibrate(15);

        }

    });

});

/* ======================================================
   Hero Animation
   (Without Timeline)
====================================================== */

window.addEventListener("load", () => {

    if (typeof gsap === "undefined") return;

    gsap.from(".hero-tag", {

        y: -40,

        opacity: 0,

        duration: 0.8,

        ease: "power2.out"

    });

    gsap.from(".hero h1", {

        y: 50,

        opacity: 0,

        duration: 1,

        delay: 0.2,

        ease: "power3.out"

    });

    gsap.from(".hero p", {

        y: 40,

        opacity: 0,

        duration: 0.8,

        delay: 0.45

    });

    gsap.from(".hero-buttons .btn", {

        y: 20,

        opacity: 0,

        duration: 0.6,

        delay: 0.8,

        stagger: 0.15,

        ease: "power2.out",

        clearProps: "opacity,transform"

    });

});
/* ======================================================
   Scroll Reveal Animations
====================================================== */

window.addEventListener("load", () => {

    if (typeof gsap === "undefined") return;

    /* Featured Equipment */

    gsap.utils.toArray(".equipment-card").forEach((card) => {

        gsap.from(card, {

            scrollTrigger: {

                trigger: card,

                start: "top 85%",

                toggleActions: "play none none none"

            },

            y: 60,

            opacity: 0,

            duration: 0.8,

            ease: "power2.out"

        });

    });

    /* Categories */

    gsap.utils.toArray(".category-box").forEach((box) => {

        gsap.from(box, {

            scrollTrigger: {

                trigger: box,

                start: "top 85%"

            },

            scale: 0.9,

            opacity: 0,

            duration: 0.6,

            ease: "back.out(1.5)"

        });

    });

    /* Internship Section */

    gsap.from(".internship-content", {

        scrollTrigger: {

            trigger: ".internship-content",

            start: "top 80%"

        },

        y: 70,

        opacity: 0,

        duration: 1

    });

    /* Latest Posts */

    gsap.utils.toArray(".article-card").forEach((card) => {

        gsap.from(card, {

            scrollTrigger: {

                trigger: card,

                start: "top 85%"

            },

            y: 50,

            opacity: 0,

            duration: 0.8

        });

    });

    /* Newsletter */

    gsap.from(".newsletter-box", {

        scrollTrigger: {

            trigger: ".newsletter",

            start: "top 85%"

        },

        scale: 0.96,

        opacity: 0,

        duration: 0.9

    });

    /* Footer */

    gsap.from("footer", {

        scrollTrigger: {

            trigger: "footer",

            start: "top 95%"

        },

        y: 40,

        opacity: 0,

        duration: 0.8

    });

});
/* ======================================================
   Animated Statistics Counter
====================================================== */

const counters = document.querySelectorAll(".stat-box h2");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target =
            parseInt(counter.dataset.target) ||
            parseInt(counter.textContent.replace(/\D/g, ""));

        const suffix =
            counter.textContent.replace(/[0-9]/g, "");

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 80));

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.textContent = current + suffix;

        }, 20);

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/* ======================================================
   Search Box
====================================================== */

const searchInput =
    document.querySelector(".search-box input");

const equipmentCards =
    document.querySelectorAll(".equipment-card");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value =
            searchInput.value.toLowerCase();

        equipmentCards.forEach(card => {

            const text =
                card.innerText.toLowerCase();

            if (text.includes(value)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/* ======================================================
   Active Navigation
====================================================== */

const navLinks =
    document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item =>
            item.classList.remove("active"));

        link.classList.add("active");

    });

});

/* ======================================================
   Equipment Card Hover
====================================================== */

document.querySelectorAll(".equipment-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});

/* ======================================================
   Button Hover Animation
====================================================== */

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform =
            "translateY(-4px) scale(1.02)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform =
            "translateY(0px) scale(1)";

    });

});
/* ======================================================
   Back To Top Button
====================================================== */

const backToTop = document.querySelector(".back-to-top");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });

    backToTop.addEventListener("click", (e) => {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ======================================================
   Lazy Loading Images
====================================================== */

const images = document.querySelectorAll("img");

images.forEach(img => {

    img.loading = "lazy";

    img.decoding = "async";

});

/* ======================================================
   Refresh ScrollTrigger
====================================================== */

window.addEventListener("load", () => {

    if (typeof ScrollTrigger !== "undefined") {

        ScrollTrigger.refresh();

    }

});

/* ======================================================
   Resize Refresh
====================================================== */

window.addEventListener("resize", () => {

    if (typeof ScrollTrigger !== "undefined") {

        ScrollTrigger.refresh();

    }

});

/* ======================================================
   Prevent Image Drag
====================================================== */

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});

/* ======================================================
   Performance
====================================================== */

window.addEventListener("pageshow", () => {

    if (typeof ScrollTrigger !== "undefined") {

        ScrollTrigger.refresh();

    }

});

/* ======================================================
   End
====================================================== */

console.log("🚀 BioMed Learn Ready");