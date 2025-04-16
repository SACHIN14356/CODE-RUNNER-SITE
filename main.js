document.addEventListener("DOMContentLoaded", () => {

    // Live Section: Dynamic Live Status Update
    const liveMatches = document.querySelectorAll(".live-status");
    setInterval(() => {
        liveMatches.forEach(match => {
            match.textContent = (Math.random() > 0.5) ? "Ongoing" : "Starting Soon";
        });
    }, 5000);

    // Shop Section: Add to Cart Feature
    const cartButtons = document.querySelectorAll(".add-to-cart");
    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Item added to cart!");
        });
    });

    // Blog Section: Show Full Article on Click
    const blogCards = document.querySelectorAll(".blog-card");
    blogCards.forEach(card => {
        card.addEventListener("click", () => {
            alert("Opening full article...");
        });
    });

    // Contact Form: Form Submission Handling
    const contactForm = document.querySelector(".contact-form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
        contactForm.reset();
    });

});
