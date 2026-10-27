// Mobile navigation
const menuButton = document.querySelector("#menu-button");
const navLinks = document.querySelector("#nav-links");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
}

// Project filters
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedCategory = button.dataset.filter;

    // Update the active button
    filterButtons.forEach(function (item) {
      item.classList.remove("active");
    });
    button.classList.add("active");

    // Show or hide each project card
    projectCards.forEach(function (card) {
      const projectCategory = card.dataset.category;

      if (selectedCategory === "all" || selectedCategory === projectCategory) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Automatically show the current year in the footer
const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(function (element) {
  element.textContent = new Date().getFullYear();
});
