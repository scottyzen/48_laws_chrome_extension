const laws = [
  {
    lawNumber: 1,
    title: "Never Outshine the Master",
    summary:
      "Always make those above you feel superior. If you make them appear more brilliant than they are, you will attain power.",
    keyTakeaways: [
      "Let your superiors take credit and appear more capable",
      "Downplay your achievements when around those in power",
      "Make others feel important to gain their favor and protection",
    ],
  },
  {
    lawNumber: 2,
    title: "Never Put Too Much Trust in Friends, Learn How to Use Enemies",
    summary:
      "Friends are more likely to betray you out of emotion. Former enemies, on the other hand, are motivated by trust earned.",
    keyTakeaways: [
      "Hire former enemies - they have more to prove",
      "Friends may betray you out of envy or familiarity",
      "Keep professional relationships separate from personal ones",
    ],
  },
  {
    lawNumber: 3,
    title: "Conceal Your Intentions",
    summary:
      "Always keep your real plans hidden. If no one knows what you're up to, they can't interfere.",
    keyTakeaways: [
      "Share false information about your true goals",
      "Keep your real strategy known only to yourself",
      "Use misdirection to confuse potential opponents",
    ],
  },
  {
    lawNumber: 4,
    title: "Always Say Less Than Necessary",
    summary:
      "Powerful people intimidate and impress by saying less. The more you say, the more common you appear.",
    keyTakeaways: [
      "Silence creates mystery and commands respect",
      "The more you reveal, the more vulnerable you become",
      "Let others fill uncomfortable silences with their secrets",
    ],
  },
  {
    lawNumber: 5,
    title: "So Much Depends on Reputation — Guard It with Your Life",
    summary:
      "Your reputation is the cornerstone of your power. Protect it and use it to intimidate and win.",
    keyTakeaways: [
      "Reputation determines how others perceive and treat you",
      "Defend against attacks on your character immediately",
      "Build a reputation that precedes you in every situation",
    ],
  },
  {
    lawNumber: 6,
    title: "Court Attention at All Cost",
    summary:
      "Stand out. Visibility creates power. Blend in, and you are forgotten.",
    keyTakeaways: [
      "Create controversy or mystery to stay in people's minds",
      "Being ignored is worse than being disliked",
      "Use bold actions and striking imagery to capture attention",
    ],
  },
  {
    lawNumber: 7,
    title: "Get Others to Do the Work for You, but Always Take the Credit",
    summary:
      "Use others' skill and effort to further your own cause. Never do yourself what others can do for you.",
    keyTakeaways: [
      "Delegate tasks while maintaining control of the outcome",
      "Your reputation grows when you're associated with success",
      "Save your energy for decisions only you can make",
    ],
  },
  {
    lawNumber: 8,
    title: "Make Other People Come to You — Use Bait if Necessary",
    summary:
      "When you force others to act, you're in control. Lure them and hold the cards.",
    keyTakeaways: [
      "Control the playing field by making others approach you",
      "Create attractive opportunities that serve your interests",
      "Force opponents to react to your moves, not the reverse",
    ],
  },
  {
    lawNumber: 9,
    title: "Win Through Your Actions, Never Through Argument",
    summary:
      "Convincing through action is more effective than argument. Words breed resentment, action breeds respect.",
    keyTakeaways: [
      "Demonstrate your point through results, not debate",
      "Arguments create enemies, successful actions create admirers",
      "Let your achievements speak louder than your words",
    ],
  },
  {
    lawNumber: 10,
    title: "Infection: Avoid the Unhappy and Unlucky",
    summary:
      "Emotional states are contagious. Associate with the fortunate and the happy.",
    keyTakeaways: [
      "Negative people will drain your energy and optimism",
      "Success breeds success through positive associations",
      "Choose your social circle based on their influence on you",
    ],
  },
  {
    lawNumber: 11,
    title: "Learn to Keep People Dependent on You",
    summary:
      "To maintain independence, make others depend on you. The more they need you, the more power you have.",
    keyTakeaways: [
      "Become indispensable by controlling key resources or skills",
      "Never teach everything you know to anyone",
      "Create systems where your absence would cause problems",
    ],
  },
  {
    lawNumber: 12,
    title: "Use Selective Honesty and Generosity to Disarm Your Victim",
    summary:
      "One honest gesture can cover many dishonest ones. Generous acts of kindness can disarm even the most suspicious.",
    keyTakeaways: [
      "Strategic honesty can build trust for larger deceptions",
      "Small generosities can create big debts of gratitude",
      "Disarm suspicion with unexpected kindness",
    ],
  },
  {
    lawNumber: 13,
    title: "When Asking for Help, Appeal to People's Self-Interest",
    summary:
      "If you must ask for help, make sure your request aligns with their interests. People are more likely to help when they benefit.",
    keyTakeaways: [
      "Frame requests in terms of what others will gain",
      "Research what motivates the person you're asking",
      "Never assume people will help out of pure goodwill",
    ],
  },
  {
    lawNumber: 14,
    title: "Pose as a Friend, Work as a Spy",
    summary:
      "Knowing your rival's secrets gives you power. Get close to learn their weaknesses.",
    keyTakeaways: [
      "Information is power - gather it through relationships",
      "Ask probing questions while appearing genuinely interested",
      "Use casual conversations to uncover important details",
    ],
  },
  {
    lawNumber: 15,
    title: "Crush Your Enemy Totally",
    summary:
      "Leave no room for your enemies to recover. Half-measures create more problems than solutions.",
    keyTakeaways: [
      "Incomplete victories often lead to future revenge",
      "Show mercy only when it serves your strategic interests",
      "Eliminate threats completely or don't engage at all",
    ],
  },
  {
    lawNumber: 16,
    title: "Use Absence to Increase Respect and Honor",
    summary:
      "Too much presence diminishes respect. Create value through scarcity.",
    keyTakeaways: [
      "Scarcity increases perceived value and desire",
      "Withdraw strategically to make others appreciate you more",
      "Too much availability makes you seem common",
    ],
  },
  {
    lawNumber: 17,
    title:
      "Keep Others in Suspended Terror: Cultivate an Air of Unpredictability",
    summary:
      "Predictable behavior gives others control over you. Keep them guessing to maintain power.",
    keyTakeaways: [
      "Unpredictability prevents others from planning against you",
      "Vary your patterns to maintain psychological advantage",
      "Controlled chaos keeps opponents off balance",
    ],
  },
  {
    lawNumber: 18,
    title:
      "Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous",
    summary:
      "Isolation cuts you off from information and makes you vulnerable. Stay connected to maintain power.",
    keyTakeaways: [
      "Stay connected to networks and information sources",
      "Isolation breeds paranoia and poor decision-making",
      "Maintain visibility to gauge public opinion and threats",
    ],
  },
  {
    lawNumber: 19,
    title: "Know Who You're Dealing With — Do Not Offend the Wrong Person",
    summary:
      "Understanding your opponent is crucial. Some people are dangerous to cross.",
    keyTakeaways: [
      "Research people before engaging with them",
      "Some enemies are too powerful or vengeful to provoke",
      "Different personality types require different approaches",
    ],
  },
  {
    lawNumber: 20,
    title: "Do Not Commit to Anyone",
    summary:
      "Independence is power. The moment you commit, you lose options and control.",
    keyTakeaways: [
      "Keep multiple options open at all times",
      "Commitment limits your flexibility and negotiating power",
      "Play different parties against each other",
    ],
  },
  {
    lawNumber: 21,
    title: "Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark",
    summary:
      "Make your victims feel smarter than you. Their ego will blind them to your true intentions.",
    keyTakeaways: [
      "Let others underestimate your intelligence and capabilities",
      "People drop their guard around those they perceive as inferior",
      "Appearing naive makes others reveal their true plans",
    ],
  },
  {
    lawNumber: 22,
    title: "Use the Surrender Tactic: Transform Weakness into Power",
    summary:
      "Sometimes surrender is the best strategy. Use it to lull your enemies into complacency.",
    keyTakeaways: [
      "Strategic retreat can be more powerful than direct confrontation",
      "Surrender can make enemies overconfident and careless",
      "Use apparent defeat to gather strength for future victory",
    ],
  },
  {
    lawNumber: 23,
    title: "Concentrate Your Forces",
    summary:
      "Focus your efforts and resources. Scattered energy achieves nothing.",
    keyTakeaways: [
      "Focus all resources on one clear objective at a time",
      "Scattered efforts lead to mediocre results everywhere",
      "Overwhelming force in one area is better than weak efforts in many",
    ],
  },
  {
    lawNumber: 24,
    title: "Play the Perfect Courtier",
    summary:
      "Master the art of indirection. Make others feel important while advancing your own agenda.",
    keyTakeaways: [
      "Flatter superiors while subtly advancing your position",
      "Never appear to be seeking power directly",
      "Make your ambitions seem to serve others' interests",
    ],
  },
  {
    lawNumber: 25,
    title: "Re-Create Yourself",
    summary:
      "Don't accept the role society gives you. Create your own identity and control how others perceive you.",
    keyTakeaways: [
      "Take control of your image and reputation",
      "Reinvent yourself to escape limiting expectations",
      "Create mystery and intrigue around your persona",
    ],
  },
  {
    lawNumber: 26,
    title: "Keep Your Hands Clean",
    summary:
      "Mistakes and unpopular decisions should be blamed on others. Use scapegoats to maintain your reputation.",
    keyTakeaways: [
      "Use others to do your dirty work and take the blame",
      "Maintain plausible deniability for controversial actions",
      "Your reputation is more valuable than loyalty to subordinates",
    ],
  },
  {
    lawNumber: 27,
    title: "Play on People's Need to Believe to Create a Cultlike Following",
    summary:
      "People want to believe in something. Give them a cause and they'll follow you devotedly.",
    keyTakeaways: [
      "Offer people a grand vision or cause to believe in",
      "Create rituals and symbols that reinforce loyalty",
      "People prefer comforting lies to harsh truths",
    ],
  },
  {
    lawNumber: 28,
    title: "Enter Action with Boldness",
    summary:
      "Timidity is dangerous. Bold action, even if it fails, is better than hesitation.",
    keyTakeaways: [
      "Confidence and boldness intimidate opponents",
      "Hesitation reveals weakness and invites attack",
      "Bold moves can succeed through sheer audacity alone",
    ],
  },
  {
    lawNumber: 29,
    title: "Plan All the Way to the End",
    summary:
      "Think through consequences and plan for every contingency. The end is everything.",
    keyTakeaways: [
      "Consider all possible outcomes before acting",
      "Have backup plans for when things go wrong",
      "The end result matters more than the means",
    ],
  },
  {
    lawNumber: 30,
    title: "Make Your Accomplishments Seem Effortless",
    summary:
      "Never show the effort behind your success. Make it look natural and easy.",
    keyTakeaways: [
      "Hide the work and struggle behind your achievements",
      "Appearing effortless suggests natural superiority",
      "People respect what seems to come naturally",
    ],
  },
  {
    lawNumber: 31,
    title: "Control the Options: Get Others to Play with the Cards You Deal",
    summary:
      "Give people choices, but make sure all options benefit you. Control the game.",
    keyTakeaways: [
      "Frame choices so all outcomes serve your interests",
      "People feel free when choosing between predetermined options",
      "Control the environment rather than forcing specific actions",
    ],
  },
  {
    lawNumber: 32,
    title: "Play to People's Fantasies",
    summary:
      "People want to escape harsh realities. Offer them romance and fantasy, and they'll follow you.",
    keyTakeaways: [
      "Sell dreams and aspirations, not just practical benefits",
      "People will pay premium prices for fantasies and status",
      "Reality is often too harsh - offer appealing alternatives",
    ],
  },
  {
    lawNumber: 33,
    title: "Discover Each Man's Thumbscrew",
    summary: "Everyone has a weakness. Find it and you have power over them.",
    keyTakeaways: [
      "Identify what each person fears, desires, or needs most",
      "Use psychological weaknesses as leverage points",
      "People's insecurities are often their greatest vulnerabilities",
    ],
  },
  {
    lawNumber: 34,
    title:
      "Be Royal in Your Own Fashion: Act Like a King to Be Treated Like One",
    summary:
      "How you present yourself determines how others treat you. Carry yourself with dignity and confidence.",
    keyTakeaways: [
      "Project confidence and authority in your demeanor",
      "People respond to how you value and present yourself",
      "Royal bearing commands respect even without formal power",
    ],
  },
  {
    lawNumber: 35,
    title: "Master the Art of Timing",
    summary: "Timing is everything. Learn when to act and when to wait.",
    keyTakeaways: [
      "Wait for the perfect moment rather than forcing action",
      "Patience can be more powerful than immediate action",
      "Read the mood and context before making moves",
    ],
  },
  {
    lawNumber: 36,
    title: "Disdain Things You Cannot Have: Ignoring Them Is the Best Revenge",
    summary:
      "Showing desire for what you cannot have makes you look weak. Ignore it instead.",
    keyTakeaways: [
      "Indifference hurts more than anger or attention",
      "Don't let others see what you desperately want",
      "Act as if unattainable things are beneath your notice",
    ],
  },
  {
    lawNumber: 37,
    title: "Create Compelling Spectacles",
    summary:
      "People are drawn to spectacle. Use imagery and symbols to create powerful impressions.",
    keyTakeaways: [
      "Visual impact often matters more than substance",
      "Create memorable moments that people will talk about",
      "Use symbols and imagery to communicate power",
    ],
  },
  {
    lawNumber: 38,
    title: "Think as You Like but Behave Like Others",
    summary:
      "Unconventional thinking is fine, but appearing too different is dangerous. Blend in while thinking independently.",
    keyTakeaways: [
      "Conform outwardly while maintaining inner independence",
      "Standing out too much invites hostility and suspicion",
      "Save your unconventional ideas for the right moments",
    ],
  },
  {
    lawNumber: 39,
    title: "Stir Up Waters to Catch Fish",
    summary:
      "Anger and emotion make people lose control. Stay calm while making others lose their composure.",
    keyTakeaways: [
      "Maintain emotional control while provoking others to lose theirs",
      "Angry people make mistakes and reveal information",
      "Use calm detachment as a weapon against emotional opponents",
    ],
  },
  {
    lawNumber: 40,
    title: "Despise the Free Lunch",
    summary:
      "What's free is often dangerous. Pay your own way to avoid obligations and maintain independence.",
    keyTakeaways: [
      "Free gifts often come with hidden strings attached",
      "Paying your way maintains your independence and dignity",
      "Generosity can be a tool for creating obligation and control",
    ],
  },
  {
    lawNumber: 41,
    title: "Avoid Stepping into a Great Man's Shoes",
    summary:
      "Following a great predecessor is dangerous. Create your own path and identity.",
    keyTakeaways: [
      "Establish your own style rather than copying predecessors",
      "Comparisons to great predecessors are usually unfavorable",
      "Create a new direction rather than continuing old ones",
    ],
  },
  {
    lawNumber: 42,
    title: "Strike the Shepherd and the Sheep Will Scatter",
    summary:
      "Trouble often stems from a single source. Identify and neutralize the source of problems.",
    keyTakeaways: [
      "Identify the key troublemaker or leader causing problems",
      "Removing the source often solves multiple issues at once",
      "Focus on root causes rather than symptoms",
    ],
  },
  {
    lawNumber: 43,
    title: "Work on the Hearts and Minds of Others",
    summary:
      "Coercion creates resistance. Win hearts and minds for lasting power.",
    keyTakeaways: [
      "Persuasion is more effective than force in the long term",
      "Appeal to emotions and self-interest, not just logic",
      "Make people want to follow you rather than forcing compliance",
    ],
  },
  {
    lawNumber: 44,
    title: "Disarm and Infuriate with the Mirror Effect",
    summary:
      "Mirror your enemies' actions and they'll be confused and frustrated. Use their own tactics against them.",
    keyTakeaways: [
      "Copy opponents' strategies to neutralize their advantage",
      "Mirroring behavior creates confusion and self-doubt",
      "Turn enemies' strengths into weaknesses by reflecting them",
    ],
  },
  {
    lawNumber: 45,
    title: "Preach the Need for Change, but Never Reform Too Much at Once",
    summary:
      "People need change but fear it. Introduce reforms gradually to avoid resistance.",
    keyTakeaways: [
      "Gradual change faces less resistance than sudden transformation",
      "Respect traditions while slowly introducing improvements",
      "People fear rapid change even when it benefits them",
    ],
  },
  {
    lawNumber: 46,
    title: "Never Appear Too Perfect",
    summary:
      "Perfection creates envy and suspicion. Show minor flaws to appear more human and relatable.",
    keyTakeaways: [
      "Display harmless weaknesses to deflect envy",
      "Perfect people seem inhuman and threatening",
      "Small flaws make your successes more acceptable to others",
    ],
  },
  {
    lawNumber: 47,
    title:
      "Do Not Go Past the Mark You Aimed For; In Victory, Learn When to Stop",
    summary:
      "Know when you've won and stop there. Going too far creates new enemies.",
    keyTakeaways: [
      "Victory can become defeat if you don't know when to stop",
      "Excessive success breeds resentment and counterattacks",
      "Set clear objectives and stop when you achieve them",
    ],
  },
  {
    lawNumber: 48,
    title: "Assume Formlessness",
    summary:
      "Be flexible and adaptable. Rigid structures are easily broken, but formless things are invincible.",
    keyTakeaways: [
      "Stay flexible and adaptable to changing circumstances",
      "Avoid rigid patterns that enemies can predict and counter",
      "Formlessness makes you impossible to attack directly",
    ],
  },
];
