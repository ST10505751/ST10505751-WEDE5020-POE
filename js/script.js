/* Potter's House Melville Website
JavaScript functionality
*/

// Testing that JavaScript is connected correctly
console.log("Welcome to Potter's House Melville!");

console.log("Let us spread the Gospel of Jesus Christ.");
// Interactive FAQ section
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
question.addEventListener("click", function () {

const answer = question.nextElementSibling;

if (answer.hidden) {
answer.hidden = false;
question.setAttribute("aria-expanded", "true");
} else {
answer.hidden = true;
question.setAttribute("aria-expanded", "false");
}

});
});

// Search and filter service cards
const serviceSearch = document.getElementById("serviceSearch");
const searchMessage = document.getElementById("searchMessage");
const serviceCards = document.querySelectorAll(".service-card");

if (serviceSearch) {
serviceSearch.addEventListener("input", function () {
const searchText = serviceSearch.value.toLowerCase().trim();
let visibleCount = 0;

    serviceCards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();
        const matches = cardText.includes(searchText);

        card.style.display = matches ? "" : "none";

        if (matches) {
            visibleCount++;
        }
    });

    if (searchMessage) {
        if (visibleCount === 0) {
            searchMessage.textContent = "No matching services found. Please try another search.";
        } else {
            searchMessage.textContent = visibleCount + " service(s) found.";
        }
    }
});
}
// Enquiry form validation
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
     enquiryForm.addEventListener("submit", function (event) {
     event.preventDefault();

     const name = document.getElementById("name").value.trim();
     const email = document.getElementById("email").value.trim();
     const enquiryType = document.getElementById("enquiry-type").value;
     const message = document.getElementById("message").value.trim();
     const formMessage = document.getElementById("formMessage");

    if (name.length < 2) {
         formMessage.textContent = "Please enter your full name.";
         return;
    }

    if (!email || !email.includes("@")) {
         formMessage.textContent = "Please enter a valid email address.";
         return;
    }

    if (message.length < 10) {
         formMessage.textContent = "Please enter a message of at least 10 characters.";
         return;
    }

    formMessage.textContent =
         "Thank you, " + name +
         "! Your " + enquiryType +
         " enquiry has been checked successfully. A member from the church will contact you.";
    });
}
const contactForm = document.getElementById("contactForm");

if (contactForm) {
     contactForm.addEventListener("submit", function (event) {
         event.preventDefault();

         const name = document.getElementById("contactName").value.trim();
         const email = document.getElementById("contactEmail").value.trim();
         const messageType = document.getElementById("messageType").value;
         const message = document.getElementById("contactMessage").value.trim();
         const formMessage = document.getElementById("contactFormMessage");

         if (!contactForm.checkValidity()) {
             contactForm.reportValidity();
             return;
         }

         if (name.length < 2 || message.length < 10) {
             formMessage.textContent =
                 "Please check your name and make sure your message has at least 10 characters.";
             return;
         }

         const subject = encodeURIComponent(
             "Church Website Contact: " + messageType
         );

         const body = encodeURIComponent(
             "Name: " + name +
             "\nEmail: " + email +
             "\nMessage Type: " + messageType +
             "\n\nMessage:\n" + message
         );

         formMessage.textContent =
             "Your email is being sent. Please send it from your email application.";

         window.location.href =
             "mailto:smkhabela98@gmail.com?subject=" +
             subject + "&body=" + body;
    });
}
// Church Gallery Lightbox
const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

if (lightbox && lightboxImage && closeLightbox) {

    galleryImages.forEach(function (image) {
        image.addEventListener("click", function () {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.classList.add("active");
        });
    });

    closeLightbox.addEventListener("click", function () {
            lightbox.classList.remove("active");
            lightboxImage.src = "";
    });

     lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) {
            lightbox.classList.remove("active");
            lightboxImage.src = "";
        }
    });
}
/* Scroll Fade-In Animation */
const fadeElements = document.querySelectorAll(
    "main section, .service-card"
);

fadeElements.forEach(function (element) {
    element.classList.add("fade-in");
});

const fadeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

fadeElements.forEach(function (element) {
    fadeObserver.observe(element);
});

// Dynamic Church Events
const eventsContainer = document.getElementById("eventsContainer");

if (eventsContainer) {
    const churchEvents = [
        {
            title: "Church Services",
            description: "Join us for worship, prayer and the preaching of God's Word on Sunday morning at 10:30am, Sunday evening at 17:00pm and Wednesday evening at 19:00pm."
        },
        {
            title: "Church Outreach",
            description: "Help us reach people with the Gospel and share the love of Jesus Christ on Saturday at 16:30pm."
        },
        {
            title: "Youth Night",
            description: "Connect with other young people through fellowship, activities and the Word of God on Friday at 19:00pm."
        }
    ];

    churchEvents.forEach(function (event) {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");

        const eventTitle = document.createElement("h3");
        eventTitle.textContent = event.title;

        const eventDescription = document.createElement("p");
        eventDescription.textContent = event.description;

        eventCard.appendChild(eventTitle);
        eventCard.appendChild(eventDescription);

        eventsContainer.appendChild(eventCard);
    });
}

