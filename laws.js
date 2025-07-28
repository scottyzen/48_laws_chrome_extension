const laws = [
  {
    lawNumber: 1,
    title: "Never Outshine the Master",
    summary:
      "Always make those above you feel superior and comfortable with your presence. When you outshine your superiors, you create fear and insecurity that can lead to your downfall. Instead, make them appear more brilliant than they are, and you will gradually attain power through their favor and trust.",
    actionItems: [
      "Always deflect praise back to your boss in meetings. Say 'This was only possible because of [boss's] guidance.'",
      "Notice when you're about to overshadow someone in authority. Pause and redirect credit immediately.",
      "Ask your superior for advice even when you know the answer. Frame it as 'I'd value your perspective on...'",
    ],
    watchFor: [
      "Subordinates who constantly highlight their achievements around you",
      "People who make you feel incompetent or threatened by their skills",
      "Team members who take credit for successes without acknowledging leadership",
    ],
  },
  {
    lawNumber: 2,
    title: "Never Put Too Much Trust in Friends, Learn How to Use Enemies",
    summary:
      "Friends are more likely to betray you because emotions like envy and resentment can cloud their judgment. They may feel entitled to your success or become jealous of your achievements. Former enemies, however, have already shown their worst side and must work harder to prove their loyalty, making them potentially more reliable allies.",
    actionItems: [
      "Keep work conversations with friends strictly professional",
      "Notice when friends become envious of your success",
      "Consider hiring someone who previously opposed you",
    ],
    watchFor: [
      "Friends who become distant when you succeed",
      "Close allies who gossip about your decisions to others",
      "People who use your friendship to gain insider information",
    ],
  },
  {
    lawNumber: 3,
    title: "Conceal Your Intentions",
    summary:
      "Keep your real plans and motivations hidden from others. When people don't know what you're truly after, they cannot prepare defenses or create obstacles to stop you. Reveal your intentions only when it's too late for others to interfere, giving you a significant strategic advantage.",
    actionItems: [
      "Give vague answers when asked about your future goals. Use phrases like 'exploring several interesting options.'",
      "Never announce your plans until they're already in motion",
      "Create small false trails to mislead competitors. Share partial truths that lead nowhere.",
    ],
    watchFor: [
      "People who ask too many detailed questions about your projects",
      "Colleagues who share false information to see if it gets back to them",
      "Those who pump you for information while revealing nothing about themselves",
    ],
  },
  {
    lawNumber: 4,
    title: "Always Say Less Than Necessary",
    summary:
      "The more you say, the more likely you are to say something foolish or reveal information that can be used against you. Powerful people intimidate and impress others by saying less, creating an aura of mystery and importance. Your words become more valuable when they are scarce.",
    actionItems: [
      "Count to three before responding in conversations. Breathe, then speak slower than feels natural.",
      "Never fill awkward silences - let others do it. Count to 5, then wait even longer.",
      "Answer questions with questions when possible. Try 'What makes you ask that?' or 'How do you see it?'",
    ],
    watchFor: [
      "People who try to make you talk by creating uncomfortable silences",
      "Those who ask rapid-fire questions to make you reveal too much",
      "Individuals who seem to hang on your every word - they might be gathering information",
    ],
  },
  {
    lawNumber: 5,
    title: "So Much Depends on Reputation: Guard It with Your Life",
    summary:
      "Your reputation is the cornerstone of your power and influence. It precedes you into every room and colors how people interpret your actions. A solid reputation can open doors, while a damaged one can close them permanently. Once lost, reputation is extremely difficult to rebuild, so protecting it should be your highest priority.",
    actionItems: [
      "Always respond publicly to attacks within 24 hours. Start with 'I appreciate the opportunity to clarify...'",
      "Google yourself monthly to monitor your online reputation",
      "Build relationships with people who can vouch for your character",
    ],
    watchFor: [
      "People spreading rumors or negative stories about you",
      "Competitors trying to associate your name with failures or scandals",
      "Social media attacks designed to damage your professional image",
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
    watchFor: [
      "Colleagues who try to steal your spotlight or unique ideas",
      "People who deliberately ignore your contributions in meetings",
      "Others copying your distinctive style or approach",
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
    watchFor: [
      "Bosses who take credit for your ideas without acknowledgment",
      "Team members who present your work as their own",
      "People who delegate everything to you but present the results as theirs",
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
    watchFor: [
      "People who dangle opportunities to make you chase them",
      "Those who make you travel to them for every meeting",
      "Individuals who create artificial scarcity to increase their perceived value",
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
    watchFor: [
      "People who try to drag you into pointless arguments",
      "Those who challenge your methods instead of focusing on results",
      "Individuals who use debates to waste your time and energy",
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
    watchFor: [
      "Chronic complainers who drain your energy with their problems",
      "People who only contact you when they need something or feel bad",
      "Those who try to bring you down to their level of misery",
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
    watchFor: [
      "People who try to learn all your skills to replace you",
      "Colleagues who create dependencies to control you",
      "Those who hoard information to make themselves indispensable",
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
    watchFor: [
      "People who are suddenly generous before asking for big favors",
      "Those who admit to minor flaws to seem more trustworthy",
      "Individuals who share small secrets to encourage you to share bigger ones",
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
    watchFor: [
      "People who research your goals before making requests",
      "Those who frame their needs in terms of your benefits",
      "Individuals who suddenly show interest in your success before asking for help",
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
    watchFor: [
      "New acquaintances who ask very personal questions quickly",
      "People who remember every detail you share but reveal little about themselves",
      "Those who pump you for information about your work or competitors",
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
    watchFor: [
      "Competitors who are trying to eliminate you completely from the market",
      "People who cut off all your support systems when they turn against you",
      "Those who aim to destroy your reputation, not just compete with you",
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
    watchFor: [
      "People who are suddenly less available to create artificial scarcity",
      "Those who cancel meetings to make you want their attention more",
      "Individuals who disappear strategically when you need them most",
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
    watchFor: [
      "People whose behavior is erratic and impossible to predict",
      "Those who alternate between extreme kindness and coldness",
      "Individuals who change their position on issues without warning",
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
    watchFor: [
      "People trying to isolate you from your network",
      "Those who discourage you from attending industry events",
      "Individuals who want to be your only source of information",
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
    watchFor: [
      "People who hold long-term grudges and plan elaborate revenge",
      "Those with connections to powerful people who could retaliate",
      "Individuals who seem harmless but have hidden influence",
    ],
  },
  {
    lawNumber: 20,
    title: "Do Not Commit to Anyone",
    summary:
      "Independence is power. The moment you commit, you lose options and control.",
    actionItems: [
      "Always say 'let me think about it' before making decisions. Buy yourself 24 hours minimum.",
      "Keep multiple job offers open during negotiations",
      "Avoid exclusive partnerships until you absolutely must",
    ],
    watchFor: [
      "People who pressure you to make immediate commitments",
      "Those who try to lock you into exclusive agreements",
      "Individuals who make time-sensitive offers to force quick decisions",
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
    watchFor: [
      "People who seem less intelligent but ask very strategic questions",
      "Those who make you feel smart while extracting information",
      "Individuals who appear naive but somehow always get what they want",
    ],
  },
  {
    lawNumber: 22,
    title: "Use the Surrender Tactic: Transform Weakness into Power",
    summary:
      "Sometimes surrender is the best strategy. Use it to lull your enemies into complacency.",
    actionItems: [
      "Say 'you're absolutely right' to defuse tense situations. Then add 'help me understand your perspective.'",
      "Publicly accept blame to gain sympathy and support",
      "Retreat temporarily to regroup and plan your comeback",
    ],
    watchFor: [
      "People who surrender too easily - they might be planning something",
      "Those who accept blame quickly to gain sympathy",
      "Individuals who retreat strategically before mounting a comeback",
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
    watchFor: [
      "Competitors who focus all their resources on defeating you specifically",
      "People who concentrate their attacks on your single weakness",
      "Those who put all their energy into one decisive move",
    ],
  },
  {
    lawNumber: 24,
    title: "Play the Perfect Courtier",
    summary:
      "Master the art of indirection. Make others feel important while advancing your own agenda.",
    actionItems: [
      "Always ask 'What do you think?' before sharing your opinion. Wait for their full response.",
      "Credit your boss's ideas in your presentations",
      "Make your requests sound like you're helping them succeed",
    ],
    watchFor: [
      "People who constantly flatter you while advancing their own interests",
      "Those who make you feel important while manipulating your decisions",
      "Individuals who frame their requests as favors to you",
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
    watchFor: [
      "People whose personal story seems too polished or convenient",
      "Those who dramatically change their image or persona",
      "Individuals whose background doesn't quite add up under scrutiny",
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
    watchFor: [
      "Bosses who always have others deliver bad news while taking credit for good news",
      "People who distance themselves from projects when they start failing",
      "Those who find scapegoats whenever something goes wrong",
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
    watchFor: [
      "Leaders who create artificial causes to gain devoted followers",
      "People who use tribal language to make you feel special or chosen",
      "Those who offer simple solutions to complex problems",
    ],
  },
  {
    lawNumber: 28,
    title: "Enter Action with Boldness",
    summary:
      "Timidity is dangerous. Bold action, even if it fails, is better than hesitation.",
    actionItems: [
      "When entering rooms, walk directly to where you want to be. No hesitation or looking around.",
      "Make decisions quickly and stick to them publicly",
      "Ask for more than you expect to get",
    ],
    watchFor: [
      "People who use boldness to mask lack of preparation",
      "Those who make unreasonable demands to seem powerful",
      "Individuals who confuse aggression with confidence",
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
    watchFor: [
      "People who seem to have planned for every possible outcome",
      "Those who always have a response ready for any objection",
      "Individuals who appear to be several steps ahead of everyone else",
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
    watchFor: [
      "People whose success seems too easy or natural",
      "Those who never seem stressed despite massive workloads",
      "Individuals who downplay their achievements to seem modest",
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
    watchFor: [
      "People who present you with limited options that all benefit them",
      "Those who control the agenda to steer conversations their way",
      "Individuals who make you feel like you're choosing when options are predetermined",
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
    watchFor: [
      "People who sell you unrealistic dreams to gain your support",
      "Those who appeal to your fantasies rather than practical benefits",
      "Individuals who promise transformation that seems too good to be true",
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
    watchFor: [
      "People who probe for your insecurities and emotional triggers",
      "Those who pay unusual attention to your weaknesses",
      "Individuals who remember and exploit your vulnerabilities",
    ],
  },
  {
    lawNumber: 34,
    title:
      "Be Royal in Your Own Fashion: Act Like a King to Be Treated Like One",
    summary:
      "How you present yourself determines how others treat you. Carry yourself with dignity and confidence.",
    actionItems: [
      "Never slouch - always maintain excellent posture. Imagine a string pulling you up from the crown of your head.",
      "Dress slightly better than everyone else in the room",
      "Speak slowly and clearly as if your words carry weight",
    ],
    watchFor: [
      "People who demand respect through intimidation rather than earning it",
      "Those who use artificial displays of status to impress others",
      "Individuals who act superior without backing it up with substance",
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
    watchFor: [
      "People who always approach you at your most vulnerable moments",
      "Those who time their requests when you're most likely to say yes",
      "Individuals who strike when you're distracted or overwhelmed",
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
    watchFor: [
      "People who ignore your legitimate concerns to diminish their importance",
      "Those who dismiss your achievements by refusing to acknowledge them",
      "Individuals who use calculated indifference to make you feel irrelevant",
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
    watchFor: [
      "People who use theatrics to distract from lack of substance",
      "Those who create false impressions through elaborate presentations",
      "Individuals who manipulate emotions through calculated spectacle",
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
    watchFor: [
      "People who conform publicly but undermine you privately",
      "Those who hide their true intentions behind conventional behavior",
      "Individuals who use conformity as camouflage for subversive actions",
    ],
  },
  {
    lawNumber: 39,
    title: "Stir Up Waters to Catch Fish",
    summary:
      "Anger and emotion make people lose control. Stay calm while making others lose their composure.",
    actionItems: [
      "Stay completely calm when others get emotional. Lower your voice and slow your breathing.",
      "Ask probing questions that make people defensive",
      "Use phrases like 'Interesting perspective' to subtly provoke",
    ],
    watchFor: [
      "People who deliberately provoke you to make you lose control",
      "Those who create chaos to gain advantage in the confusion",
      "Individuals who profit from emotional reactions and poor decisions",
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
    watchFor: [
      "People who offer free things to create obligation and guilt",
      "Those who use generosity as a tool for future manipulation",
      "Individuals who keep track of 'favors owed' for leverage",
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
    watchFor: [
      "People who constantly compare you unfavorably to your predecessor",
      "Those who resist change by invoking the previous leader's authority",
      "Individuals who undermine you by praising your predecessor's methods",
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
    watchFor: [
      "People who identify you as the key obstacle to their goals",
      "Those who target leaders rather than addressing issues with groups",
      "Individuals who try to isolate you from your supporters",
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
    watchFor: [
      "People who use emotional manipulation to bypass your rational thinking",
      "Those who share calculated personal stories to create false intimacy",
      "Individuals who appeal to your emotions when logic doesn't support them",
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
    watchFor: [
      "People who mirror your behavior to disarm and confuse you",
      "Those who adopt your methods and turn them against you",
      "Individuals who copy your style to undermine your originality",
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
    watchFor: [
      "People who push for dramatic changes to create chaos they can exploit",
      "Those who use 'urgent reform' to justify bypassing normal processes",
      "Individuals who benefit from disruption while others bear the costs",
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
    watchFor: [
      "People who display calculated flaws to appear more trustworthy",
      "Those who use false humility to disarm your defenses",
      "Individuals whose 'mistakes' seem strategically timed and beneficial",
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
    watchFor: [
      "People who push for total victory when compromise would suffice",
      "Those who humiliate defeated opponents to create future enemies",
      "Individuals who don't know when to stop and overreach their position",
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
    watchFor: [
      "People who are too adaptable and lack consistent principles",
      "Those who change positions frequently to avoid accountability",
      "Individuals who use 'flexibility' to justify unreliable behavior",
    ],
  },
];
