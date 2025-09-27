// --- Bargain Flaws ---
export const bargainFlaws = [
    { name: "Ill-Fated Warrior", cost: [1], summary: "Whenever you take Health Damage, of either kind, you take an additional point of Superficial Health Damage at the end of that turn.", type: "bargainflaw", color: "purple" },
    { name: "Hollowing Curse", cost: [1], summary: "Your physical flesh can be restored like any other Cainite's, up until a point. You can only Rouse to Mend the last two marked boxes on your Health Tracker upon gaining a Stain or waking each night.", type: "bargainflaw", color: "purple" },
    { name: "Oculus Infernus", cost: [1], summary: "A third eye opens on your forehead whenever you roll a Messy Critical or enter Frenzy. While this eye is open you can only see out of it, as your normal eyes lose vision. It also burns a fiery color, making it Difficult to hide.", type: "bargainflaw", color: "purple" },
    { name: "Swarn's Favor", cost: [1], summary: "Flies or other insects always seem to gather in the same room as you, or will blanket windows and other entrances, and will linger suspiciously in the area you were in for up to an hour afterward. Up to once per session, you lose one die at the Storyteller's discretion as the swarming pests thwart your actions in some way.", type: "bargainflaw", color: "purple" },
    { name: "Restless Dreams", cost: [1,2], summary: "Your day-sleep is disturbed by visions from the world beyond. You regain one less Willpower when waking each night for each dot of this Merit.", type: "bargainflaw", color: "purple" },
    { name: "Diabolical Touchstone", cost: [2], summary: "Choose one of your Touchstones. This Touchstone acts as an anchor to a hellish power that you've made your Dark Bargain with. If they are damaged, you take the same amount and type of damage, in addition to any Stains gained. If they are destroyed, your highest Discipline Level or Attribute Rating (Your choice) is permanently reduced by 1.", type: "bargainflaw", color: "purple" },
    { name: "Baleblooded", cost: [2], summary: "Your blood sublimates intonoxious black fumes, a swarm of insects, or even ignites into Baleflame at random. These things are always detrimental to you when they occur, and because your vitae transmutes as soon as it leaves your body, you cannot Embrace or Ghoul.", type: "bargainflaw", color: "purple" },
    { name: "Chernobog's Legacy", cost: [2], summary: "At Hunger 4 or higher, your body contorts into alien and demonic aspects, reducing your Looks to Repulsive and causing a -1 die penalty to a Physical Skill of the Storyteller's choice.", type: "bargainflaw", color: "purple" },
    { name: "Putrescent Slumber", cost: [2], summary: "You can only sleep when submerged in blood, rotting offal, or under a pile of cadavers. Waking having not slept in this way impairs you Physically, Socially, or Mentally the next night, causing a two-dice penalty in any related Attribute pools.", type: "bargainflaw", color: "purple" },
    { name: "Kiss of Mania", cost: [2], summary: "Slaking one or more Hunger when feeding directly from a vessel infficts a deranged Compulsion upon the victim, and Vampires you feed on may immediately give in to Fury Frenzy, with you as their target.", type: "bargainflaw", color: "purple" },
    { name: "Perpetual Liar", cost: [2], summary: "You are unable to tell the Truth and must lie, constantly. Whenever you attempt to speak the truth you must make a Willpower Test; Difficulty 3. If you succeed you can speak a number of Truths equal to the margin plus one for the remainder of the scene. If you fail you take a point of Willpower Damage.", type: "bargainflaw", color: "purple" },
    { name: "Smouldering Decay", cost: [3], summary: "Your flesh constantly withers due to rot or a slow burn over the course of the night, reaching its apex near dawn or when you're at Hunger 4 or greater, upon which you become charred black bones, held together by crimson veins and twanging sinew.", type: "bargainflaw", color: "purple" },
    { name: "Monstrous Reflection", cost: [3], summary: "Reflective surfaces betray you as a demonic silhouette blanketed in darkness, with an occult sigil at the center of your mass, along with a writhing eye. The appearance can distort or alter further at the Storyteller's discretion, but should always appear as a demonic breach of the Masquerade.", type: "bargainflaw", color: "purple" },
    { name: "Murderous Shadow", cost: [3], summary: "Your shadow has a will of its own, and will occasionally leave you to pursue its own ambitions. At the Storyteller's discretion, this shadow may have certain powers of Oblivion when it acts. In its absence, you no longer cast a proper shadow, which may be noticed by others as a breach of the Masquerade. Worse still, when it does return, it is usually after committing an extravagantly horrendous murder nearby. If you take this Dark Bargan with Pareidolian, expect to be ever-vigilant of a shadow that will undermine you at every turn.", type: "bargainflaw", color: "purple" },
]
import { Character } from "./Character"
import { ClanName } from "./NameSchemas"

export type MeritOrFlaw = { name: string; cost: number[]; summary: string }

export type MeritsAndFlaws = {
    title: string
    merits: MeritOrFlaw[]
    flaws: MeritOrFlaw[]
}

export const ghoulMeritsAndFlaws: MeritsAndFlaws[] = [
    {
        title: "📚 Linguistics",
        merits: [
            { name: "Linguistics", cost: [1,2,3,4,5], summary: "Each dot allows the character to read, write and speak fluently in another language outside of the default two they already know, which is their native language and the language of the Domain." },
        ],
        flaws: [
            { name: "Illiterate", cost: [2], summary: "The Character cannot read nor write and their Science and Academics Skills may not go beyond 1 dot." },
        ],
    },
    {
        title: "👤 Looks",
        merits: [
            { name: "Beautiful", cost: [2], summary: "Add one die to related Social pools" },
            { name: "Stunning", cost: [4], summary: "Add two dice to related Social pools" },
            { name: "Semblance of the Methuselah", cost: [1,2], summary: "With an appearance strikingly similar to a methuselah, gain one die on rolls to impress, intimidate or attract the attention who recognize your face. As well as gain other bonuses such as status or additional die when meeting the methuselah they resemble." },
            { name: "Famous Face", cost: [1], summary: "Appear as someone famous and gain two dice in social tests where this works to their benefit. Take a two-dice penalty whenever they attempt to hide in a crowd or avoid recognition." },
            { name: "Ingénue", cost: [1], summary: "They appear innocent and blameless, add two dice to any rolls related to avoiding suspicion or deflecting blame at the Storytellers' discretion." },
            { name: "Remarkable Feature", cost: [1], summary: "Possessing a rare, memorable feature such as eye color or unusual complexion. Add two-dice to social interactions with strangers and take a one-die penalty to disguise yourself." },
        ],
        flaws: [
            { name: "Ugly", cost: [1], summary: "Lose one die from related Social pools" },
            { name: "Repulsive", cost: [2], summary: "Lose two dice from related Social pools" },
            { name: "Stench", cost: [1], summary: "Their breath and body odor are supernaturally foul. Lose one die from seduction and similar Social pools, and lose two from Stealth pools unless they are upwind." },
            { name: "Transparent", cost: [1], summary: "Unable to lie due to a terrible poker face or a strong urge to be truthful. Lose one die in any pools requiring Subterfuge, they cannot take any dots in Subterfuge either." },
            { name: "Unblinking Visage", cost: [2], summary: "Treat Humanity as two lower (Min 0) when using Blush of Life, eating, drinking, or sexual intercourse." },
        ],
    },
    {
        title: "💊 Substance Use",
        merits: [
            { name: "High Functioning Addict", cost: [1], summary: "Add one die to either Physical, Social, or Mental pool when the last feeding had the drug of their desire." },
        ],
        flaws: [
            { name: "Addiction", cost: [1], summary: "Unless the action is to immediately gain their drug, lose one die to all pools if the last feeding was not on the drug of their choice." },
            { name: "Hopeless Addiction", cost: [2], summary: "Unless the action is to immediately gain their drug, lose two dice to all pools if the last feeding was not on the drug of their choice." },
        ],
    },
    {
        title: "🔮 Supernatural",
        merits: [],
        flaws: [
            { name: "Two Masters", cost: [1], summary: "Be Blood Bound to two individuals at the same time." },
        ],
    },
    {
        title: "🤝 Allies",
        merits: [
            { name: "Allies", cost: [2,3,4,5,6], summary: "A group of mortals who will support or aid the vampire. Family, friends, or an organization that has loyalty to the vampire. Build them between (• - ••••) Effectiveness and (•-•••) Reliability, the maximum amount of total points is 6. Effectiveness defines how proficient they are at a task. Reliability determines how dependable they are." },
        ],
        flaws: [
            { name: "Enemy", cost: [1,2,3,4,5], summary: "The opposite to Allies, and are rated two dots less than their effectiveness." },
        ],
    },
    {
        title: "📞 Contacts",
        merits: [
            { name: "Contacts", cost: [1,2,3], summary: "These are mortals who can get the character information, items or other things of value." },
        ],
        flaws: [],
    },
    {
        title: "⭐ Fame",
        merits: [
            { name: "Fame", cost: [1,2,3,4,5], summary: "Mortal fame is a dangerous game, the character might have once been a pop singer, actress, or other celebrity. The level of fame can subtract from tests against fans or hunting. There is a downside as people may remember the character as their face is plastered on a nearby billboard. Fame can be bought to apply in Vampire society as well." },
        ],
        flaws: [
            { name: "Dark Secret", cost: [1,2,3,4,5], summary: "What they've done is still a secret, except to one or two very motivated enemies." },
            { name: "Infamy", cost: [1,2,3,4,5], summary: "They've done something atrocious and others know." },
            { name: "Banned From", cost: [1,2,3], summary: "Small cities are one dot, medium cities are two dots, large cities are three dots." },
        ],
    },
    {
        title: "💼 Influence",
        merits: [
            { name: "Influence", cost: [1,2,3,4,5], summary: "They have sway in mortal communities, be they political, through financial status and prestige, or manipulation. By default, this merit only applies to a specific group or region of the city." },
        ],
        flaws: [
            { name: "Disliked", cost: [1], summary: "Subtract one die from Social tests involving groups outside of the character's loyal followers." },
            { name: "Despised", cost: [2], summary: "One group/region of the city goes out of its way to destroy the character's plans." },
        ],
    },
    {
        title: "🏠 Haven",
        merits: [
            { name: "Haven", cost: [1,2,3], summary: "A vampire without Haven dots is able to find a safe place for the night. However, Haven dots make it that much more secure and private per dot." },
            { name: "Hidden Armory", cost: [1,2,3,4,5], summary: "Each dot adds one pistol and one firearm inside the haven, safely concealed." },
            { name: "Cell", cost: [1,2,3,4,5], summary: "Allows two prisoners to be stored inside. Each additional dot either allows the character to store twice as many prisoners or adds +1 to the attempts to escape. Not available in one dot havens." },
            { name: "Watchmen", cost: [1,2,3,4,5], summary: "Each dot supplies 4 Average Mortals and one Gifted Mortal to watch over the haven." },
            { name: "Laboratory", cost: [1,2,3,4,5], summary: "Each dot of this merit contributes to dice rolls related to one Science or Technology specialty or for Alchemy pools when using Fixatio. Not available in one dot havens." },
            { name: "Library", cost: [1,2,3,4,5], summary: "Each dot of this merit contributes to dice rolls for one Academics, Investigation or Occult specialty. Small havens are limited to one dot." },
            { name: "Location", cost: [1], summary: "The place in which this haven resides gives a +2 dice bonus (or +2 enemies Difficulty) on relevant rolls from either Chasse or base Haven rating. If this does not work, with the Storyteller the player can craft a custom bonus. Example, living in the heart of downtown allows the character to have a +2 bonus to etiquette rolls to pick up local rumors." },
            { name: "Luxury", cost: [1], summary: "Rich and full of value, the haven is well decorated with high-end décor and items. +2 dice bonus to Social tests when mortals are inside the haven. Without at least 3 dots in Resources, these items are stolen or illegally obtained." },
            { name: "Postern", cost: [1,2,3,4,5], summary: "The haven has some kind of secret exit that allows them a safe passage out. For each dot of this merit add one die to pools of evasion or escaping surveillance near the haven." },
            { name: "Security System", cost: [1,2,3,4,5], summary: "For each dot of this merit, add one die to pools to resist unwelcome guests into the haven." },
            { name: "Surgery", cost: [1], summary: "Add two die to relevant pools for relevant tests performed in havens." },
            { name: "Warding", cost: [1,2,3,4,5], summary: "This haven possesses some type of magic warding that repels supernatural entities. Each dot of this merit adds one die to pools to resist supernatural scrying and whatever else the Storyteller allows." },
            { name: "Holy Ground", cost: [1], summary: "The haven has significance to the character's cult, granting them the ability to call upon a large group of cultists to protect their haven once per story." },
            { name: "Shrine", cost: [1,2,3], summary: "A shrine is present in the haven, adding a bonus equivalent to the dots in searching, preparing or otherwise obtaining Ritual or Ceremony ingredients." },
            { name: "Business Establishment", cost: [2,3], summary: "The haven is rented out to a business or is run as a business by the Kindred themselves. This gives both benefits and drawbacks, such as a ready stream of income but also being very much on the grid and local enforcement being aware of the location. This reduces the Haven's base dots by one for pools involving the Haven's privacy and defenses against either (pick one) financial or criminal intrusions. Dots in this merit roughly equal Resources but do not stack onto existing Resources for the character." },
            { name: "Furcus", cost: [1,2,3], summary: "The haven is located on veins of the earth or a frayed spot in the Veil. Each dot in this merit adds one die to Rituals or Ceremony dice pools used at the furcus." },
            { name: "Machine Shop", cost: [1,2,3,4,5], summary: "Each dot of this merit adds one dice to the pool for Craft rolls. It also adds this to other tests related to building, repairing, or disassembling machinery or equipment." },
        ],
        flaws: [
            { name: "No Haven", cost: [1], summary: "The character must make a basic test to find a secure resting place." },
            { name: "Creepy", cost: [1], summary: "Take a two-dice penalty on Social pools in the haven with mortals." },
            { name: "Haunted", cost: [1,2,3,4,5], summary: "There is a supernatural manifestation taking hold over the haven." },
            { name: "Compromised", cost: [2], summary: "This haven is on a watchlist and may have been raided at some point." },
            { name: "Shared", cost: [1,2], summary: "The haven is not entirely owned by the character, instead being shared with other Kindred or having a Kindred landlord. This does not need to be taken by Coteries, as that only has as many problems as they make mutually in play." },
        ],
    },
    {
        title: "🎯 Other",
        merits: [
            { name: "Check the Trunk", cost: [1], summary: "Easy access to an armory or cache of tools, none of these items can exceed the value of something a Resources 2 character could access. Add two dice to Preperation Rolls." },
            { name: "Side Hustler", cost: [2], summary: "Once per session they can get their hands on an item, information, or access to an event as if they had two dots in the related Resources, Contacts, or Influence." },
            { name: "Tempered Will", cost: [3], summary: "They are always aware when someone is attempting to use Dominate or Presence against them. They may add two additional dice to resistance pools once per session, which can only be taken by those with no dots in Dominate or Presence." },
            { name: "Untouchable", cost: [5], summary: "Once per story they are able to escape all official punishment for a crime that would otherwise see them destroyed." },
            { name: "Mystic of the Void", cost: [1,2], summary: "Choose a single Oblivion Power they do not know. They count as knowing that power for the purpose of prerequisites to learning Oblivion Ceremonies. Hecata and Lasombra can choose three Oblivion Powers they do not know instead of just one." },
        ],
        flaws: [
            { name: "Knowledge Hungry", cost: [1], summary: "At character creation pick a topic that your character desires to study. When they come across the methods to learn these things, they must make a Willpower roll at Difficulty 3 to resist." },
            { name: "Prestation Debts", cost: [1], summary: "They owe other Kindred boons, even if these boons are paid off the Kindred lords over them. The Boon-owning Kindred keeps a one-die bonus in Social combat against the one who owes it." },
            { name: "Risk-Taker Errata", cost: [1], summary: "When confronted with a risky temptation that the character hasn't done before, they suffer a two-dice penalty for all actions till they participate or the scene ends." },
            { name: "Weak-Willed", cost: [2], summary: "Even when they are aware that someone is attempting to sway they may not use the active resistance systems to avoid the attempts." },
        ],
    },
]

