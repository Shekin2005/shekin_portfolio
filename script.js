// HEADER SCROLL EFFECT
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 80);
});

function openProjects(){
    document.getElementById("projectsPanel").classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeProjects(){
    document.getElementById("projectsPanel").classList.remove("active");
    document.body.style.overflow = "auto";
}


// MOBILE MENU
const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.getElementById("mobileMenu");

if (menuIcon && mobileMenu) {
    menuIcon.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });
}

function closeMenu() {
    mobileMenu.classList.remove("active");
}


// ACCORDION
const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.nextElementSibling;

        content.style.display =
            content.style.display === "block" ? "none" : "block";
    });
});


// SLIDER
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

setInterval(() => {
    if (slides.length === 0) return;

    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}, 3000);


// SIDEBAR (ONLY IF EXISTS)


if (closeBtn && sidebar) {
    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
}


// CONTACT PANEL
function openContact() {
    const panel = document.getElementById("contactPanel");
    if (!panel) return;

    panel.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeContact() {
    const panel = document.getElementById("contactPanel");
    if (!panel) return;

    panel.classList.remove("active");
    document.body.style.overflow = "auto";
}

//POPUP
function openPopup(id){

    const popup = document.getElementById(id);

    popup.style.display = "block";

    document.body.style.overflow = "hidden";
}

function closePopup(id){

    const popup = document.getElementById(id);

    popup.style.display = "none";

    document.body.style.overflow = "auto";
}

/*SKILLS*/

function toggleSkillPopup(id) {

    const popups = document.querySelectorAll(".skill-popup");
    const cards = document.querySelectorAll(".skill-card");

    const currentPopup = document.getElementById(id);
    const currentCard = currentPopup.closest(".skill-card");

    // Check if current popup is already open
    const isOpen = currentPopup.classList.contains("show");

    // Close everything first
    popups.forEach(popup => {
        popup.classList.remove("show");
    });

    cards.forEach(card => {
        card.classList.remove("active");
    });

    // If same skill clicked again, keep it closed
    if (isOpen) {
        return;
    }

    // Open selected popup
    currentPopup.classList.add("show");
    currentCard.classList.add("active");

    // Auto close after 7 seconds
    setTimeout(() => {
        currentPopup.classList.remove("show");
        currentCard.classList.remove("active");
    }, 10000);
}

// Close popup when clicking anywhere outside
document.addEventListener("click", function(e) {

    if (
        !e.target.closest(".skill-card") &&
        !e.target.closest(".skill-popup")
    ) {
        document.querySelectorAll(".skill-popup").forEach(popup => {
            popup.classList.remove("show");
        });

        document.querySelectorAll(".skill-card").forEach(card => {
            card.classList.remove("active");
        });
    }

});