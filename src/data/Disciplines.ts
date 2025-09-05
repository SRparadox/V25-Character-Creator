import { z } from "zod"

import animalismLogo from "../resources/Rombo_Disciplines/rombo_Animalism.svg"
import auspexLogo from "../resources/Rombo_Disciplines/rombo_Auspex.svg"
import celerityLogo from "../resources/Rombo_Disciplines/rombo_Celerity.svg"
import dominateLogo from "../resources/Rombo_Disciplines/rombo_Dominate.svg"
import fortitudeLogo from "../resources/Rombo_Disciplines/rombo_Fortitude.svg"
import obfuscateLogo from "../resources/Rombo_Disciplines/rombo_Obfuscate.svg"
import potenceLogo from "../resources/Rombo_Disciplines/rombo_Potence.svg"
import presenceLogo from "../resources/Rombo_Disciplines/rombo_Presence.svg"
import proteanLogo from "../resources/Rombo_Disciplines/rombo_Protean.svg"
import bloodSorceryLogo from "../resources/Rombo_Disciplines/rombo_BloodSorcery.svg"
import oblivionLogo from "../resources/Rombo_Disciplines/rombo_Oblivion.svg"
import { clanNameSchema, DisciplineName, disciplineNameSchema } from "./NameSchemas"

export const amalgamPrerequisiteSchema = z.object({
    discipline: disciplineNameSchema,
    level: z.number().min(1).int(),
})
export type AmalgamPrerequisite = z.infer<typeof amalgamPrerequisiteSchema>

export const powerSchema = z.object({
    name: z.string(),
    description: z.string(),
    summary: z.string(),
    dicePool: z.string(),
    level: z.number().min(1).int(),
    discipline: disciplineNameSchema,
    rouseChecks: z.number().min(0).int(),
    amalgamPrerequisites: amalgamPrerequisiteSchema.array(),
})
export type Power = z.infer<typeof powerSchema>

export const disciplineSchema = z.object({
    clans: clanNameSchema.array(),
    summary: z.string(),
    powers: powerSchema.array(),
    logo: z.string(),
})
export type Discipline = z.infer<typeof disciplineSchema>

