// Function to get a random law that hasn't been shown recently
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
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  showLaw();

  // Add a subtle click handler to get a new law (optional feature)
  document.addEventListener("click", (e) => {
    if (e.target.tagName === "BODY" || e.target.className === "container") {
      showLaw();
    }
  });
});
