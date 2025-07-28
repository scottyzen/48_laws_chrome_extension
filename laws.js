const laws = [
  {
    lawNumber: 1,
    title: "Never Outshine the Master",
    summary:
      "Always make those above you feel superior. If you make them appear more brilliant than they are, you will attain power.",
    actionItems: [
      "Always deflect praise back to your boss in meetings",
      "Notice when you're about to overshadow someone in authority",
      "Ask your superior for advice even when you know the answer",
    ],
  },
  {
    lawNumber: 2,
    title: "Never Put Too Much Trust in Friends, Learn How to Use Enemies",
    summary:
      "Friends are more likely to betray you out of emotion. Former enemies, on the other hand, are motivated by trust earned.",
    actionItems: [
      "Keep work conversations with friends strictly professional",
      "Notice when friends become envious of your success",
      "Consider hiring someone who previously opposed you",
    ],
  },
  {
    lawNumber: 3,
    title: "Conceal Your Intentions",
    summary:
      "Always keep your real plans hidden. If no one knows what you're up to, they can't interfere.",
    actionItems: [
      "Never announce your plans until they're already in motion",
      "Give vague answers when asked about your future goals",
      "Create small false trails to mislead competitors",
    ],
  },
  {
    lawNumber: 4,
    title: "Always Say Less Than Necessary",
    summary:
      "Powerful people intimidate and impress by saying less. The more you say, the more common you appear.",
    actionItems: [
      "Count to three before responding in conversations",
      "Never fill awkward silences - let others do it",
      "Answer questions with questions when possible",
    ],
  },
  {
    lawNumber: 5,
    title: "So Much Depends on Reputation: Guard It with Your Life",
    summary:
      "Your reputation is the cornerstone of your power. Protect it and use it to intimidate and win.",
    actionItems: [
      "Google yourself monthly to monitor your online reputation",
      "Always respond publicly to attacks within 24 hours",
      "Build relationships with people who can vouch for your character",
    ],
  },
  {
    lawNumber: 6,
    title: "Court Attention at All Cost",
    summary:
      "Stand out. Visibility creates power. Blend in, and you are forgotten.",
    actionItems: [
      "Wear one distinctive item that people remember you by",
      "Share contrarian opinions in meetings to spark debate",
      "Post content that generates comments, not just likes",
    ],
  },
  {
    lawNumber: 7,
    title: "Get Others to Do the Work for You, but Always Take the Credit",
    summary:
      "Use others' skill and effort to further your own cause. Never do yourself what others can do for you.",
    actionItems: [
      "Always present team results as 'we accomplished' but personal wins as 'I delivered'",
      "Delegate tasks but control the final presentation",
      "Hire specialists for work outside your core strengths",
    ],
  },
  {
    lawNumber: 8,
    title: "Make Other People Come to You: Use Bait if Necessary",
    summary:
      "When you force others to act, you're in control. Lure them and hold the cards.",
    actionItems: [
      "Never chase clients - create offers that make them approach you",
      "Post valuable content and let people ask for more details",
      "Schedule meetings at your location whenever possible",
    ],
  },
  {
    lawNumber: 9,
    title: "Win Through Your Actions, Never Through Argument",
    summary:
      "Convincing through action is more effective than argument. Words breed resentment, action breeds respect.",
    actionItems: [
      "Show results instead of explaining your methods",
      "When someone doubts you, prove them wrong with performance",
      "Avoid debates - just outperform your critics",
    ],
  },
  {
    lawNumber: 10,
    title: "Infection: Avoid the Unhappy and Unlucky",
    summary:
      "Emotional states are contagious. Associate with the fortunate and the happy.",
    actionItems: [
      "Notice when someone consistently complains - limit contact",
      "Spend more time with people who are winning at life",
      "Leave conversations immediately when they turn to gossip",
    ],
  },
  {
    lawNumber: 11,
    title: "Learn to Keep People Dependent on You",
    summary:
      "To maintain independence, make others depend on you. The more they need you, the more power you have.",
    actionItems: [
      "Control access to key resources others need",
      "Never fully train your replacement",
      "Be the only person who knows certain critical passwords or processes",
    ],
  },
  {
    lawNumber: 12,
    title: "Use Selective Honesty and Generosity to Disarm Your Victim",
    summary:
      "One honest gesture can cover many dishonest ones. Generous acts of kindness can disarm even the most suspicious.",
    actionItems: [
      "Admit to a small mistake to build trust before a bigger move",
      "Buy lunch for people you're about to negotiate with",
      "Share one genuine secret to encourage others to share theirs",
    ],
  },
  {
    lawNumber: 13,
    title: "When Asking for Help, Appeal to People's Self-Interest",
    summary:
      "If you must ask for help, make sure your request aligns with their interests. People are more likely to help when they benefit.",
    actionItems: [
      "Before asking, research what the person wants to achieve",
      "Frame your request as 'this will help you get [their goal]'",
      "Never ask for favors - always offer mutual benefit",
    ],
  },
  {
    lawNumber: 14,
    title: "Pose as a Friend, Work as a Spy",
    summary:
      "Knowing your rival's secrets gives you power. Get close to learn their weaknesses.",
    actionItems: [
      "Ask 'How are things at work?' and listen for complaints",
      "Remember personal details people share - use them later",
      "Invite competitors for coffee to learn their strategies",
    ],
  },
  {
    lawNumber: 15,
    title: "Crush Your Enemy Totally",
    summary:
      "Leave no room for your enemies to recover. Half-measures create more problems than solutions.",
    actionItems: [
      "When firing someone, cut all access immediately",
      "Don't leave enemies in positions where they can retaliate",
      "If you're going to compete, aim to dominate completely",
    ],
  },
  {
    lawNumber: 16,
    title: "Use Absence to Increase Respect and Honor",
    summary:
      "Too much presence diminishes respect. Create value through scarcity.",
    actionItems: [
      "Don't always be available - let some calls go to voicemail",
      "Take strategic breaks from social media to create mystery",
      "Cancel some social events to make your presence more valued",
    ],
  },
  {
    lawNumber: 17,
    title:
      "Keep Others in Suspended Terror: Cultivate an Air of Unpredictability",
    summary:
      "Predictable behavior gives others control over you. Keep them guessing to maintain power.",
    actionItems: [
      "Change your routine regularly so others can't predict your schedule",
      "Sometimes be generous, sometimes be tough - vary your approach",
      "Arrive early to some meetings, fashionably late to others",
    ],
  },
  {
    lawNumber: 18,
    title:
      "Do Not Build Fortresses to Protect Yourself: Isolation is Dangerous",
    summary:
      "Isolation cuts you off from information and makes you vulnerable. Stay connected to maintain power.",
    actionItems: [
      "Attend industry events even when you don't want to",
      "Keep relationships warm with former colleagues",
      "Never turn down invitations completely - counter-offer",
    ],
  },
  {
    lawNumber: 19,
    title: "Know Who You're Dealing With: Do Not Offend the Wrong Person",
    summary:
      "Understanding your opponent is crucial. Some people are dangerous to cross.",
    actionItems: [
      "Research people on LinkedIn before important meetings",
      "Ask mutual connections about someone's temperament before engaging",
      "Notice who holds grudges vs. who forgives quickly",
    ],
  },
  {
    lawNumber: 20,
    title: "Do Not Commit to Anyone",
    summary:
      "Independence is power. The moment you commit, you lose options and control.",
    actionItems: [
      "Always say 'let me think about it' before making decisions",
      "Keep multiple job offers open during negotiations",
      "Avoid exclusive partnerships until you absolutely must",
    ],
  },
  {
    lawNumber: 21,
    title: "Play a Sucker to Catch a Sucker: Seem Dumber Than Your Mark",
    summary:
      "Make your victims feel smarter than you. Their ego will blind them to your true intentions.",
    actionItems: [
      "Ask obvious questions to make others feel superior",
      "Let people explain things you already understand",
      "Act impressed by common knowledge they share",
    ],
  },
  {
    lawNumber: 22,
    title: "Use the Surrender Tactic: Transform Weakness into Power",
    summary:
      "Sometimes surrender is the best strategy. Use it to lull your enemies into complacency.",
    actionItems: [
      "Say 'you're absolutely right' to defuse tense situations",
      "Publicly accept blame to gain sympathy and support",
      "Retreat temporarily to regroup and plan your comeback",
    ],
  },
  {
    lawNumber: 23,
    title: "Concentrate Your Forces",
    summary:
      "Focus your efforts and resources. Scattered energy achieves nothing.",
    actionItems: [
      "Work on one major project at a time instead of multitasking",
      "Invest heavily in your strongest skill rather than fixing weaknesses",
      "Choose one networking event per month and dominate it",
    ],
  },
  {
    lawNumber: 24,
    title: "Play the Perfect Courtier",
    summary:
      "Master the art of indirection. Make others feel important while advancing your own agenda.",
    actionItems: [
      "Always ask 'What do you think?' before sharing your opinion",
      "Credit your boss's ideas in your presentations",
      "Make your requests sound like you're helping them succeed",
    ],
  },
  {
    lawNumber: 25,
    title: "Re-Create Yourself",
    summary:
      "Don't accept the role society gives you. Create your own identity and control how others perceive you.",
    actionItems: [
      "Develop a signature style that makes you memorable",
      "Tell stories that reinforce the image you want to project",
      "Reinvent your background narrative to support your goals",
    ],
  },
  {
    lawNumber: 26,
    title: "Keep Your Hands Clean",
    summary:
      "Mistakes and unpopular decisions should be blamed on others. Use scapegoats to maintain your reputation.",
    actionItems: [
      "Always have someone else deliver bad news",
      "When things go wrong, immediately identify what went wrong, not who",
      "Take credit for successes, let others own the failures",
    ],
  },
  {
    lawNumber: 27,
    title: "Play on People's Need to Believe to Create a Cultlike Following",
    summary:
      "People want to believe in something. Give them a cause and they'll follow you devotedly.",
    actionItems: [
      "Create a mission statement that makes people feel part of something bigger",
      "Use 'we' language to build tribal identity",
      "Give followers symbols or phrases that unite them",
    ],
  },
  {
    lawNumber: 28,
    title: "Enter Action with Boldness",
    summary:
      "Timidity is dangerous. Bold action, even if it fails, is better than hesitation.",
    actionItems: [
      "Make decisions quickly and stick to them publicly",
      "When entering rooms, walk directly to where you want to be",
      "Ask for more than you expect to get",
    ],
  },
  {
    lawNumber: 29,
    title: "Plan All the Way to the End",
    summary:
      "Think through consequences and plan for every contingency. The end is everything.",
    actionItems: [
      "Write down what success looks like before starting any project",
      "Create backup plans for your backup plans",
      "Always know your exit strategy before entering situations",
    ],
  },
  {
    lawNumber: 30,
    title: "Make Your Accomplishments Seem Effortless",
    summary:
      "Never show the effort behind your success. Make it look natural and easy.",
    actionItems: [
      "Never complain about how hard you're working",
      "Practice presentations until they seem spontaneous",
      "Hide the preparation and highlight the results",
    ],
  },
  {
    lawNumber: 31,
    title: "Control the Options: Get Others to Play with the Cards You Deal",
    summary:
      "Give people choices, but make sure all options benefit you. Control the game.",
    actionItems: [
      "Present multiple proposals where all outcomes serve your interests",
      "Set the agenda for meetings so discussions follow your priorities",
      "Offer choices like 'Would Tuesday or Wednesday work better for you?'",
    ],
  },
  {
    lawNumber: 32,
    title: "Play to People's Fantasies",
    summary:
      "People want to escape harsh realities. Offer them romance and fantasy, and they'll follow you.",
    actionItems: [
      "Sell the vision of who they could become, not just what you offer",
      "Use aspirational language that makes people dream bigger",
      "Paint pictures of their ideal future when making proposals",
    ],
  },
  {
    lawNumber: 33,
    title: "Discover Each Man's Thumbscrew",
    summary: "Everyone has a weakness. Find it and you have power over them.",
    actionItems: [
      "Notice what makes people emotional during conversations",
      "Pay attention to what people brag about - it reveals insecurities",
      "Ask 'What keeps you up at night?' and listen carefully",
    ],
  },
  {
    lawNumber: 34,
    title:
      "Be Royal in Your Own Fashion: Act Like a King to Be Treated Like One",
    summary:
      "How you present yourself determines how others treat you. Carry yourself with dignity and confidence.",
    actionItems: [
      "Never slouch - always maintain excellent posture",
      "Dress slightly better than everyone else in the room",
      "Speak slowly and clearly as if your words carry weight",
    ],
  },
  {
    lawNumber: 35,
    title: "Master the Art of Timing",
    summary: "Timing is everything. Learn when to act and when to wait.",
    actionItems: [
      "Notice when people are stressed - avoid making requests then",
      "Make important asks when people are in good moods",
      "Wait for competitors to make mistakes before making your move",
    ],
  },
  {
    lawNumber: 36,
    title: "Disdain Things You Cannot Have: Ignoring Them Is the Best Revenge",
    summary:
      "Showing desire for what you cannot have makes you look weak. Ignore it instead.",
    actionItems: [
      "Act unimpressed when you don't get what you wanted",
      "Never publicly pine for opportunities that went to others",
      "Redirect conversations away from topics that highlight your losses",
    ],
  },
  {
    lawNumber: 37,
    title: "Create Compelling Spectacles",
    summary:
      "People are drawn to spectacle. Use imagery and symbols to create powerful impressions.",
    actionItems: [
      "Make your presentations visually stunning, not just informative",
      "Use props and demonstrations instead of just talking",
      "Create photo-worthy moments at your events",
    ],
  },
  {
    lawNumber: 38,
    title: "Think as You Like but Behave Like Others",
    summary:
      "Unconventional thinking is fine, but appearing too different is dangerous. Blend in while thinking independently.",
    actionItems: [
      "Dress according to the company culture, even if you prefer different styles",
      "Use industry jargon even if you find it silly",
      "Keep radical opinions to yourself until you have power",
    ],
  },
  {
    lawNumber: 39,
    title: "Stir Up Waters to Catch Fish",
    summary:
      "Anger and emotion make people lose control. Stay calm while making others lose their composure.",
    actionItems: [
      "Ask probing questions that make people defensive",
      "Stay completely calm when others get emotional",
      "Use phrases like 'Interesting perspective' to subtly provoke",
    ],
  },
  {
    lawNumber: 40,
    title: "Despise the Free Lunch",
    summary:
      "What's free is often dangerous. Pay your own way to avoid obligations and maintain independence.",
    actionItems: [
      "Always insist on paying your share of dinner bills",
      "Decline free gifts that come with unspoken expectations",
      "Question any offer that seems too good to be true",
    ],
  },
  {
    lawNumber: 41,
    title: "Avoid Stepping into a Great Man's Shoes",
    summary:
      "Following a great predecessor is dangerous. Create your own path and identity.",
    actionItems: [
      "Never say 'That's how [predecessor] used to do it'",
      "Immediately change at least one visible process or tradition",
      "Establish your own metrics for success instead of using theirs",
    ],
  },
  {
    lawNumber: 42,
    title: "Strike the Shepherd and the Sheep Will Scatter",
    summary:
      "Trouble often stems from a single source. Identify and neutralize the source of problems.",
    actionItems: [
      "Identify who's leading the resistance to your ideas",
      "Address the ringleader directly rather than fighting the group",
      "Remove or convert the key influencer to solve multiple problems",
    ],
  },
  {
    lawNumber: 43,
    title: "Work on the Hearts and Minds of Others",
    summary:
      "Coercion creates resistance. Win hearts and minds for lasting power.",
    actionItems: [
      "Share personal stories that make people connect with you emotionally",
      "Ask 'How do you feel about this?' not just 'What do you think?'",
      "Make people feel heard before trying to change their minds",
    ],
  },
  {
    lawNumber: 44,
    title: "Disarm and Infuriate with the Mirror Effect",
    summary:
      "Mirror your enemies' actions and they'll be confused and frustrated. Use their own tactics against them.",
    actionItems: [
      "Copy your competitor's successful strategies with improvements",
      "Use their own words against them in debates",
      "Adopt their communication style to confuse their supporters",
    ],
  },
  {
    lawNumber: 45,
    title: "Preach the Need for Change, but Never Reform Too Much at Once",
    summary:
      "People need change but fear it. Introduce reforms gradually to avoid resistance.",
    actionItems: [
      "Implement changes in small phases over time",
      "Keep some familiar elements while introducing new ones",
      "Frame changes as 'evolution' not 'revolution'",
    ],
  },
  {
    lawNumber: 46,
    title: "Never Appear Too Perfect",
    summary:
      "Perfection creates envy and suspicion. Show minor flaws to appear more human and relatable.",
    actionItems: [
      "Admit to harmless weaknesses like being bad at cooking",
      "Share embarrassing but endearing stories about yourself",
      "Make small, visible mistakes that don't affect your core competency",
    ],
  },
  {
    lawNumber: 47,
    title:
      "Do Not Go Past the Mark You Aimed For; In Victory, Learn When to Stop",
    summary:
      "Know when you've won and stop there. Going too far creates new enemies.",
    actionItems: [
      "Set clear victory conditions before starting conflicts",
      "Stop negotiating once you've gotten what you wanted",
      "Don't humiliate defeated opponents - leave them dignity",
    ],
  },
  {
    lawNumber: 48,
    title: "Assume Formlessness",
    summary:
      "Be flexible and adaptable. Rigid structures are easily broken, but formless things are invincible.",
    actionItems: [
      "Change your approach when current methods aren't working",
      "Avoid creating predictable routines that others can exploit",
      "Stay flexible enough to pivot when circumstances change",
    ],
  },
];
