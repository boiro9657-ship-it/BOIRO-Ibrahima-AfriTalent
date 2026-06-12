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