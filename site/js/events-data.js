/* ==========================================================================
   EUPHORIA '26 — event data.
   Single source of truth. events.html and event.html both render from this.
   To update a rule, prize, or Register link, edit it here — nothing else
   needs to change.
   ========================================================================== */

const EUPHORIA_EVENTS = [
  // ---------------------- OFF-STAGE ----------------------
  {
    slug: "hammer-of-11",
    category: "off-stage",
    name: "Hammer of 11",
    subtitle: "IPL Auction",
    tagline: "Build your dream team through smart bidding and sharp cricket sense.",
    team: "4 members per team, including one captain",
    rounds: "2 rounds",
    image: null,
    rules: [
      "Participants permitted: 4 members per team, including one designated Captain.",
      "The event will consist of 2 rounds.",
      "The use of mobile phones is strictly prohibited. Any team found using a mobile phone will face immediate disqualification.",
      "No changes or modifications will be entertained once the process has commenced.",
      "Follow the instructions given by the organizers.",
      "The decision of the Quizmaster and Judges shall be final and binding."
    ],
    formUrl: "https://forms.gle/nD3VZrsEa2UAeAS87"
  },
  {
    slug: "sketch-scape",
    category: "off-stage",
    name: "Sketch Scape",
    subtitle: "Art",
    tagline: "Bring an idea to life on paper, in your own hand, on the spot.",
    team: "Individual participation",
    rounds: null,
    image: null,
    rules: [
      "Stationeries allowed: pencil, colour pencil, crayons, water colour and acrylic paints.",
      "A3 and A4 sheets will be provided.",
      "Participants must bring their own paints and stationeries.",
      "Collage and mixed media are not allowed.",
      "All works must be original.",
      "Judges will decide the final winners.",
      "Usage of mobile phones and other gadgets is strictly prohibited."
    ],
    formUrl: "https://forms.gle/VSBTLNMSiU5tmCgw9"
  },
  {
    slug: "odyssey-of-intellect",
    category: "off-stage",
    name: "Odyssey of Intellect",
    subtitle: "Quiz",
    tagline: "A general quiz that rewards range, recall, and quick thinking.",
    team: "Teams of 2, solo participation also allowed",
    rounds: "Prelims + finals",
    image: null,
    rules: [
      "Teams may consist of two members; solo participants are also allowed.",
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
    tagline: "Four hours. A genre drawn on the spot. One finished short film.",
    team: "Team event",
    rounds: "4-hour window",
    image: null,
    rules: [
      "Each short film must be 2–5 minutes long.",
      "Participants will have 4 hours to complete the entire filmmaking process.",
      "The 4 hours include story development, scripting, shooting, editing, finalising and exporting.",
      "The genre will be drawn on the spot and must be followed.",
      "Participants can use their own cameras, mobile phones, laptops, editing software and other filmmaking equipment.",
      "Teams are responsible for arranging and managing their own resources.",
      "The film must be original and created specifically for the competition.",
      "All filming and editing must be completed within the 4-hour time limit.",
      "The final film must be submitted within the specified 4-hour window.",
      "Failure to follow the rules or submission requirements may result in disqualification.",
      "Judge's decision will be final and binding."
    ],
    formUrl: "https://forms.gle/XMTd9EbB4UDk3Vyb7"
  },
  {
    slug: "prompt-perfect",
    category: "off-stage",
    name: "Prompt Perfect",
    subtitle: "AI-based",
    tagline: "Three rounds testing how well you can think and work alongside AI.",
    team: "2 participants per team",
    rounds: "3 rounds — Colour Number Challenge, AI or Real?, One-Shot AI Video Challenge",
    image: null,
    rules: [
      "Each team must consist of 2 participants.",
      "No on-spot registration is allowed for this event.",
      "The event consists of 3 rounds: Colour Number Challenge, AI or Real?, One-Shot AI Video Challenge.",
      "Participants must report on time and maintain fair play throughout the event.",
      "Teams must follow the instructions and time limits specified for each round.",
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
    tagline: "Follow the clues, question the suspects, crack the case.",
    team: "3 participants per team",
    rounds: "Multiple rounds",
    image: null,
    rules: [
      "Each team must consist of 3 participants.",
      "All participants must report to the venue 15 minutes prior to the scheduled start time.",
      "Only registered team members are permitted to participate. Substitutions after registration will not be entertained without prior approval from the organisers.",
      "The event will consist of multiple rounds. The rules governing each round will be explained to participants before that round begins.",
      "All participants must strictly follow the instructions given by the event coordinators and volunteers.",
      "Participants are expected to maintain discipline and decorum throughout the event. Running, pushing, blocking passages, or causing any disturbance during movement-based rounds is strictly prohibited.",
      "Participants must not enter restricted areas or tamper with any event materials, clues, equipment, or decorations.",
      "Any clue, answer, or material discovered during the event must be handled strictly as instructed by the organisers.",
      "Clues must not be removed, damaged, concealed from other teams, or relocated from their designated positions."
    ],
    formUrl: "https://forms.gle/nD9SndcGW5tamzxu5"
  },
  {
    slug: "padam-puthir",
    category: "off-stage",
    name: "Padam Puthir",
    subtitle: "Picture puzzle",
    tagline: "Decode the images, connect the clues, crack the puzzle first.",
    team: "Up to 3 members per team",
    rounds: "Multiple rounds",
    image: null,
    rules: [
      "Each team shall consist of a maximum of 3 members.",
      "Participants must report to the venue 15 minutes before the scheduled time.",
      "Late entry may not be permitted once a round has commenced.",
      "Any form of cheating, misconduct or use of unauthorized assistance may result in disqualification.",
      "Participants must follow the instructions given by the organizing committee.",
      "The organizers reserve the right to modify the rules or timings if required.",
      "The decision of the organizing committee shall be final and binding."
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
    image: null,
    rules: [
      "Each team shall consist of a maximum of 2-3 members.",
      "Each round has a unique goal, and players must understand the rules and conditions to successfully clear it.",
      "The game consists of three rounds: Gold Quest, Balance Scale, Red Light Green Light.",
      "Every action or decision may lead to rewards, penalties, loss of points, or elimination, depending on the round.",
      "Successfully complete each round and fulfil its conditions to remain in the game and progress further.",
      "Participants must strictly follow the instructions given by the event coordinators and judges.",
      "Each challenge must be completed within the given time limit, with no extra time provided.",
      "Mobile phones, smartwatches, and other electronic devices are not permitted during the challenges.",
      "Any form of cheating, unfair assistance, or misconduct will result in disqualification.",
      "Participants must maintain discipline, sportsmanship, and respectful behaviour throughout the event.",
      "The decision of the judges and organizing committee will be final and binding.",
      "The organizers reserve the right to modify the rules or event format if required."
    ],
    formUrl: "https://forms.gle/GMnHCQiurP2FZNSy8"
  },
  {
    slug: "art-reborn",
    category: "off-stage",
    name: "Art Reborn",
    subtitle: "Craft from waste",
    tagline: "Take what's discarded and remake it into something worth keeping.",
    team: "2 members per team",
    rounds: null,
    image: null,
    rules: [
      "Transform waste materials into something useful, attractive, creative, and innovative.",
      "2 members per team.",
      "Participants must bring required materials.",
      "Ready-made or semi-finished models are strictly prohibited.",
      "Model must be prepared during the competition.",
      "Follow all event coordinator instructions.",
      "Unfair practice or rule violations may lead to disqualification.",
      "Judges' decision is final and binding."
    ],
    formUrl: "https://forms.gle/vyw9KzNZPY7YYPQCA"
  },
  {
    slug: "business-times",
    category: "off-stage",
    name: "Business Times",
    subtitle: "Business Quiz",
    tagline: "A Monopoly-style business simulation testing strategy under pressure.",
    team: "3 participants per team",
    rounds: "Multiple rounds",
    image: null,
    rules: [
      "Team: 3 participants.",
      "Business Monopoly is an interactive business simulation event that combines business knowledge, problem-solving, decision-making and strategic thinking through multiple engaging rounds.",
      "The event gives participants an opportunity to experience real-world business situations, develop creative solutions and apply financial and managerial strategies in a competitive Monopoly-style business game.",
      "Mobile phones must be kept away during the event, except when specifically permitted through a Mystery Box.",
      "Participants must report before the scheduled time.",
      "No unfair means, external assistance or communication with other teams.",
      "Teams must maintain discipline and sportsmanship.",
      "All rounds will have fixed time limits.",
      "Participants must follow the instructions provided by the organisers.",
      "The judges' decision will be final.",
      "Teams may be disqualified for cheating, misconduct, damaging event materials or violating the rules."
    ],
    formUrl: "https://forms.gle/KzxEmK9np5Cau6LP6"
  },
  {
    slug: "senthamizh-sangamam",
    category: "off-stage",
    name: "Senthamizh Sangamam",
    subtitle: null,
    tagline: "A celebration of Tamil, played out through language games.",
    team: "Up to 2 members per team",
    rounds: null,
    image: null,
    rules: [
      "Each team shall consist of a maximum of 2 members.",
      "Mobile phones are strictly not allowed.",
      "The event includes various games related to Tamil.",
      "Rule violations may result in disqualification.",
      "Follow the instructions given by the organizers.",
      "Judge's decision will be final and binding."
    ],
    formUrl: "https://forms.gle/S9wtCNvXFUfSaNM19"
  },

  // ---------------------- ON-STAGE ----------------------
  {
    slug: "voix-verse",
    category: "on-stage",
    name: "Voix Verse",
    subtitle: "Solo singing",
    tagline: "Take the stage alone and let your voice carry the room.",
    team: "Individual participation",
    rounds: "Prelims conducted",
    image: null,
    rules: [
      "Participants permitted: individual participation.",
      "Duration: 3 minutes.",
      "Prelims will be conducted.",
      "Choice of song is open to the participant but the song should not have any slangs or derogatory language.",
      "Karaoke is permitted.",
      "The participants can do unplugged versions with their own instruments.",
      "The decision of the judges will be final.",
      "Dignity and decorum must be maintained."
    ],
    formUrl: "https://forms.gle/C8RSyHQCKqvmZprJ7"
  },
  {
    slug: "rhythm-rebel",
    category: "on-stage",
    name: "Rhythm Rebel",
    subtitle: "Solo dance",
    tagline: "One performer, one spotlight, full command of the stage.",
    team: "Individual participation",
    rounds: null,
    image: null,
    rules: [
      "Participants permitted: individual participation.",
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
    image: null,
    rules: [
      "Participants permitted: 2-8 members in a team.",
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
    image: null,
    rules: [
      "Participants permitted: individual participation.",
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
    image: null,
    rules: [
      "Participants permitted: either individual or team participation consisting of 2-8 members.",
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