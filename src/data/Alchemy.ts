import { z } from "zod";

export const alchemyFormulaSchema = z.object({
    name: z.string(),
    summary: z.string(),
    rouseChecks: z.number().min(0).int(),
    requiredTime: z.string(),
    dicePool: z.string(),
    ingredients: z.string(),
    level: z.number().min(1).int(),
});

export type AlchemyFormula = z.infer<typeof alchemyFormulaSchema>;

export const AlchemyFormulas: AlchemyFormula[] = [
    // Level 1 Alchemy Formulas
    {
        name: "Body Paint",
        summary: "Tattoo a human or vampire",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, tattoo materials",
        level: 1
    },
    {
        name: "Checkout Time",
        summary: "Become a corpse, immune to sunlight",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, preservative materials",
        level: 1
    },
    {
        name: "Elevate",
        summary: "Get high",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy + Stamina",
        ingredients: "Blood, intoxicating substances",
        level: 1
    },
    {
        name: "Far Reach",
        summary: "Minor telekinesis",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy + Resolve",
        ingredients: "Blood, magnetic materials",
        level: 1
    },
    {
        name: "Food Stain",
        summary: "Know who feeds on marked vessels",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, marking substances",
        level: 1
    },
    {
        name: "Gaoler's Bane",
        summary: "Contort to escape restraints",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, lubricating materials",
        level: 1
    },
    {
        name: "Haze",
        summary: "Create a cloud of mist",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, water or vapor source",
        level: 1
    },
    {
        name: "Mercurian Tongue",
        summary: "Drink someone's blood to speak their native language",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, linguistic materials",
        level: 1
    },
    {
        name: "Plug-In",
        summary: "Power electrical devices",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy + Resolve",
        ingredients: "Blood, conductive materials",
        level: 1
    },
    {
        name: "Portable Shade",
        summary: "Prevent damage from sunlight",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy + Stamina",
        ingredients: "Blood, protective materials",
        level: 1
    },
    {
        name: "Speak from the Heart",
        summary: "Hide a message in a vessel's blood",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, encoding materials",
        level: 1
    },
    {
        name: "Hot Sauce",
        summary: "Raise body temperature to ignore extreme cold and trigger Fear Frenzy in vampires through heated touch",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy (Resolve + Alchemy to focus heat)",
        ingredients: "Alchemist's vitae, choleric human blood, hot peppers or hot sauce, antidepressants or Adderall",
        level: 1
    },
    {
        name: "Loadstone",
        summary: "Triple physical density without altering body mass, gaining grapple resistance but losing dexterity",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Alchemist's vitae, melancholic human blood, magnet or magnetic filings, whey protein powder, food grease",
        level: 1
    },
    {
        name: "Bezoar Brew",
        summary: "Transform stomach acids into supernatural solvent that dissolves anything swallowed",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy (Stamina + Alchemy to vomit)",
        ingredients: "Alchemist's vitae, sanguine or choleric human blood, digestive aid, bezoar stone",
        level: 1
    },
    {
        name: "Goetia Petrichor",
        summary: "Transform vitae into fast-drying adhesive stronger than granite",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Alchemist's vitae, melancholic human blood, instant cement, iron supplements or mineral-rich food",
        level: 1
    },

    // Level 2 Alchemy Formulas
    {
        name: "Advanced Torpor",
        summary: "Enter a healing coma",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, sedative materials",
        level: 2
    },
    {
        name: "Blacklight Surprise",
        summary: "Modify a blacklight to burn vampires",
        rouseChecks: 1,
        requiredTime: "10 minutes",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, UV light source",
        level: 2
    },
    {
        name: "Blood of Mandagloire",
        summary: "Poison vessels to put vampires to sleep",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, soporific substances",
        level: 2
    },
    {
        name: "Blue State",
        summary: "Force someone to hold a grudge",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, emotional catalysts",
        level: 2
    },
    {
        name: "Envelop",
        summary: "Blind and suffocate a target",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy + Wits",
        ingredients: "Blood, binding materials",
        level: 2
    },
    {
        name: "Friends List",
        summary: "See what vampires know a mortal",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, divination materials",
        level: 2
    },
    {
        name: "Mirror of Trust",
        summary: "Compel honesty from other vampires",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, truth-compelling substances",
        level: 2
    },
    {
        name: "Red's Flamin' Hot Sauce",
        summary: "Turn any blood into an accelerant",
        rouseChecks: 0,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, combustible materials",
        level: 2
    },
    {
        name: "Whiff-Its",
        summary: "Detect vampires with potent blood",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy + Resolve",
        ingredients: "Blood, detection materials",
        level: 2
    },
    {
        name: "Counterfeit 1",
        summary: "Counterfeit a first-level discipline",
        rouseChecks: 0,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, mimetic substances",
        level: 2
    },
    {
        name: "'Zerk",
        summary: "Enter Fury Frenzy with Physical dice bonus for damage-dealing actions",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Alchemist's vitae, wolf or large canine blood, black henbane or deadly nightshade, high-proof alcohol",
        level: 2
    },
    {
        name: "Hypersomnia",
        summary: "Stay awake during daylight hours without dice pool caps, but cannot Rouse Blood",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy (Humanity + Alchemy to determine duration)",
        ingredients: "Alchemist's vitae, sanguine human blood, anticoagulants, sunflower seeds, nocturnal animal brain fluid",
        level: 2
    },
    {
        name: "Blood Forgery",
        summary: "Create fraudulent vitae that looks like Kindred blood but doesn't slake Hunger",
        rouseChecks: 1,
        requiredTime: "1 hour",
        dicePool: "Intelligence + Thin-Blood Alchemy (Alchemy + Subterfuge vs Wits + Awareness to detect)",
        ingredients: "Alchemist's vitae, sanguine human blood, moonshine, molten lead, vinegar, red food dye",
        level: 2
    },

    // Level 3 Alchemy Formulas
    {
        name: "Bleed Out",
        summary: "Feed a whole coterie from one mortal",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, amplification materials",
        level: 3
    },
    {
        name: "Chemically-Induced Flashback",
        summary: "Imbue memories into Ashe (Requires Concoct Ashe, Fixatio)",
        rouseChecks: 1,
        requiredTime: "10 minutes",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, memory catalysts, Ashe",
        level: 3
    },
    {
        name: "Concoct Ashe",
        summary: "Produce Ashe from a vampire's ashes (Requires Ashfinder, Fixatio)",
        rouseChecks: 0,
        requiredTime: "1 hour",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Vampire ashes, alchemical apparatus",
        level: 3
    },
    {
        name: "Defractionate",
        summary: "Turn fractionated blood drinkable again",
        rouseChecks: 0,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Fractionated blood, restoration materials",
        level: 3
    },
    {
        name: "Diamond Skin",
        summary: "Convert aggravated damage to superficial",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, hardening materials",
        level: 3
    },
    {
        name: "Fang-Stinger",
        summary: "Poison a vessel to hurt vampires",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy + Resolve",
        ingredients: "Blood, toxic substances",
        level: 3
    },
    {
        name: "Fireskin",
        summary: "Superheat your body",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, thermal materials",
        level: 3
    },
    {
        name: "Saraimu",
        summary: "Create a sentient slime familiar (Requires Fixatio)",
        rouseChecks: 1,
        requiredTime: "1 hour",
        dicePool: "Intelligence + Thin-Blood Alchemy + Resolve",
        ingredients: "Blood, organic binding agents",
        level: 3
    },
    {
        name: "Freezer Fluid",
        summary: "Paralyze a vampire's muscles",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy + Resolve",
        ingredients: "Blood, paralytic agents",
        level: 3
    },
    {
        name: "Hospital Chains",
        summary: "Prevent wounds from healing",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, medical restraints",
        level: 3
    },
    {
        name: "Mandagloire",
        summary: "Create a paralyzing gas",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy + Stamina",
        ingredients: "Blood, gaseous compounds",
        level: 3
    },
    {
        name: "Martian Purity",
        summary: "Purge bloodborne illness in fire",
        rouseChecks: 1,
        requiredTime: "10 minutes",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, purifying flames",
        level: 3
    },
    {
        name: "Mask Off",
        summary: "Shut down Blush of Life",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, revealing agents",
        level: 3
    },
    {
        name: "On-Demand Sunburn",
        summary: "Burn another vampire with sunlight",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, solar essence",
        level: 3
    },
    {
        name: "Profane Hieros Gamos",
        summary: "Transform a target into their ideal self",
        rouseChecks: 1,
        requiredTime: "1 hour",
        dicePool: "Intelligence + Thin-Blood Alchemy + Resolve",
        ingredients: "Blood, transformative materials",
        level: 3
    },
    {
        name: "Rumor",
        summary: "Cause one person to agree",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy + Manipulation",
        ingredients: "Blood, persuasive compounds",
        level: 3
    },
    {
        name: "Stay the Falling Sand",
        summary: "Freeze objects in time momentarily",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy + Resolve",
        ingredients: "Blood, temporal stabilizers",
        level: 3
    },
    {
        name: "Tank",
        summary: "Reduce one instance of damage",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, protective compounds",
        level: 3
    },
    {
        name: "TLC",
        summary: "Turn animal blood into human",
        rouseChecks: 1,
        requiredTime: "10 minutes",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Animal blood, transmutative agents",
        level: 3
    },
    {
        name: "Troll the Pious",
        summary: "Make religious people uncomfortable",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, blasphemous materials",
        level: 3
    },
    {
        name: "Counterfeit 2",
        summary: "Counterfeit a second-level discipline",
        rouseChecks: 0,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, advanced mimetic substances",
        level: 3
    },
    {
        name: "Cremation Gem",
        summary: "Create crystalline gems that heal damage and grant temporary Disciplines based on Resonance",
        rouseChecks: 1,
        requiredTime: "1 night (sealed in crucible)",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Alchemist's vitae, resonant human blood, cremated human ash, reishi mushrooms, epsom salts, powdered jade or serpentine",
        level: 3
    },
    {
        name: "Dr. Hallen's Phagocyte",
        summary: "Create parasitic amoeba that devours blood cells, increasing Hunger requirements and causing Frenzies",
        rouseChecks: 1,
        requiredTime: "Several hours (cultivation)",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Alchemist's vitae, melancholic blood from parasitically infected mortal, kefir or kombucha, slime mold scrapings",
        level: 3
    },
    {
        name: "Renfield Syndrome",
        summary: "Inflict classic vampire symptoms on mortals to create distractions or scapegoats",
        rouseChecks: 1,
        requiredTime: "1 turn (via Calcinatio) or 1 evening (other methods)",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Alchemist's vitae, choleric human blood, spider legs, synthetic blood plasma, powdered moonstone",
        level: 3
    },

    // Level 4 Alchemy Formulas
    {
        name: "Airborne Momentum",
        summary: "Fly for a limited time",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy + Strength",
        ingredients: "Blood, levitation materials",
        level: 4
    },
    {
        name: "Copycat",
        summary: "Create a rough disguise",
        rouseChecks: 1,
        requiredTime: "10 minutes",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, mimetic materials",
        level: 4
    },
    {
        name: "Discipline Channelling",
        summary: "Imbue disciplines into Ashe (Requires Concoct Ashe, Fixatio)",
        rouseChecks: 0,
        requiredTime: "1 hour",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, Ashe, discipline essence",
        level: 4
    },
    {
        name: "Half-Living Conductor",
        summary: "Redirect electricity into an attack",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy + Stamina",
        ingredients: "Blood, conductive materials",
        level: 4
    },
    {
        name: "Hollow Leg",
        summary: "Poison a vampire, preventing feeding",
        rouseChecks: 0,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, appetite suppressants",
        level: 4
    },
    {
        name: "Juice Box",
        summary: "Allow other vampires to use formulae (Requires Methuselah vitae)",
        rouseChecks: 1,
        requiredTime: "10 minutes",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Methuselah vitae, sharing compounds",
        level: 4
    },
    {
        name: "Red State",
        summary: "Make someone forget misdeeds",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, memory erasure agents",
        level: 4
    },
    {
        name: "Short Circuit",
        summary: "Overload an electrical system",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, electromagnetic disruptors",
        level: 4
    },
    {
        name: "Toxic Personality",
        summary: "Secrete a corrosive acid",
        rouseChecks: 2,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy + Strength + Dexterity",
        ingredients: "Blood, corrosive compounds",
        level: 4
    },
    {
        name: "Vitae MSG",
        summary: "Make a subject's blood more tempting",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, enhancement compounds",
        level: 4
    },
    {
        name: "Counterfeit 3",
        summary: "Counterfeit a third-level discipline",
        rouseChecks: 0,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, expert mimetic substances",
        level: 4
    },
    {
        name: "Pretorius' Gambit",
        summary: "Suspend another Formula within your system until activated with a Rouse Check",
        rouseChecks: 1,
        requiredTime: "1 hour",
        dicePool: "Intelligence + Thin-Blood Alchemy (Resolve + Alchemy vs Stamina to avoid vomiting)",
        ingredients: "Alchemist's vitae, melancholic and phlegmatic human blood, reptile or crustacean molt, liquid resin or tree sap, sample from another completed Formula",
        level: 4
    },
    {
        name: "Fullmetal Jacket",
        summary: "Create alchemically-enhanced ammunition that deals unhalved damage and special effects to vampires",
        rouseChecks: 1,
        requiredTime: "Several hours (smelting and assembly)",
        dicePool: "Intelligence + Thin-Blood Alchemy (Intelligence + Crafts for bullet casting)",
        ingredients: "Alchemist's vitae, resonant mortal blood, canola oil, saltpeter, rattlesnake venom, crushed cactus stipules, specific metals",
        level: 4
    },

    // Level 5 Alchemy Formulas
    {
        name: "Da Bomb",
        summary: "Turn a mortal into a remote bomb",
        rouseChecks: 1,
        requiredTime: "1 hour",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, explosive compounds",
        level: 5
    },
    {
        name: "Awaken the Sleeper",
        summary: "End a vampire's torpor early",
        rouseChecks: 0,
        requiredTime: "1 hour",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, awakening catalysts",
        level: 5
    },
    {
        name: "Beast Mode",
        summary: "Use Celerity, Potence, or Fortitude 5 (Requires BP 4+ vitae)",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "High potency vitae, enhancement compounds",
        level: 5
    },
    {
        name: "Flowering Amaranth",
        summary: "Modify Diablerie to gain disciplines",
        rouseChecks: 1,
        requiredTime: "1 hour",
        dicePool: "Intelligence + Thin-Blood Alchemy + Resolve",
        ingredients: "Blood, soul-binding materials",
        level: 5
    },
    {
        name: "Moment of Clarity",
        summary: "Sharpen the mind, suppress Hunger",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, mental enhancement compounds",
        level: 5
    },
    {
        name: "Saturn's Flux",
        summary: "Purge blood bonds",
        rouseChecks: 1,
        requiredTime: "1 hour",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, bond-breaking agents",
        level: 5
    },
    {
        name: "Counterfeit 4",
        summary: "Counterfeit a fourth-level discipline",
        rouseChecks: 0,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, master mimetic substances",
        level: 5
    },
    {
        name: "Quantum Decoherence",
        summary: "Teleport instantly to visible locations, with strange side effects on failure",
        rouseChecks: 1,
        requiredTime: "1 turn (injection)",
        dicePool: "Intelligence + Thin-Blood Alchemy (Resolve + Alchemy to teleport)",
        ingredients: "Alchemist's vitae, null-resonant human blood, powdered fulgurite or silica glass, lysergic acid, aluminum foil shavings",
        level: 5
    },
    {
        name: "Gehennical Fire",
        summary: "Create supernatural fire that actively seeks vampires and burns them with Aggravated damage",
        rouseChecks: 1,
        requiredTime: "Several hours (delicate process)",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Alchemist's vitae, choleric and sanguine human blood, cornstarch or sawdust, rotten eggs, remnants of botched formula",
        level: 5
    },
    {
        name: "The Old Man's Elixir",
        summary: "Temporarily lower Generation and gain full vampire abilities, sating Hunger completely",
        rouseChecks: 1,
        requiredTime: "14 hours (Fixatio) or 6 hours (other methods)",
        dicePool: "Intelligence + Thin-Blood Alchemy (Stamina + Resolve to determine Generation reduction)",
        ingredients: "Alchemist's vitae, mortal blood with dyscrasia, molten platinum, asafoetida, bull thyroid glands",
        level: 5
    }
];

export default AlchemyFormulas;