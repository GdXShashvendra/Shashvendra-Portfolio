/*=========================================================
SHASHVENDRA YADAV PORTFOLIO
JavaScript
=========================================================*/

/*==========================================
LOADER
==========================================*/

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    loader.style.transition = "0.8s";

    setTimeout(() => {

        loader.style.display = "none";

    }, 800);

});


/*==========================================
MOBILE MENU
==========================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/*==========================================
SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*==========================================
SCROLL ANIMATION
==========================================*/

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});


document.querySelectorAll(".fade-up").forEach((el) => {

    observer.observe(el);

});


/*==========================================
BACK TO TOP BUTTON
==========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    }

    else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/*=========================================================
TYPING EFFECT
=========================================================*/

const typingText = document.querySelector(".hero-text h2");

const words = [
    "AI & Machine Learning Student",
    "Web Developer",
    "Python Programmer",
    "Data Science Enthusiast",
    "Open Source Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent = currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 120);

}

typeEffect();


/*=========================================================
ACTIVE NAVBAR LINK
=========================================================*/

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active-link");

        }

    });

});


/*=========================================================
CERTIFICATE LIGHTBOX
=========================================================*/

const certificateImages = document.querySelectorAll(".certificate-card img");

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

document.body.appendChild(lightbox);

certificateImages.forEach(image => {

    image.addEventListener("click", () => {

        lightbox.style.display = "flex";

        const img = document.createElement("img");

        img.src = image.src;

        while (lightbox.firstChild) {

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});


/*=========================================================
CARD HOVER EFFECT
=========================================================*/

const cards = document.querySelectorAll(

".skill-card,.project-card,.certificate-card,.info-card"

);

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/*=========================================================
COUNTER ANIMATION
=========================================================*/

const counters = document.querySelectorAll(".counter-card h2");

let counterStarted = false;

window.addEventListener("scroll", () => {

    const counterSection = document.querySelector(".counter-grid");

    if (!counterSection) return;

    const trigger = counterSection.offsetTop - 500;

    if (window.scrollY > trigger && !counterStarted) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText);

            let count = 0;

            const speed = target / 80;

            const updateCounter = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

        });

    }

});


/*=========================================================
SCROLL PROGRESS BAR
=========================================================*/

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.background = "linear-gradient(90deg,#2563eb,#7c3aed)";
progressBar.style.zIndex = "99999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const totalHeight = document.body.scrollHeight - window.innerHeight;

    const progress = (window.pageYOffset / totalHeight) * 100;

    progressBar.style.width = progress + "%";

});
/*=========================================================
PART 3 - PREMIUM FEATURES
=========================================================*/

/*==========================================
CURRENT YEAR IN FOOTER
==========================================*/

const yearElement = document.querySelector(".copyright");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML =
        `© ${currentYear} Shashvendra Yadav | All Rights Reserved.`;

}

/*==========================================
WELCOME MESSAGE
==========================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        console.log("Welcome to Shashvendra Yadav's Portfolio 🚀");

    }, 1000);

});


/*==========================================
NAVBAR BACKGROUND CHANGE
==========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(2,6,23,.96)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(15,23,42,.85)";
        navbar.style.boxShadow = "none";

    }

});


/*==========================================
IMAGE HOVER EFFECT
==========================================*/

const profileImage = document.querySelector(".hero-image img");

if (profileImage) {

    profileImage.addEventListener("mouseenter", () => {

        profileImage.style.transform = "scale(1.05) rotate(2deg)";
        profileImage.style.transition = ".4s";

    });

    profileImage.addEventListener("mouseleave", () => {

        profileImage.style.transform = "scale(1) rotate(0deg)";

    });

}
window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.style.display = "none";

    }

});

/*==========================================
BUTTON RIPPLE EFFECT
==========================================*/

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        ripple.style.left = e.clientX - rect.left + "px";
        ripple.style.top = e.clientY - rect.top + "px";

        button.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/*==========================================
LAZY IMAGE LOADING
==========================================*/

const images = document.querySelectorAll("img");

images.forEach(img => {

    img.setAttribute("loading", "lazy");

});


/*==========================================
PAGE TITLE CHANGE
==========================================*/

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        document.title = "Come Back 👋";

    } else {

        document.title = "Shashvendra Yadav | Portfolio";

    }

});


/*==========================================
CONSOLE MESSAGE
==========================================*/

console.log("%cPortfolio Developed by Shashvendra Yadav",
"color:#3b82f6;font-size:18px;font-weight:bold;");

console.log("%cAI • ML • Web Development",
"color:#8b5cf6;font-size:14px;");


/*==========================================
CONTACT FORM
==========================================*/

const contactForm = document.querySelector(".contact-form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your message has been received.");

contactForm.reset();

});

}


/*==========================================
END OF SCRIPT
==========================================*/