export const thinbloodMeritsAndFlaws: MeritsAndFlaws = {
    title: "◐ Thin-blood specific",
    merits: [
        { name: "Anarch Comrades", cost: [1], summary: "A coterie of Anarchs considers you their pet" },
        {
            name: "Camarilla Contact",
            cost: [1],
            summary: "A Camarilla recruiter promises you admittance, but treats you badly and asks you to do tasks",
        },
        { name: "Catenating Blood", cost: [1], summary: "You can create blood bonds and embrace new Vampires" },
        {
            name: "Day Drinker",
            cost: [1],
            summary: "Walking in the sun doesn't damage you, but removes all your Vampiric abilities and halves your health",
        },
        { name: "Discipline Affinity", cost: [1], summary: "Pick a Discipline (lv1) that you can increase like a normal Vampire" },
        { name: "Lifelike", cost: [1], summary: "Your body appears fully human, with a beating heart and a working stomach" },
        { name: "Thin-blood Alchemist", cost: [1], summary: "Gain one dot and one formula in Thin-blood Alchemy" },
        { name: "Vampiric Resilience", cost: [1], summary: "Suffer only superficial damage from most sources, like a normal Vampire" },
    ],
    flaws: [
        { name: "Baby Teeth", cost: [1], summary: "Your teeth are useless for feeding, you need to cut your victims" },
        { name: "Bestial Temper", cost: [1], summary: "Be weak to frenzy like a normal vampire" },
        { name: "Branded by the Camarilla", cost: [1], summary: "The Camarilla have their eyes peeled on you" },
        { name: "Shunned by the Anarchs", cost: [1], summary: "Anarchs shun you" },
        { name: "Clan Curse", cost: [1], summary: "Pick a Clan Curse (severity 1)" },
        { name: "Dead Flesh", cost: [1], summary: "Your flesh slowly rots, -1 to social tests with Mortals" },
        { name: "Mortal Frailty", cost: [1], summary: "Cannot rouse your blood to heal yourself" },
        { name: "Vitae Dependency", cost: [1], summary: "Need to drink Vampire vitae once a week to use Disciplines" },
    ],
}
export const isThinbloodMerit = (m: string) => !!thinbloodMeritsAndFlaws.merits.find((tbm) => tbm.name === m)
export const isThinbloodFlaw = (f: string) => !!thinbloodMeritsAndFlaws.flaws.find((tbf) => tbf.name === f)
export const isThinbloodMeritOrFlaw = (mf: string) => isThinbloodMerit(mf) || isThinbloodFlaw(mf)

export const isGhoulMerit = (m: string) => !!ghoulMeritsAndFlaws.some(category => category.merits.find((gm) => gm.name === m))
export const isGhoulFlaw = (f: string) => !!ghoulMeritsAndFlaws.some(category => category.flaws.find((gf) => gf.name === f))
export const isGhoulMeritOrFlaw = (mf: string) => isGhoulMerit(mf) || isGhoulFlaw(mf)

