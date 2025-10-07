import { z } from "zod"

export const elderPowerSchema = z.object({
    name: z.string(),
    description: z.string(),
    requirements: z.string().optional(),
})

export type ElderPower = z.infer<typeof elderPowerSchema>

export const elderPowers: ElderPower[] = [
    {
        name: "Affect the Masses",
        description: "Any Discipline power which normally targets only 1 victim can affect a number of victims equal to half the elder's Blood Potency (rounded up).",
    },
    {
        name: "Between the Ticks",
        description: "The elder moves so fast they can take action against an entire coterie at once. They can act a number of times each turn equal to half their Blood Potency, but each action should be against a different target.",
        requirements: "Celerity",
    },
    {
        name: "Cheat Anubis' Scales",
        description: "The elder can remove another's heart, not merely their own.",
        requirements: "Protean; requires The Heart of Darkness",
    },
    {
        name: "Conditioned Loyalty",
        description: "The elder has made completely sentient thralls of multiple mortals or ghouls, who obey the elder's every whim and complex command. This can affect a number of mortals equal to the elder's Blood Potency. A ghoul counts as two mortals. They can still go about their daily lives with minimal trouble, only obeying their Domitor when the elder calls to them.",
        requirements: "Dominate",
    },
    {
        name: "Dreaming Mind",
        description: "The elder retains a vague sense of awareness in torpor and can send dream-like messages to those who share their bloodline within the region.",
        requirements: "Auspex",
    },
    {
        name: "Dual Form",
        description: "The elder occupies two bodies at once, though while doing so their blood potency is reduced in half and they have no access to powers that they do not meet the blood potency requirement for.",
        requirements: "Protean",
    },
    {
        name: "Empower the Thinning Blood",
        description: "The elder's blood can be willed to thicken. It is so potent that slaking one Hunger on it raises a Kindred's Blood Potency by 1 for about a month of game time. A Duskborn with Blood Potency increased to 1 becomes a member of the elder's clan. Any individual Kindred can only have their Blood Potency increased by 1 from this, regardless of how many elders let them suckle on their vitae or how many times an individual elder allows a younger Kindred to do so.",
    },
    {
        name: "The Knight's Bane",
        description: "Weapons striking the elder break, becoming useless after the hit. Using natural weapons (fangs, claws, or fists) against the elder suffer a level of superficial damage.",
        requirements: "Fortitude",
    },
    {
        name: "Lingering Phantasm",
        description: "The elder can create an illusionary item or mask an object. The effect lasts until it is interacted with or touched by sunlight or until the elder falls into torpor.",
        requirements: "Obfuscate and Presence, requires Fata Morgana",
    },
    {
        name: "Merge with Darkness",
        description: "The elder sinks into their own shadow, vulnerable only to fire or bright light, but must creep along flat surfaces. They can still attack physically, but only by attacking a victim's shadow.",
        requirements: "Oblivion",
    },
    {
        name: "Miles in the Mind",
        description: "The elder can use their powers at great range. Those requiring physical contact or close proximity extend to their line of sight (about 100 meters/yards), while those normally requiring line of sight can affect targets that they are familiar with anywhere within the city (miles/kilometers).",
    },
    {
        name: "Pulse of the City",
        description: "The elder projects an emotion into everyone within a mile. The resonance of a whole city block may be affected, increasing the one selected resonance and decreasing the intensity of all others.",
        requirements: "Presence",
    },
    {
        name: "Restructure",
        description: "The elder can rewrite a Kindred's conviction.",
        requirements: "Dominate and Auspex",
    },
    {
        name: "Soul Mask",
        description: "The elder leaves no psychic residue detectable via Auspex powers, nor can their aura be read.",
        requirements: "Obfuscate",
    },
    {
        name: "Transcend the Flesh",
        description: "After taking damage from a substance (lead from a bullet, a steel blade, a wooden spear, and so forth) the elder can attune themselves to it to. They do not suffer damage from that substance until they attune to another substance.",
        requirements: "Protean",
    },
    // New Animalism Powers
    {
        name: "Blood Echo",
        description: "The user extends their senses through the minds and bodies of the creatures that bear their blood. This power can allow the user to observe using the senses of their ghouled animals at incredible distances.",
        requirements: "Animalism",
    },
    {
        name: "Conquer the Beast",
        description: "Kindred with this power have achieved a remarkable mastery over their Beast, allowing them to enter or leave a Frenzy at will.",
        requirements: "Animalism",
    },
    {
        name: "Taunt the Caged Beast",
        description: "This power allows Kindred to stoke the rage and hunger of the Beast in the blood of other Kindred, provoking them to frenzy without ordinary provocation.",
        requirements: "Animalism",
    },
    {
        name: "Free the Beast Within",
        description: "Kindred with this power are able to exert a measure of control over themselves while in a Frenzy, capitalizing on their Beast's natural ferocity.",
        requirements: "Animalism",
    },
    {
        name: "Eyes of the Forest",
        description: "At this level of Animalism, the user is able to make their mind one with the minds of all animals within several miles, seeing through their eyes and hearing with their ears.",
        requirements: "Animalism",
    },
    // New Auspex Powers
    {
        name: "The Dreaming",
        description: "Kindred with this power transcend some of the normal limitations of torpor and day-sleep. Their bodies become unresponsive like those of other Kindred, but their minds remain vibrant and alert.",
        requirements: "Auspex",
    },
    {
        name: "Spirit Link",
        description: "This power allows the user to communicate telepathically at great distances, and with multiple targets simultaneously.",
        requirements: "Auspex",
    },
    {
        name: "Psychic Assault",
        description: "The Kindred unleashes a blast of mental energy on a target, searing their mind and will.",
        requirements: "Auspex",
    },
    {
        name: "The Mind's Eye",
        description: "This power allows the user to scry on events transpiring at great distances from them.",
        requirements: "Auspex",
    },
    {
        name: "Pulse of the Canaille",
        description: "Kindred with this power are able to tap into the collective subconscious of the mortals in an area, learning their attitudes, concerns, trends, perspectives, and sensing the presence of any blood bonds or other supernatural chains that may be binding them.",
        requirements: "Auspex",
    },
    // New Celerity Powers
    {
        name: "Quickness of Pulse",
        description: "Users of advanced Celerity are simply able to do more, more quickly.",
        requirements: "Celerity",
    },
    {
        name: "Flower of Death",
        description: "This power allows you to invest your attacks with supernatural speed, bypassing defenses before they can even be brought to bear.",
        requirements: "Celerity",
    },
    {
        name: "Stutter-Step",
        description: "Kindred with this power simply seem to flicker in and out of existence for a moment, avoiding attacks faster than the eye can see.",
        requirements: "Celerity",
    },
    {
        name: "Tireless Tread",
        description: "Users of this power are able to match the speed of modern vehicles for hours at a time.",
        requirements: "Celerity",
    },
    {
        name: "Between the Seconds",
        description: "At this level of Celerity, the user is almost impossible to contend with by anyone who does not possess a comparable rating in the Discipline.",
        requirements: "Celerity",
    },
    // New Dominate Powers
    {
        name: "Implant Opinion",
        description: "This power allows the user to embed core beliefs, opinions, or personality traits into a victim, leaving them profoundly altered and without any awareness that the change is more than natural.",
        requirements: "Dominate",
    },
    {
        name: "Strings of the Marionette",
        description: "Vampires with this power display the uncanny ability to puppeteer staked or torpid vampires.",
        requirements: "Dominate",
    },
    {
        name: "Far Mastery",
        description: "This power allows a vampire to command victims without even being in the same room, much less having eye contact.",
        requirements: "Dominate",
    },
    {
        name: "Carry the Master's Voice",
        description: "This power allows the user to imbue a thrall with the intensity of their commands. Such thralls may issue commands with the power of their master's Dominate behind them.",
        requirements: "Dominate",
    },
    {
        name: "Tyrant's Glance",
        description: "This power allows the user to supernaturally rend a victim's confidence in their own abilities.",
        requirements: "Dominate",
    },
    // New Fortitude Powers
    {
        name: "Armor of Kings",
        description: "This power grants supernatural inflexibility to the user's flesh, causing blows to bounce off and weapons to shatter on impact.",
        requirements: "Fortitude",
    },
    {
        name: "Indomitable Mind",
        description: "The user's mind automatically rebels against being dominated, throwing off the shackles of supernatural control with relish.",
        requirements: "Fortitude",
    },
    {
        name: "Repair the Undead Flesh",
        description: "This power allows the vampire to mend their damaged flesh far more quickly than any other Kindred, provided they have access to sufficient blood.",
        requirements: "Fortitude",
    },
    {
        name: "Eternal Vigilance",
        description: "This nearly-mythical ability permits the user to remain awake during daylight hours, suffering only minor penalties for doing so - provided they stay out of sunlight, of course.",
        requirements: "Fortitude",
    },
    {
        name: "Arm of Prometheus",
        description: "The Kindred concentrates the power of their vitae into a single limb, protecting it against all damage for a short time.",
        requirements: "Fortitude",
    },
    // New Obfuscate Powers
    {
        name: "Blithe Acceptance",
        description: "This power allows the user to interact with objects while Obfuscated without attracting attention.",
        requirements: "Obfuscate",
    },
    {
        name: "Gemini's Mirror",
        description: "This power causes observers to believe that the user is engaged in mundane activities at the place they last observed them before its activation.",
        requirements: "Obfuscate",
    },
    {
        name: "Fortress of Silence",
        description: "This power eliminates all sound in the user's vicinity, blanketing the area in pristine silence and smothering the noise of gunshots or teeth ripping into mortal throats.",
        requirements: "Obfuscate",
    },
    {
        name: "Veil of Wrathful Ignorance",
        description: "This power traps a victim in their own personal hell of nonexistence, unable to make themselves heard or seen by those around them no matter what they do.",
        requirements: "Obfuscate",
    },
    {
        name: "Memory's Fading Glimpse",
        description: "Kindred with a true mastery of Obfuscate need not concern themselves with breaching the Masquerade by their feeding, for when they drain a mortal's last drop, they also consume the memory of the victim from the minds of those who knew them.",
        requirements: "Obfuscate",
    },
    // New Potence Powers
    {
        name: "Unstoppable Momentum",
        description: "This power combines the benefits of both Potence and Celerity, allowing the vampire to move at impossible speeds and force their body through obstacles with their incredible momentum. It is one of the single-most Masquerade-breaching powers available to Kindred.",
        requirements: "Potence",
    },
    {
        name: "Unbreakable Grasp",
        description: "This power allows the user to maintain their hold on a creature or object against almost any force.",
        requirements: "Potence",
    },
    {
        name: "Immovable Object",
        description: "This power allows the Kindred to stand against any force that tries to move them from where they stand.",
        requirements: "Potence",
    },
    {
        name: "Juggernaut",
        description: "Kindred with this power are nearly impossible to kill. When they enter torpor, instead of falling unconscious and lying immobile their Beast takes over for their higher brain functions and defends itself on pure instinct, destroying mindlessly until all threats lie defeated.",
        requirements: "Potence",
    },
    {
        name: "Puissance",
        description: "At this level of Potence, the vampire's strength is of mythic proportions - they can lift planes, throw tanks, pull trees out of the ground, and certainly rip Kindred to pieces with ease.",
        requirements: "Potence",
    },
    // New Presence Powers
    {
        name: "Spark Love",
        description: "Vampires with this power are able to enflame the hearts of their victims, inciting the most passionate love or deepest devotion as they see fit. This intensity of emotion is almost indistinguishable from the blood bond.",
        requirements: "Presence",
    },
    {
        name: "Aphrodite's Amusement",
        description: "This power allows the user to directly manipulate blood bonds, stealing thralls from other Kindred at-will.",
        requirements: "Presence",
    },
    {
        name: "Unholy Penance",
        description: "This power forces the victim to feel guilt and remorse for whatever the user commands them to regret.",
        requirements: "Presence",
    },
    {
        name: "Suppress the Illicit Thought",
        description: "This power causes the victim's mind to tie a certain memory or thought of the vampire's choice to the thought of this power's user, thereby preventing the victim from accessing that concept.",
        requirements: "Presence",
    },
    {
        name: "Undying Loyalty",
        description: "Vampires at this level of Presence have an inextricable hold over the minds of those they affect. Few forces, magical or mundane, are capable of breaking their grip or withstanding the influence of their presence.",
        requirements: "Presence",
    },
    // New Protean Powers
    {
        name: "Loki's Gift",
        description: "Kindred with this ability have learned to master a multitude of shapes with their Protean. They can transform into any creature whose blood they have tasted.",
        requirements: "Protean",
    },
    {
        name: "Invert the Flesh",
        description: "This power allows the user to force a shapechanger back into their true form through their mastery of Protean and the Beast.",
        requirements: "Protean",
    },
    {
        name: "Blissful Slumber",
        description: "Vampires with this ability have learned to slumber during the day in the form of mist, immune to all but fire and direct sunlight.",
        requirements: "Protean",
    },
    {
        name: "Death's Hidden Crawl",
        description: "This ability expands on Earth Meld by allowing the user to slowly move through the earth while melded.",
        requirements: "Protean",
    },
    {
        name: "Shape of the Inner Beast",
        description: "Reminiscent of the hybrid Crinos war-form of Lupines, this power transforms the user into a terrifying beast of a design unique to their own nature. Kindred so-transformed are capable of incredible destruction.",
        requirements: "Protean",
    },
    // New Blood Sorcery Powers
    {
        name: "Abated Tooth",
        description: "This power allows the sorcerer to force a Kindred's fangs back into their gums, preventing them from feeding with bite attacks.",
        requirements: "Blood Sorcery",
    },
    {
        name: "Blood Puppetry",
        description: "The blood sorcerer reaches out to directly control the blood of a victim with their mind, turning them into a jerky marionette that acts according to the sorcerer's will.",
        requirements: "Blood Sorcery",
    },
    {
        name: "Corrupt Body",
        description: "This power allows the vampire to interfere with another vampire's vitae, causing it to corrupt their flesh instead of preserve it.",
        requirements: "Blood Sorcery",
    },
    {
        name: "Valediction",
        description: "This power temporarily saps a victim of the benefits of their age and potency, forcing them to temporarily feel the weakness and vulnerability of the higher generations.",
        requirements: "Blood Sorcery",
    },
    {
        name: "Curdle Bond",
        description: "This power corrupts the devotion of the blood bond into hatred, turning loyal servants into deadly enemies.",
        requirements: "Blood Sorcery",
    },
    // New Oblivion Powers
    {
        name: "Shadow Haven",
        description: "This power allows the user to maintain a shadowy echo of their own haven in the Labyrinth. The vampire can spend the day here, safe from the sun.",
        requirements: "Oblivion",
    },
    {
        name: "Darksight",
        description: "This power expands on Shadow Perspective to allow you to send your senses from shadow to shadow, traveling through the darkness in your realm.",
        requirements: "Oblivion",
    },
    {
        name: "The Darkness Within",
        description: "This power causes multiple shades to extend from the user's shadow, splitting off to serve them as darkness incarnate.",
        requirements: "Oblivion",
    },
    {
        name: "Oubliette",
        description: "This ominous ability permits the user to pull a victim into their own personal prison in the Labyrinth, to remain trapped in shadow until the vampire releases them.",
        requirements: "Oblivion",
    },
    {
        name: "Tchernabog",
        description: "This power is among the most unholy, eerie, and impressive of all Discipline abilities. It allows the vampire to blot out the very sun for a limited time, letting themselves and other Kindred roam as though under the veil of night.",
        requirements: "Oblivion",
    },
    {
        name: "Death Knell",
        description: "The necromancer's senses are so in tune with the Shadowlands that they can sense the passage of souls from life to death around them.",
        requirements: "Oblivion",
    },
    {
        name: "Consilium Mortuus",
        description: "This power allows the vampire to devour memories from the mind of creatures they drain. It is a powerful method of interrogation, despite leaving the informant unfortunately deceased.",
        requirements: "Oblivion",
    },
    {
        name: "True Death",
        description: "The necromancer causes their blood to go temporarily silent, causing their undead body to simply become dead - without suffering the rapid decay that accompanies Final Death.",
        requirements: "Oblivion",
    },
    {
        name: "Resume this Undead Coil",
        description: "Vampires with this power wield mastery over their own undead condition, allowing them to rise from torpor and resurrect others from torpor freely.",
        requirements: "Oblivion",
    },
    {
        name: "Inurement",
        description: "The pinnacle of necromancy is the assurance of both one's own death and one's return to unlife. This power allows the necromancer to immediately arise as a specter following their Final Death.",
        requirements: "Oblivion",
    },
]

