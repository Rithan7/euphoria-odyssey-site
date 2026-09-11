/* ==========================================================================
   EUPHORIA '26 — event data.
   Single source of truth. events.html and event.html both render from this.
   To update a rule, prize, or Register link, edit it here — nothing else
   needs to change.

   Updated per the confirmed rule book (25.09.2026): 12 off-stage events,
   4 on-stage events. Removed: Business Times, Art Reborn, Voix Verse.
   Renamed: Sketch Scape -> Reborn Stroke (same form link, rules updated).
   Added: NextGen Assembly, Sell the Unsellable, Slice and Style.

   Image update: every event now has its own dedicated banner image at
   assets/events/<slug>.jpg
   ========================================================================== */

const EUPHORIA_EVENTS = [
  // ---------------------- OFF-STAGE (12) ----------------------
  {
    slug: "hammer-of-11",
    category: "off-stage",
    name: "Hammer of 11",
    subtitle: "IPL Auction",
    tagline: "A thrilling IPL auction simulation where strategy and smart bidding lead to victory.",
    team: "4 members per team",
    rounds: "2 rounds",
    image: "assets/events/hammer-of-11.jpg",
    rules: [
      "Participation: 4 members per team.",
      "During Round 1 (quiz), usage of mobile phones is strictly prohibited and will lead to immediate disqualification of the team.",
      "The 2nd round will proceed to a realistic mock auction.",
      "Only one participant (Team Captain) will be allowed to bid in the 2nd round, while others help in analysing team formation.",
      "Changes will not be entertained."
    ],
    formUrl: "https://forms.gle/nD3VZrsEa2UAeAS87"
  },
  {
    slug: "nextgen-assembly",
    category: "off-stage",
    name: "NextGen Assembly",
    subtitle: "Mock United Nations",
    tagline: "A dynamic simulation of the United Nations Assembly where participants represent different nations and engage in diplomatic discussions on global issues.",
    team: "Individual participation",
    rounds: null,
    image: "assets/events/nextgen-assembly.jpg",
    rules: [
      "Participation: Individual.",
      "Delegates are expected to be dressed in formals.",
      "Delegates should be respectful and maintain decorum towards the dias, council members and protocol officers.",
      "Statements made representing a country should align with that country's foreign policy.",
      "Delegates should bring a printed copy of the Rules of Procedure (ROP) provided beforehand."
    ],
    formUrl: "https://forms.gle/DCXP43fS2tT7fUD26"
  },
  {
    slug: "reborn-stroke",
    category: "off-stage",
    name: "Reborn Stroke",
    subtitle: "Art",
    tagline: "An artistic challenge that transforms creativity and imagination into captivating handmade creations.",
    team: "Individual participation",
    rounds: "2 rounds",
    image: "assets/events/reborn-stroke.jpg",
    rules: [
      "Participation: Individual.",
      "The event consists of two rounds. The first round is based on sketching; the second round remains unannounced.",
      "Stationery allowed: pencil, colour pencil, crayons, water colour and acrylic paints.",
      "Participants must bring all required materials and stationery, and complete their work within the allotted time. A3 and A4 sheets will be provided.",
      "All creations must be original and prepared entirely during the competition; ready-made or semi-finished works are not permitted.",
      "Participants must strictly follow the instructions given by the event coordinators and judges.",
      "Mobile phones, smartwatches and other electronic devices are strictly prohibited during the competition.",
      "Any form of misconduct may lead to disqualification."
    ],
    formUrl: "https://forms.gle/VSBTLNMSiU5tmCgw9"
  },
  {
    slug: "odyssey-of-intellect",
    category: "off-stage",
    name: "Odyssey of Intellect",
    subtitle: "Quiz",
    tagline: "A battle of knowledge, logic and quick thinking across diverse topics.",
    team: "Individual or 2 members per team",
    rounds: "Prelims + finals",
    image: "assets/events/odyssey_of_intellect.jpg.jpeg",
    rules: [
      "Participation: Individual or 2 members per team.",
      "The preliminary round will comprise 20 questions.",
      "The top eight teams from the prelims will advance to the finals.",
      "It is a general quiz.",
      "Questions marked with a star will serve as tiebreakers.",
      "The Quiz Master's decision is final.",
      "Participants are required to report to the venue on time.",
      "Once the event begins, the use of mobile phones is strictly prohibited."
    ],
    formUrl: "https://forms.gle/rWgKtykhaY8eHnu49"
  },
  {
    slug: "cinesprint",
    category: "off-stage",
    name: "Cinesprint",
    subtitle: "Short film making",
    tagline: "A creative filmmaking challenge where participants bring stories to life on screen.",
    team: "4 members per team",
    rounds: "1-hour window",
    image: "assets/events/cinesprint.jpg",
    rules: [
      "Participation: 4 members per team.",
      "Each short film must be of only one minute duration.",
      "The filmmaking process includes story development, scripting, shooting, editing, finalising and exporting.",
      "The entire process must be completed and final submission made within a specified time limit of one hour.",
      "The genre will be drawn on the spot and must be followed.",
      "Participants can use their own cameras, mobile phones, laptops, editing software and other filmmaking equipment.",
      "Teams are responsible for arranging and managing their own resources.",
      "The film must be original and created specifically for the competition."
    ],
    formUrl: "https://forms.gle/XMTd9EbB4UDk3Vyb7"
  },
  {
    slug: "sell-the-unsellable",
    category: "off-stage",
    name: "Sell The Unsellable",
    subtitle: "Marketing pitch",
    tagline: "A fun marketing challenge where creativity turns the most unusual ideas into irresistible products.",
    team: "2–4 members per team",
    rounds: null,
    image: "assets/events/sell-the-unsellable.jpg",
    rules: [
      "Participation: 2–4 members per team.",
      "Participants will be given a random or unusual product that is difficult to sell.",
      "Each participant/team must create a creative sales pitch to convince the judges/customers to buy it.",
      "Participants must use original ideas; plagiarism or copying an existing idea is not allowed.",
      "Props and simple presentation materials are allowed, subject to the guidelines.",
      "Evaluation will be based on Creativity & Innovation."
    ],
    formUrl: "https://forms.gle/1kydoxW5ornRmF8SA"
  },
  {
    slug: "prompt-perfect",
    category: "off-stage",
    name: "Prompt Perfect",
    subtitle: "AI-based",
    tagline: "A test of creativity and innovation through the power of AI and effective prompting.",
    team: "2 members per team",
    rounds: "3 rounds — Colour Number Challenge, AI or Real?, One-Shot AI Video Challenge",
    image: "assets/events/prompt-perfect.jpg",
    rules: [
      "Participation: 2 members per team.",
      "The event consists of 3 rounds: Colour Number Challenge, AI or Real?, One-Shot AI Video Challenge.",
      "Participants must ensure fair play throughout the event.",
      "Round-specific scoring will be used to determine the performance of each team.",
      "Any questions marked as tie-breakers will be used to resolve ties where applicable.",
      "Participants must use only the approved tools and resources specified by the organizers."
    ],
    formUrl: "https://forms.gle/hwPLrNdPZV4jehdt7"
  },
  {
    slug: "quest-unlocked",
    category: "off-stage",
    name: "Quest Unlocked",
    subtitle: "Murder Mystery",
    tagline: "An immersive mystery challenge where participants uncover clues, solve puzzles and crack the case.",
    team: "3 members per team",
    rounds: "3 rounds",
    image: "assets/events/quest-unlocked.jpg",
    rules: [
      "Participation: 3 members per team.",
      "Usage of mobile phones is strictly prohibited.",
      "No discussion is allowed with other teams.",
      "Any kind of misconduct will lead to immediate dismissal of the team.",
      "The game consists of 3 rounds; the first 2 rounds are qualifying rounds, and the 3rd round is the final murder-solving round."
    ],
    formUrl: "https://forms.gle/nD9SndcGW5tamzxu5"
  },
  {
    slug: "slice-and-style",
    category: "off-stage",
    name: "Slice and Style",
    subtitle: "Culinary",
    tagline: "A creative culinary challenge combining precision, presentation and artistic flair.",
    team: "2 members per team",
    rounds: null,
    image: "assets/events/slice_and_style.jpg.jpeg",
    rules: [
      "Participation: 2 members per team.",
      "Culinary equipment, fruits and vegetables must be brought by the participants.",
      "Handle all materials carefully and responsibly.",
      "Mobile phones, internet, AI, and external assistance are prohibited.",
      "Maintain cleanliness and safety at all times.",
      "Avoid excessive wastage or misuse of materials.",
      "Complete creations within the allotted time.",
      "Copying or reproducing others' creations is prohibited."
    ],
    formUrl: "https://forms.gle/PhmEghLewwNRSpky5"
  },
  {
    slug: "padam-puthir",
    category: "off-stage",
    name: "Padam Puthir",
    subtitle: "Cinefesto",
    tagline: "A celebration of cinema that challenges participants to put their movie knowledge and instincts to the test.",
    team: "3 members per team",
    rounds: "3 rounds",
    image: "assets/events/padam-puthir.jpg",
    rules: [
      "Participation: 3 members per team.",
      "Usage of mobile phones during the event is strictly prohibited and will lead to disqualification of the team.",
      "The event consists of 3 rounds.",
      "The first round features a quiz on Tamil cinema.",
      "The second round includes connections and challenges based on Tamil films.",
      "The third round will be kept unannounced."
    ],
    formUrl: "https://forms.gle/nvxBh1L4FSQUrDQA9"
  },
  {
    slug: "squid-game",
    category: "off-stage",
    name: "Squid Game",
    subtitle: null,
    tagline: "Three rounds. One goal each. Clear it, or you're out.",
    team: "2–3 members per team",
    rounds: "3 rounds — Gold Quest, Balance Scale, Red Light Green Light",
    image: "assets/events/squid-game.jpg",
    rules: [
      "Participation: 2–3 members per team.",
      "Each round has a unique goal, and players must understand the rules and conditions to successfully clear it.",
      "The game consists of three rounds: Gold Quest, Balance Scale, Red Light Green Light.",
      "Every action or decision may lead to rewards, penalties, loss of points, or elimination, depending on the round.",
      "Successfully complete each round and fulfil its conditions to remain in the game and progress further.",
      "Each challenge must be completed within the given time limit, with no extra time provided.",
      "Mobile phones, smartwatches, and other electronic devices are not permitted during the challenges.",
      "Any form of misconduct may lead to disqualification.",
      "Participants must maintain discipline, sportsmanship, and respectful behaviour throughout the event."
    ],
    formUrl: "https://forms.gle/GMnHCQiurP2FZNSy8"
  },
  {
    slug: "senthamizh-sangamam",
    category: "off-stage",
    name: "Senthamizh Sangamam",
    subtitle: null,
    tagline: "A celebration of Tamil language, culture, heritage and creativity.",
    team: "2 members per team",
    rounds: null,
    image: "assets/events/senthamizh-sangamam.jpg",
    rules: [
      "Participation: 2 members per team.",
      "Participants must be able to read and write in Tamil.",
      "Participants should possess basic knowledge of Tamil language and literature.",
      "The entire event will be conducted strictly in Tamil.",
      "No use of mobile phones, books, or any reference materials during the event."
    ],
    formUrl: "https://forms.gle/S9wtCNvXFUfSaNM19"
  },

  // ---------------------- ON-STAGE (4) ----------------------
  {
    slug: "rhythm-rebel",
    category: "on-stage",
    name: "Rhythm Rebel",
    subtitle: "Solo dance",
    tagline: "One performer, one spotlight, full command of the stage.",
    team: "Individual participation",
    rounds: null,
    image: "assets/events/rhythm-rebel.jpg",
    rules: [
      "Participation: Individual.",
      "Duration: 3-4 minutes.",
      "Only pen drive is allowed.",
      "Only MP3 format is accepted.",
      "Audio must be submitted to the Tech Crew prior to the performance.",
      "Avoid obscene songs and costumes.",
      "The decision of the judges will be final.",
      "Dignity and decorum must be maintained."
    ],
    formUrl: "https://forms.gle/ox9y4ndzEfJpwXC48"
  },
  {
    slug: "beat-brigade",
    category: "on-stage",
    name: "Beat Brigade",
    subtitle: "Group dance",
    tagline: "Bring the whole crew — synchronised energy, one performance.",
    team: "2–8 members per team",
    rounds: null,
    image: "assets/events/beat-brigade.jpg",
    rules: [
      "Participation: 2-8 members per team.",
      "Only pen drive is allowed.",
      "Only MP3 format is accepted.",
      "Audio must be submitted to the Tech Crew prior to the performance.",
      "Avoid obscene songs and costumes.",
      "The decision of the judges will be final.",
      "Duration: 5 minutes.",
      "Dignity and decorum must be maintained."
    ],
    formUrl: "https://forms.gle/UNwJ3E8nZFpZEgkXA"
  },
  {
    slug: "stage-symphony",
    category: "on-stage",
    name: "Stage Symphony",
    subtitle: "Adapt tunes",
    tagline: "The music plays on the spot — you adapt, live, in front of everyone.",
    team: "Individual participation",
    rounds: null,
    image: "assets/events/stage-symphony.jpg",
    rules: [
      "Participation: Individual.",
      "Participants have to dance adapting to the songs played on the spot.",
      "The decision of the judges will be final.",
      "Duration: 2 minutes.",
      "Dignity and decorum must be maintained."
    ],
    formUrl: "https://forms.gle/u4goonEpkxT9MthQ7"
  },
  {
    slug: "talent-fiesta",
    category: "on-stage",
    name: "Talent Fiesta",
    subtitle: "Band",
    tagline: "A full band performance — your sound, your stage.",
    team: "Individual or team of 2–8 members",
    rounds: null,
    image: "assets/events/talent-fiesta.jpg",
    rules: [
      "Participation: Individual, or a team of 2-8 members.",
      "Band performance is to be performed.",
      "Dancing, singing can be part of your performance but it should not be your main performance.",
      "The use of hazardous materials is prohibited (like UV rays, fire).",
      "Any additional requirements should be informed in advance.",
      "Only pen drive is allowed.",
      "Only MP3 format is accepted.",
      "Audio must be submitted to the Tech Crew prior to the performance.",
      "The decision of the judges will be final.",
      "Duration: 5 minutes (including arrangements).",
      "Dignity and decorum must be maintained."
    ],
    formUrl: "https://forms.gle/G4foE75XAwaoq4vf8"
  }
];

/* Small helper other pages use to look up one event by slug */
function getEuphoriaEvent(slug) {
  return EUPHORIA_EVENTS.find(e => e.slug === slug) || null;
}