export const meritsAndFlaws: MeritsAndFlaws[] = [
    {
        title: "🩸 Diablerie",
        merits: [],
        flaws: [
            { name: "Blatant Diablerist", cost: [1], summary: "Powers and Merits capable of sensing Diablerie will always reveal evidence of Diablerie even if the test would otherwise fail to show any information." },
            { name: "Inherited Bane", cost: [2], summary: "You gain another Clan's Bane in addition to your own. Tremere can use this Flaw to gain the Salubri's Bane without commiting Diablerie." },
        ],
    },
    {
        title: "🟣 Dark Bargains",
        merits: [],
        flaws: bargainFlaws,
    },
    {
        title: "🦠 Contagion",
        merits: [],
        flaws: [
            { name: "Disease Vector", cost: [1], summary: "When feeding from a sick mortal, the illness is always contracted and will be passed onto the next vessel." },
            { name: "Plaguebringer", cost: [1,2], summary: "The Kindred carries a disease that cannot be removed from their vitae. At one dot the disease is minor with visible traces, at two dots the disease can be potentially fatal if not treated. It is passed through the bite." },
        ],
    },
    {
        title: "🧠 Psychological",
        merits: [
            { name: "Unholy Will", cost: [2,4], summary: "With two dots, add one die to any pool when resisting or contesting against an individual with True Faith when related to their faith. Suffer one less point of damage from holy sources. At four dots, add two dice and suffer two fewer points of damage." },
            { name: "Zealotry", cost: [1,2,3], summary: "For each dot, once per session when succeeding with a normal roll that aligns to the character's Conviction, turn it into a messy critical." },
            { name: "Penitence", cost: [1,2,3,4,5], summary: "Once per session, take one point of self-inflicted Superficial Health Damage in exchange for one point of Superficial Willpower damage." },
            { name: "Soothed Beast", cost: [1], summary: "With a SPC as an obsession, once per session they can ignore one Bestial or Messy Critical. Gain three Stains if they die." },
            { name: "False Love", cost: [1], summary: "With a SPC as an obsession, when in their presence treat the character's Humanity as one higher (Max 10) for Blush of Life, eating, drinking, or sexual intercourse. Gain three Stains if they die." },
            { name: "Wild Heart", cost: [2], summary: "Add +2 Bonus Dice towards any Social and Mental pools made when interacting with animals. Bonus is +3 at Hunger 4 or higher." },
            { name: "Anti-Aesthetical", cost: [2], summary: "While in a surrounding you consider beautiful or comfortable, gain +1 Bonus Die to resist Fury Frenzy." },
            { name: "Living Empathy", cost: [2], summary: "When interacting with Mortals socially, treat your Humanity as one higher." },
            { name: "Tortured Artist", cost: [2], summary: "While under the effects of a Compulsion, add dice to any creative efforts equal to the largest Dice Penalty that Compulsion confers. Cannot suffer penalties from Compulsions to your creative dice pools." },
            { name: "Utterly Enthralled", cost: [2], summary: "A piece of art, a building, or another Kindred has a psychological grip on you. Spending a Scene in its presence restores a point of Willpower, if it is damaged you take a Stain, and its outright destruction warrants 2 Stains." },
            { name: "Creative Existentialist", cost: [3], summary: "You suffer no penalties to creating art due to being at Humanity 5 or lower." },
        ],
        flaws: [
            { name: "Beacon of Profanity", cost: [1], summary: "Mortals with any amount of True Faith can sense your presence, regardless of True Faith level." },
            { name: "Crisis of Faith", cost: [1], summary: "Whenever there is a bestial failure, take one point of superficial Willpower damage in addition to other outcomes." },
            { name: "Horrible Scars of Penitence", cost: [1], summary: "Equivalent to Repulsive when around those not within the cult." },
            { name: "Groveling Worm", cost: [2], summary: "Must scourge their own flesh once per session for two points of Superficial Health damage or suffer one point of Aggravated Willpower damage at the next session. Cannot be taken with Penitence Merit." },
            { name: "Animals Are Better Than People", cost: [1], summary: "Can't stand to see animals get hurt or mistreated. If you don't act to prevent it, take a point of Aggravated Willpower Damage." },
            { name: "Zoophilist", cost: [1,2], summary: "Struggle to understand Humans. Suffer a -1 Die penalty in all Etiquette, Insight, and Leadership pools made in relation to Mortals and other Cainites for each dot in this flaw and can't take non-Animal related Specialities in those same Skills." },
            { name: "Dissilusioned Dead", cost: [1], summary: "Your skill remains, but in death your work doesn't evolve or change anymore. Cannot purchase dots or specialties in Craft, Insight, or Academics." },
            { name: "Phthonus Incarnate", cost: [1], summary: "Irrational jealousy for those important to you. When a Touchstone, Obsession, or Vendetta shows preference for someone else, suffer a -2 Dice Penalty to Willpower pools for the scene." },
            { name: "Demesure", cost: [2], summary: "Extravagant pride in a trait. When insulted, take an additional point of Willpower Damage. If it provokes Frenzy, Difficulty to resist is increased by 2." },
            { name: "Subjugated by Urge", cost: [2], summary: "Your Beast has a grip on your psyche. Whenever you suffer a Compulsion that causes a penalty to your Dice Pool, the severity of that penalty is further increased by your Bane." },
                { name: "Knowledge Hungry", cost: [1], summary: "At character creation pick a topic that your character desires to study. When they come across the methods to learn these things, they must make a Willpower roll at Difficulty 3 to resist." },
                { name: "Risk-Taker Errata", cost: [1], summary: "When confronted with a risky temptation that the character hasn't done before, they suffer a two-dice penalty for all actions till they participate or the scene ends." },
                { name: "Weak-Willed", cost: [2], summary: "Even when they are aware that someone is attempting to sway they may not use the active resistance systems to avoid the attempts." },
        ].filter(flaw => !(bargainFlaws as any[]).some(b => b.name === flaw.name)),
    },
    {
        title: "✨ Supernatural",
        merits: [],
        flaws: [
            { name: "Two Masters", cost: [1], summary: "Be Blood Bound to two individuals at the same time." },
        ],
    },
    {
        title: "💄 Looks",
        merits: [
            { name: "Beautiful", cost: [2], summary: "Add one die to related Social pools." },
            { name: "Stunning", cost: [4], summary: "Add two dice to related Social pools." },
            { name: "Semblance of the Methuselah", cost: [1,2], summary: "With an appearance strikingly similar to a methuselah, gain one die on rolls to impress, intimidate or attract attention from those who recognize your face. May also grant status or additional dice when meeting the methuselah they resemble." },
            { name: "Famous Face", cost: [1], summary: "Appear as someone famous and gain two dice in social tests where this works to your benefit. Take a two-dice penalty when trying to hide in a crowd or avoid recognition." },
            { name: "Ingénue", cost: [1], summary: "Appear innocent and blameless; add two dice to any rolls related to avoiding suspicion or deflecting blame (Storyteller’s discretion)." },
            { name: "Remarkable Feature", cost: [1], summary: "Possess a rare, memorable feature (e.g., eye color, complexion). Add two dice to social interactions with strangers, but take a one-die penalty to disguise yourself." },
            { name: "Up All Night", cost: [2,4], summary: "Treat Humanity as one higher (max 10), or two dots higher if taken at four dots, when using Blush of Life, eating, drinking, or sexual intercourse." },
            { name: "Naamah", cost: [2], summary: "When you have a Stain or Humanity 5 or lower, suffer no penalties to seduction pools and automatically gain Beautiful. If you already have Beautiful, gain Stunning instead. While under the Looks effect, you can have sexual intercourse and may enjoy it. Nosferatu with this Merit add two dice to Obfuscate pools to resist supernatural detection instead of gaining Beautiful." },
            { name: "Unblemished Rose", cost: [1], summary: "While you have no damaged Health or Willpower, automatically gain Blush of Life and Beautiful. If you already have Beautiful, gain Stunning instead." },
        ],
        flaws: [
            { name: "Ugly", cost: [1], summary: "Lose one die from related Social pools." },
            { name: "Repulsive", cost: [2], summary: "Lose two dice from related Social pools." },
            { name: "Stench", cost: [1], summary: "Breath and body odor are supernaturally foul. Lose one die from seduction and similar Social pools, and lose two from Stealth pools unless upwind." },
            { name: "Transparent", cost: [1], summary: "Unable to lie due to a terrible poker face or urge to be truthful. Lose one die in any pools requiring Subterfuge, cannot take any dots in Subterfuge." },
            { name: "Unblinking Visage", cost: [2], summary: "Treat Humanity as two lower (Min 0) when using Blush of Life, eating, drinking, or sexual intercourse." },
            { name: "Demonic Countenance", cost: [1], summary: "When you lose Humanity you gain a permanent demonic feature. Difficulties to hide these features are increased by 1 for each, and you get a -1 Die penalty to a specific Skill. Features and penalty stay even if Humanity is regained." },
            { name: "Theriocephaly", cost: [2], summary: "Your head is transformed into that of an animal. Difficulties to hide your countenance are increased by 2, but you gain a free Specialty related to the transformation. Not mutually exclusive with positive Looks Merits." },
            { name: "Perculiarly off-putting", cost: [1,2], summary: "You're not bad looking, but a specific Clan finds you repulsive. Lose two dice from all Social Pools when conversing with the chosen Clan. Positive Looks Merits have no effect on the chosen Clan. Only Nosferatu and Hecata may purchase this as a two-dot flaw." },
        ],
    },
    {
        title: "🏠 Haven",
        merits: [
            { name: "Haven", cost: [1, 2, 3], summary: "secure homebase, 1 - apartment, 3 - big building" },
            { name: "Hidden Armory", cost: [1], summary: "weapons and armor in your haven" },
            { name: "Cell", cost: [1], summary: "you can imprison people in your haven" },
            { name: "Watchmen", cost: [1], summary: "mortal security guards" },
            { name: "Luxury", cost: [1], summary: "+2 Dice on Social rolls in your haven, they can be illegally obtained." },
                { name: "Library", cost: [1,2,3], summary: "Each dot of this merit contributes to dice rolls for one Academics, Investigation or Occult specialty. Small havens are limited to one dot." },
                { name: "Location", cost: [1], summary: "The place in which this haven resides gives a +2 dice bonus (or +2 enemies Difficulty) on relevant rolls from either Chasse or base Haven rating. If this does not work, with the Storyteller the player can craft a custom bonus. Example, living in the heart of downtown allows the character to have a +2 bonus to etiquette rolls to pick up local rumors." },
                { name: "Postern", cost: [1,2,3,4,5], summary: "The haven has some kind of secret exit that allows them a safe passage out. For each dot of this merit add one die to pools of evasion or escaping surveillance near the haven." },
                { name: "Security System", cost: [1,2,3,4,5], summary: "For each dot of this merit, add one die to pools to resist unwelcome guests into the haven." },
                { name: "Surgery", cost: [1], summary: "Add two die to relevant pools for relevant tests performed in havens." },
                { name: "Warding", cost: [1,2,3,4,5], summary: "This haven possesses some type of magic warding that repels supernatural entities. Each dot of this merit adds one die to pools to resist supernatural scrying and whatever else the Storyteller allows." },
                { name: "Holy Ground", cost: [1], summary: "The haven has significance to the character's cult, granting them the ability to call upon a large group of cultists to protect their haven once per story." },
                { name: "Shrine", cost: [1,2,3], summary: "A shrine is present in the haven, adding a bonus equivalent to the dots in searching, preparing or otherwise obtaining Ritual or Ceremony ingredients." },
                { name: "Business Establishment", cost: [2,3,4], summary: "The haven is rented out to a business or is run as a business by the Kindred themselves. This gives both benefits and drawbacks, such as a ready stream of income but also being very much on the grid and local enforcement being aware of the location. This reduces the Haven’s base dots by one for pools involving the Haven’s privacy and defenses against either (pick one) financial or criminal intrusions. Dots in this merit roughly equal Resources but do not stack onto existing Resources for the character." },
                { name: "Furcus", cost: [1,2,3], summary: "The haven is located on veins of the earth or a frayed spot in the Veil. Each dot in this merit adds one die to Rituals or Ceremony dice pools used at the furcus." },
                { name: "Machine Shop", cost: [1,2,3,4,5], summary: "Each dot of this merit adds one dice to the pool for Craft rolls. It also adds this to other tests related to building, repairing, or disassembling machinery or equipment." },
                { name: "Mobile Shelter", cost: [1,2,3], summary: "Your haven is mobile, allowing you to take it with you in some way and still remain secure. A one dot Haven is small and portable, like a Sunbag with some camping amenities, a two-dot would be something like a small car or pop-up shelter, while a three-dot would be a large van or RV. The security of a Mobile Haven's base rating is partially gained primarily from its mobile nature, rather than being as secure as an equivalent structure." },
                { name: "Nightspot", cost: [1,2,3,4,5], summary: "This Haven is known to the broader society of Kindred in the area, and functions as a place of interest. For each dot in this Background, add a die to convince others to hold functions and events at your establishment." },
                { name: "Regular", cost: [1,2,3], summary: "You have some regulars that can act as equivalent dots in Allies,Contacts or Fame once per Story." },
                { name: "Terrific Acoustics", cost: [1,2], summary: "Your Haven features good acoustics. Add 1 die to all Performance-pools to sing or play musical instruments for each dot in this addon." },
                { name: "Watering Hole", cost: [1,2], summary: "This Haven has a large gathering of Kine. It serves as a location with an equivalent of twice this Background's rating of Herd, which anyone in attendance can use." },
        ],
        flaws: [
            { name: "No Haven", cost: [1], summary: "you don't have a home" },
            { name: "Haunted", cost: [1], summary: "ghostly presence in your haven" },
            {
                name: "Creepy",
                cost: [1],
                summary: "your haven looks like the den of a serial killer, neighbors might phone in a tip to the police",
            },
            { name: "Compromised", cost: [2], summary: "your haven is on a watchlist" },
                { name: "Shared", cost: [1,2], summary: "The haven is not entirely owned by the character, instead being shared with other Kindred or having a Kindred landlord. This does not need to be taken by Coteries, as that only has as many problems as they make mutually in play." },
                { name: "Total Eyesore", cost: [1], summary: "Your haven is particularly unpleasant to look at, even if it's otherwise completely functional and even comfortable. Toreador always suffer from their Clan Bane whenever it's in their sightlines, and serious discussion or Social Pools needed for it, suffer a two dice penalty, as those present are distracted by peeling wallpaper, a terrible smell, or gaudy decorations." },
        ],
    },
    {
        title: "💰 Resources",
        merits: [
            {
                name: "Resources",
                cost: [1, 2, 3, 4, 5],
                summary: "wealth & income, 1 - you can afford basics, 5 - you can afford anything money can buy",
            },
            {
                name: "Check the Trunk",
                cost: [1],
                summary: "Get easy access to an armory or tools; none of the items can be more valuable than Resources 2",
            },
            {
                name: "Side Hustler",
                cost: [2],
                summary: "Once per session they can get their hands on an item, information, or access to an event as if they had two dots in the related Resources, Contacts, or Influence.",
            },
                {
                    name: "Masterwork",
                    cost: [2,3,4,5],
                    summary: "You have a piece of art that isn't just valuable, it accumulates value. This work can be sold for a number of Dots in Resources equal to the Masterwork's rating, minus one. At the end of each Story, you may roll dice equal to the number of dots in this Merit. On a Crit increase the number of dots in the associated masterwork by 1, up to 5. Additionally if a sufficiently long time passes, such as fifty years, the rating increases by 1 automatically, as age tends to make such works more valuable."
                },
        ],
        flaws: [{ name: "Destitute", cost: [1], summary: "poor & no income" }],
    },
    {
        title: "🩸 Feeding",
        merits: [
            { name: "Bloodhound", cost: [1], summary: "smell resonance in mortal blood" },
            {
                name: "High-functioning addict",
                cost: [1],
                summary: "add a die to one category of pool (choose once) when the last person you fed from was on your drug",
            },
            { name: "Iron Gullet", cost: [3], summary: "able to feed on rancid blood" },
            { name: "Vessel Recognition", cost: [1], summary: "With a Resolve + Awareness test at Difficulty 2 they can tell if a mortal has been fed on recently. A critical win lets them sense if the feed is recurring, meaning there is a chance it’s a herd member." },
            { name: "Organovore", cost: [2], summary: "Slake only by consuming human flesh and organs." },
            { name: "Vein Tapper", cost: [1], summary: "Finding the act of feeding to be personal, they go out of their way to feed from the unaware, drugged or unconscious victims." },
            { name: "Faith Drinker", cost: [2], summary: "Slake 1 additional Hunger from those who are actively religious. Feeding on those with True Faith slakes twice as much Hunger. Cannot reduce Hunger below zero. If multiple effects would allow you to slake an additional point of Hunger, choose the one and ignore the rest." },
            { name: "Gratifying Predation", cost: [1], summary: "When you successfully hunt in accordance to your chosen Predator Type, you also restore 1 Willpower." },
            { name: "Courser", cost: [1,2], summary: "Supernaturally acute sense of smell for Animals and their Blood. Add 1 bonus die to any olfactory pools to track an animal's scent, or 2 dice if they're bleeding. Bonus is increased by 1 more die if taken as a two-dot Merit." },
            { name: "Prey Specialization", cost: [2,4], summary: "For every two dots in this Merit choose a specific type of prey. You get +1 bonus die to any rolls made to hunt that prey." },
            { name: "Solitary Hunter", cost: [3], summary: "When you hunt down and feed from prey on your own, slake 1 additional Hunger. Cannot reduce Hunger below zero." },
            { name: "Efficient Metabolism", cost: [4], summary: "For every 2 Hunger you slake, slake 1 more. Cannot reduce Hunger below zero. Cannot be taken with Solitary Hunter or any other Merit that slakes bonus Hunger." },
            { name: "Prey on the weary", cost: [1], summary: "When you slake at least 2 Hunger from someone who has a fully marked Willpower Tracker or a Compulsion, you always gain an Intense Phlegmatic Resonance." },
            { name: "Romantic Duet", cost: [1], summary: "When you slake at least one Hunger from a vessel that's simultaneously being fed from by another Kindred, you slake an additional point of Hunger. If multiple effects would allow you to slake additional Hunger, choose one and ignore the rest. If the Kindred feeding with you is your Obsession they also benefit from this Merit's effect." },
            { name: "Tormentor", cost: [2], summary: "When you deal Superficial Willpower Damage to someone who has a Compulsion, or a non-Kindred who has a physical injury, you may remove one of your own Compulsions." },

        ],
        flaws: [
            { name: "Prey Exclusion", cost: [1], summary: "Unable to feed from a certain group and take Stains as if breaking a Chronicle Tenet when they do." },
            { name: "Methuselah's Thirst", cost: [1], summary: "Hunger can only be slaked to 0 by Supernatural blood." },
            { name: "Farmer", cost: [2], summary: "Must spend 2 Willpower Points to feed on human blood. Ventrue may not take this." },
            { name: "Dependent", cost: [2], summary: "You rely on a single mortal for all your blood. If you feed on any mortal other than your chosen blood doll, you take a Stain. If your blood doll dies from something other than your Embrace, you take two additional Stains. While you do not have a blood doll, you do not take stains for feeding from other mortals." },
            { name: "Intermittent Fasting", cost: [2], summary: "You strive to feed no more than once per night so as to limit the burden you impose on the world. If you feed more than once on a given night, you take a Stain." },
            { name: "Deflecting Hunger", cost: [2], summary: "You can only feed from those with higher Humanity than you. Feeding from such individuals brings you calm, allowing you to gain a Phelgmatic resonance in place of what you might normally gain." },
            { name: "Sacrificial Sustenance", cost: [2], summary: "Your faith in the Outer Dark has perverted your tastes. You must spend a point of Willpower for each Hunger slaked from anyone other than your Touchstones." },
            { name: "Connoisseur", cost: [2], summary: "You slake one less Hunger from blood that doesn't have an Intense or Acute Resonance, and your Hunger can only be fully Slaked by draining a vessel with a Dyscrasia." },
            { name: "Dead Palette", cost: [2], summary: "You cannot taste or gain a Resonance, and by extension cannot benefit from them. This flaw cannot be taken if you have Bloodhound or Connoisseur." },
            { name: "Glutton", cost: [2], summary: "Your Hunger can only be fully slaked when consuming at least half your weight in the flesh and blood of other supernatural creatures." },
            { name: "Ravenous Thirst", cost: [2], summary: "Your Hunger cannot be reduced below 2 without draining and killing a Mortal or Supernatural creature." },
            { name: "Taste of the Kill", cost: [2], summary: "You refuse to drink from anyone that is helpless or unable to defend themselves. Whenever you feed on one of these individuals you take a point of Aggravated Willpower damage for each Hunger slaked." },
            { name: "Narrow Appetence", cost: [1], summary: "Pick a specific Resonance when you take this flaw. You slake one less Hunger from blood that doesn't match your chosen Resonance." },
            { name: "Cormorant", cost: [1,2], summary: "When you drink, you always try to do it deeply. When you Slake at least 1 Hunger, you must pass a Willpower Test; Difficulty 2 (or 4 if this is taken as a 2-dot flaw), or you will instead overfeed." },
            { name: "Organovore", cost: [2], summary: "your hunger demands human flesh and organs" },
            { name: "Addiction", cost: [1], summary: "-1 die on all pools if the last person you fed from wasn't on your drug" },
            { name: "Hopeless Addiction", cost: [2], summary: "-2 dice on all pools if the last person you fed from wasn't on your drug" },
        ],
    },
    {
        title: "🕰 Keeping up with the times",
        merits: [],
        flaws: [
            { name: "Living in the Past", cost: [1], summary: "you have outdated views & convictions" },
            { name: "Archaic", cost: [1], summary: "Technology skill stuck at 0" },
        ],
    },
    {
        title: "🌙 Mythic",
        merits: [
            { name: "Eat Food", cost: [2], summary: "Can consume food but still with no nourishment." },
            { name: "Cold Dead Hunger", cost: [3], summary: "Add two dice to resist Hunger frenzy." },
            { name: "Pack Diablerie", cost: [2], summary: "Will always be the one to take the soul unless they otherwise choose during Diablerie. If they help another consume the soul, they gain 5 experience points to spend as if they'd committed the Diablerie themselves." },
            { name: "Luck of the Devil", cost: [4], summary: "Once per session when misfortune occurs it can be redirected towards someone close to them for the victim to take the fall." },
            { name: "Nuit Mode", cost: [2], summary: "The Kindred’s body does not revert to its death-state each night, enabling them to keep new haircuts and body modifications. Can mend these changes anytime as if they were Aggravated damage. Does not work for characters with BP higher than 1." },
            { name: "Twice Cursed", cost: [2], summary: "Take the Clan’s variant Bane in addition to the regular Bane. The Storyteller can prohibit this flaw if the second Bane wouldn’t mesh with the chronicle." },
            { name: "Early Riser", cost: [1], summary: "Always awaken the moment the sun sets, regardless of Humanity rating." },
            { name: "Ishtar's Sweet Sap", cost: [2], summary: "Your blood carries properties associated with the goddess Ishtar. Anyone who drinks at least one Rouse Check worth of your Vitae adds +1 Bonus Die to their pools to create art or sexually satisfy others. You also gain this bonus when you Blood Surge those same pools." },
            { name: "Tempered Will", cost: [3], summary: "Always aware when someone is attempting to use Dominate or Presence against them. May add two additional dice to resistance pools once per session, which can only be taken by those with no dots in Dominate or Presence." },
        ],
        flaws: [
            { name: "Folkloric Bane", cost: [1], summary: "Take Aggravated Damage when touching a specific object rooted in vampire mythos of what harms them, example Silver." },
            { name: "Folkloric Block", cost: [1], summary: "Must spend Willpower or move away from a specific object vampires are known to fear in Vampire Mythos, example Holy Symbols." },
            { name: "Stigmata", cost: [1], summary: "Bleed from wounds on the hands, feet, and forehead when at Hunger 4." },
            { name: "Stake Bait", cost: [2], summary: "When staked they meet Final Death." },
            { name: "Starving Decay", cost: [2], summary: "When their Hunger is 3 or higher their body shrivels and decays. Take a two-dice penalty to Physical tests, and social interactions with mortals, this Flaw can risk the Masquerade." },
            { name: "Famished", cost: [1], summary: "When you reach Hunger 4 you become thin and desiccated with your skin and flesh pulled tight against your bones, and your muscles and organs atrophying to almost nothing. While this doesn't affect your physical abilities, it is almost impossible to hide, as even the slimmest or slightest built Kindred become so incredibly thin that it appears they have barely any interior muscles or organs at all." },
            { name: "Permanent Fangs", cost: [1], summary: "You cannot retract your fangs, making it impossible to hide them. This may contextually reduce Dice Pools by 1, but may also, more rarely, increase certain Dice Pools by 1." },
        ],
    },
    {
        title: "👺 Mask",
        merits: [
            { name: "Mask", cost: [1, 2], summary: "fake identity with fake documents, lv2 can pass background checks" },
            { name: "Zeroed", cost: [1], summary: "all your real records are purged, you officially don't exist" },
            { name: "Cobbler", cost: [1], summary: "You can make or source masks for others" },
        ],
        flaws: [
            { name: "Known Corpse", cost: [1], summary: "others know you're dead" },
            { name: "Known Blankbody", cost: [2], summary: "Certain governments / organizations know you're a vampire" },
        ],
    },
    {
        title: "🗣 Linguistics",
        merits: [{ name: "Linguistics", cost: [1], summary: "fluently speak another language" }],
        flaws: [{ name: "Illiterate", cost: [2], summary: "Can't read or write, Academics and Science capped at 1" }],
    },
    {
        title: "🧛 Kindred",
        merits: [
            { name: "Mawla", cost: [1, 2, 3, 4, 5], summary: "kindred mentor to advise or help you" },
            { name: "Status", cost: [1, 2, 3, 4, 5], summary: "positive reputation within a faction" },
            { name: "Untouchable", cost: [5], summary: "Once per story they are able to escape all official punishment for a crime that would otherwise see them destroyed." },
                { name: "City Secrets", cost: [1,2,3], summary: "This grants knowledge about the city’s Kindred power structure. If this secret is about mortal business it’s only a way to explain Influence. This information can be sold at a high price, but its value lies in protection as the people involved may not want this information sold off and will do their best to keep you happy, for a time anyway. This can only be taken at a maximum of three times with each being a different secret." },
                { name: "Two Face", cost: [1], summary: "You cultivate trust and attachment, but know when best to turn practiced barbs towards those same individuals if needed. When you enter Social Combat with an individual that trusts you, any Specialties you have add +2 Bonus Dice, on top of any other bonuses." },
                { name: "Fear Monger", cost: [3], summary: "When you get 5 or more Successes on any Dice Pool that includes Intimidation, the next Social Pool you make in the same scene gets an additional Bonus Die." },
                { name: "Reputation", cost: [1,2,3,4], summary: "For each dot in this Background, you gain a trait that directly impacts your Social pools whenever it comes up, positively or negatively. Examples of a reputation include things such as Reliable, Deadeye, Cunning, or Loyal. Add +1 Bonus Die to Social Pools made in line with your reputation, or in regard to it. However you suffer a -1 Die penalty to Social Pools made against your reputation." },
        ],
        flaws: [
            { name: "Adversary", cost: [1], summary: "kindred enemy" },
            { name: "Suspect", cost: [1], summary: "bad reputation within a faction, -2 on Social tests with them" },
            { name: "Shunned", cost: [2], summary: "despised by a faction" },
            {
                name: "Dark Secret",
                cost: [1, 2],
                summary:
                    "You have a dark secret, like owing a debt to bad people or having escaped a blood hunt for masquerade breaching in another city",
            },
                { name: "Prestation Debts", cost: [1], summary: "They owe other Kindred boons, even if these boons are paid off the Kindred lords over them. The Boon-owning Kindred keeps a one-die bonus in Social combat against the one who owes it." },
                { name: "Kalokagathia", cost: [1], summary: "Beauty may be in the eye of whoever beholds it, but you equate what you behold with qualities beyond mere looks, thinking skin deep appearances provide insight to a person's quality of character. Those who have a positive Looks Merit, such as Beautiful or Stunning, gain an additional +1 Bonus Die in any Social and Discipline Pools they use against you. Additionally you cannot attempt to make empathetic or Insight-based rolls on characters with negative Looks Flaws, such as Ugly or Repulsive." },
                { name: "Pariah", cost: [2], summary: "You've been made into an outcast within the Domain, and everyone regards you with little favor and gives very little leeway or benefit of the doubt. You cannot gain official titles within the Domain and cannot buy positive Status, Fame, or Reputation, except in regards to others who are also Pariahs." },
        ],
    },
        {
            title: "🐾 Bestial",
            merits: [
                { name: "Frenzy's Catharsis", cost: [1], summary: "After you Frenzy for at least one Scene, choose Physical, Social, or Mental. Add 1 die to all pools of the chosen type for the rest of the night." },
                { name: "Inhuman Advisor", cost: [2], summary: "When you reach or start a scene at Hunger 4 or 5, your Beast will give you a Desire for the scene. All Dice Pools made towards achieving this desire get +2 Bonus Dice. This bonus is increased to +3 at Hunger 5." },
                { name: "Hunger's Bargain", cost: [2,3,4], summary: "When you slake at least one Hunger, add +1 Bonus Dice to resist Frenzy for the remainder of the scene. If taken at four dots increase the bonus to +2 Bonus Dice." },
                { name: "Predatory Eloquence", cost: [3], summary: "You add +1 Bonus Dice to any Social dice pools made while Hunting, your predatory nature shining through as an allure, or warning, of imminent danger." },
                { name: "Boon of Artemis", cost: [2], summary: "Your Beast desires as you do when you're hungry enough, and prods you towards the crimson indulgence that both of you seek. While at Hunger 4 or higher when you perform a Quick Hunt, add two additional dice to the roll, however any Criticals on a quickhunt are always considered Messy." },
                { name: "Capricious Purgation", cost: [2], summary: "Whenever you rid yourself of a compulsion through an effect other than it naturally ending through passage of time, you recover a point of Superficial or Aggravated Willpower." },
                { name: "Cajolded Beast", cost: [2], summary: "While in Frenzy, you may make a Willpower Test; Difficulty equal to your unmarked Humanity, to assume control for one turn. This Test cannot be made if you have any Stains." },
                { name: "Fight or Flight", cost: [2,3,4], summary: "When taking this Merit pick Terror or Fury Frenzy. Add +1 bonus die to resist the chosen Frenzy, but you suffer a -1 die penalty to resist the other. This bonus and penalty is doubled if this Merit is purchased at three dots." },
            ],
                flaws: [
                    { name: "Bestial Impulse", cost: [1], summary: "When you reach or start a scene at Hunger 4 or 5, your Beast will give you a Desire for the scene. All Dice Pools that aren't made towards achieving this desire get a -2 Dice penalty. This penalty is increased to -4 at Hunger 5." },
                    { name: "Monstrous Countenance", cost: [1], summary: "When you lose Humanity you gain a permanent animal feature. Difficulties to hide these features are increased by 1 for each that you have and give you a -1 Die penalty to a specific Skill. Even if you somehow gain the lost Humanity back, the feature stays." },
                    { name: "Animal Antipathy", cost: [1,2], summary: "For each dot in this Flaw choose a type of Animal, such as Cat, Canid, Bird, or Rodent. That Animal will never converse with you and is completely immune to your powers of Animalism. In certain cases they will also attack you unprovoked." },
                    { name: "Wraking Hunger", cost: [1,2], summary: "Your Hunger directly wracks your physical body. While your Hunger rating is higher than your Stamina rating, your Physical Attribute pools cannot exceed your current Hunger. If your Stamina is 4 or higher this Flaw can only be purchased at one dot." },
                    { name: "Doomed Romantic", cost: [2], summary: "You feel the weight of your waning Humanity far more than others. Whenever you would make a Remorse Check at the end of a Session, you first gain another Stain." },
                    { name: "Hopeless Dependant", cost: [2], summary: "You're less comfortable whilst all on your own, and so seek company with your Beast. Whenever you're in a Scene without any other Kindred—even enemy Kindred—your Difficulties to resist Frenzy are increased by your Bane Severity." },
                    { name: "Kinder Aberrance", cost: [2], summary: "While your Humanity is at 6 or above, you have a -1 die penalty to any pools made to Manipulate or lie to Humans, if your Humanity is at 5 or below this penalty applies to Kindred instead." },
                ],
        },
    {
        title: "⛓️ Bonding",
        merits: [ 
            { name: "Bond Resistance", cost: [1,2,3], summary: "Add one die to resist Blood Bonds per level of this merit." },
            { name: "Short Bond", cost: [2], summary: "Bonds decrease by two levels each month if not reinforced." },
            { name: "Unbondable", cost: [5], summary: "Unable to be bonded." },
            { name: "Bonds of Fealty", cost: [3], summary: "Your Dominate powers do not require eye contact on those bound to you. (Requires Dominate.)" },
            { name: "Enduring Bond", cost: [1], summary: "The bonds you create last longer, only weakening every other month." },
            { name: "Sin Bound", cost: [2], summary: "When someone of lower Humanity than you drinks your blood, they move two steps towards a bond, rather than one." },
            { name: "Shackle Eater", cost: [2], summary: "When you slake at least 1 Hunger by drinking the blood of the vampire you’re Blood Bound to, slake 1 additional Hunger (cannot reduce Hunger below zero)." },
            { name: "Deeper Bond", cost: [2], summary: "When an animal drinks at least a Rouse Check worth of your blood, they move two steps towards a bond with you, rather than one. Certain powers of Bonding (e.g., choosing a Famulus) take only two nights, not three." },
        ],
        flaws: [
            { name: "Long Bond", cost: [1], summary: "blood bonds on you take longer to wane" },
            { name: "Bond Junkie", cost: [1], summary: "lose one die on all actions that go against your blood bond" },
            { name: "Bondslave", cost: [2], summary: "blood bonds on you are created on the first drink" },
            { name: "Animal Vagary", cost: [2], summary: "Your Blood suffers from a strange quirk that prevents it from bonding sentient Mortals, Kindred, and most other Supernatural Creatures. You can only create Blood Bonds with animals." },
            { name: "Manille Inversee", cost: [2], summary: "The bonding properties of your blood are treacherous. When someone drinks your Vitae, you gain a step towards a Blood Bond to them, instead of them to you. This can bond you even to non Kindred, such as animals or Mortals. This effect occurs even for Tremere. You cannot take unbondable with this Merit." },
        ],
    },
    {
        title: "👱 Mortals",
        merits: [
            { name: "Retainer", cost: [1, 2, 3], summary: "loyal mortal servant, 1 - weak lowlife, 3 - skilled professional retainer" },
            { name: "Allies", cost: [1, 2, 3, 4, 5], summary: "group of mortals to advise or help you" },
            { name: "Contacts", cost: [1, 2, 3], summary: "mortals who provide information or valuable items" },
            {
                name: "Herd",
                cost: [1, 2, 3, 4, 5],
                summary:
                    "group of mortals who let you feed, 1 - a couple of people, 5 - large group and you can freely pick desired resonances",
            },
            {
                name: "Fame",
                cost: [1, 2, 3, 4, 5],
                summary: "1 - a select subculture loves you, 5 - you are well known and loved globally",
            },
        ],
        flaws: [
            { name: "Stalkers", cost: [1], summary: "unwanted mortal followers" },
            { name: "Enemy", cost: [1, 2], summary: "group of mortals that want to harm you" },
            { name: "Obvious Predator", cost: [2], summary: "mortals are scared of you, can't keep Herd" },
            {
                name: "Infamy",
                cost: [1, 2, 3, 4, 5],
                summary: "1 - a select subculture despises you, 5 - you are well known and hated globally",
            },
        ],
    },
]

