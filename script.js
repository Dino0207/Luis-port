const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
}

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            siteNav.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}
