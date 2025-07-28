// Global variable to track current law
let currentLawNumber = null;

// Function to create the number strip
function createNumberStrip() {
  const numberStrip = document.getElementById("number-strip");

  for (let i = 1; i <= 48; i++) {
    const numberItem = document.createElement("button");
    numberItem.className = "number-item number-pill";
    numberItem.textContent = i;
    numberItem.setAttribute("data-law-number", i);
    numberItem.setAttribute("aria-label", `Go to law ${i}`);
    numberItem.setAttribute("role", "button");
    numberItem.setAttribute("tabindex", "0");

    // Add click handler to jump to specific law
    numberItem.addEventListener("click", (e) => {
      e.stopPropagation();
      showSpecificLaw(i);
    });

    // Add keyboard handler for Enter and Space
    numberItem.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        showSpecificLaw(i);
      }
    });

    numberStrip.appendChild(numberItem);
  }
}

// Function to highlight the active law number
function highlightActiveLaw(lawNumber) {
  // Remove previous active state
  const previousActive = document.querySelector(".number-item.active");
  if (previousActive) {
    previousActive.classList.remove("active");
    previousActive.setAttribute("aria-pressed", "false");
  }

  // Add active state to current law
  const currentActive = document.querySelector(
    `[data-law-number="${lawNumber}"]`
  );
  if (currentActive) {
    currentActive.classList.add("active");
    currentActive.setAttribute("aria-pressed", "true");
    currentActive.setAttribute(
      "aria-label",
      `Current law ${lawNumber} (active)`
    );
  }

  currentLawNumber = lawNumber;

  // Update page title for screen readers
  document.title = `Law ${lawNumber} - 48 Laws of Power`;
}

// Function to show a specific law by number
function showSpecificLaw(lawNumber) {
  const law = laws.find((l) => l.lawNumber === lawNumber);
  if (!law) return;

  const lawNumberElement = document.getElementById("law-number");
  const titleElement = document.getElementById("law-title");
  const summaryElement = document.getElementById("law-summary");
  const takeawaysListElement = document.getElementById("takeaways-list");

  lawNumberElement.textContent = `Law ${law.lawNumber}`;
  titleElement.textContent = law.title;
  summaryElement.textContent = law.summary;

  // Update action items
  takeawaysListElement.innerHTML = "";
  if (law.actionItems && law.actionItems.length > 0) {
    law.actionItems.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      takeawaysListElement.appendChild(li);
    });
  }

  // Highlight the active law number
  highlightActiveLaw(law.lawNumber);

  // Update favorite button
  updateFavoriteButton();

  // Announce the law change to screen readers
  announceToScreenReader(`Law ${law.lawNumber}: ${law.title}`);

  // Update recent laws history
  const recentLaws = JSON.parse(localStorage.getItem("recentLaws") || "[]");
  const lawIndex = laws.findIndex((l) => l.lawNumber === lawNumber) || 0;
  if (!recentLaws.includes(lawIndex)) {
    recentLaws.push(lawIndex);
    localStorage.setItem("recentLaws", JSON.stringify(recentLaws));
  }
}

// Function to announce content changes to screen readers
function announceToScreenReader(message) {
  const announcement = document.createElement("div");
  announcement.setAttribute("aria-live", "polite");
  announcement.setAttribute("aria-atomic", "true");
  announcement.className = "sr-only";
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove the announcement after it's been read
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}

// Favorites functionality
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

