// ======================
// DARK MODE + LOCALSTORAGE
// ======================

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    // Charger le thème sauvegardé
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

    });
}


// ======================
// NAVBAR DYNAMIQUE AU SCROLL
// ======================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }

    }

});


// ======================
// BOUTON RETOUR EN HAUT
// ======================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (backToTop) {

        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }

    }

});

if (backToTop) {

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


const statsSection = document.getElementById('stats-section');

if (statsSection) {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                // Index
                animateCounter('freelances', 500);
                animateCounter('entreprises', 120);
                animateCounter('missions', 1000);

                // About
                animateCounter('freelances-count', 500);
                animateCounter('entreprises-count', 120);
                animateCounter('missions-count', 1000);
                animateCounter('pays-count', 15);

                observer.unobserve(entry.target);
            }

        });
    });

    observer.observe(statsSection);
}

function animateCounter(id, target) {

    const element = document.getElementById(id);

    if (!element) return;

    let current = 0;

    const increment = target / 100;

    function update() {

        current += increment;

        if (current < target) {
            element.textContent = Math.ceil(current);
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }

    }

    update();
}

// Fonction d'animation pour about html
function animateCounter(id, target, duration = 2000) {
    const element = document.getElementById(id);

    if (!element) return;

    let start = 0;
    const increment = target / (duration / 16);

    function updateCounter() {
        start += increment;

        if (start < target) {
            element.textContent = "+" + Math.ceil(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = "+" + target;
        }
    }

    updateCounter();
}

// Observer pour index.html
const statsIndex = document.getElementById("stats-index");

if (statsIndex) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                animateCounter("freelances", 500);
                animateCounter("entreprises", 120);
                animateCounter("missions", 1000);

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    observer.observe(statsIndex);
}