export const disciplines: Record<DisciplineName, Discipline> = {
    animalism: {
        clans: [
            "Nosferatu", "Gangrel", "Ravnos", "Tzimisce", "Ahrimanes", "Lhiannan", "Caitiff"
        ],
        summary: "Interact with and control animals",
        logo: animalismLogo,
        powers: [
            // Level 1
            {
                name: "Bond Famulus",
                description: "Bond to an animal to make other Animalism powers more effective.",
                rouseChecks: 3,
                amalgamPrerequisites: [],
                summary: "Bond an animal companion. It will listen to basic commands, but full communication is not possible (unless you have Feral Whispers)",
                dicePool: "Charisma + Animal Ken",
                level: 1,
                discipline: "animalism",
            },
            {
                name: "Pack Mentality",
                description: "Share Fortitude to resist mental domination collectively.",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "fortitude", level: 1 }],
                summary: "Share Fortitude to resist mental domination collectively among bonded animals and yourself.",
                dicePool: "Composure + Animalism",
                level: 1,
                discipline: "animalism",
            },
            {
                name: "Sense the Beast",
                description: "Sense anger, hunger, and Beasts.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Sense hostility and supernatural traits in people.",
                dicePool: "Resolve + Animalism",
                level: 1,
                discipline: "animalism",
            },
            // Level 2
            {
                name: "Animal Messenger",
                description: "Send messages through your famulus.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "auspex", level: 1 }],
                summary: "Send messages through your bonded animal (famulus).",
                dicePool: "Manipulation + Animalism",
                level: 2,
                discipline: "animalism",
            },
            {
                name: "Atavism",
                description: "Force an animal into fear or rage frenzy.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Make an animal enrage or flee.",
                dicePool: "Composure + Animalism",
                level: 2,
                discipline: "animalism",
            },
            {
                name: "Bestial Wrath",
                description: "Have the beast possess an animal that has fed from you, Frenzy Test.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }],
                summary: "Have the beast possess an animal that has fed from you. Frenzy Test required.",
                dicePool: "Resolve + Animalism",
                level: 2,
                discipline: "animalism",
            },
            {
                name: "Feral Whispers",
                description: "Speak to and summon animals.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Communicate with animals. You can also call for animals and if they are nearby, they will come.",
                dicePool: "Manipulation / Charisma + Animalism",
                level: 2,
                discipline: "animalism",
            },
            // Level 3
            {
                name: "Augury",
                description: "Answer questions about the city using animal senses.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "auspex", level: 1 }],
                summary: "Answer questions about the city using animal senses.",
                dicePool: "Wits + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Awaken the Parasite",
                description: "Fill someone's body with parasites.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Fill someone's body with parasites.",
                dicePool: "Stamina + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Rabid Bite",
                description: "Animal bites cause frenzy.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Animal bites cause frenzy in targets.",
                dicePool: "Strength + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Animal Succulence",
                description: "Feed more effectively on animals. You can consume your famulus to temporarily gain their aspect.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Feed more effectively on animals. You can consume your famulus to temporarily gain their aspect.",
                dicePool: "",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Messenger's Command",
                description: "Convey Compel or Mesmerize through your famulus.",
                rouseChecks: 1,
                amalgamPrerequisites: [
                    { discipline: "dominate", level: 1 },
                    { discipline: "animalism", level: 2 }
                ],
                summary: "Convey Compel or Mesmerize through your famulus (requires Animal Messenger, Compel or Mesmerize).",
                dicePool: "Manipulation + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Scent of Prey",
                description: "Detect mortals who saw breaches.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Detect mortals who saw Masquerade breaches.",
                dicePool: "Resolve + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Plague of Beasts",
                description: "Send animals to harass a target.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Send animals to harass a target.",
                dicePool: "Manipulation + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Quell the Beast",
                description: "Shut down a target's drives and desires, pull vampires out of frenzy.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Shut down a target's drives and desires, pull vampires out of frenzy.",
                dicePool: "Charisma + Animalism",
                level: 3,
                discipline: "animalism",
            },
            {
                name: "Unliving Hive",
                description: "Other Animalism powers affect insects.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "obfuscate", level: 2 }],
                summary: "Other Animalism powers affect insects.",
                dicePool: "Wits + Animalism",
                level: 3,
                discipline: "animalism",
            },
            // Level 4
            {
                name: "Feral Dialogue",
                description: "Convey complex messages via discreet howls.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Convey complex messages via discreet howls.",
                dicePool: "Manipulation + Animalism",
                level: 4,
                discipline: "animalism",
            },
            {
                name: "Subsume the Spirit",
                description: "Possess an animal.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Possess an animal.",
                dicePool: "Resolve + Animalism",
                level: 4,
                discipline: "animalism",
            },
            {
                name: "Sway the Flock",
                description: "Change behavior of animals in an area.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Change behavior of animals in an area.",
                dicePool: "Manipulation + Animalism",
                level: 4,
                discipline: "animalism",
            },
            // Level 5
            {
                name: "Living Menagerie",
                description: "Unify the beasts of all around.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Unify the beasts of all around.",
                dicePool: "Charisma + Animalism",
                level: 5,
                discipline: "animalism",
            },
            {
                name: "Animal Dominion",
                description: "Control large groups of animals.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Control large groups of animals.",
                dicePool: "Charisma + Animalism",
                level: 5,
                discipline: "animalism",
            },
            {
                name: "Coax the Bestial Temper",
                description: "Increase or decrease frenzy difficulties in an area.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Increase or decrease frenzy difficulties in an area.",
                dicePool: "Manipulation + Animalism",
                level: 5,
                discipline: "animalism",
            },
            {
                name: "Drawing Out the Beast",
                description: "When you would frenzy, make someone else frenzy instead.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "When you would frenzy, make someone else frenzy instead.",
                dicePool: "Manipulation + Animalism",
                level: 5,
                discipline: "animalism",
            },
            {
                name: "Spirit Walk",
                description: "Subsume the Spirit lasts indefinitely, can transfer between animals.",
                rouseChecks: 2,
                amalgamPrerequisites: [{ discipline: "animalism", level: 4 }],
                summary: "Subsume the Spirit lasts indefinitely, can transfer between animals.",
                dicePool: "Resolve + Animalism",
                level: 5,
                discipline: "animalism",
            },
        ],
    },
    auspex: {
        clans: [
            "Toreador", "Tremere", "Malkavian", "Hecata", "Salubri", "Ahrimanes", "Kiasyd", "Lamia", "Nagaraja", "Caitiff"
        ],
        summary: "Supernatural senses and premonitions",
        logo: auspexLogo,
        powers: [
            // Level 1
            { name: "Heightened Senses", description: "Augment natural senses.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Your senses become supernaturally sharp; add Auspex rating to perception rolls.", dicePool: "Wits + Auspex", level: 1, discipline: "auspex" },
            { name: "Cypher Lingua", description: "Read any language.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Read any language.", dicePool: "Intelligence + Auspex", level: 1, discipline: "auspex" },
            { name: "Sense The Starving", description: "Read the hunger value of anyone.", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "protean", level: 2 }], summary: "Read the hunger value of anyone.", dicePool: "Wits + Auspex", level: 1, discipline: "auspex" },
            { name: "Vigilance", description: "Can sense if blood has been roused.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Can sense if blood has been roused.", dicePool: "Resolve + Auspex", level: 1, discipline: "auspex" },
            { name: "Quicken Sight", description: "Perceive fast moving objects.", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "celerity", level: 1 }], summary: "Perceive fast moving objects.", dicePool: "Wits + Auspex", level: 1, discipline: "auspex" },
            { name: "Sense the Unseen", description: "Detect supernatural effects.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Sense supernatural activity.", dicePool: "Wits / Resolve + Auspex", level: 1, discipline: "auspex" },
            // Level 2
            { name: "Panacea", description: "Calm mortals and heal willpower.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 1 }], summary: "Calm mortals and heal willpower.", dicePool: "Composure + Auspex", level: 2, discipline: "auspex" },
            { name: "Crown of The Lost Clan", description: "A psychic crown that emits supernatural radar.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 2 }], summary: "A psychic crown that emits supernatural radar.", dicePool: "Resolve + Auspex", level: 2, discipline: "auspex" },
            { name: "Premonition", description: "Receive prophetic visions.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Gain visions of the future.", dicePool: "Wits + Auspex", level: 2, discipline: "auspex" },
            { name: "Reveal Temperament", description: "Determine a person's resonance.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Determine a person's resonance.", dicePool: "Intelligence + Auspex", level: 2, discipline: "auspex" },
            { name: "Artist's Eye", description: "Inscribe information into art.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "presence", level: 2 }], summary: "Inscribe information into art.", dicePool: "Wits + Auspex", level: 2, discipline: "auspex" },
            { name: "Aethethical Insight", description: "Gain information from a look.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Gain information from a look.", dicePool: "Wits + Auspex", level: 2, discipline: "auspex" },
            { name: "Mistfell", description: "Quickly transform into mist to escape danger.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "protean", level: 2 }], summary: "Quickly transform into mist to escape danger.", dicePool: "Resolve + Auspex", level: 2, discipline: "auspex" },
            { name: "Unerring Pursuit", description: "Track a victim through their reflection.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 1 }], summary: "Track a victim through their reflection.", dicePool: "Resolve + Auspex", level: 2, discipline: "auspex" },
            // Level 3
            { name: "Eyes of Beasts", description: "See through the eyes of animals.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 2 }], summary: "See through the eyes of animals.", dicePool: "Wits + Auspex", level: 3, discipline: "auspex" },
            { name: "Fatal Flaw", description: "Determine a target's weakness.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }], summary: "Determine a target's weakness.", dicePool: "Intelligence + Auspex", level: 3, discipline: "auspex" },
            { name: "Scry the Soul", description: "See the aura of a person's soul.", rouseChecks: 1, amalgamPrerequisites: [], summary: "See the aura of a person's soul.", dicePool: "Intelligence + Auspex", level: 3, discipline: "auspex" },
            { name: "Bloody Recollection", description: "Gain memories from drunk blood.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Gain memories from drunk blood.", dicePool: "Resolve + Auspex", level: 3, discipline: "auspex" },
            { name: "Haruspex", description: "Glean insight from recent deaths.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }], summary: "Glean insight from recent deaths.", dicePool: "Wits + Auspex", level: 3, discipline: "auspex" },
            { name: "Vedi Pentimento", description: "Unpaint artworks to uncover artists' truths.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Unpaint artworks to uncover artists' truths.", dicePool: "Wits + Auspex", level: 3, discipline: "auspex" },
            { name: "Share the Senses", description: "Borrow another's senses.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Borrow another's senses.", dicePool: "Resolve + Auspex", level: 3, discipline: "auspex" },
            // Level 4
            { name: "Heart Laid Bare", description: "Learn someone's desires or fears.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Learn someone's desires or fears.", dicePool: "Wits + Auspex", level: 4, discipline: "auspex" },
            { name: "What Dreams May Come", description: "Can still have some of their senses during sleep.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Can still have some of their senses during sleep.", dicePool: "Resolve + Auspex", level: 4, discipline: "auspex" },
            { name: "Spirit's Touch", description: "View impressions of past events.", rouseChecks: 1, amalgamPrerequisites: [], summary: "View impressions of past events.", dicePool: "Wits + Auspex", level: 4, discipline: "auspex" },
            // Level 5
            { name: "Animea Opus", description: "Can imbue disciplines into artwork.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }, { discipline: "presence", level: 2 }], summary: "Can imbue disciplines into artwork.", dicePool: "Wits + Auspex", level: 5, discipline: "auspex" },
            { name: "Clairvoyance", description: "Know everything about an area.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Know everything about an area.", dicePool: "Resolve + Auspex", level: 5, discipline: "auspex" },
            { name: "Possession", description: "Possess a human.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 3 }], summary: "Possess a human.", dicePool: "Resolve + Auspex", level: 5, discipline: "auspex" },
            { name: "Telepathy", description: "Read minds and project thoughts.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Read minds and project thoughts.", dicePool: "Wits + Auspex", level: 5, discipline: "auspex" },
            { name: "Unburdening the Bestial Soul", description: "Remove/shield against Stains, make Dominate easier, restore Humanity.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 3 }, { discipline: "auspex", level: 2 }], summary: "Remove/shield against Stains, make Dominate easier, restore Humanity.", dicePool: "Resolve + Auspex", level: 5, discipline: "auspex" },
        ],
    },
    celerity: {
        clans: [
            "Toreador", "Brujah", "Banu Haqim", "Caitiff"
        ],
        summary: "Move with supernatural speed",
        logo: celerityLogo,
        powers: [
            // Level 1
            { name: "Cat's Grace", description: "Always keep your balance.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Always keep your balance.", dicePool: "Dexterity + Athletics", level: 1, discipline: "celerity" },
            { name: "Fluent Swiftness", description: "Reroll Blood Surges on Dexterity.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Reroll Blood Surges on Dexterity.", dicePool: "Dexterity + Celerity", level: 1, discipline: "celerity" },
            { name: "Quickshift", description: "Speed the time of a transformation.", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "protean", level: 1 }], summary: "Speed the time of a transformation.", dicePool: "Dexterity + Celerity", level: 1, discipline: "celerity" },
            { name: "First Strike", description: "Always strike first in combat.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Always strike first in combat.", dicePool: "Dexterity + Celerity", level: 1, discipline: "celerity" },
            { name: "Surge of Alacrity", description: "Add a bonus dice to Dex or Wits during blood surge.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Add a bonus dice to Dex or Wits during blood surge.", dicePool: "Dexterity or Wits + Celerity", level: 1, discipline: "celerity" },
            { name: "Rapid Reflexes", description: "Dodge against Firearms and take minor actions for free.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Dodge against Firearms and take minor actions for free.", dicePool: "Dexterity + Celerity", level: 1, discipline: "celerity" },
            // Level 2
            { name: "Fleetness", description: "Add Celerity to Dexterity tests.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Add Celerity to Dexterity tests.", dicePool: "Dexterity + Celerity", level: 2, discipline: "celerity" },
            { name: "Blood Knight's Devotion", description: "Move to take damage instead of someone.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Move to take damage instead of someone.", dicePool: "Dexterity + Celerity", level: 2, discipline: "celerity" },
            { name: "Measured Maneuver", description: "Reduce called shot difficulty.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Reduce called shot difficulty.", dicePool: "Dexterity + Celerity", level: 2, discipline: "celerity" },
            { name: "Rush Job", description: "Do Skill tasks faster, as minor actions.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Do Skill tasks faster, as minor actions.", dicePool: "Dexterity + Celerity", level: 2, discipline: "celerity" },
            // Level 3
            { name: "Blink", description: "Move far before taking an action.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Move far before taking an action.", dicePool: "Dexterity + Athletics", level: 3, discipline: "celerity" },
            { name: "Traversal", description: "Run across liquids or walls.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Run across liquids or walls.", dicePool: "Dexterity + Athletics", level: 3, discipline: "celerity" },
            { name: "Mercurial Beasts", description: "Share super speed with animals.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Share super speed with animals.", dicePool: "Dexterity + Celerity", level: 3, discipline: "celerity" },
            { name: "A Thousand Cuts", description: "Impair a mortal with superficial damage.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Impair a mortal with superficial damage.", dicePool: "Dexterity + Celerity", level: 3, discipline: "celerity" },
            { name: "Shifting Traversal", description: "Able to switch between three separate animals.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "protean", level: 3 }], summary: "Able to switch between three separate animals.", dicePool: "Dexterity + Celerity", level: 3, discipline: "celerity" },
            { name: "Preeminence", description: "See if a dice roll would succeed.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 3 }], summary: "See if a dice roll would succeed.", dicePool: "Wits + Celerity", level: 3, discipline: "celerity" },
            { name: "Weaving", description: "Add Celerity to defense against ranged.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "celerity", level: 1 }], summary: "Add Celerity to defense against ranged (Requires 'Rapid Reflexes').", dicePool: "Dexterity + Celerity", level: 3, discipline: "celerity" },
            // Level 4
            { name: "Mortifying Riposte", description: "Make a counterstrike.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "presence", level: 3 }], summary: "Make a counterstrike.", dicePool: "Dexterity + Celerity", level: 4, discipline: "celerity" },
            { name: "Blurred Momentum", description: "Attacks with fewer successes than Celerity automatically miss.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Attacks with fewer successes than Celerity automatically miss.", dicePool: "Dexterity + Celerity", level: 4, discipline: "celerity" },
            { name: "Draught of Elegance", description: "Give Celerity to others.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Give Celerity to others.", dicePool: "Dexterity + Celerity", level: 4, discipline: "celerity" },
            { name: "Unerring Aim", description: "Make ranged attacks at Difficulty 1.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Make ranged attacks at Difficulty 1.", dicePool: "Dexterity + Firearms", level: 4, discipline: "celerity" },
            { name: "Unseen Strike", description: "Make melee attacks at Difficulty 1.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 4 }, { discipline: "celerity", level: 3 }], summary: "Make melee attacks at Difficulty 1 (Requires Blink).", dicePool: "Dexterity + Melee", level: 4, discipline: "celerity" },
            // Level 5
            { name: "Fastigum", description: "Perform two separate actions via speed.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "celerity", level: 3 }], summary: "Perform two separate actions via speed (Requires Preeminence).", dicePool: "Dexterity + Celerity", level: 5, discipline: "celerity" },
            { name: "Lightning Strike", description: "Make melee attacks at Difficulty 1.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Make melee attacks at Difficulty 1.", dicePool: "Dexterity + Melee", level: 5, discipline: "celerity" },
            { name: "Split Second", description: "Retcon the ST's narration of events.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Retcon the ST's narration of events.", dicePool: "Wits + Celerity", level: 5, discipline: "celerity" },
        ],
    },
    dominate: {
        clans: [
            "Ventrue", "Malkavian", "Tremere", "Lasombra", "Tzimisce", "Salubri", "Kiasyd", "Nagaraja", "Caitiff"
        ],
        summary: "Control other's minds",
        logo: dominateLogo,
        powers: [
            {
                name: "Cloud Memory",
                description: "Remove a few minutes of memories from a mortal's mind.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Remove a few minutes of memories.",
                dicePool: "Charisma + Dominate",
                level: 1,
                discipline: "dominate",
            },
            {
                name: "Compel",
                description: "Force someone to take one simple action.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Force someone to take one action.",
                dicePool: "Charisma + Dominate",
                level: 1,
                discipline: "dominate",
            },
            {
                name: "Slavish Devotion",
                description: "Penalize attempts to affect your thralls. (Amalgam: Fortitude 1)",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "fortitude", level: 1 }],
                summary: "Penalize attempts to affect your thralls.",
                dicePool: "",
                level: 1,
                discipline: "dominate",
            },
            {
                name: "Mesmerize",
                description: "Impose a command that the victim must carry out, even after leaving your presence.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Impose a command.",
                dicePool: "Manipulation + Dominate",
                level: 2,
                discipline: "dominate",
            },
            {
                name: "Dementation",
                description: "Inflict willpower damage in conversation. (Amalgam: Obfuscate 2)",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "obfuscate", level: 2 }],
                summary: "Inflict willpower damage in conversation.",
                dicePool: "Manipulation + Dominate",
                level: 2,
                discipline: "dominate",
            },
            {
                name: "Whispers of the Heart",
                description: "Target experiences the emotions and voices of their loved ones. (Amalgam: Presence 2)",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "presence", level: 2 }],
                summary: "Target experiences the emotions and voices of their loved ones.",
                dicePool: "Manipulation + Dominate",
                level: 2,
                discipline: "dominate",
            },
            {
                name: "The Stolen Voice",
                description: "Prevent all communication from the target.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Prevent all communication.",
                dicePool: "Manipulation + Dominate",
                level: 2,
                discipline: "dominate",
            },
            {
                name: "Domitor's Favor",
                description: "Prevent thralls from defying the bond.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Prevent thralls from defying the bond.",
                dicePool: "",
                level: 2,
                discipline: "dominate",
            },
            {
                name: "The Forgetful Mind",
                description: "Rewrite memories, implant or remove details.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Rewrite memories.",
                dicePool: "Manipulation + Dominate",
                level: 3,
                discipline: "dominate",
            },
            {
                name: "Submerged Directive",
                description: "Set a trigger for Mesmerize. (Amalgam: Mesmerize)",
                rouseChecks: 0,
                amalgamPrerequisites: [{ discipline: "dominate", level: 2 }],
                summary: "Set a trigger for Mesmerize.",
                dicePool: "",
                level: 3,
                discipline: "dominate",
            },
            {
                name: "Ancestral Dominion",
                description: "Control your direct descendants. (Amalgam: Sorcery 3, Mesmerize)",
                rouseChecks: 2,
                amalgamPrerequisites: [{ discipline: "blood sorcery", level: 3 }, { discipline: "dominate", level: 2 }],
                summary: "Control your direct descendants.",
                dicePool: "Manipulation + Dominate",
                level: 4,
                discipline: "dominate",
            },
            {
                name: "Implant Suggestion",
                description: "Alter a person's feelings or intentions. (Amalgam: Presence 1)",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "presence", level: 1 }],
                summary: "Alter a person's feelings or intentions.",
                dicePool: "Manipulation + Dominate",
                level: 4,
                discipline: "dominate",
            },
            {
                name: "Rationalize",
                description: "Victims rationalize their behavior.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Victims rationalize their behavior.",
                dicePool: "Manipulation + Dominate",
                level: 4,
                discipline: "dominate",
            },
            {
                name: "Tabula Rasa",
                description: "Erase a victim's memory completely.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Erase a victim's memory completely.",
                dicePool: "Manipulation + Dominate",
                level: 4,
                discipline: "dominate",
            },
            {
                name: "Lethe's Call",
                description: "Erase entire weeks of memory, or remove one person from all memories. (Amalgam: Cloud Memory or Forgetful Mind)",
                rouseChecks: 2,
                amalgamPrerequisites: [ { discipline: "dominate", level: 1 }, { discipline: "dominate", level: 3 } ],
                summary: "Erase entire weeks of memory, or remove one person.",
                dicePool: "Manipulation + Dominate",
                level: 5,
                discipline: "dominate",
            },
            {
                name: "Mass Manipulation",
                description: "Affect groups with other powers.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Affect groups with other powers.",
                dicePool: "Manipulation + Dominate",
                level: 5,
                discipline: "dominate",
            },
            {
                name: "Terminal Decree",
                description: "Dominate commands can be suicidal.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Dominate commands can be suicidal.",
                dicePool: "Manipulation + Dominate",
                level: 5,
                discipline: "dominate",
            },
        ],
    },
    fortitude: {
        clans: [
            "Ventrue", "Gangrel", "Hecata", "Salubri", "Lamia", "Gargoyle", "Caitiff"
        ],
        summary: "Resist damage and influence",
        logo: fortitudeLogo,
        powers: [
            // Level 1
            { name: "Fluent Endurance", description: "Reroll failed Blood Surges on Stamina.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Reroll Blood Surges on Stamina.", dicePool: "Stamina + Fortitude", level: 1, discipline: "fortitude" },
            { name: "Resilience", description: "Add Fortitude rating to health levels.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Add Fortitude to health levels.", dicePool: "", level: 1, discipline: "fortitude" },
            { name: "Rancorous Redress", description: "Sacrifice flesh to empower rituals.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Sacrifice flesh to empower rituals.", dicePool: "", level: 1, discipline: "fortitude" },
            { name: "Mad Grit", description: "Turn hunger into a mental defense.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Turn hunger into a mental defence.", dicePool: "Composure + Fortitude", level: 1, discipline: "fortitude" },
            { name: "Adaptability", description: "Mending damage increases Celerity. (Amalgam: Celerity 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "celerity", level: 1 }], summary: "Mending damage increases Celerity.", dicePool: "", level: 1, discipline: "fortitude" },
            { name: "Save Face", description: "Show no tells in social settings. (Amalgam: Presence 1)", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "presence", level: 1 }], summary: "Show no tells in social settings.", dicePool: "Composure + Fortitude", level: 1, discipline: "fortitude" },
            { name: "Unswayable Mind", description: "Add Fortitude to mental resistance.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Add Fortitude to mental resistance.", dicePool: "Resolve + Fortitude", level: 1, discipline: "fortitude" },

            // Level 2
            { name: "Earth's Perseverance", description: "Become briefly immovable.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Become briefly immovable.", dicePool: "Stamina + Fortitude", level: 2, discipline: "fortitude" },
            { name: "Enduring Beasts", description: "Give Fortitude to animals. (Amalgam: Animalism 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Give Fortitude to animals.", dicePool: "Stamina + Fortitude", level: 2, discipline: "fortitude" },
            { name: "Obdurate", description: "Become briefly immovable. (Amalgam: Potence 2)", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "potence", level: 2 }], summary: "Become briefly immovable.", dicePool: "Stamina + Fortitude", level: 2, discipline: "fortitude" },
            { name: "Invigorating Vitae", description: "Heal living creatures. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Heal living creatures.", dicePool: "Stamina + Fortitude", level: 2, discipline: "fortitude" },
            { name: "Sympathetic Link", description: "Spread damage across bonded famulus. (Amalgam: Animalism 1, Bond Famulus)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Spread damage across bonded famulus.", dicePool: "Stamina + Fortitude", level: 2, discipline: "fortitude" },
            { name: "Toughness", description: "Subtract Fortitude from superficial damage before halving.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Subtract Fortitude from superficial damage before halving.", dicePool: "Stamina + Fortitude", level: 2, discipline: "fortitude" },
            { name: "Valeren", description: "Heal other vampires' health. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Heal other vampires' health.", dicePool: "Intelligence + Fortitude", level: 2, discipline: "fortitude" },

            // Level 3
            { name: "Calloused Soul", description: "Prevent stains for one night.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Prevent stains for one night.", dicePool: "Composure + Fortitude", level: 3, discipline: "fortitude" },
            { name: "Defy Bane", description: "Turn aggravated damage to superficial.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Turn aggravated damage to superficial.", dicePool: "Stamina + Fortitude", level: 3, discipline: "fortitude" },
            { name: "Coiling Spite", description: "Psychic coils damage only supernatural beings. (Amalgam: Oblivion 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "oblivion", level: 3 }], summary: "Psychic coils damage only supernatural beings.", dicePool: "Resolve + Fortitude", level: 3, discipline: "fortitude" },
            { name: "Fortify the Inner Façade", description: "Resist Auspex and similar powers.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Resist Auspex and similar powers.", dicePool: "Resolve + Fortitude", level: 3, discipline: "fortitude" },
            { name: "Cornered Animal", description: "Give into the beast to survive. (Amalgam: Animalism 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "animalism", level: 3 }], summary: "Give into the beast to survive.", dicePool: "Stamina + Fortitude", level: 3, discipline: "fortitude" },
            { name: "Seal the Beast's Maw", description: "Ignore Hunger for one scene.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Ignore Hunger for one scene.", dicePool: "Stamina + Fortitude", level: 3, discipline: "fortitude" },

            // Level 4
            { name: "Draught of Change", description: "Give anyone who drinks your blood Protean Discipline dots. (Amalgam: Protean 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "protean", level: 2 }], summary: "Give anyone who drinks blood Protean Discipline dots.", dicePool: "Stamina + Fortitude", level: 4, discipline: "fortitude" },
            { name: "Draught of Endurance", description: "Give Fortitude to others.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Give Fortitude to others.", dicePool: "Stamina + Fortitude", level: 4, discipline: "fortitude" },
            { name: "Gorgon's Scales", description: "Gain immunities based on resonance.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Gain immunities based on resonance.", dicePool: "Stamina + Fortitude", level: 4, discipline: "fortitude" },
            { name: "Meat Shields", description: "Bonuses when around weak mortals.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Bonuses when around weak mortals.", dicePool: "Stamina + Fortitude", level: 4, discipline: "fortitude" },
            { name: "Shatter", description: "Damage removed by Toughness is redirected to the attacker. (Amalgam: Toughness)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Damage removed by Toughness is redirected to the attacker.", dicePool: "Stamina + Fortitude", level: 4, discipline: "fortitude" },

            // Level 5
            { name: "Hide of Granite", description: "Immunity to natural damage and great durability. (Amalgam: Protean 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "protean", level: 2 }], summary: "Immunity to natural damage and great durability.", dicePool: "Stamina + Fortitude", level: 5, discipline: "fortitude" },
            { name: "Flesh of Marble", description: "Ignore one source of damage per turn.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Ignore one source of damage per turn.", dicePool: "Stamina + Fortitude", level: 5, discipline: "fortitude" },
            { name: "Prowess from Pain", description: "Add physical damage to attributes.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Add physical damage to attributes.", dicePool: "Stamina + Fortitude", level: 5, discipline: "fortitude" },
        ],
    },
    obfuscate: {
        clans: [
            "Nosferatu", "Malkavian", "Banu Haqim", "Ministry", "Ravnos", "Gargoyle", "Caitiff"
        ],
        summary: "Remain undetected",
        logo: obfuscateLogo,
        powers: [
            // Level 1
            { name: "Cloak of Shadows", description: "Go invisible, but cannot move.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Go invisible, but cannot move.", dicePool: "Wits + Obfuscate", level: 1, discipline: "obfuscate" },
            { name: "Eidolon Famulus", description: "Bonded Famulus can share Obfuscate. (Amalgam: Animalism 1, Bond Famulus)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Bonded Famulus can share Obfuscate.", dicePool: "Wits + Obfuscate", level: 1, discipline: "obfuscate" },
            { name: "Ensconce", description: "Conceal small held objects.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Conceal small held objects.", dicePool: "Dexterity + Obfuscate", level: 1, discipline: "obfuscate" },
            { name: "Varlet Quiet Chord", description: "It takes more to resist your mental powers. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "It takes more to resist your mental powers.", dicePool: "Manipulation + Obfuscate", level: 1, discipline: "obfuscate" },
            { name: "Silence of Death", description: "Silence all sounds.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Silence all sounds.", dicePool: "Wits + Obfuscate", level: 1, discipline: "obfuscate" },

            // Level 2
            { name: "Cache", description: "Ensconce non-held objects. (Amalgam: Ensconce)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "obfuscate", level: 1 }], summary: "Ensconce non-held objects.", dicePool: "Dexterity + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Chimerstry", description: "Create distracting hallucinations. (Amalgam: Presence 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "presence", level: 1 }], summary: "Create distracting hallucinations.", dicePool: "Manipulation + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Doubletalk", description: "Hide a message in your words. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Hide a message in your words.", dicePool: "Manipulation + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Ghost's Passing", description: "Your animals leave no tracks or traces. (Amalgam: Animalism 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Your animals leave no tracks or traces.", dicePool: "Wits + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Assailing Beast of Torment", description: "Shape shadows into the Beast animal. (Amalgam: Animalism 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "animalism", level: 2 }], summary: "Shape shadows into the Beast animal.", dicePool: "Wits + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Ghost Note", description: "Creates false noises. (Amalgam: Presence 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "presence", level: 2 }], summary: "Creates false noises.", dicePool: "Manipulation + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "The Shape", description: "Distorts divination and footage of user. (Amalgam: Auspex 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Distorts divination and footage of user.", dicePool: "Manipulation + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Unseen Passage", description: "Go invisible and move around.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Go invisible and move around.", dicePool: "Wits + Obfuscate", level: 2, discipline: "obfuscate" },
            { name: "Ventriloquism", description: "Project your voice to one person only. (Amalgam: Auspex 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Project your voice to one person only.", dicePool: "Manipulation + Obfuscate", level: 2, discipline: "obfuscate" },

            // Level 3
            { name: "Guise of the Departed", description: "Take a corpse's appearance. (Amalgam: Oblivion 1)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }], summary: "Take a corpse's appearance.", dicePool: "Manipulation + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Fata Morgana", description: "Create elaborate hallucinations. (Amalgam: Presence 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "presence", level: 2 }], summary: "Create elaborate hallucinations.", dicePool: "Manipulation + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Ghost in the Machine", description: "Obfuscate affects technology.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Obfuscate affects technology.", dicePool: "Wits + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Mask of a Thousand Faces", description: "Appear visible but unremarkable.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Appear visible but unremarkable.", dicePool: "Manipulation + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Mask of Isolation", description: "Apply Mask of 1000 to a person who doesn't know about it. (Amalgam: Dominate 1, Mask of 1000)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 1 }, { discipline: "obfuscate", level: 3 }], summary: "Apply Mask of 1000 to a person who doesn't know about it.", dicePool: "Manipulation + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Mental Maze", description: "Prevent someone from perceiving any exits or means of escape. (Amalgam: Dominate 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 1 }], summary: "Prevent someone from perceiving any exits or means of escape.", dicePool: "Charisma + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Mask of Narcissus", description: "Project their appearance onto another. (Amalgam: Presence 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "presence", level: 3 }], summary: "Project their appearance onto another.", dicePool: "Manipulation + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Mask of a Thousand Pets", description: "Mask the true appearance of an animal as something harmless. (Amalgam: Protean 1+ and Skin Taker, Shapechange or Metamorphosis)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "protean", level: 1 }], summary: "Mask the true appearance of an animal as something harmless.", dicePool: "Manipulation + Obfuscate", level: 3, discipline: "obfuscate" },
            { name: "Mind Masque", description: "Deceive Auspex. (Amalgam: Dominate 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Deceive Auspex.", dicePool: "Manipulation + Obfuscate", level: 3, discipline: "obfuscate" },

            // Level 4
            { name: "Seclusion", description: "Prevent a victim from perceiving anyone. (Amalgam: Dominate 1)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 1 }], summary: "Prevent a victim from perceiving anyone.", dicePool: "Manipulation + Obfuscate", level: 4, discipline: "obfuscate" },
            { name: "Conceal", description: "Conceal objects up to house-sized. (Amalgam: Auspex 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "auspex", level: 3 }], summary: "Conceal objects up to house-sized.", dicePool: "Manipulation + Obfuscate", level: 4, discipline: "obfuscate" },
            { name: "Vanish", description: "Disappear even while directly observed. (Amalgam: Cloak of Shadows)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 1 }], summary: "Disappear even while directly observed.", dicePool: "Wits + Obfuscate", level: 4, discipline: "obfuscate" },

            // Level 5
            { name: "Cloak the Gathering", description: "Affect groups with Obfuscate.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Affect groups with Obfuscate.", dicePool: "Wits + Obfuscate", level: 5, discipline: "obfuscate" },
            { name: "Imposter's Guise", description: "Appear as a specific individual. (Amalgam: Mask of 1000)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 3 }], summary: "Appear as a specific individual.", dicePool: "Manipulation + Obfuscate", level: 5, discipline: "obfuscate" },
        ],
    },
    potence: {
        clans: [
            "Nosferatu", "Brujah", "Lasombra", "Caitiff"
        ],
        summary: "Gain supernatural strength",
        logo: potenceLogo,
        powers: [
            // Level 1
            { name: "Fluent Strength", description: "Reroll Blood Surges on Strength.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Reroll Blood Surges on Strength.", dicePool: "Strength + Potence", level: 1, discipline: "potence" },
            { name: "Lethal Body", description: "Unarmed attacks do aggravated damage to mortals.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Unarmed attacks do agg to mortals.", dicePool: "Strength + Potence", level: 1, discipline: "potence" },
            { name: "Surge of Tenacity", description: "Buffs Blood Surge.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Buffs Blood Surge.", dicePool: "Strength + Potence", level: 1, discipline: "potence" },
            { name: "Reckless Berserker", description: "Beast powered attack at the cost of self-preservation. (Amalgam: Protean 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "protean", level: 1 }], summary: "Beast powered attack at the cost of self-preservation.", dicePool: "Strength + Potence", level: 1, discipline: "potence" },
            { name: "Soaring Leap", description: "Jump enormous distances.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Jump enormous distances.", dicePool: "Strength + Potence", level: 1, discipline: "potence" },

            // Level 2
            { name: "Prowess", description: "Add Potence to damage dealt.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Add Potence to damage dealt.", dicePool: "Strength + Potence", level: 2, discipline: "potence" },
            { name: "Teeth Knight's Vehemence", description: "Coats weapon with Oblivion. (Amalgam: Oblivion 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 2 }], summary: "Coats weapon with Oblivion.", dicePool: "Strength + Potence", level: 2, discipline: "potence" },
            { name: "Wild Strike", description: "Enter a trance that allows to attack multiple targets. (Amalgam: Reckless Berserker)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "potence", level: 1 }], summary: "Enter a trance that allows to attack multiple targets.", dicePool: "Strength + Potence", level: 2, discipline: "potence" },
            { name: "Relentless Grasp", description: "Add Potence to holding onto things.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Add Potence to holding onto things.", dicePool: "Strength + Potence", level: 2, discipline: "potence" },

            // Level 3
            { name: "Brutal Feed", description: "Drain a person in seconds.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Drain a person in seconds.", dicePool: "Strength + Potence", level: 3, discipline: "potence" },
            { name: "Spark of Rage", description: "Add Potence to rolls to induce rage. (Amalgam: Presence 3)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "presence", level: 3 }], summary: "Add Potence to rolls to induce rage.", dicePool: "Strength + Potence", level: 3, discipline: "potence" },
            { name: "Uncanny Grip", description: "Hold onto any surface.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Hold onto any surface.", dicePool: "Strength + Potence", level: 3, discipline: "potence" },
            { name: "Wrecker", description: "Double Potence to destroy things. (Amalgam: Prowess)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "potence", level: 2 }], summary: "Double Potence to destroy things.", dicePool: "Strength + Potence", level: 3, discipline: "potence" },

            // Level 4
            { name: "Crash Down", description: "Crash to the ground, damaging an area. (Amalgam: Soaring Leap)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "potence", level: 1 }], summary: "Crash to the ground, damaging an area.", dicePool: "Strength + Potence", level: 4, discipline: "potence" },
            { name: "Draught of Might", description: "Give Potence to others.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Give Potence to others.", dicePool: "Strength + Potence", level: 4, discipline: "potence" },
            { name: "Exuberance", description: "Increase Potence but hurt your body.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Increase Potence but hurt your body.", dicePool: "Strength + Potence", level: 4, discipline: "potence" },

            // Level 5
            { name: "Earthshock", description: "Create a shockwave.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Create a shockwave.", dicePool: "Strength + Potence", level: 5, discipline: "potence" },
            { name: "Fist of Caine", description: "Unarmed attacks do aggravated damage to everything.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Unarmed attacks do agg to everything.", dicePool: "Strength + Potence", level: 5, discipline: "potence" },
            { name: "Subtle Hammer", description: "Subtle attacks as minor actions.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Subtle attacks as minor actions.", dicePool: "Strength + Potence", level: 5, discipline: "potence" },
        ],
    },
    presence: {
        clans: [
            "Toreador", "Brujah", "Ventrue", "Ministry", "Ravnos", "Lhiannan", "Baali", "Caitiff"
        ],
        summary: "Supernatural appearance and vibe",
        logo: presenceLogo,
        powers: [
            // Level 1
            { name: "Awe", description: "Add Presence to Charisma.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Add Presence to Charisma.", dicePool: "Charisma + Presence", level: 1, discipline: "presence" },
            { name: "Daunt", description: "Intimidate people and ward off attacks.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Intimidate people and ward off attacks.", dicePool: "Charisma + Presence", level: 1, discipline: "presence" },
            { name: "Duress", description: "Sap the resolve of others. (Amalgam: Oblivion 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }], summary: "Sap the resolve of others.", dicePool: "Manipulation + Presence", level: 1, discipline: "presence" },
            { name: "Ensnared", description: "Pull on emotional strings to control foes. (Amalgam: Celerity 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "celerity", level: 1 }], summary: "Pull on emotional strings to control foes.", dicePool: "Manipulation + Presence", level: 1, discipline: "presence" },
            { name: "Scalpel Tongue", description: "Supernaturally sharp wit stuns foes. (Amalgam: Celerity 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "celerity", level: 1 }], summary: "Supernaturally sharp wit stuns foes.", dicePool: "Manipulation + Presence", level: 1, discipline: "presence" },
            { name: "Eyes of the Serpent", description: "Paralyze someone with eye contact. (Amalgam: Protean 1)", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "protean", level: 1 }], summary: "Paralyze someone with eye contact.", dicePool: "Charisma + Presence", level: 1, discipline: "presence" },

            // Level 2
            { name: "Lingering Kiss", description: "Biting gives bonuses but also addiction.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Biting gives bonuses but also addiction.", dicePool: "Charisma + Presence", level: 2, discipline: "presence" },
            { name: "Kiss of The Molochim", description: "Saps the will to fight when feeding.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Saps the will to fight when feeding.", dicePool: "Charisma + Presence", level: 2, discipline: "presence" },
            { name: "Kiss of Consuming Inspiration", description: "After a kiss, victim gains an addictive inspiration. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "After a kiss, victim gains an addictive inspiration.", dicePool: "Charisma + Presence", level: 2, discipline: "presence" },
            { name: "Incite Sin", description: "Infernalist blood is like the kiss on skin. (Amalgam: blood sorcery 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 2 }], summary: "Infernalist blood is like the kiss on skin.", dicePool: "Manipulation + Presence", level: 2, discipline: "presence" },
            { name: "Wolf Knight's Valour", description: "Inspire those around you. (Amalgam: Fortitude 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Inspire those around you.", dicePool: "Charisma + Presence", level: 2, discipline: "presence" },
            { name: "Oppressive Resonance", description: "Broadcast your resonance to others. (Amalgam: Dominate 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Broadcast your resonance to others.", dicePool: "Manipulation + Presence", level: 2, discipline: "presence" },
            { name: "Melpominee", description: "Transmit Presence through voice alone.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Transmit Presence through voice alone.", dicePool: "Charisma + Presence", level: 2, discipline: "presence" },

            // Level 3
            { name: "Passion Leech", description: "Consume human passions to raise your effective Humanity. (Amalgam: Auspex 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Consume human passions to raise your effective Humanity.", dicePool: "Charisma + Presence", level: 3, discipline: "presence" },
            { name: "Clear the Field", description: "Force everyone to leave the area. (Amalgam: Dominate 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 3 }], summary: "Force everyone to leave the area.", dicePool: "Charisma + Presence", level: 3, discipline: "presence" },
            { name: "Dread Gaze", description: "Terrify an individual.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Terrify an individual.", dicePool: "Charisma + Presence", level: 3, discipline: "presence" },
            { name: "Entrancement", description: "Cause infatuation.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Cause infatuation.", dicePool: "Charisma + Presence", level: 3, discipline: "presence" },
            { name: "Thrown Voice", description: "Project voice anywhere you can see. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Project voice anywhere you can see.", dicePool: "Charisma + Presence", level: 3, discipline: "presence" },
            { name: "Twist The Knife", description: "Deal more social damage.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Deal more social damage.", dicePool: "Manipulation + Presence", level: 3, discipline: "presence" },
            { name: "Lotus Kiss", description: "Sap the emotion of those they feed on.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Sap the emotion of those they feed on.", dicePool: "Charisma + Presence", level: 3, discipline: "presence" },
            { name: "Eternal Damnation", description: "Stops a victim's mending or healing. (Amalgam: blood sorcery 3 or oblivion 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 3 }, { discipline: "oblivion", level: 3 }], summary: "Stops a victim's mending or healing.", dicePool: "Manipulation + Presence", level: 3, discipline: "presence" },
            { name: "True Love's Face", description: "Appear as whoever the target loves. (Amalgam: Obfuscate 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 3 }], summary: "Appear as whoever the target loves.", dicePool: "Manipulation + Presence", level: 3, discipline: "presence" },

            // Level 4
            { name: "Inflame Desire", description: "Turn a desire into an obsession. (Amalgam: Obfuscate 1)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 1 }], summary: "Turn a desire into an obsession.", dicePool: "Manipulation + Presence", level: 4, discipline: "presence" },
            { name: "Irresistable Voice", description: "Dominate doesn't require eye contact. (Amalgam: Dominate 1)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 1 }], summary: "Dominate doesn't require eye contact.", dicePool: "Charisma + Presence", level: 4, discipline: "presence" },
            { name: "Magnum Opus", description: "Imbue Awe or Daunt into an artwork. (Amalgam: Auspex 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "auspex", level: 3 }], summary: "Imbue Awe or Daunt into an artwork.", dicePool: "Wits + Presence", level: 4, discipline: "presence" },
            { name: "Suffuse the Edifice", description: "Apply Presence to buildings.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Apply Presence to buildings.", dicePool: "Charisma + Presence", level: 4, discipline: "presence" },
            { name: "Summon", description: "Summon a specific person.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Summon a specific person.", dicePool: "Charisma + Presence", level: 4, discipline: "presence" },
            { name: "Hell Warden", description: "Imprisons someone in an illusion. (Amalgam: Obfuscate 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 3 }], summary: "Imprisons someone in an illusion.", dicePool: "Manipulation + Presence", level: 4, discipline: "presence" },
            { name: "Filigree Entourage", description: "Transfer mental damage to friends. (Amalgam: Fortitude 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Transfer mental damage to friends.", dicePool: "Charisma + Presence", level: 4, discipline: "presence" },
            { name: "Withering Presence", description: "Weaken the mental attack of another.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Weaken the mental attack of another.", dicePool: "Charisma + Presence", level: 4, discipline: "presence" },
            { name: "Wingman", description: "Apply Presence to other people.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Apply Presence to other people.", dicePool: "Charisma + Presence", level: 4, discipline: "presence" },

            // Level 5
            { name: "Fervor of A Captured Heart", description: "Utterly capture a target's heart.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Utterly capture a target's heart.", dicePool: "Charisma + Presence", level: 5, discipline: "presence" },
            { name: "Majesty", description: "Prevent all opposition and aggression.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Prevent all opposition and aggression.", dicePool: "Charisma + Presence", level: 5, discipline: "presence" },
            { name: "Star Magnetism", description: "Presence works through technology.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Presence works through technology.", dicePool: "Charisma + Presence", level: 5, discipline: "presence" },
        ],
    },
    protean: {
        clans: [
            "Gangrel", "Ministry", "Tzimisce", "Ahrimanes", "Lhiannan", "Gargoyle", "Caitiff"
        ],
        summary: "Shape your body to gain power",
        logo: proteanLogo,
        powers: [
            // Level 1
            { name: "Eyes of the Beast", description: "Transform eyes to see in darkness.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Transform eyes to see in darkness.", dicePool: "Wits + Protean", level: 1, discipline: "protean" },
            { name: "Squirm", description: "Fit through 2-inch spaces.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Fit through 2-inch spaces.", dicePool: "Dexterity + Protean", level: 1, discipline: "protean" },
            { name: "Vault Welt", description: "Store objects in skin via infusion. (Amalgam: Oblivion 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }], summary: "Store objects in skin via infusion.", dicePool: "Stamina + Protean", level: 1, discipline: "protean" },
            { name: "Skin Taker", description: "Temporarily transform into an animal when eating the bones.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Temporarily transform into an animal when eating the bones.", dicePool: "Stamina + Protean", level: 1, discipline: "protean" },
            { name: "Stiring Mien", description: "Superficially alter your appearance. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Superficially alter your appearance.", dicePool: "Manipulation + Protean", level: 1, discipline: "protean" },
            { name: "Weight of the Feather", description: "Become weightless.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Become weightless.", dicePool: "Dexterity + Protean", level: 1, discipline: "protean" },

            // Level 2
            { name: "The False Sip", description: "Taste blood without being affected. (Amalgam: Fortitude 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 1 }], summary: "Taste blood without being affected.", dicePool: "Wits + Protean", level: 2, discipline: "protean" },
            { name: "Feral Weapons", description: "Grow claws or enhance natural fangs.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Grow claws or enhance natural fangs.", dicePool: "Strength + Protean", level: 2, discipline: "protean" },
            { name: "Serpent's Kiss", description: "Inject blood with your fangs.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Inject blood with your fangs.", dicePool: "Dexterity + Protean", level: 2, discipline: "protean" },
            { name: "Three Drops Found", description: "Fake your blood being from another Clan. (Amalgam: blood sorcery 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 1 }], summary: "Fake your blood being from another Clan.", dicePool: "Manipulation + Protean", level: 2, discipline: "protean" },
            { name: "Altered Assault", description: "Transform a single attack into an animal part. (Amalgam: Fortitude 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Transform a single attack into an animal part.", dicePool: "Strength + Protean", level: 2, discipline: "protean" },
            { name: "Devil's Mark", description: "Imprint your Presence discipline onto a tattoo. (Amalgam: Presence 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "presence", level: 2 }], summary: "Imprint your Presence discipline onto a tattoo.", dicePool: "Manipulation + Protean", level: 2, discipline: "protean" },
            { name: "Body Arsenal", description: "Break your body into an arsenal of weapons. (Amalgam: Dominate 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Break your body into an arsenal of weapons.", dicePool: "Strength + Protean", level: 2, discipline: "protean" },
            { name: "Vicissitude", description: "Reshape your body in various ways. (Amalgam: Dominate 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Reshape your body in various ways.", dicePool: "Resolve + Protean", level: 2, discipline: "protean" },

            // Level 3
            { name: "Parasite Bore", description: "Transform flesh into parasites to infect others. (Amalgam: Oblivion 3 or blood sorcery 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "oblivion", level: 3 }, { discipline: "blood sorcery", level: 3 }], summary: "Transform flesh into parasites to infect others.", dicePool: "Stamina + Protean", level: 3, discipline: "protean" },
            { name: "Earth Meld", description: "Meld into soil.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Meld into soil.", dicePool: "Stamina + Protean", level: 3, discipline: "protean" },
            { name: "Fleshcrafting", description: "Apply Vicissitude to others. (Amalgam: Dominate 2, Vicissitude)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }, { discipline: "protean", level: 2 }], summary: "Apply Vicissitude to others.", dicePool: "Resolve + Protean", level: 3, discipline: "protean" },
            { name: "Predator's Maw", description: "Transform jaw into a deadly weapon. (Amalgam: Altered Assault or Feral Weapons)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "protean", level: 2 }], summary: "Transform jaw into a deadly weapon.", dicePool: "Strength + Protean", level: 3, discipline: "protean" },
            { name: "Shapechange", description: "Turn into a human-sized animal.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Turn into a human-sized animal.", dicePool: "Stamina + Protean", level: 3, discipline: "protean" },
            { name: "Faconnage", description: "Make someone uglier when attacking. (Amalgam: Devil's Mark or Vicissitude)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "protean", level: 2 }], summary: "Make someone uglier when attacking.", dicePool: "Manipulation + Protean", level: 3, discipline: "protean" },
            { name: "Visceral Absorption", description: "Absorb human remains into yourself. (Amalgam: blood sorcery 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 2 }], summary: "Absorb human remains into yourself.", dicePool: "Stamina + Protean", level: 3, discipline: "protean" },

            // Level 4
            { name: "Ennoia's Mastery", description: "Choose dicepools from animals to adapt.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Choose dicepools from animals to adapt.", dicePool: "Wits + Protean", level: 4, discipline: "protean" },
            { name: "Horrid Form", description: "Turn into a monstrosity. (Amalgam: Dominate 2, Vicissitude)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }, { discipline: "protean", level: 2 }], summary: "Turn into a monstrosity.", dicePool: "Strength + Protean", level: 4, discipline: "protean" },
            { name: "Draught of Beast & Beauty", description: "Change the appearance of those who drink the user's blood. (Amalgam: Obfuscate 2 or Presence 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "obfuscate", level: 2 }, { discipline: "presence", level: 2 }], summary: "Change the appearance of those who drink the user's blood.", dicePool: "Manipulation + Protean", level: 4, discipline: "protean" },
            { name: "Metamorphosis", description: "Turn into any animal. (Amalgam: Shapechange)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "protean", level: 3 }], summary: "Turn into any animal.", dicePool: "Stamina + Protean", level: 4, discipline: "protean" },

            // Level 5
            { name: "Bloodform", description: "Transform wholly or partially into blood. (Amalgam: blood sorcery 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 2 }], summary: "Transform wholly or partially into blood.", dicePool: "Stamina + Protean", level: 5, discipline: "protean" },
            { name: "Heart of Darkness", description: "Remove your heart to prevent staking. (Amalgam: Fortitude 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Remove your heart to prevent staking.", dicePool: "Stamina + Protean", level: 5, discipline: "protean" },
            { name: "Master of Forms", description: "Transform into unlimited animal types. (Amalgam: Shapechange)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "protean", level: 3 }], summary: "Transform into unlimited animal types.", dicePool: "Stamina + Protean", level: 5, discipline: "protean" },
            { name: "Mist Form", description: "Turn into a cloud of mist.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Turn into a cloud of mist.", dicePool: "Stamina + Protean", level: 5, discipline: "protean" },
            { name: "One with the Land", description: "Experience everything in a one-mile radius while melded. (Amalgam: Animalism 2, Earth Meld)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "animalism", level: 2 }, { discipline: "protean", level: 3 }], summary: "Experience everything in a one-mile radius while melded.", dicePool: "Wits + Protean", level: 5, discipline: "protean" },
            { name: "Mitosis", description: "Create a horrifying creature from your flesh. (Amalgam: Dominate 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Create a horrifying creature from your flesh.", dicePool: "Stamina + Protean", level: 5, discipline: "protean" },
            { name: "Self-Made Throngs", description: "Can transform into a pack of animals. (Amalgam: Animalism 1)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Can transform into a pack of animals.", dicePool: "Stamina + Protean", level: 5, discipline: "protean" },
            { name: "The Unfettered Heart", description: "Prevent staking or get free from it.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Prevent staking or get free from it.", dicePool: "Stamina + Protean", level: 5, discipline: "protean" },
        ],
    },
    "blood sorcery": {
        clans: [
            "Tremere", "Banu Haqim", "Baali", "Caitiff"
        ],
        summary: "Use blood-related magic and rituals",
        logo: bloodSorceryLogo,
        powers: [
            // Level 1
            { name: "Corrosive Vitae", description: "Corrode inanimate material.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Corrode inanimate material.", dicePool: "Stamina + Blood Sorcery", level: 1, discipline: "blood sorcery" },
            { name: "Daimonion", description: "Infernalism, allows for the communication with a bonded Demonic Entity. (Amalgam: Oblivion 1, Baali?)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "oblivion", level: 1 }], summary: "Infernalism, allows for the communication with a bonded Demonic Entity.", dicePool: "Resolve + Blood Sorcery", level: 1, discipline: "blood sorcery" },
            { name: "Koldunic Sorcery", description: "Bond with an element, see through it. (Amalgam: Tzimisce?)", rouseChecks: 1, amalgamPrerequisites: [], summary: "Bond with an element, see through it.", dicePool: "Wits + Blood Sorcery", level: 1, discipline: "blood sorcery" },
            { name: "Natural Ritualist", description: "Learn rituals for cheaper and faster.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Learn rituals for cheaper and faster.", dicePool: "Intelligence + Blood Sorcery", level: 1, discipline: "blood sorcery" },
            { name: "Shape the Sanguine Sacrament", description: "Sculpt blood into any desired shape.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Sculpt blood into any desired shape.", dicePool: "Manipulation + Blood Sorcery", level: 1, discipline: "blood sorcery" },
            { name: "A Taste for Blood", description: "Get information from blood.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Get information from blood.", dicePool: "Resolve + Blood Sorcery", level: 1, discipline: "blood sorcery" },

            // Level 2
            { name: "Blood's Curse", description: "Increase others' Bane Severity.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Increase others' Bane Severity.", dicePool: "Manipulation + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Extinguish Vitae", description: "Make another vampire hungrier.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Make another vampire hungrier.", dicePool: "Resolve + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Agatiyon Famulus", description: "Bind more power and intelligence to a bonded Famulus. (Amalgam: Animalism 1, Bond Famulus)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Bind more power and intelligence to a bonded Famulus.", dicePool: "Wits + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Gnaw", description: "Summon a swarm from oblivion to attack.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Summon a swarm from oblivion to attack.", dicePool: "Manipulation + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Sealing Antiphon", description: "Seals another's power with a hymn.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Seals another's power with a hymn.", dicePool: "Charisma + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Sanguine Bond", description: "Transfer damage mended to a victim.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Transfer damage mended to a victim.", dicePool: "Stamina + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Scour Secrets", description: "Locate particular information in text.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Locate particular information in text.", dicePool: "Intelligence + Blood Sorcery", level: 2, discipline: "blood sorcery" },

            // Level 3
            { name: "Blood of Potency", description: "Increase Blood Potency temporarily.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Increase Blood Potency temporarily.", dicePool: "Resolve + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Ripples of the Heart", description: "Change resonances or implant compulsions.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Change resonances or implant compulsions.", dicePool: "Manipulation + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Scorpion's Touch", description: "Turn blood into venom.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Turn blood into venom.", dicePool: "Strength + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Balefire Ignition", description: "Summon a life eating flame. (Amalgam: Oblivion 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "oblivion", level: 2 }], summary: "Summon a life eating flame.", dicePool: "Resolve + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Transitive Bond", description: "Bond via blood in a container or mortal.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Bond via blood in a container or mortal.", dicePool: "Intelligence + Blood Sorcery", level: 3, discipline: "blood sorcery" },

            // Level 4
            { name: "Blood Aegis", description: "Block projectiles with blood.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Block projectiles with blood.", dicePool: "Stamina + Blood Sorcery", level: 4, discipline: "blood sorcery" },
            { name: "Fulminating Vitae", description: "Turn blood into an explosive weapon.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Turn blood into an explosive weapon.", dicePool: "Strength + Blood Sorcery", level: 4, discipline: "blood sorcery" },
            { name: "Marionette", description: "Control spilled blood, corpses, or living humans like puppets. (Amalgam: Shape the Sanguine Sacrament)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 1 }], summary: "Control spilled blood, corpses, or living humans like puppets.", dicePool: "Manipulation + Blood Sorcery", level: 4, discipline: "blood sorcery" },
            { name: "Draught of Power", description: "Baali gives a bit of their power to another, the Baali then grows in power in response to the indulgence of the victim.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Baali gives a bit of their power to another, the Baali then grows in power in response to the indulgence of the victim.", dicePool: "Charisma + Blood Sorcery", level: 4, discipline: "blood sorcery" },
            { name: "Theft of Vitae", description: "Steal blood from a distance.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Steal blood from a distance.", dicePool: "Resolve + Blood Sorcery", level: 4, discipline: "blood sorcery" },

            // Level 5
            { name: "Baal's Caress", description: "Turn blood into stronger venom. (Amalgam: Scorpion's Touch?)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 3 }], summary: "Turn blood into stronger venom.", dicePool: "Strength + Blood Sorcery", level: 5, discipline: "blood sorcery" },
            { name: "Cauldron of Blood", description: "Boil blood inside a target's body.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Boil blood inside a target's body.", dicePool: "Resolve + Blood Sorcery", level: 5, discipline: "blood sorcery" },
            { name: "Born Again", description: "Mark mortal to be possessed.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Mark mortal to be possessed.", dicePool: "Manipulation + Blood Sorcery", level: 5, discipline: "blood sorcery" },
            { name: "Reclamation of Vitae", description: "Reclaim the vitae from your ghouls.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Reclaim the vitae from your ghouls.", dicePool: "Stamina + Blood Sorcery", level: 5, discipline: "blood sorcery" },
        ],
    },
    oblivion: {
        clans: [
            "Lasombra", "Hecata", "Kiasyd", "Baali", "Lamia", "Nagaraja", "Caitiff"
        ],
        summary: "Shadow powers and necromancy",
        logo: oblivionLogo,
        powers: [
            // Level 1
            { name: "Ashes to Ashes", description: "Disintegrate a corpse.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Disintegrate a corpse.", dicePool: "Stamina + Oblivion", level: 1, discipline: "oblivion" },
            { name: "Binding Fetter", description: "Detect ghostly fetters.", rouseChecks: 0, amalgamPrerequisites: [], summary: "Detect ghostly fetters.", dicePool: "Wits + Oblivion", level: 1, discipline: "oblivion" },
            { name: "Shadow Cloak", description: "Manipulate shadows (gives bonuses).", rouseChecks: 0, amalgamPrerequisites: [], summary: "Manipulate shadows (gives bonuses).", dicePool: "Dexterity + Oblivion", level: 1, discipline: "oblivion" },
            { name: "Daimonion", description: "Commune with the Outer Dark. (Amalgam: blood sorcery 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 1 }], summary: "Commune with the Outer Dark.", dicePool: "Resolve + Oblivion", level: 1, discipline: "oblivion" },
            { name: "Rapacious Communion", description: "Sacrifice the Blood Resonance of a victim, making them lack one.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Sacrifice the Blood Resonance of a victim.", dicePool: "Stamina + Oblivion", level: 1, discipline: "oblivion" },
            { name: "Lambet Dark", description: "Supernatural darklight bypasses all mortal perception. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Supernatural darklight bypasses all mortal perception.", dicePool: "Wits + Oblivion", level: 1, discipline: "oblivion" },
            { name: "Oblivion's Sight", description: "See in darkness and perceive ghosts.", rouseChecks: 0, amalgamPrerequisites: [], summary: "See in darkness and perceive ghosts.", dicePool: "Wits + Oblivion", level: 1, discipline: "oblivion" },

            // Level 2
            { name: "Arms of Ahriman", description: "Use shadows to attack. (Amalgam: Potence 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "potence", level: 2 }], summary: "Use shadows to attack.", dicePool: "Strength + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Fatal Prediction", description: "Doom someone to injury or death. (Amalgam: Auspex 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Doom someone to injury or death.", dicePool: "Manipulation + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Carrion Banquet", description: "Slake additional hunger from corpses. (Amalgam: Fortitude 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 1 }], summary: "Slake additional hunger from corpses.", dicePool: "Stamina + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Soul Swap", description: "Swap the aura of two people. (Amalgam: blood sorcery 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 1 }], summary: "Swap the aura of two people.", dicePool: "Manipulation + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Shadow Cast", description: "Create shadows (gives bonuses).", rouseChecks: 1, amalgamPrerequisites: [], summary: "Create shadows (gives bonuses).", dicePool: "Dexterity + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Where the Veil Thins", description: "Sense the strength of the Veil, and reduce ceremony difficulties if it's thin.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Sense the strength of the Veil, and reduce ceremony difficulties if it's thin.", dicePool: "Wits + Oblivion", level: 2, discipline: "oblivion" },

            // Level 3
            { name: "Aura of Decay", description: "Decay everything around.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Decay everything around.", dicePool: "Stamina + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Passion Feast", description: "Feed on wraiths, draining Passion. (Amalgam: Fortitude 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Feed on wraiths, draining Passion.", dicePool: "Stamina + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Shadow Perspective", description: "Project senses through shadows.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Project senses through shadows.", dicePool: "Wits + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Shadow Servant", description: "Send your shadow out to spy. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Send your shadow out to spy.", dicePool: "Wits + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Nigtmare Theatre", description: "Haunt someone with nightmares. (Amalgam: Presence 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "presence", level: 2 }], summary: "Haunt someone with nightmares.", dicePool: "Manipulation + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Clinging Affinity", description: "A shadow that fills victim with despair. (Amalgam: Presence 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "presence", level: 3 }], summary: "A shadow that fills victim with despair.", dicePool: "Manipulation + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Touch of Oblivion", description: "Decay a living or unliving body.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Decay a living or unliving body.", dicePool: "Stamina + Oblivion", level: 3, discipline: "oblivion" },

            // Level 4
            { name: "Profane the Sanctified", description: "Corrode True Faith and holy symbols. (Amalgam: Aura of Decay or Touch of Oblivion)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "oblivion", level: 3 }], summary: "Corrode True Faith and holy symbols.", dicePool: "Stamina + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Necrotic Plague", description: "Cause damage over time.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Cause damage over time.", dicePool: "Stamina + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Stygian Shroud", description: "Impose darkness on an area.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Impose darkness on an area.", dicePool: "Wits + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Pareidolian", description: "Have your shadow possessed by an entity. (Amalgam: blood sorcery 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 2 }], summary: "Have your shadow possessed by an entity.", dicePool: "Wits + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Umbrous Clutch", description: "Pull someone through their shadow into yours.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Pull someone through their shadow into yours.", dicePool: "Strength + Oblivion", level: 4, discipline: "oblivion" },

            // Level 5
            { name: "The Darkness Within", description: "Animate someone's shadow to attack.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Animate someone's shadow to attack.", dicePool: "Strength + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Shadow Step", description: "Teleport between shadows.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Teleport between shadows.", dicePool: "Dexterity + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Skuld Fulfilled", description: "Re-impose old injury or sickness.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Re-impose old injury or sickness.", dicePool: "Manipulation + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Tenebrous Avatar", description: "Become a shadow.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Become a shadow.", dicePool: "Wits + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Pestilence", description: "Summon a wind that rots everything and raises the dead.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Summon a wind that rots everything and raises the dead.", dicePool: "Stamina + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Hell's Yawning Maw", description: "Summon a demonic Baelfire Hellion. (Amalgam: blood sorcery 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 2 }], summary: "Summon a demonic Baelfire Hellion.", dicePool: "Resolve + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Withering Spirit", description: "Erode a target's will.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Erode a target's will.", dicePool: "Manipulation + Oblivion", level: 5, discipline: "oblivion" },
        ],
    },
    "thin-blood alchemy": {
        clans: ["Thin-blood"],
        summary: "",
        logo: "",
        powers: [],
    },
    "": {
        clans: [],
        summary: "",
        logo: "",
        powers: [],
    },
}

export const ritualSchema = z.object({
    name: z.string(),
    summary: z.string(),
    rouseChecks: z.number().min(0).int(),
    requiredTime: z.string(),
    dicePool: z.string(),
    ingredients: z.string(),
    level: z.number().min(1).int(),
})
export type Ritual = z.infer<typeof ritualSchema>

export const Rituals: Ritual[] = [
    {
        name: "Blood Walk",
        summary: "Use blood to learn about a subjects generation, name, sire and - on a crit - any active Blood Bonds.",
        rouseChecks: 1,
        requiredTime: "1 hour",
        dicePool: "Intelligence + Blood Sorcery",
        ingredients: "Blood of the subject",
        level: 1,
    },
    {
        name: "Clinging of the Insect",
        summary: "Drink blood mixed with a freshly crushed spider to cling to walls like an insect.",
        rouseChecks: 1,
        requiredTime: "5min",
        dicePool: "Intelligence + Blood Sorcery",
        ingredients: "Living spider, your own blood",
        level: 1,
    },
    {
        name: "Craft Bloodstone",
        summary: "Slowly soak blood into a small magnet. Once done, you sense the direction and rough distance of the stone for a week.",
        rouseChecks: 1,
        requiredTime: "3 nights",
        dicePool: "Intelligence + Blood Sorcery",
        ingredients: "Small magnet, your blood",
        level: 1,
    },
    {
        name: "Wake with Evenings Freshness",
        summary: "When threatened during the day after performing this ritual, awaken and ignore daytime penalties for a scene.",
        rouseChecks: 1,
        requiredTime: "5min",
        dicePool: "Intelligence + Blood Sorcery",
        ingredients: "Burnt bones of a rooster",
        level: 1,
    },
    {
        name: "Ward against Ghouls",
        summary:
            "Place a ward on a small object. When a ghoul tries to touch it, roll your Ritual roll. If you succeed, the Ghoul cannot touch it and is damaged.",
        rouseChecks: 1,
        requiredTime: "5min",
        dicePool: "Intelligence + Blood Sorcery",
        ingredients: "asd",
        level: 1,
    },
]

export const powerIsRitual = (p: Power | Ritual): p is Ritual => {
    return (p as Ritual)["ingredients"] !== undefined
}