function toggleFavorite() {
  const currentLaw = getCurrentLawNumber();
  const favorites = getFavorites();
  const index = favorites.indexOf(currentLaw);

  if (index > -1) {
    favorites.splice(index, 1);
    announceToScreenReader(`Law ${currentLaw} removed from favorites`);
  } else {
    favorites.push(currentLaw);
    announceToScreenReader(`Law ${currentLaw} added to favorites`);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateFavoriteButton();
}

function updateFavoriteButton() {
  const currentLaw = getCurrentLawNumber();
  const favorites = getFavorites();
  const favoriteBtn = document.getElementById("favorite-btn");
  const favoriteIcon = favoriteBtn.querySelector(".favorite-icon");

  if (favorites.includes(currentLaw)) {
    favoriteIcon.textContent = "★";
    favoriteBtn.classList.add("favorited");
    favoriteBtn.setAttribute("aria-label", "Remove from favorites");
    favoriteBtn.setAttribute("title", "Remove from favorites");
  } else {
    favoriteIcon.textContent = "☆";
    favoriteBtn.classList.remove("favorited");
    favoriteBtn.setAttribute("aria-label", "Add to favorites");
    favoriteBtn.setAttribute("title", "Add to favorites");
  }

  // Update favorite indicators in number strip
  updateFavoriteIndicators();
}

// Function to update favorite indicators in the number strip
function updateFavoriteIndicators() {
  const favorites = getFavorites();
  const numberItems = document.querySelectorAll(".number-item");

  numberItems.forEach((item) => {
    const lawNumber = parseInt(item.getAttribute("data-law-number"));
    if (favorites.includes(lawNumber)) {
      item.classList.add("favorited");
      item.setAttribute("aria-label", `Go to law ${lawNumber} (favorited)`);
    } else {
      item.classList.remove("favorited");
      item.setAttribute("aria-label", `Go to law ${lawNumber}`);
    }
  });
}

function getRandomLaw() {
  // Get the history of recently shown laws
  const recentLaws = JSON.parse(localStorage.getItem("recentLaws") || "[]");

  // If we've shown all laws, reset the history
  if (recentLaws.length >= laws.length) {
    localStorage.setItem("recentLaws", "[]");
    recentLaws.length = 0;
  }

  // Find laws that haven't been shown recently
  const availableLaws = laws.filter((_, index) => !recentLaws.includes(index));

  // If no laws are available (shouldn't happen with the reset above), use all laws
  const lawsToChooseFrom = availableLaws.length > 0 ? availableLaws : laws;

  // Pick a random law
  const randomIndex = Math.floor(Math.random() * lawsToChooseFrom.length);
  const selectedLaw = lawsToChooseFrom[randomIndex];

  // Find the original index of the selected law
  const originalIndex = laws.findIndex(
    (law) => law.title === selectedLaw.title
  );

  // Add this law to the recent history
  recentLaws.push(originalIndex);
  localStorage.setItem("recentLaws", JSON.stringify(recentLaws));

  return selectedLaw;
}

// Function to display the law
function showLaw() {
  const law = getRandomLaw();

  const lawNumberElement = document.getElementById("law-number");
  const titleElement = document.getElementById("law-title");
  const summaryElement = document.getElementById("law-summary");
  const takeawaysListElement = document.getElementById("takeaways-list");

  lawNumberElement.textContent = `Law #${law.lawNumber}`;
  titleElement.textContent = law.title;
  summaryElement.textContent = law.summary;

  // Update action items
  takeawaysListElement.innerHTML = "";
  if (law.actionItems && law.actionItems.length > 0) {
    law.actionItems.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      takeawaysListElement.appendChild(li);
    });
  }

  // Highlight the active law number
  highlightActiveLaw(law.lawNumber);

  // Update favorite button
  updateFavoriteButton();

  // Announce the law change to screen readers
  announceToScreenReader(`Law ${law.lawNumber}: ${law.title}`);
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createNumberStrip();
  showLaw();

  // Update favorite indicators after creating the number strip
  updateFavoriteIndicators();

  // Add favorite button event listener
  const favoriteBtn = document.getElementById("favorite-btn");
  favoriteBtn.addEventListener("click", toggleFavorite);

  // Add a subtle click handler to get a new law (optional feature)
  document.addEventListener("click", (e) => {
    if (e.target.tagName === "BODY" || e.target.className === "container") {
      showLaw();
    }
  });
});

// Helper function to get current law number
function getCurrentLawNumber() {
  return currentLawNumber || 1;
}

// Function to show random law
function showRandomLaw() {
  showLaw();
  announceToScreenReader("Showing random law");
}

// Keyboard shortcuts
document.addEventListener("keydown", function (e) {
  // Don't interfere with input fields or when modifier keys are pressed
  if (
    e.target.tagName === "INPUT" ||
    e.target.tagName === "TEXTAREA" ||
    e.ctrlKey ||
    e.metaKey ||
    e.altKey
  ) {
    return;
  }

  const currentLaw = getCurrentLawNumber();

  switch (e.key) {
    case "ArrowLeft":
      e.preventDefault();
      const prevLaw = currentLaw > 1 ? currentLaw - 1 : 48;
      showSpecificLaw(prevLaw);
      announceToScreenReader(`Previous law: ${prevLaw}`);
      break;

    case "ArrowRight":
      e.preventDefault();
      const nextLaw = currentLaw < 48 ? currentLaw + 1 : 1;
      showSpecificLaw(nextLaw);
      announceToScreenReader(`Next law: ${nextLaw}`);
      break;

    case " ":
      e.preventDefault();
      showRandomLaw();
      break;
  }
});
