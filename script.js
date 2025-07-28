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

  // Update key takeaways
  takeawaysListElement.innerHTML = "";
  if (law.keyTakeaways && law.keyTakeaways.length > 0) {
    law.keyTakeaways.forEach((takeaway) => {
      const li = document.createElement("li");
      li.textContent = takeaway;
      takeawaysListElement.appendChild(li);
    });
  }

  // Highlight the active law number
  highlightActiveLaw(law.lawNumber);

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

  // Update key takeaways
  takeawaysListElement.innerHTML = "";
  if (law.keyTakeaways && law.keyTakeaways.length > 0) {
    law.keyTakeaways.forEach((takeaway) => {
      const li = document.createElement("li");
      li.textContent = takeaway;
      takeawaysListElement.appendChild(li);
    });
  }

  // Highlight the active law number
  highlightActiveLaw(law.lawNumber);

  // Announce the law change to screen readers
  announceToScreenReader(`Law ${law.lawNumber}: ${law.title}`);
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  createNumberStrip();
  showLaw();

  // Add a subtle click handler to get a new law (optional feature)
  document.addEventListener("click", (e) => {
    if (e.target.tagName === "BODY" || e.target.className === "container") {
      showLaw();
    }
  });
});
