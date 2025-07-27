// Global variable to track current law
let currentLawNumber = null;

// Function to create the number strip
function createNumberStrip() {
  const numberStrip = document.getElementById("number-strip");

  for (let i = 1; i <= 48; i++) {
    const numberItem = document.createElement("div");
    numberItem.className = "number-item";
    numberItem.textContent = i;
    numberItem.setAttribute("data-law-number", i);

    // Add click handler to jump to specific law
    numberItem.addEventListener("click", (e) => {
      e.stopPropagation();
      showSpecificLaw(i);
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
  }

  // Add active state to current law
  const currentActive = document.querySelector(
    `[data-law-number="${lawNumber}"]`
  );
  if (currentActive) {
    currentActive.classList.add("active");
  }

  currentLawNumber = lawNumber;
}

// Function to show a specific law by number
function showSpecificLaw(lawNumber) {
  const law = laws.find((l) => l.lawNumber === lawNumber);
  if (!law) return;

  const lawNumberElement = document.getElementById("law-number");
  const titleElement = document.getElementById("law-title");
  const summaryElement = document.getElementById("law-summary");

  // Add fade-in animation
  lawNumberElement.className = "fade-in";
  titleElement.className = "fade-in";
  summaryElement.className = "fade-in";

  lawNumberElement.textContent = `Law ${law.lawNumber}`;
  titleElement.textContent = law.title;
  summaryElement.textContent = law.summary;

  // Highlight the active law number
  highlightActiveLaw(law.lawNumber);

  // Update recent laws history
  const recentLaws = JSON.parse(localStorage.getItem("recentLaws") || "[]");
  const lawIndex = laws.findIndex((l) => l.lawNumber === lawNumber) || 0;
  if (!recentLaws.includes(lawIndex)) {
    recentLaws.push(lawIndex);
    localStorage.setItem("recentLaws", JSON.stringify(recentLaws));
  }
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

  // Add fade-in animation
  lawNumberElement.className = "fade-in";
  titleElement.className = "fade-in";
  summaryElement.className = "fade-in";

  lawNumberElement.textContent = `Law ${law.lawNumber}`;
  titleElement.textContent = law.title;
  summaryElement.textContent = law.summary;

  // Highlight the active law number
  highlightActiveLaw(law.lawNumber);
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
