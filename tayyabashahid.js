// Function to update active class on navbar links
const navLinks = document.querySelectorAll('.navbar a');

// Function to add active class
function setActiveLink() {
    let current = "";
    // Loop through all sections to check which one is currently in view
    document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });
    // Remove active class from all links
    navLinks.forEach((link) => link.classList.remove("active"));
    // Add active class to the corresponding link
    const activeLink = document.querySelector(`.navbar a[href="#${current}"]`);
    if (activeLink) activeLink.classList.add("active");
}

// Call the function to update the active link whenever the page scrolls
window.addEventListener("scroll", setActiveLink);

// Initial active link on page load
window.addEventListener("load", setActiveLink);


const menuIcon = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-menu");

menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});