
/* =====================================================
   HEAVEN TOUCH TOURISM LTD.
   COMPLETE WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   01. WEBSITE INITIALIZATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Initialize all website features
    initializeIntro();
    initializeMobileMenu();
    initializePDFViewer();
    initializeCurrentYear();

});


/* =====================================================
   02. INTRO ANIMATION
===================================================== */

function initializeIntro() {

    const introScreen = document.getElementById("intro-screen");
    const mainContent = document.getElementById("main-content");

    if (!introScreen || !mainContent) {
        return;
    }

    // Hide website while intro animation is playing
    mainContent.style.visibility = "hidden";
    mainContent.style.opacity = "0";

    // Show main website after intro animation
    window.setTimeout(function () {

        introScreen.classList.add("hide");

        mainContent.style.visibility = "visible";
        mainContent.style.opacity = "1";

        document.body.style.overflow = "";

        // Remove intro screen after transition
        window.setTimeout(function () {

            if (introScreen && introScreen.parentNode) {
                introScreen.remove();
            }

        }, 900);

    }, 2800);

}


/* =====================================================
   03. MOBILE NAVIGATION MENU
===================================================== */

function initializeMobileMenu() {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (!menuToggle || !navMenu) {
        return;
    }

    // Open and close menu
    menuToggle.addEventListener("click", function () {

        const isOpen = navMenu.classList.toggle("active");

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.classList.toggle("is-open", isOpen);
    });


    // Close menu when a navigation link is clicked
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.classList.remove("is-open");

        });

    });


    // Close menu when clicking outside navigation
    document.addEventListener("click", function (event) {

        const clickedInsideMenu = navMenu.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle) {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.classList.remove("is-open");

        }

    });


    // Close menu with Escape key
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            navMenu.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.classList.remove("is-open");

        }

    });

}


/* =====================================================
   04. PDF PACKAGE VIEWER
===================================================== */

function initializePDFViewer() {

    const pdfModal = document.getElementById("pdfModal");
    const pdfViewer = document.getElementById("packagePdfViewer");
    const closePdfButton = document.getElementById("closePdf");

    if (!pdfModal || !pdfViewer || !closePdfButton) {
        return;
    }


    // Open PDF Viewer
    window.openPackagePDF = function () {

        pdfViewer.src = "assets/packages.pdf";

        pdfModal.classList.add("active");

        pdfModal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";

        closePdfButton.focus();

    };


    // Close PDF Viewer
    window.closePackagePDF = function () {

        pdfModal.classList.remove("active");

        pdfModal.setAttribute("aria-hidden", "true");

        pdfViewer.src = "";

        document.body.style.overflow = "";

    };


    // Close button
    closePdfButton.addEventListener("click", function () {

        window.closePackagePDF();

    });


    // Close when clicking outside the PDF content
    pdfModal.addEventListener("click", function (event) {

        if (event.target === pdfModal) {

            window.closePackagePDF();

        }

    });


    // Close PDF Viewer with Escape key
    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            pdfModal.classList.contains("active")
        ) {

            window.closePackagePDF();

        }

    });

}


/* =====================================================
   05. AUTOMATIC COPYRIGHT YEAR
===================================================== */

function initializeCurrentYear() {

    const yearElement = document.getElementById("currentYear");

    if (!yearElement) {
        return;
    }

    yearElement.textContent = new Date().getFullYear();

}


/* =====================================================
   06. IMAGE ERROR HANDLING
===================================================== */

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        image.classList.add("image-load-error");

        console.warn(
            "Image could not be loaded:",
            image.getAttribute("src")
        );

    });

});


/* =====================================================
   07. SMOOTH NAVIGATION
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (!targetElement) {
            return;
        }

        event.preventDefault();

        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Update browser URL hash
        history.replaceState(null, "", targetId);

    });

});


/* =====================================================
   08. CONSOLE BRANDING
===================================================== */

console.log(
    "%c Heaven Touch Tourism Ltd. ",
    "background:#092b45;color:#ffffff;font-size:16px;padding:8px;font-weight:bold;"
);

console.log(
    "%c Your Journey Begins Here ",
    "color:#087f5b;font-size:13px;font-weight:bold;"
);


// Automatically update footer copyright year
document.addEventListener("DOMContentLoaded", function () {
    const yearElement = document.getElementById("currentYear");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

/* =====================================================
   END OF JAVASCRIPT
===================================================== */
