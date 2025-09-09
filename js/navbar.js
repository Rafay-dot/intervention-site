let selectedLink = null;

const setSelectedLink = (event) => {
  event.preventDefault(); // Prevent default link behavior

  // If the clicked link is already selected, do nothing
  if (selectedLink === event.target) return;

  // Remove selected class from the previously selected link and add default class
  if (selectedLink) {
    selectedLink.classList.remove("selected");
    selectedLink.classList.add("default");
  }

  // Add selected class to the clicked link
  const clickedLink = event.target;
  clickedLink.classList.remove("default");
  clickedLink.classList.add("selected");

  // Update the reference to the currently selected link
  selectedLink = clickedLink;

  // Update the URL hash based on the selected link
  window.location.hash = clickedLink.getAttribute("href").replace("#", "");
};

const selectLinkBasedOnUrl = () => {
  const homeLink = document.querySelector('a[href=""]');
  const aboutLink = document.querySelector('a[href="#about"]');
  const contactLink = document.querySelector('a[href="#contact"]');

  // Default to Home link
  let defaultLink = homeLink;

  // Check the URL hash and select the appropriate link
  if (window.location.hash === "#about") {
    defaultLink = aboutLink;
  } else if (window.location.hash === "#contact") {
    defaultLink = contactLink;
  }

  // Set the selected class on the default link
  defaultLink.classList.add("selected");
  selectedLink = defaultLink;
};

document.addEventListener("DOMContentLoaded", () => {
  // Select the link based on the URL hash when the page loads
  selectLinkBasedOnUrl();

  // Add event listeners to the links
  const navLinks = document.querySelectorAll("#navlink");
  navLinks.forEach((link) => {
    link.addEventListener("click", setSelectedLink);
  });
});

// Toggle the menu popup on hamburger icon click
const toggleMenu = () => {
  const menuPopup = document.getElementById("menuPopup");
  menuPopup.style.display =
    menuPopup.style.display === "block" ? "none" : "block";
};
// Close the menu popup
const closeMenu = () => {
  const menuPopup = document.getElementById("menuPopup");
  menuPopup.style.display = "none";
};