export const methuselahPowerSchema = z.object({
    name: z.string(),
    description: z.string(),
    requirements: z.string().optional(),
})

export type MethuselahPower = z.infer<typeof methuselahPowerSchema>

export const methuselahPowers: MethuselahPower[] = [
    {
        name: "Insect Plague",
        description: "The methuselah calls all the insects of the earth to rise and eat everything around them, living or dead. The insects descend in great clouds like a Biblical plague, destroying everything from crops to people. Within half an hour of the activation of the power, locusts, mosquitoes, wasps and other insects swarm from the skies and the ground, eating everything in their path. During their rampage, they eat every exposed living thing within a ten-kilometer radius. Animals and mortals exposed to the plague sustain a Health level of damage every ten minutes spent exposed. In addition, everyone, mortal or Kindred, suffers −4 die penalty to all tests made while exposed. The power lasts for at least one night, but can be extended at will by the methuselah.",
        requirements: "Animalism",
    },
    {
        name: "Eyes of the Sun",
        description: "The methuselah grants a single target the ability to see the sun. Unfortunately, this ability activates at any time the victim opens their eyes. If they do so, they immediately literally see the sun regardless of where they are or if the sun is visible through normal means. The victim is affected as normal when in sunlight. The victim is affected as if they were in direct sunlight, sustaining aggravated damage (if they're a vampire) each turn as long as they have their eyes open. In addition, even if they have their eyes open, they're still effectively unable to see as the sun's radiance drowns out everything else.",
        requirements: "Auspex",
    },
    {
        name: "Vortex of Blood",
        description: "The methuselah's Hunger is a force of nature. As the ancient activates this power, it starts to mystically draw blood from everyone in the vicinity, mortal or Kindred. As the methuselah gorges on blood, it leaves nothing but emaciated husks in its wake. Once the power has been activated, everyone within a 50-meter radius is affected. Mortals lose one Health level per turn. Kindred must make a Rouse Check every turn. As long as the power is active, the user automatically succeeds at all Rouse Checks.",
        requirements: "Blood Sorcery",
    },
    {
        name: "Unavoidable Hunter",
        description: "So fast that they appear to require no effort at all to move, the methuselah is always where they need to be. They're impossible to hit and may always be right behind you. After activating this power, the methuselah may always choose to be where they want to be within a hundred-meter radius. They can evade any attack that targets their person and they can always reach any enemy. They can still be affected by broad area-of-effect attacks, such as the collapsing of an entire building.",
        requirements: "Celerity",
    },
    {
        name: "Witless Humanity",
        description: "To the Kindred, mortals are but livestock to feed from. This power takes that to an extreme, as it renders every mortal who is physically able to see the methuselah into an obedient servant. When the power is activated, every mortal who at that moment is able to see the user falls under their thrall, their utmost wish to serve in any way they can. The only limit to the power is that the mortals so affected become somewhat dull, their Mental Attributes capped at 2. There is no limit to their number. One or one thousand, all obey.",
        requirements: "Dominate",
    },
    {
        name: "Shared Harm",
        description: "All of the descendants of the methuselah's bloodline exist to serve their ancestor's every whim. If the methuselah is physically stricken, it can choose to have the blow inflicted on a random descendant of its Kindred bloodline instead. Every time the methuselah is struck, it can choose to have the blow affect a direct descendant instead. The victim is chosen randomly, and distance doesn't affect the power's effectiveness. Victims must retain the characteristics of the bloodline so Caitiff and thin-bloods are unaffected.",
        requirements: "Fortitude",
    },
    {
        name: "The Devouring Shadow",
        description: "At the will of the ancient, a gaping maw of shadow opens, pulling everything in the vicinity into non-existence. Every object within a 30-meter radius is pulled into the shadow, possibly leading to the collapse of buildings, the loss of a significant amount of ground and other effects. The methuselah itself is unaffected by its own power although it must make sure to stand outside the area of the shadow to avoid falling down the bottomless well. Kindred and mortals in the area of effect must make a successful Strength + Athletics test at a Difficulty of 4 to escape the pull. At the Storyteller's discretion, Kindred pulled into the void may reappear later as husks serving the methuselah.",
        requirements: "Oblivion",
    },
    {
        name: "Never There",
        description: "The blood god can disappear at any time, from anywhere. The user disappears from all senses, as if they were never present at all. The power activates automatically when there is any sort of an immediate threat to the user.",
        requirements: "Obfuscate",
    },
    {
        name: "Shared Strength",
        description: "The methuselah's Blood carries its strength, bestowing it on all their servants. All ghouls created by the methuselah automatically have four levels of Potence.",
        requirements: "Potence",
    },
    {
        name: "Dreams of the Ancients",
        description: "The methuselah appears in the dreams of random mortals and Kindred all around the world. It appears as a seductive yet terrifying presence, leaving behind a strange longing and desire. The power is always active as long as the methuselah is awake and not in torpor. Its influence is subtle but broad and signs of the dreams may become apparent in internet posts, pop culture, music and everyday conversations. Every character who sees the methuselah for the first time nevertheless feels as if they had seen the ancient before. The methuselah can also choose to have the subject experience an effect similar to the Majesty power, requiring the expenditure of three points of Willpower to resist for a turn rather than a test.",
        requirements: "Presence",
    },
    {
        name: "Resurgence",
        description: "Upon being physically destroyed, the methuselah can reconstitute a new body from whatever animals happen to be nearby. Upon being physically destroyed, the methuselah's body reassembles from animal matter within a one-kilometer radius. Typically, this happens out of sight and some distance from the specific location where the old body was destroyed.",
        requirements: "Protean",
    },
]