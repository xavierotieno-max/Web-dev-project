console.log("script.js loaded");
const themeToggle = document.getElementById("themeToggle");

// Check if the button exists before using it
if (themeToggle) {

    // Load saved theme
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }

    // Toggle dark mode
    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
            localStorage.setItem("theme", "dark");

        } else {

            themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
            localStorage.setItem("theme", "light");

        }

    });

}
// =======================
// CONTACT FORM
// =======================

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        contactForm.reset();

        const successModal = new bootstrap.Modal(
            document.getElementById("successModal")
        );

        successModal.show();

    });

}

// =======================
// CONSULTATION FORM
// =======================

const consultationForm = document.getElementById("consultationForm");

if(consultationForm){

    consultationForm.addEventListener("submit", function(e){

        e.preventDefault();

        consultationForm.reset();

        const successModal = new bootstrap.Modal(
            document.getElementById("successModal")
        );

        successModal.show();

    });

}