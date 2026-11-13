
// SWIFTORA LOGISTICS - WEBSITE INTERACTIONS

// Mobile navigation menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Shipment tracking demonstration
const trackingForm = document.getElementById("trackingForm");

if (trackingForm) {
    trackingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const trackingNumber =
            document.getElementById("trackingNumber").value.trim();

        const result = document.getElementById("trackingResult");

        if (!trackingNumber) {
            result.textContent = "Please enter a tracking number.";
            return;
        }

        result.textContent =
            "Tracking request received. Connect a shipment database or tracking API to retrieve live delivery status.";
    });
}

// Booking form demonstration
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const message = document.getElementById("bookingMessage");

        message.textContent =
            "Your booking request has been prepared. A backend is required to submit and store it.";

        bookingForm.reset();
    });
}