export type RequirementFunction = (character: Character) => boolean

export type Loresheet = {
    title: string
    summary: string
    source: string
    requirementFunctions: RequirementFunction[]
    merits: MeritOrFlaw[]
}

// Requirement function generators
const isClan = (clan: ClanName) => (character: Character) => character.clan === clan

export const loresheets: Loresheet[] = [
    {
        title: "The Bahari",
        summary:
            "Adherents to the Path of Lilith who seek enlightenment through pain and conflict. They have low compassion, engage in fleshly pleasures and form strict parenthood relationships over lesser Kindred.",
        source: "Core V5 p382",
        requirementFunctions: [],
        merits: [
            { name: "Dangerous Reputation", cost: [1], summary: "Once per story, add 2 dice to intimidation against Caine-Worshippers." },
            {
                name: "Ritual Scarification",
                cost: [2],
                summary: "Once per session, scar yourself with 1 aggravated dmg to recover 1 aggravated willpower.",
            },
            {
                name: "Sacrifice the Children",
                cost: [3],
                summary: "If you diablerize your childe, add 3 dice to your Resolve + Humanity + Blood Potency roll to absorb disciplines.",
            },
            {
                name: "The Womb's Blood",
                cost: [4],
                summary: "Once per story, drink blood from an uterus to receive +2 Stamina or Resolve until dawn.",
            },
            {
                name: "First-Cursed",
                cost: [5],
                summary:
                    "Walk in first hour of daylight in the morning and before sunset, engage in intercourse without Blush of Life, gain 'Obvious Predator' flaw, Slander social tests against you have -1 difficulty, Vampires using Auspex against you have half Resolve and Willpower until end of scene.",
            },
        ],
    },
    {
        title: "Theo Bell",
        summary:
            "Theo is a former Camarilla lapdog who defected to the Anarch after killing Hardestadt at the Convention of Prague. He inspired countless Brujah to overthrough Camarilla Princes to form Anarch bastions and now acts as liasion between high-status Camarilla and Anarch.",
        source: "Core V5 p383",
        requirementFunctions: [],
        merits: [
            {
                name: "Rebel Cell",
                cost: [1],
                summary:
                    "Once per story, command rebellious mortals (3 dot Ally equivalent) to do one dangerous task for you without your presence.",
            },
            {
                name: "True Anarch",
                cost: [2],
                summary: "Get 2 automatic successes on any Investigation roll concerning Vampires who defected to the Anarch Movement.",
            },
            {
                name: "Contact Information",
                cost: [3],
                summary: "Get a message to Theo Bell. Effects on the game depend on the Story Teller.",
            },
            {
                name: "Bell's Circle",
                cost: [4],
                summary: "Gain Theo Bell as a 5 dot Mawla, but your association with him also has drawbacks.",
            },
            {
                name: "Sect Neutrality",
                cost: [5],
                summary:
                    "You have a small group of loyal Brujah followers who you can influence in any direction (Camarilla, Anarch, independent group). Until they rebel against you, spend 5 dots among Contacts, Haven (safe houses), Mawla and Retainers.",
            },
        ],
    },
    {
        title: "Cainite Heresy",
        summary:
            "Members of the Cainite Heresy believe Caine was the true messiah and Christ was his Second Coming. Vampires are his angels on Earth.",
        source: "Core V5 p384",
        requirementFunctions: [],
        merits: [
            {
                name: "Let He Who Hath Understanding",
                cost: [1],
                summary:
                    "Once per story, the Storyteller will give you one free clue to investigate the Heresy's plans now or in the past.",
            },
            {
                name: "Hand of the Heresy",
                cost: [2],
                summary:
                    "Take a total of three dots among Allies, Herd, Mawla or Retainers to represent your role in the city's Heresy group. Also take the Dark Secret (Heresy) flaw.",
            },
            { name: "Counter-Inquisition", cost: [3], summary: "Smell True Faith on humans" },
            {
                name: "Red Celebrant",
                cost: [4],
                summary: "Once per story, perform an elaborate ritual to trigger something akin to frenzy in a group of humans.",
            },
            {
                name: "The One Named in Prophecy",
                cost: [5],
                summary:
                    "You're an essential member of the Heresy. Once per story, use this fact to determine the winner of a Social conflict if you can make a plausible argument for it.",
            },
        ],
    },
    {
        title: "Carna",
        summary:
            "Carna is a powerful Tremere who has formed her own House to oppose the Tremere Pyramid. She fights for modernization and women's rights.",
        source: "Core V5 p385",
        requirementFunctions: [],
        merits: [
            { name: "Embrace the Vision", cost: [1], summary: "When around members of House Carna, gain 1 die to all Willpower tests." },
            {
                name: "The Rebel Trail",
                cost: [2],
                summary:
                    "When you're at risk of becoming Blood Bound, make a Willpower test against the Blood Potency of the ingested vitae to ignore it.",
            },
            {
                name: "Unorthodox Rituals",
                cost: [3],
                summary:
                    "Once per story, perform a known ritual without expending blood. On a messy critical you become deranged in some way until the end of the story.",
            },
            {
                name: "Reimagined Bond",
                cost: [4],
                summary:
                    "Form mutual Blood Bonds between yourself, your partner and Carna (even though she's absent) when having sex. Lasts until end of the story.",
            },
            {
                name: "Book of the Grave-War",
                cost: [5],
                summary:
                    "Gain one automatic success on all Occult tests regarding Gehenna and breaking shackles binding Vampires to their elders. Become immune to Blood Bonds. Tremere seek to destroy you and the book.",
            },
        ],
    },
    {
        title: "The Circulatory System",
        summary: "The Circulatory System is a human trafficking ring looking for the tastiest blood and exploring Resonances.",
        source: "Core V5 p386",
        requirementFunctions: [],
        merits: [
            {
                name: "Tap into the System",
                cost: [1],
                summary: "Once per story, request specific blood vessels from the Circulatory System.",
            },
            {
                name: "Little Black Book",
                cost: [2],
                summary:
                    "Gain one die to Investigation, Alchemy, Medicine and Science rolls regarding tracking down or testing specific blood. Research new 2 dot and 3 dot thin-blood Alchemy at double speed.",
            },
            {
                name: "Farm Upstate",
                cost: [3],
                summary:
                    "You know about a farm of mortals with potent blood (Equivalent to Herd 4). You can feed on them once a week or attack the farm and take full control.",
            },
            { name: "Secure Transit", cost: [4], summary: "Gain access to armed, secure transport vans." },
            {
                name: "Blood Sommelier",
                cost: [5],
                summary:
                    "Add 2 dice to any test to discover the Resonance of blood and select 3 dots of Contacts, Allies or Haven Merits to explain your knowledge. Once per story, ask the Story Teller the properties of the most valuable vessel's blood.",
            },
        ],
    },
    {
        title: "Convention of Thorns",
        summary:
            "You have deep historical knowledge of the Convention of Thorns, where the Camarilla was founded and the Traditions were set in stone.",
        source: "Core V5 p387",
        requirementFunctions: [],
        merits: [
            {
                name: "Thorns Historian",
                cost: [1],
                summary:
                    "You know details of the many small agreements made at the Convention of Thorns and can use them to apply legal pressure. Once per story, ask the Storyteller for a piece of known information regarding the convention.",
            },
            {
                name: "Tradition Master",
                cost: [2],
                summary:
                    "Once per Chronicle, exercise fringe laws in domains where ruling clans may be sympathetic to unaccepted Traditions of Thorns.",
            },
            {
                name: "Convention Secrets",
                cost: [3],
                summary:
                    "Gain 1 die on Social tests involving Kindred who were present at the Convention. You know secrets that may be worth a Major Boon to a powerful vampire. Once the story, ask the Storyteller for the name of a kindred who needs your knowledge.",
            },
            { name: "Prospective Justicar", cost: [4], summary: "You have powerful support for becoming the next Justicar of your clan." },
            {
                name: "New Traditions",
                cost: [5],
                summary:
                    "You can propose a new tradition or alteration to an existing one. Your voice will be heard by the Camarila's inner circle without prior judgement.",
            },
        ],
    },
    {
        title: "The First Inquisition",
        summary:
            "You have special information on the First Inquisition that burned many vampires in the middle ages, and you can use that knowledge to manipulate or avoid the Second Inquisition of current times.",
        source: "Core V5 p388",
        requirementFunctions: [],
        merits: [
            {
                name: "Mistakes of the Past",
                cost: [1],
                summary: "Once per story, ask the Storyteller for one piece of information regarding the First Inquisition.",
            },
            {
                name: "Names of the Guilty",
                cost: [2],
                summary:
                    "Once per story, ask the Storyteller for the name of one descendant of a traitor vampire, who sold others out to the First Inquisition, in your domain (if there is one).",
            },
            {
                name: "The Sect of St. James",
                cost: [3],
                summary: "Once per story, use an abbot connected to remnants of the First Inquisition as 4 dot Contact.",
            },
            {
                name: "The Second Act",
                cost: [4],
                summary:
                    "You have a Contact within the Second Inquisition. You have no power over them, but you can get information from them or feed them disinformation.",
            },
            {
                name: "Black Spot",
                cost: [5],
                summary:
                    "You know a place in your domain that the Second Inquisition will not enter. But what is so holy or unholy about this place that they won't dare enter?",
            },
        ],
    },
    {
        title: "Golconda",
        summary:
            "Golconda is a mythical enlightenment that vampires can supposedly reach. It is rumored to provide powerful benefits like quelling your inner beast and walking in sunlight.",
        source: "Core V5 p389",
        requirementFunctions: [],
        merits: [
            {
                name: "Seeds of Golconda",
                cost: [1],
                summary: "Once per session, ask the Storyteller if an action will jeopardize the chance of pursuing Golconda.",
            },
            {
                name: "The One True Way",
                cost: [2],
                summary:
                    "You own a pamphlet that, once per story, gives you 3 extra dice on a Social test involving the nature of Golconda.",
            },
            {
                name: "Saulot's Disciple",
                cost: [3],
                summary: "Whenever you willingly frenzy, make a note. You can automatically succeed on your next frenzy test.",
            },
            {
                name: "Satisfy the Hunger",
                cost: [4],
                summary: "Once per session, you can lower your Hunger by 1 (not below 1) without feeding.",
            },
            {
                name: "Greet the Sun",
                cost: [5],
                summary: "Once per story, walk a day in sunlight. At nightfall of that day you go into Hunger frenzy.",
            },
        ],
    },
    {
        title: "Descendant of Hardestadt",
        summary:
            "Hardestadt was the most important Ventrue for 800 years until Theo Bell killed him. He was the Ventrue founding member of the Camarilla.",
        source: "Core V5 p390",
        requirementFunctions: [isClan("Ventrue")],
        merits: [
            { name: "Voice of Hardestadt", cost: [1], summary: "You can speak over any noise and draw attention." },
            {
                name: "Supreme Leader",
                cost: [2],
                summary: "Once per story, take no penalty to your dice pool for sending people into danger.",
            },
            { name: "Ventrue Pillar", cost: [3], summary: "You always have 3 dots of Status with Ventrue." },
            {
                name: "Line to the Founders",
                cost: [4],
                summary:
                    "Once per chronicle, message one of the Camarilla's founders. If your request is important enough, they will respond.",
            },
            {
                name: "Hardestadt's Heir",
                cost: [5],
                summary:
                    "You have a signed document declaring you Hardestadt's heir. It says that when you take the name 'Hardestadt', the Camarilla will obey you and the Anarchs will swarm to take you down.",
            },
        ],
    },
    {
        title: "Descendant of Helena",
        summary:
            "Owner of the most popular Vampire nightclub who may or may not be trying to wake the Toreador Antediluvian. She's beautiful and a brilliant artist - the exemplary Toreador.",
        source: "Core V5 p391",
        requirementFunctions: [isClan("Toreador")],
        merits: [
            {
                name: "Skin-Deep",
                cost: [1],
                summary:
                    "Once per story, drop Helena's name in conversation with a Toreador or Vampire who knows her to gain 1 Status with them. Do it more to make everyone sick of you.",
            },
            {
                name: "Real Talent",
                cost: [2],
                summary:
                    "Choose one of Craft, Etiquette or Performance. Increasing this Skill costs half as many XP as usually (rounded down).",
            },
            {
                name: "Embrace the Stereotypes",
                cost: [3],
                summary:
                    "Once per story, host a party to increase your Status or Influence by two dots with an invited group. The increase lasts until the party ends.",
            },
            { name: "Divine Purity", cost: [4], summary: "Add 2 dice to all tests to avoid blame for your actions." },
            {
                name: "Succubus Club Franchise",
                cost: [5],
                summary:
                    "Open a franchise of the famous Succubus Club. While it's open, gain 2 dots to your coterie's domain's Chasse rating. Select four dots among Resources, Fame and Status among all Vampires.",
            },
        ],
    },
    {
        title: "Sect War Veteran",
        summary:
            "The Sect War was a massive clash between the Camarilla and the Sabbat from the 1990s to the early 2000s in North America. During this conflict the Sabbat murdered their way through Camarilla and Anarch domains, though they have been mostly repelled by the Camarilla by now.",
        source: "Core V5 p392",
        requirementFunctions: [],
        merits: [
            {
                name: "Survivor",
                cost: [1],
                summary: "Once per story, ask the Storyteller for a piece of information relating to the sect war in your domain.",
            },
            { name: "Active Participant", cost: [2], summary: "Take 3 dots of Status or Mawla related to your veteran status." },
            {
                name: "Trophy Kill",
                cost: [3],
                summary:
                    "Once per story, use the legend of you killing a well known Vampire during the war to bypass a contest where it might assist.",
            },
            {
                name: "No Vampire's Land",
                cost: [4],
                summary:
                    "Add 2 dots to your Domain's Portillon, add 2 dice to Streetwise, Larceny and Stealth tests in your and 2 neighboring domains regarding using hidden sanctuaries, armories, tunnel networks and side streets.",
            },
            { name: "Sect Agitator", cost: [5], summary: "Add 2 dice to all Social tests to inflame sectarian tension." },
        ],
    },
    {
        title: "The Trinity",
        summary:
            "The Trinity of Michael, Antonius and The Dracon were the leaders of Constantinople during the Golden Age where Vampires of all believes could exist in harmony. This utopia was broken apart by the Crusades, a Methusela's mania and Setite corruption, turning the Trinity against each other. Many yearn for their return to their former glory.",
        source: "Core V5 p393",
        requirementFunctions: [],
        merits: [
            { name: "Constantinople", cost: [1], summary: "Once per story, ask the Storyteller a question about Constantinople's past." },
            {
                name: "Antonius' Architecture",
                cost: [2],
                summary:
                    "Add 2 dice to any Politics test involving domain government. Once per story, mediate and calm any court debate, quashing violence with action and profundity.",
            },
            {
                name: "The Dream",
                cost: [3],
                summary:
                    "Add 1 die to any Insight test when trying to gauge another's Beast. Once per story, spend a Willpower point to allow another Vampire to re-roll up to 3 dice when resisting frenzy.",
            },
            {
                name: "The Dracon",
                cost: [4],
                summary: "Gain the Dracon as 5 dot Mawla. He can assisst you with spiritual and Discipline matters.",
            },
            {
                name: "The New Trinity",
                cost: [5],
                summary:
                    "You and two friends are prophecised to rebuild Constantinople into a new city. Once per story, remove up to 5 Stains you gained while pursuing this goal.",
            },
        ],
    },
    {
        title: "Jeanette / Therese Voerman",
        summary:
            "The Voerman sister run the second most famous Vampire nightclub, The Asylum in LA. They hate each other, despite the fact that they are secretly two personalities inhabiting the same body. They prove that Malkavians can be as inspired and prosperous as any Toreador or Ventrue.",
        source: "Core V5 p394",
        requirementFunctions: [],
        merits: [
            {
                name: "Asylum Membership",
                cost: [1],
                summary: "You never have to wait in queue to enter The Asylum and you may hunt there twice per session (Difficulty 2).",
            },
            {
                name: "Performing Monkey",
                cost: [2],
                summary: "The sisters frequently give you missions that they generously reward with boons.",
            },
            {
                name: "Jeanette's Favorite",
                cost: [3],
                summary:
                    "Gain Jeanette as a 4 dot Mawla, but only for Malkavian and Anarch dealings. She lets you use the club to host parties, lets you rest there during days and does favors for you.",
            },
            {
                name: "Therese's Favorite",
                cost: [4],
                summary: "Gain Therese as a 3 dot Mawla. She speaks up for you in any regnum and can school you in business and finance.",
            },
            {
                name: "Asylum Operator",
                cost: [5],
                summary:
                    "Run a franchise of The Asylum in your domain. As long as it is open, spend 4 dots between Haven, Herd, Resources or Chasse of your Domain. If you want, your club can be an Elysium.",
            },
        ],
    },
    {
        title: "The Week of Nightmares",
        summary:
            "The red star Anthelios heralded the Week of Nightmares, where the Ravnos Antediluvian purged its own clan and thin-blooded Vampires emerged. You witnessed and survived the mania and now watch for signs of dooms to come.",
        source: "Core V5 p395",
        requirementFunctions: [],
        merits: [
            { name: "Oral History", cost: [1], summary: "Add 3 dice to Performance tests to tell the story of the Week of Nightmares." },
            {
                name: "Ravnos Remains",
                cost: [2],
                summary:
                    "Gain 3 dots of Mawla representing a group of Ravnos as contacts. They carry news and warnings to you and can be convinced to cast mightly illusions once per story.",
            },
            {
                name: "I Was There",
                cost: [3],
                summary:
                    "Once per story, use your status as a survivor to earn a minor boon from a Kindred historian, Ravnos or occultist.",
            },
            {
                name: "The Red Star",
                cost: [4],
                summary:
                    "Once per story, you can either reduce your hunger to 2 or gain 1 die to the pools of one Discipline for a night by staring at the star Anthelios for 10 minutes.",
            },
            {
                name: "Blood of Zapathasura",
                cost: [5],
                summary:
                    "You own a small vial containing the Blood of the Ravnos Antediluvian. What happens when it is imbibed is up to the Storyteller.",
            },
        ],
    },
    {
        title: "Rudi",
        summary:
            "An Anarch representative for the oppressed minorities in Vampire society. He's close to Mortals and fights for their rights as well. Some European Princes worry that he will lead a revolt against the establishments in the near future.",
        source: "Core V5 p396",
        requirementFunctions: [],
        merits: [
            {
                name: "Newfound Rights",
                cost: [1],
                summary: "Once per story, reroll any one Skill test dice pool when striking out against the establishment.",
            },
            {
                name: "Them and Theirs",
                cost: [2],
                summary: "You can feel when a Touchstone of any member of your coterie comes under threat, but you don't feel which one.",
            },
            {
                name: "Gangrel Advocate",
                cost: [3],
                summary:
                    "Add 1 die to Social tests with Gangrel. You can organize truce meetings between Gangrel and Camarilla representatives with a Charisma + Politics test. (Difficulty set by Storyteller)",
            },
            {
                name: "The Bear Pack",
                cost: [4],
                summary:
                    "Gain the Bear Pack as 3 dot Mawla. They can get in verbal and physical fights for you. Once per story, they and you get 1 automatic success when trying to rouse Anarchs against the establishment.",
            },
            {
                name: "Rudi's Army",
                cost: [5],
                summary:
                    "You hold sway over an army of revolutionaries that you can rile up against Vampire or Mortal governments. Split 5 points among Allies, Influence and Contacts, that can be directed, but never controlled.",
            },
        ],
    },
    {
        title: "Descendant of Tyler",
        summary:
            "Tyler is the Brujah revolutionary that inspired the Anarch Movement. Tyler herself is no longer convinced that violence is the answer, but her followers still think so.",
        source: "Core V5 p397",
        requirementFunctions: [isClan("Brujah")],
        merits: [
            {
                name: "Instigator",
                cost: [1],
                summary: "Once per story, add 2 dice to a roll to persuade a mortal crowd into violent action.",
            },
            {
                name: "Champion of the Cause",
                cost: [2],
                summary: "Gain 2 dots of Status with rebels during a rebellion. Rebels come to you looking for advice or leadership.",
            },
            {
                name: "Tyler's Mercy",
                cost: [3],
                summary: "Once per story, when frenzying, take a Brujah compulsion to immediately end your frenzy.",
            },
            {
                name: "The Furores",
                cost: [4],
                summary:
                    "Once per chronicle, the Furores arm you and you gain assets, influence, and surprise 5 dot Allies. Can only be used to attempt to take down a Prince, Baron or higher status Vampire.",
            },
            {
                name: "Permanent Revolution",
                cost: [5],
                summary:
                    "You have already taken down one Sect figurehead and continue your revolution. Anarchs stop to listen to you, Brujah Anarchs follow your every command.",
            },
        ],
    },
    {
        title: "Descendant of Zelios",
        summary:
            "A great Nosferatu Architect and planner who disappeared beneath New York in 1990. He is responsible for many Nosferatu labyrinths, dungeons and prisons.",
        source: "Core V5 p398",
        requirementFunctions: [isClan("Nosferatu")],
        merits: [
            { name: "Sanctuary", cost: [1], summary: "Split 2 dots among Haven-Postern and Haven-Security System." },
            {
                name: "Saboteur",
                cost: [2],
                summary:
                    "Collapse a building with merely a hammer over the course of as many nights as the Storyteller sets. (4 for a family home, 9 for a skyscraper)",
            },
            {
                name: "On Commission",
                cost: [3],
                summary:
                    "Gain one minor boon per story from a Vampire who asks you for advice on building their Haven. You know where many powerful Vampires sleep.",
            },
            {
                name: "The Labyrinth",
                cost: [4],
                summary:
                    "You have built a great maze beneath your domain. You can't use it as Haven as it terrifies you, but you can escape into it when chased and none can pursue you.",
            },
            {
                name: "Sense the Ley Lines",
                cost: [5],
                summary:
                    "You can sense Ley Lines. Sleeping near them allows Vampires to roll 2 dice and pick the highest on their rouse check when awakening.",
            },
        ],
    },
    {
        title: "Descendant of Vasantasena",
        summary:
            "A free-will-enthusiast who preached against the Blood Bond and traditional Vampire hierarchy in the middle ages. She is a former member of the Camarilla and the Sabbat and wants to fight the Antediluvians.",
        source: "Core V5 p399",
        requirementFunctions: [isClan("Malkavian")],
        merits: [
            {
                name: "Agent of Chaos",
                cost: [1],
                summary: "Once per session, while in a chaotic situation, re-roll 1 die without spending Willpower.",
            },
            {
                name: "Hear My Words",
                cost: [2],
                summary:
                    "Once per story, provide counsel to somebody in a chaotic situation. They may re-roll 1 die in a future test within the same situation.",
            },
            {
                name: "Scent the Bond",
                cost: [3],
                summary: "Once per story, roll Resolve + Awareness (Difficulty 4) to smell the Blood Bond on a bonded and bonding Vampire.",
            },
            {
                name: "Destroy the Bond",
                cost: [4],
                summary: "Drink a mouthful of a Vampires blood and ride out a frenzy to break a Blood Bond on them.",
            },
            {
                name: "Sabbat Becomes Camarilla",
                cost: [5],
                summary:
                    "Once per story, deprogram a Vampire from their sect beliefs. To do so, completely isolate them in an atmosphere of perfumes. Once per 3 nights, roll Intelligence or Charisma + Insight. You win after achieving a number of total successes equal to twice the subject's Willpower.",
            },
        ],
    },
    {
        title: "High Clan",
        summary:
            "Even though 'High' and 'Low' clans were abolished with the formation of the Camarilla, in your domain these rules still hold to some degree. Historically, High Clans include the Lasombra, Toreador, Tzimisce and Ventrue, sometimes the Brujah and Hecata and rarely the Tremere. In other parts of the world, the Banu Haqim and Ministry are considered High Clans.",
        source: "Core V5 p400",
        requirementFunctions: [],
        merits: [
            {
                name: "Peacock",
                cost: [1],
                summary: "Once per session, reroll a single die when commanding deference from one non-titled vampire in your domain.",
            },
            {
                name: "Sway the Low",
                cost: [2],
                summary:
                    "You have bullied Low Clan Vampires equivalent to 3 dots of Mawla into loyalty to you. Gain 3 extra dice to Intimidation or Leadership against those Vampires. If you ever roll a total failure on such a test you must compensate them or they turn on you.",
            },
            {
                name: "Elevate the Low",
                cost: [3],
                summary:
                    "Once per chronicle, raise a Low Clan Vampire into High Clan status. Gain 1 die on Social tests against Low Clan Vampires when you allude to elevating them.",
            },
            {
                name: "Embraced to Rule",
                cost: [4],
                summary:
                    "Add 1 die to Leadership tests involving High Clan Vampires. Once per story, other High Clan Vampires vote for you or allow you to take a position of power unless they have personal grievances with you.",
            },
            { name: "Blessed, not Cursed", cost: [5], summary: "Once per session, spend one Willpower to ignore your Clan Bane." },
        ],
    },
    {
        title: "Low Clan",
        summary:
            "You're a member of a Clan that is considered lowly in your domain (typically those are one or more of the Gangrel, Malkavians and Nosferatu. Sometimes also Brujah and Tremere). This means many treat you as less-than, but you also have access to rebels and counter culture.",
        source: "Core V5 p401",
        requirementFunctions: [],
        merits: [
            {
                name: "Thick Hide",
                cost: [1],
                summary: "Once per story, ignore verbal attacks or provocations for a scene without rolling.",
            },
            {
                name: "Cursed with Pride",
                cost: [2],
                summary: "Once per story, gain an automatic success in a roll when incorporating your Clan Bane.",
            },
            { name: "Uncanny Kinship", cost: [3], summary: "Select 3 dots from Mawla or Statusfrom other Low Clans in the domain." },
            {
                name: "Trade Among Equals",
                cost: [4],
                summary:
                    "Select another Low Clan's Discipline. You can buy dots of that Discipline using experience points as if it was in-clan for you.",
            },
            {
                name: "Criticality Incident",
                cost: [5],
                summary:
                    "Add 1 die to all rolls for projects undermining High Clans in your domain. Once per chronicle, sacrifice 10 of your Background dots to bring down the same number of High Clan Vampires in a coup.",
            },
        ],
    },
    {
        title: "Ambrus Maropis",
        summary:
            "A well liked trend-setter among Camarilla society. Many don't know he is a Nosferatu as he uses intermediaries to interact with Princes and Barons while remaining hidden himself. At heart, he is an introverted anime & gaming nerd and a skilled hacker and software developer.",
        source: "Core V5 p402",
        requirementFunctions: [],
        merits: [
            {
                name: "True Believer",
                cost: [1],
                summary: "Gain a 1 die bonus to tests for finding shared Kindred hiding places in your city.",
            },
            {
                name: "Clandestine Information",
                cost: [2],
                summary: "Once per story, get one piece of information stored online about a mortal within 2-20 hours.",
            },
            {
                name: "Taught by the Best",
                cost: [3],
                summary:
                    "Consider Ambrus a 3 dot Mawla. He can set you up with your personal hacker for 'friend prices' or get intel on a wide array of topics like SI dealings or the current fashion trends in obscure subcultures.",
            },
            {
                name: "Back Door Panopticon",
                cost: [4],
                summary:
                    "Once per story, log into a PRISM backdoor to get two automatic successes on any Investigation involving anyone's cell activity or online presence.",
            },
            {
                name: "On Another Grid Entirely",
                cost: [5],
                summary:
                    "Gain two 2 dot Mask cover identities, gain the Zeroed merit, get 3 extra dice to resist attempts to discover your online activities or your undertakings in the mortal world.",
            },
        ],
    },
    {
        title: "Carmelita Neillson",
        summary:
            "A Vampire-journalist chronicling the stories of ancient vampires and recording the history of Kindred society. Carmelita has established many hidden libraries in hidden locations. Carmelita is hired to debrief recently awoken Methuselahs, investigate ruined temples and interpreting Sabbat scripture.",
        source: "Core V5 p403",
        requirementFunctions: [],
        merits: [
            {
                name: "The Art of Story",
                cost: [1],
                summary: "Toreadors always lend you their ear when you speak of historic lore or mythic tales.",
            },
            {
                name: "The Art of Will",
                cost: [2],
                summary:
                    "Once per session, meditate before resting for the day and pass a Resolve + Academics test of difficulty 5 to awaken with an additional point of Willpower.",
            },
            {
                name: "Neillson Library",
                cost: [3],
                summary:
                    "Serve as curator to a hidden library which serves as a 2 dot Haven with a 2 dot Library. Other Vampires meet there as well.",
            },
            {
                name: "Interview With the Methuselah",
                cost: [4],
                summary: "Once per story, ask the Storyteller to provide you a secret about one of the clans in your domain.",
            },
            {
                name: "Ancestor's Tomb",
                cost: [5],
                summary:
                    "You are tasked with guarding the resting place of one of your ancestors. While you keep it safe, once per story, call upon Carmelita for a Major Boon. If you fail to guard the tomb, there will be consequences.",
            },
        ],
    },
    {
        title: "Fiorenza Savona",
        summary:
            "A relatively freshly turned Ventrue with massive sway among the Mortals of the political and business elite. She has her hands in NGOs, the UN and the Davos elite and likes to maintain rigid power structures.",
        source: "Core V5 p404",
        requirementFunctions: [],
        merits: [
            {
                name: "On Fiorenza's List",
                cost: [1],
                summary: "Gain a Gifted Mortal Retainer (Bodyguard, Driver, Butler..) who openly spies on you for Fiorenza.",
            },
            {
                name: "Breakfast with Fiorenza",
                cost: [2],
                summary: "Once per story, meet Fiorenza. This can be lucrative or informative, if you ask the right questions.",
            },
            {
                name: "Friendly Benefits",
                cost: [3],
                summary:
                    "Gain Fiorenza as 3 dot Mawla who can provide you with insider trading tips, expensive cars or private planes or sweet-talk ruffled Ventrue for you. If you overuse or abuse this connection, she will cut you off.",
            },
            {
                name: "The Directorate",
                cost: [4],
                summary:
                    "Become Blood Bound to a shadowy Ventrue Directorate that wants you to break Fiorenza to their will. They provide you with 6 dots to spend among Contacts, Mawla and Resources.",
            },
            {
                name: "Government Motion",
                cost: [5],
                summary:
                    "Once per chronicle, Fiorenza will influence a Mortal political leader for you. This leads to you gaining 5 dice to distribute as you like among any roll involving government action.",
            },
        ],
    },
    {
        title: "Descendant of Karl Schrekt",
        summary:
            "Hardcore-traditionalist & former Camarilla Justicar. Karl was a Vampire hunter before his embrace in 1235 and has gained massive respect as ruthless and strong enforcer of the Camarilla, hunting supernatural threats.",
        source: "Core V5 p405",
        requirementFunctions: [isClan("Tremere")],
        merits: [
            {
                name: "Remember the House",
                cost: [1],
                summary: "Once per story, ask the Storyteller for one piece of information about House Tremere before the Pyramid fell.",
            },
            {
                name: "Hardliner",
                cost: [2],
                summary: "With the Storyteller's agreement, add 2 dice to any test to resist attempts to sway you from Schrekt's goals.",
            },
            {
                name: "Ritual Preparedness",
                cost: [3],
                summary: "Once per story, perform one of your rituals in five minutes & without preparation.",
            },
            {
                name: "Archon's Bane",
                cost: [4],
                summary:
                    "Have a supernatural 4 dot Ally (Werewolf, Mage, Wraith, Changeling...) who is being hunted. Once per story, they come to your aid.",
            },
            {
                name: "Know the World",
                cost: [5],
                summary:
                    "Gain 3 dots in Haven-Library and pick 3 Specialties in Occult. Once per story, ask the Storyteller a simple question about non-Vampire supernatural creatures.",
            },
        ],
    },
    {
        title: "Descendant of Xaviar",
        summary:
            "Former Gangrel Justicar who saw his cotery eaten by an Antediluvian. He left the Camarilla because they ignored his warnings and died mysteriously soon after.",
        source: "Core V5 p406",
        requirementFunctions: [isClan("Gangrel")],
        merits: [
            { name: "Martyred Ancestor", cost: [1], summary: "Gain 2 dots of Status with other Gangrel in your domain." },
            {
                name: "Where the Bodies Are Buried",
                cost: [2],
                summary: "Make Resolve + Awareness check to detect Vampires merged or torpid in soil below you.",
            },
            {
                name: "Loyal Hound",
                cost: [3],
                summary:
                    "Spend 4 dots among Domain, Herd and Status. Non-Camarilla Gangrel despise you for staying loyal to the Camarilla.",
            },
            {
                name: "Monstrous Bat",
                cost: [4],
                summary:
                    "Once per story, turn into a man-sized bat. In this form, gain +1 to all Physical Attributes, glide in the air and do +1 Aggravated dmg with bites.",
            },
            {
                name: "Experienced the Antediluvian",
                cost: [5],
                summary:
                    "Once per story, while touching open ground, sense another Gangrels location and drain some vitae from the to reset your Hunger to 2.",
            },
        ],
    },
    {
        title: "Descendant of Roger de Camden",
        summary:
            "Roger is an ancient and shadowy Cappadocian Vampire who currently rules as Prince of Edinburgh. He is known as a scholar of the boundaries between life and death, a martyr and a survivor.",
        source: "Ash and Bone p171",
        requirementFunctions: [isClan("Hecata")],
        merits: [
            {
                name: "Proud Childe",
                cost: [1],
                summary: "Gain 2 points to status while in a Hecata-controlled environment.",
            },
            {
                name: "Corpsense",
                cost: [2],
                summary:
                    "Gain 2 dice to any pool for investigating the cause of injury or death of a body. Wraiths can communicate with you more easily.",
            },
            {
                name: "Eye to Eye",
                cost: [3],
                summary: "Gain 2 dice to any Persuasion or Intimidation when talking to Ventrue.",
            },
            {
                name: "The Way of all Flesh",
                cost: [4],
                summary: "You can embrace old corpses unless they're rotted beyond recognition.",
            },
            {
                name: "Perchance to Dream",
                cost: [5],
                summary: "You can wander the Shadowlands while resting or while in torpor.",
            },
        ],
    },
    {
        title: "Children of Tenochtitlan",
        summary:
            "Originally Aztec Vampires that were oppressed by the Giovanni and are now looking for a new leader and planning their revenge.",
        source: "Blood Gods p221",
        requirementFunctions: [isClan("Hecata")],
        merits: [
            {
                name: "Hiding from the Wolf",
                cost: [1],
                summary: "Gain 1 die to any roll to hide.",
            },
            {
                name: "Ghostly Instincts",
                cost: [2],
                summary: "Gain 2 dice on any Oblivion Ceremony roll involving summoning, control or destruction of ghosts.",
            },
            {
                name: "Forward Thinking",
                cost: [3],
                summary:
                    "Once per story, you can reroll any Skill roll. Once per scene, you can reroll a skill roll against another Hecata, with +1 success if they're a Harbinger of Skulls.",
            },
            {
                name: "Necromantic Prodigy",
                cost: [4],
                summary: "Get +2 successes on any roll necessary for activating a necromantic Oblivion Ceremony.",
            },
            {
                name: "Next in Line",
                cost: [5],
                summary:
                    "Get 2 points of Status with Hecata, gain an Ally among the Anziani who acts as 5 dot Mawla once every other story.",
            },
        ],
    },
    {
        title: "Flesh-Eaters",
        summary: "The Nagaraja are flesh-eating Vampires. They are feared by many and often sadistic killers.",
        source: "Blood Gods p223",
        requirementFunctions: [isClan("Hecata")],
        merits: [
            {
                name: "Viscus",
                cost: [1],
                summary:
                    "Biting mortals and causing wounds acts like drinking blood for you, slaking your hunger. You can also eat fresh corpses.",
            },
            {
                name: "Unseen Spirit",
                cost: [2],
                summary:
                    "Gain the 'Cloak of Shadows' Discipline, but it only works against ghosts. If you already have Obfuscate, all your Obfuscate abilities work against ghosts as well.",
            },
            {
                name: "The Perfect Murder",
                cost: [3],
                summary:
                    "If you have at least one night to plan, gain +1 success on any roll during an intentional murder scene (can be negated by 'Send a Murderer')",
            },
            {
                name: "Send a Murderer",
                cost: [4],
                summary:
                    "Get +2 dice to rolls for studying murder scenes of tracking killers. Spend 3 dots among Contacts with mortal police, vampire investigators and Status.",
            },
            {
                name: "Monstrous Bite",
                cost: [5],
                summary:
                    "Your fangs can grow into daggers, giving you +1 success on Intimidation rolls, 3 bite damage and removes the 'called shot penalty' from bite attacks.",
            },
        ],
    },
    {
        title: "La Famiglia Giovanni",
        summary:
            "The Giovanni are an ancient and respected mafioso family of Vampires. They are the most powerful part of the Hecata clan, and they'll do everything to keep it that way.",
        source: "Blood Gods p225",
        requirementFunctions: [isClan("Hecata")],
        merits: [
            {
                name: "A Cousin's Ear",
                cost: [1],
                summary:
                    "Once per session, ask another Giovanni a direct question and get a direct answer. You'll have to honestly answer a question in return. Once per story, get a favor from a mortal member of the family.",
            },
            {
                name: "Faded Glamour",
                cost: [2],
                summary: "Once per session, add an automatic success to a social roll against another Hecata or their servants.",
            },
            {
                name: "Petty Cash",
                cost: [3],
                summary:
                    "Spend four dots among 'Resources' and 'Retainers'. Elder members of the family can take these from you at any time.",
            },
            {
                name: "Spectre Servant",
                cost: [4],
                summary:
                    "You gain a spectre to act as your servant (4 dot 'Ally', use stats from Core book p. 377) that you can summon once per session. It will arrive within 10 hours.",
            },
            {
                name: "Aspiring Anziani",
                cost: [5],
                summary: "Gain 5 dots of 'Status' among Hecata, and get a private audience with the Capuchin every few stories.",
            },
        ],
    },
    {
        title: "The Nation of Blood / Descendants of the Baron",
        summary:
            "Vampires formerly known as the Samedi. They commonly work as mercenary spies and necromancers, or run secret religious circles practicing vodou magic. The clan curse rots their flesh or, in some cases, exposes raw bone, giving them an even more corpse-like appearance than most vampires.",
        source: "Blood Gods p222",
        requirementFunctions: [isClan("Hecata")],
        merits: [
            {
                name: "CSI Shit",
                cost: [1],
                summary: "You can easily identify the cause of death when inspecting a corpse (roll if it's magically concealed)",
            },
            {
                name: "Pound of Flesh",
                cost: [2],
                summary:
                    "If you accept a freely given gift, you and the giver receive a dice penalty based on each character's Bane Severity for one night.",
            },
            {
                name: "Treat Yourself",
                cost: [3],
                summary:
                    "Once per night, you can indulge in a vice just like a human would, without any of the usual vampiric downsides (eg. a meal, drinks, sex, a cigar)",
            },
            {
                name: "My Setite Friend",
                cost: [4],
                summary:
                    "You have a friend in the Ministry. Once per story, you can ask a favor that is as powerful as 3 dots in the appropriate Merits (Alles, Influence, Resources...)",
            },
            {
                name: "The Silk Hat",
                cost: [5],
                summary:
                    "You are next in the line of succession of the Baron. Before you step up into his position, you have him as a 5 dot Mawla (his help comes in cryptic and mysterious ways). If you take his place, it might just be a job, or maybe you gain his mystical powers. Either way, you certainly gain his enemies.",
            },
        ],
    },
    // {
    //     title: "Sample",
    //     summary: "Sample",
    //     source: "Core V5 p394",
    //     requirementFunctions: [],
    //     merits: [
    //         { name: "Sample", cost: [1], summary: "SampleSummary" },
    //         { name: "Sample", cost: [2], summary: "SampleSummary" },
    //         { name: "Sample", cost: [3], summary: "SampleSummary" },
    //         { name: "Sample", cost: [4], summary: "SampleSummary" },
    //         { name: "Sample", cost: [5], summary: "SampleSummary" },
    //     ]
    // },
]
