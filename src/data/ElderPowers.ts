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