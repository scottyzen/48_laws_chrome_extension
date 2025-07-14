const laws = [
  {
    lawNumber: 1,
    title: "Never Outshine the Master",
    summary:
      "Always make those above you feel superior. If you make them appear more brilliant than they are, you will attain power.",
  },
  {
    lawNumber: 2,
    title: "Never Put Too Much Trust in Friends, Learn How to Use Enemies",
    summary:
      "Friends are more likely to betray you out of emotion. Former enemies, on the other hand, are motivated by trust earned.",
  },
  {
    lawNumber: 3,
    title: "Conceal Your Intentions",
    summary:
      "Always keep your real plans hidden. If no one knows what you're up to, they can't interfere.",
  },
  {
    lawNumber: 4,
    title: "Always Say Less Than Necessary",
    summary:
      "Powerful people intimidate and impress by saying less. The more you say, the more common you appear.",
  },
  {
    lawNumber: 5,
    title: "So Much Depends on Reputation — Guard It with Your Life",
    summary:
      "Your reputation is the cornerstone of your power. Protect it and use it to intimidate and win.",
  },
  {
    lawNumber: 6,
    title: "Court Attention at All Cost",
    summary:
      "Stand out. Visibility creates power. Blend in, and you are forgotten.",
  },
  {
    lawNumber: 7,
    title: "Get Others to Do the Work for You, but Always Take the Credit",
    summary:
      "Use others' skill and effort to further your own cause. Never do yourself what others can do for you.",
  },
  {
    lawNumber: 8,
    title: "Make Other People Come to You — Use Bait if Necessary",
    summary:
      "When you force others to act, you're in control. Lure them and hold the cards.",
  },
  {
    lawNumber: 9,
    title: "Win Through Your Actions, Never Through Argument",
    summary:
      "Convincing through action is more effective than argument. Words breed resentment, action breeds respect.",
  },
  {
    lawNumber: 10,
    title: "Infection: Avoid the Unhappy and Unlucky",
    summary:
      "Emotional states are contagious. Associate with the fortunate and the happy.",
  },
  {
    lawNumber: 11,
    title: "Learn to Keep People Dependent on You",
    summary:
      "To maintain independence, make others depend on you. The more they need you, the more power you have.",
  },
  {
    lawNumber: 12,
    title: "Use Selective Honesty and Generosity to Disarm Your Victim",
    summary:
      "One honest gesture can cover many dishonest ones. Generous acts of kindness can disarm even the most suspicious.",
  },
  {
    lawNumber: 13,
    title: "When Asking for Help, Appeal to People's Self-Interest",
    summary:
      "If you must ask for help, make sure your request aligns with their interests. People are more likely to help when they benefit.",
  },
  {
    lawNumber: 14,
    title: "Pose as a Friend, Work as a Spy",
    summary:
      "Knowing your rival's secrets gives you power. Get close to learn their weaknesses.",
  },
  {
    lawNumber: 15,
    title: "Crush Your Enemy Totally",
    summary:
      "Leave no room for your enemies to recover. Half-measures create more problems than solutions.",
  },
  {
    lawNumber: 16,
    title: "Use Absence to Increase Respect and Honor",
    summary:
      "Too much presence diminishes respect. Create value through scarcity.",
  },
  {
    lawNumber: 17,
    title:
      "Keep Others in Suspended Terror: Cultivate an Air of Unpredictability",
    summary:
      "Predictable behavior gives others control over you. Keep them guessing to maintain power.",
  },
  {
    lawNumber: 18,
    title:
      "Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous",
    summary:
      "Isolation cuts you off from information and makes you vulnerable. Stay connected to maintain power.",
  },
  {
    lawNumber: 19,
    title: "Know Who You're Dealing With — Do Not Offend the Wrong Person",
    summary:
      "Understanding your opponent is crucial. Some people are dangerous to cross.",
  },
  {
    lawNumber: 20,
    title: "Do Not Commit to Anyone",
    summary:
      "Independence is power. The moment you commit, you lose options and control.",
  },
  {
    lawNumber: 21,
    title: "Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark",
    summary:
      "Make your victims feel smarter than you. Their ego will blind them to your true intentions.",
  },
  {
    lawNumber: 22,
    title: "Use the Surrender Tactic: Transform Weakness into Power",
    summary:
      "Sometimes surrender is the best strategy. Use it to lull your enemies into complacency.",
  },
  {
    lawNumber: 23,
    title: "Concentrate Your Forces",
    summary:
      "Focus your efforts and resources. Scattered energy achieves nothing.",
  },
  {
    lawNumber: 24,
    title: "Play the Perfect Courtier",
    summary:
      "Master the art of indirection. Make others feel important while advancing your own agenda.",
  },
  {
    lawNumber: 25,
    title: "Re-Create Yourself",
    summary:
      "Don't accept the role society gives you. Create your own identity and control how others perceive you.",
  },
  {
    lawNumber: 26,
    title: "Keep Your Hands Clean",
    summary:
      "Mistakes and unpopular decisions should be blamed on others. Use scapegoats to maintain your reputation.",
  },
  {
    lawNumber: 27,
    title: "Play on People's Need to Believe to Create a Cultlike Following",
    summary:
      "People want to believe in something. Give them a cause and they'll follow you devotedly.",
  },
  {
    lawNumber: 28,
    title: "Enter Action with Boldness",
    summary:
      "Timidity is dangerous. Bold action, even if it fails, is better than hesitation.",
  },
  {
    lawNumber: 29,
    title: "Plan All the Way to the End",
    summary:
      "Think through consequences and plan for every contingency. The end is everything.",
  },
  {
    lawNumber: 30,
    title: "Make Your Accomplishments Seem Effortless",
    summary:
      "Never show the effort behind your success. Make it look natural and easy.",
  },
  {
    lawNumber: 31,
    title: "Control the Options: Get Others to Play with the Cards You Deal",
    summary:
      "Give people choices, but make sure all options benefit you. Control the game.",
  },
  {
    lawNumber: 32,
    title: "Play to People's Fantasies",
    summary:
      "People want to escape harsh realities. Offer them romance and fantasy, and they'll follow you.",
  },
  {
    lawNumber: 33,
    title: "Discover Each Man's Thumbscrew",
    summary: "Everyone has a weakness. Find it and you have power over them.",
  },
  {
    lawNumber: 34,
    title:
      "Be Royal in Your Own Fashion: Act Like a King to Be Treated Like One",
    summary:
      "How you present yourself determines how others treat you. Carry yourself with dignity and confidence.",
  },
  {
    lawNumber: 35,
    title: "Master the Art of Timing",
    summary: "Timing is everything. Learn when to act and when to wait.",
  },
  {
    lawNumber: 36,
    title: "Disdain Things You Cannot Have: Ignoring Them Is the Best Revenge",
    summary:
      "Showing desire for what you cannot have makes you look weak. Ignore it instead.",
  },
  {
    lawNumber: 37,
    title: "Create Compelling Spectacles",
    summary:
      "People are drawn to spectacle. Use imagery and symbols to create powerful impressions.",
  },
  {
    lawNumber: 38,
    title: "Think as You Like but Behave Like Others",
    summary:
      "Unconventional thinking is fine, but appearing too different is dangerous. Blend in while thinking independently.",
  },
  {
    lawNumber: 39,
    title: "Stir Up Waters to Catch Fish",
    summary:
      "Anger and emotion make people lose control. Stay calm while making others lose their composure.",
  },
  {
    lawNumber: 40,
    title: "Despise the Free Lunch",
    summary:
      "What's free is often dangerous. Pay your own way to avoid obligations and maintain independence.",
  },
  {
    lawNumber: 41,
    title: "Avoid Stepping into a Great Man's Shoes",
    summary:
      "Following a great predecessor is dangerous. Create your own path and identity.",
  },
  {
    lawNumber: 42,
    title: "Strike the Shepherd and the Sheep Will Scatter",
    summary:
      "Trouble often stems from a single source. Identify and neutralize the source of problems.",
  },
  {
    lawNumber: 43,
    title: "Work on the Hearts and Minds of Others",
    summary:
      "Coercion creates resistance. Win hearts and minds for lasting power.",
  },
  {
    lawNumber: 44,
    title: "Disarm and Infuriate with the Mirror Effect",
    summary:
      "Mirror your enemies' actions and they'll be confused and frustrated. Use their own tactics against them.",
  },
  {
    lawNumber: 45,
    title: "Preach the Need for Change, but Never Reform Too Much at Once",
    summary:
      "People need change but fear it. Introduce reforms gradually to avoid resistance.",
  },
  {
    lawNumber: 46,
    title: "Never Appear Too Perfect",
    summary:
      "Perfection creates envy and suspicion. Show minor flaws to appear more human and relatable.",
  },
  {
    lawNumber: 47,
    title:
      "Do Not Go Past the Mark You Aimed For; In Victory, Learn When to Stop",
    summary:
      "Know when you've won and stop there. Going too far creates new enemies.",
  },
  {
    lawNumber: 48,
    title: "Assume Formlessness",
    summary:
      "Be flexible and adaptable. Rigid structures are easily broken, but formless things are invincible.",
  },
];

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
