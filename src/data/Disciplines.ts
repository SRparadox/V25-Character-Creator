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
            // Added Level 2
            {
                name: "Folderol",
                description: "Amalgam: Auspex 2. Engage a target in conversation, causing them to blurt out truths they try to hide. For the scene, whenever the target attempts a Subterfuge check against the user, the user can contest with Wits + Dominate. On a success, the target blurts out the truth. The target may later roll Wits + Insight vs. the user's Charisma/Manipulation + Persuasion/Subterfuge to determine the source. If the user succeeds, they can make another Rouse Check to continue Folderol into the next scene. If the user has Rationalize, no contested check is needed to continue.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "auspex", level: 2 }],
                summary: "Force a target to blurt out truths in conversation.",
                dicePool: "Wits + Dominate vs. Composure + Subterfuge",
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
            // Added Level 4
            {
                name: "Mytherceria",
                description: "Amalgam: Oblivion 2. Sanctify a verbal agreement, causing misfortune to any who violate it. Cost: 1 Rouse Check per bound individual. User states the terms, makes a Rouse Check per individual, and rolls Manipulation + Oblivion for duration (each success = 24 hours). Violators take a -2 die penalty to all pools for the day, doubling each day. If a pool is reduced to 0, suffer 2 Aggravated Willpower damage. Kindred must check for Fury Frenzy. The user is equally affected if they break the pact.",
                rouseChecks: 1,
                amalgamPrerequisites: [{ discipline: "oblivion", level: 2 }],
                summary: "Sanctify a pact; violators suffer escalating penalties.",
                dicePool: "Manipulation + Oblivion",
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
            // Added Level 2
            { name: "Xantico's Refuge", description: "Amalgam: Protean 1. Upon exposure to a Fear Frenzy trigger from fire, make a Rouse Check to ignore the fear for the scene. At the end, make a Willpower Check (add Protean rating) to resist Frenzy. On failure, succumb to Fear Frenzy. Can only use once per scene unless burning superficial Willpower for another Rouse Check.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "protean", level: 1 }], summary: "Delay Fear Frenzy from fire, then resist with bonus.", dicePool: "Willpower Check (+Protean)", level: 2, discipline: "fortitude" },
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
            // Added Level 3
            { name: "Unliving Statue", description: "Amalgam: Fortitude 3. Stand still and make a Rouse Check to become indistinguishable from stone or masonry, blending into the environment. Remain aware and can use Disciplines that don't require movement or speech. Sunlight does not harm you, but you enter daysleep at daybreak. Sense the Unseen can detect you with a contested roll. Duration: Indefinite until you revert with another Rouse Check.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 3 }], summary: "Become a living statue, immune to sunlight while still.", dicePool: "N/A (Sense the Unseen: Wits + Auspex vs. Resolve + Obfuscate)", level: 3, discipline: "obfuscate" },
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
            {
                name: "Weight Of A Feather",
                description: "The Kindred is able to manipulate his own mass allowing him a graceful descent from any height. The Kindred can lower his weight down to that of a feather. Allowing him to drift to the ground without taking any fall damage or even glide through the air for a short time on strong gusts of wind. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: None ❖ Conditions: None ❖ Risk: High. You are falling with unnatural grace and breaking the laws of physics. This ability will be seen as supernatural by any observer. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: 1 Scene (a few minutes), or until the Kindred lands.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Manipulate your own mass to descend gracefully from any height without fall damage.",
                dicePool: "None",
                level: 1,
                discipline: "protean",
            },
            {
                name: "Adaptation",
                description: "The Kindred's body rapidly adapts to its surroundings allowing the vampire to feel at home regardless of the environment. The Kindred does not take any penalties from natural effects of the environment (such as heat or temperature) and adds 1 dice per dot in Protean to any Survival related rolls. ❖ Type: Upgrade ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: None ❖ Conditions: The bonus stops applying if temperatures are lower then -100 degrees Celsius (-150 degrees Fahrenheit) or exceed 100 degrees Celsius (200 degrees Fahrenheit). ❖ Risk: None ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Body adapts to environment, no environmental penalties and bonus to Survival rolls.",
                dicePool: "None",
                level: 1,
                discipline: "protean",
            },
            {
                name: "Feral Focus",
                description: "The Kindred grows more accustomed to the mutations he can force onto their body. The Kindred can manifest 2 powers from the Protean Discipline at the same time at the cost of 1 Rouse Check, as long as they are not ranked higher than 2 dots. ❖ Type: Upgrade ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: None ❖ Conditions: The powers can be up to level 2. ❖ Risk: High. Powers from Protean are a very obvious Masquerade breach so proceed with caution. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Manifest 2 Protean powers (up to level 2) simultaneously for 1 Rouse Check.",
                dicePool: "None",
                level: 1,
                discipline: "protean",
            },
            {
                name: "Eyes Of The Beast",
                description: "The Kindred's eyes grow a bright red, granting him superb night vision and terrifying his enemies. The Kindred can see in near total darkness without any penalties and adds 2 dice to any Intimidation roll against Mortals and Enhanced Mortals. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: None ❖ Conditions: None ❖ Risk: High. The ability is clearly supernatural and unnerves mortals. More so, it is difficult to hide as the eyes glow with a vibrant crimson color. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 Hour), until the Kindred ends the ability or is incapacitated.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Eyes glow red, perfect night vision and +2 dice to Intimidation vs Mortals.",
                dicePool: "None",
                level: 1,
                discipline: "protean",
            },
            {
                name: "Dolphin's Unsight",
                description: "The Kindred's ears take a strange alien shape or grow into large bat like variants. The Kindred benefits from supernatural hearing and can even function without issue if blinded. Sadly, the benefit does not transfer to any ranged attacks such as shooting and the Kindred still needs Visual Range or Eye Contact for abilities which require it. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: None ❖ Conditions: None. To clarify, unlike Heightened Senses the Kindred cannot be stunned by loud sounds as the ears have a more \"natural\" resilience to such disturbances. ❖ Risk: High. Your ears no longer human. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 Hour), until the Kindred ends the ability or is incapacitated.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Ears change shape, gain supernatural hearing and function normally when blinded.",
                dicePool: "None",
                level: 1,
                discipline: "protean",
            },
            {
                name: "Phocidaean Webbing",
                description: "Thin webbing grows between the Kindreds toes and fingers allowing him to adapt quickly to an aquatic environment. The Kindred doubles his dice pool for any Athletics related rolls while in water. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: None ❖ Conditions: None ❖ Risk: Moderate. While you are still visibly changing your limbs these changes can be more easily hidden. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 Hour), until the Kindred ends the ability or is incapacitated.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Grow webbing between fingers and toes, double Athletics dice pool in water.",
                dicePool: "None",
                level: 1,
                discipline: "protean",
            },
            {
                name: "Feline Grace",
                description: "The Kindred's tendons snap and reshape bringing its centre of gravity lower to the ground. While they have a somewhat animalistic posture, they now have a perfect sense of balance and can move without issue even on the narrowest of footings. The Kindred automatically passes all Athletic tests related to balancing on a tight footing such as ropes, narrow ledged and pipes (Effectively we are mimicking Cat's Grace from Celerity). ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: None ❖ Conditions: None ❖ Risk: Minor. Your posture is somewhat poor, but nothing immediately noticeable. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: None",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Perfect sense of balance, automatically pass Athletic tests for balancing.",
                dicePool: "None",
                level: 1,
                discipline: "protean",
            },

            // Level 2
            {
                name: "Purify",
                description: "The Kindred violently expels poisons and foreign objects from their body. If successful the Kindred will expel any poison he might have ingested or foreign objects in his body. These will be expelled either out through the initial wound or through vomiting. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Round + 1 Rouse Check ❖ Conditions: Foreign object can be poison shrapnel or similar. A stake however, can never be expelled with this ability. ❖ Risk: Moderate. Kindred always vomit blood and expelling things through one's flesh can hardly be considered normal, luckily the effects of the ability can be hidden if not done in public. ❖ Test: Protean + Stamina (2) ❖ Resistance Roll: None ❖ Duration: 1 Round (a few seconds), or until the object is expelled.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Violently expel poisons and foreign objects from your body.",
                dicePool: "Protean + Stamina",
                level: 2,
                discipline: "protean",
            },
            {
                name: "Nebulization",
                description: "The Kindred's body changes in part to smoke and mist when struck confounding the enemy and limiting their blows. If successful the enemies Strength + Brawl / Melee and Dexterity + Brawl / Melee / Firearms rolls suffer a 2 dice penalty when attacking the Kindred. This penalty should be applied to any other mundane physical attacks targeting the Kindred but the ability does not weaken attacks made with fire or sunlight. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Round + 1 Rouse Check ❖ Conditions: It takes one round of focus for the effects of the power to provide a bonus. ❖ Risk: High. As you are changing in part to mist. This ability can only be considered supernatural. ❖ Test: Protean + Stamina (2) ❖ Resistance Roll: None ❖ Duration: 1 Scene (10 minutes)",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Body partially turns to mist when struck, enemies suffer -2 dice penalty to physical attacks.",
                dicePool: "Protean + Stamina",
                level: 2,
                discipline: "protean",
            },
            {
                name: "Feral Mastery",
                description: "The Kindred starts to enjoy and master the many ways he can adapt his body. Claws manifest on command; fangs grow with a thought and the body reforms as easily as flexing a muscle. The Kindred no longer needs to make Rouse Checks to manifest powers from the Protean discipline up to level 2. ❖ Type: Upgrade ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: None ❖ Conditions: None ❖ Risk: High. Powers from Protean are a very obvious Masquerade breach so proceed with caution. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "No Rouse Checks needed for Protean powers up to level 2.",
                dicePool: "None",
                level: 2,
                discipline: "protean",
            },
            {
                name: "Feral Weapons",
                description: "Vicious claws or talons sprout from the Kindred's fingers providing him with deadly weapons on the spot. If successful, damage caused by the Kindred's unarmed physical attacks cannot be halved and causes Aggravated Damage to Mortals, while ignoring most armour. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Rouse Check ❖ Conditions: None ❖ Risk: Moderate. While you are still visibly changing your hands these changes can be hidden. ❖ Test: Protean + Stamina (2) ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 Hour), until the Kindred ends the ability or is incapacitated.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Grow claws, unarmed attacks cause Aggravated Damage to Mortals and ignore armor.",
                dicePool: "Protean + Stamina",
                level: 2,
                discipline: "protean",
            },
            {
                name: "Bear Strength",
                description: "The Kindred's body visibly increases its muscle mass granting him monstrous strength. If successful the Kindred adds 2 dice to any Strength related roll. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Rouse Check ❖ Conditions: The dice bonus cannot be used in Tests to activate supernatural abilities but can be used in Resistance Rolls. ❖ Risk: Moderate. You grow several inches and have obviously added several kilos of muscle mass to your body from seemingly nowhere. ❖ Test: Protean + Stamina (2) ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 Hour), until the Kindred ends the ability or is incapacitated.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Increase muscle mass, +2 dice to Strength rolls.",
                dicePool: "Protean + Stamina",
                level: 2,
                discipline: "protean",
            },
            {
                name: "Hunters Stride",
                description: "Tendons snap and reform providing the Kindred with a higher degree of speed and dexterity while giving him a somewhat inhumane posture. If successful, the Kindred adds 3 dice to any Dexterity, Stamina or Athletics related rolls when running, jumping or otherwise pursuing their prey. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Rouse Check ❖ Conditions: None ❖ Risk: Moderate. Your body posture is inhuman and you stand out in a crowd. ❖ Test: Protean + Stamina (2) ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 Hour), until the Kindred ends the ability or is incapacitated.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Inhuman posture grants +3 dice to Dexterity, Stamina or Athletics when pursuing prey.",
                dicePool: "Protean + Stamina",
                level: 2,
                discipline: "protean",
            },
            {
                name: "Ursun's Slumber",
                description: "The Kindred's wounds heal during its daytime slumber as it focuses its will upon restoring its body. To have any effect this power must be activated immediately before the Kindred goes to sleep. If successful the Kindred is able to reduce one point of Aggravated Damage to Superficial per dot he has in Protean. However, he cannot restore any Willpower during their daytime slumber. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Rouse Check ❖ Conditions: The Kindred cannot recover Willpower as all of his focus is on healing his damaged body. If his sleep is interrupted before he would normally rise then the ability automatically fails and neither Willpower nor Health are recovered. ❖ Risk: Minor. Onlookers will see wounds heal on a theoretically dead body. ❖ Test: Protean + Stamina (2) ❖ Resistance Roll: None ❖ Duration: 1 night's rest (several hours) or until the Kindred is woken up.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Heal Aggravated Damage during sleep but cannot recover Willpower.",
                dicePool: "Protean + Stamina",
                level: 2,
                discipline: "protean",
            },

            // Level 3
            {
                name: "Shapechange",
                description: "The Kindred adopts the form of a predatory animal and hunts like one. If successful the Kindred changes form into a predatory animal of a similar size or smaller. He replaces all his physical attributes and skills for that of the animal. While in this form he cannot use any of his other abilities, but still benefits from all upgrades. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Round + 1 Rouse Check, if the Kindred recently feed on the animal he is changing into then no Rouse Check is required. ❖ Conditions: The animal must be a predator and cannot be larger than the Kindred himself (bears, tiger, great whites are therefore usually excluded). The power takes 1 Round to manifest. ❖ Risk: High. While in this form the animal is simply seen as a particularly intelligent member of its species. However, changing in full view of the uninitiated will cause a panic. ❖ Test: Protean + Stamina (3) ❖ Resistance Roll: None ❖ Duration: Until the Kindred uses a Round to voluntarily end the power or is Incapacitated.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Transform into a predatory animal of similar or smaller size.",
                dicePool: "Protean + Stamina",
                level: 3,
                discipline: "protean",
            },
            {
                name: "Earth Meld",
                description: "The Kindred sinks into the ground, bewildering onlookers and frustrating his pursuers. If successful the Kindred sinks into the ground. He can remain there indefinitely, even slumber the day away, but will need to eventually resurface to feed. When resurfacing the Kindred can reappear anywhere within 10 meters (30 feet) of where he initially went to ground. While underground the Kindred is one with the earth and cannot be injured or removed short of employing excavating equipment or destroying the ground through a large explosion. To clarify the Kindred does not actually dig a hole but literally sinks into the ground for several meters becoming one with the earth. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Round + 1 Rouse Check ❖ Conditions: The ability can only be used when standing on natural soil. Similarly, the Kindred can only resurface in a location with natural soil. The ability takes one Round to execute so the enemy has a small window to try and interrupt the power. ❖ Risk: High. The Kindred is disappearing into the earth; onlookers will find it hard to explain but will know something supernatural had just occurred. ❖ Test: Protean + Stamina (3) ❖ Resistance Roll: None ❖ Duration: Until the Kindred spends a Round to resurface or is forced to do so due to a Frenzy or similar event.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Sink into natural soil and remain underground indefinitely.",
                dicePool: "Protean + Stamina",
                level: 3,
                discipline: "protean",
            },
            {
                name: "Feral Maw",
                description: "The Kindred's mouth fills with row upon row of sharp teeth allowing him to deliver a horrible bite. If successful, the Kindred's bite attacks cause Aggravated Damage to all targets, ignore all forms of armour and have a + 2 damage modifier. While the power is in effect the Kindred cannot properly talk or issue Vocal commands. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: None ❖ Conditions: None ❖ Risk: High. The Kindred's mouth looks unnatural and animalistic. ❖ Test: Protean + Stamina (3) ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 Hour), until the Kindred ends the ability or is incapacitated.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Mouth fills with sharp teeth, bite attacks cause Aggravated Damage with +2 modifier.",
                dicePool: "Protean + Stamina",
                level: 3,
                discipline: "protean",
            },
            {
                name: "Scaled Armour",
                description: "The Kindreds skin grows leathery and scales start to form on parts of its body. The Kindred can ignore up to 2 points of Superficial Health Damage after halving the result. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: None ❖ Conditions: None ❖ Risk: High. The Kindreds skin grows tough and visibly scaly. ❖ Test: Protean + Stamina (3) ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 Hour), until the Kindred ends the ability or is incapacitated.",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Skin grows scaly, ignore up to 2 points of Superficial Health Damage after halving.",
                dicePool: "Protean + Stamina",
                level: 3,
                discipline: "protean",
            },
            {
                name: "Pitbull's Grip",
                description: "The Kindred's bite is all but impossible to dislodge. If successful then anytime the user feeds any attempts to stop them from continuing halve their dice pool rounding up. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Rouse Check ❖ Conditions: Only works if the Kindred had already latched onto their target. ❖ Risk: High. The Kindred's mouth and jaw grow and extend with additional muscle. ❖ Test: Protean + Stamina (3) ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 Hour), until the Kindred ends the ability or is incapacitated.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Bite becomes impossible to dislodge, attempts to stop feeding are halved.",
                dicePool: "Protean + Stamina",
                level: 3,
                discipline: "protean",
            },

            // Level 4
            {
                name: "Shape Mastery",
                description: "The Kindred can adopt the form of any animal no matter the size or shape. When using Shapechange the Kindred can turn into any predatory animal regardless of size. ❖ Type: Upgrade ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: None ❖ Conditions: Must have Shapechange. Only natural predators' count. ❖ Risk: High. This power improves Shapechange, which carries its own risks of a Masquerade breach. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Shapechange can now turn into any predatory animal regardless of size.",
                dicePool: "None",
                level: 4,
                discipline: "protean",
            },
            {
                name: "Flight",
                description: "Leathery wings sprout from the Kindreds arms allowing it to fly through the night. The Kindred's arms turn to feathery or leathery wings. The wings allow them a rudimentary ability to fly although they are never as graceful as a natural bird or bat. While the wings do take up the majority of the arms, they do not prevent the Kindred from being a deadly combatant. The one exception there is however is that the Kindred cannot wield weapons or items while the power is in effect. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Round + 1 Rouse Check ❖ Conditions: None ❖ Risk: Very High. People nowadays everywhere have cameras and phones. This power is very noticeable and is best used in remote locations. ❖ Test: Protean + Stamina (4) ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 Hour), until the Kindred ends the ability or is incapacitated.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Arms turn to wings allowing flight, but cannot wield weapons or items.",
                dicePool: "Protean + Stamina",
                level: 4,
                discipline: "protean",
            },
            {
                name: "Cormorant's Flight",
                description: "The Kindred grows oily feathery wings from his back. While to small to provide flight they assist them with gliding and are resilient to the coastal storms common for the area. If successful, the Kindred sprouts feathery wings from his back. Unlike the normal Flight power this ability does not allow them to take off but it does allow them to glide through the air with exceptional skill if they jump from a high point. The wings are also oily so wind, rain and storms do not hamper the Kindred's glide. Additionally, the wings had sprouted from the Kindreds back meaning their hands are free to operate weaponry. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Round + 1 Rouse Check ❖ Conditions: None ❖ Risk: Very High. The Kindred had sprouted wings from their back, this will be incredibly noticeable. ❖ Test: Protean + Stamina (4) ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 Hour), until the Kindred ends the ability or is incapacitated.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Wings sprout from back for gliding, hands remain free for weapons.",
                dicePool: "Protean + Stamina",
                level: 4,
                discipline: "protean",
            },

            // Level 5
            {
                name: "Mist Form",
                description: "The Kindred learns to turn his body partially or fully into mist. If successful the Kindred can spend a Round to turn into pure mist and a Round to reform back into a solid form. He can do this several times in a single Scene. While in his mist form only fire and sunlight can harm him. He can move at a speed of 5 meters (30 feet) pet Round. Can pass through small nooks and cracks but cannot do any other actions. While in mist form, he cannot be affected by powers which require Eye Contact and cannot use any of his other abilities. He still benefits from all upgrades. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Round + 2 Rouse Checks, if the Kindred possesses Nebulization than only a single Rouse Check is required. ❖ Conditions: None ❖ Risk: Minor. Aside from manifesting the ability, this power can be very subtle. ❖ Test: Protean + Stamina (5) ❖ Resistance Roll: None ❖ Duration: 1 Scene (10 minutes)",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Turn into mist form, only vulnerable to fire and sunlight.",
                dicePool: "Protean + Stamina",
                level: 5,
                discipline: "protean",
            },
            {
                name: "War Form",
                description: "The Kindred turns into a horrific man-beast abomination. Its size increases and fur, scales or leathery skin appear. Its face twists into that of a predator as other mutations run rampant. The Kindred turns into a supernatural monstrosity. He now causes terror. All Mortals and Enhanced Mortals will flee from the Scene in terror unless they pass a Willpower test (3). The Kindred gains a 2 dice bonus to all physical rolls and may choose one additional power from Protean to be activated at the same time, without needing to make any additional Rouse Check. While in this form the Kindred removes 2 dice from any tests when trying to resist Frenzy and cannot issue Vocal commands effectively. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 2 Rounds + 2 Rouse Checks ❖ Conditions: If a 1 is rolled on either of the 2 Rouse Checks ignore the Disciplines normal Bane. Instead, the power still succeeds as normal but the Kindred automatically enters Frenzy. ❖ Risk: Very High. You had turned into a monstrous beast. ❖ Test: Protean + Stamina (5) ❖ Resistance Roll: None ❖ Duration: The Kindred needs 2 Rounds (1 minutes) to manifest the ability. Afterwards the power lasts 1 Scene (1 Hour), until the Kindred sacrifices a Round to end the ability or is incapacitated.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Transform into a terrifying man-beast causing terror, +2 dice to physical rolls.",
                dicePool: "Protean + Stamina",
                level: 5,
                discipline: "protean",
            },
            {
                name: "Poseidon's Blessing",
                description: "The Kindred's skin and hair become soaked and the vampire seems like they are continuously leaking sea water from their skin in large quantities. If successful, the Kindred halves all damage from fire and downgrades it to Superficial while the power lasts. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Round + 2 Rouse Checks ❖ Conditions: None ❖ Risk: High. The Kindred seems like someone is continuously pouring water over their head. ❖ Test: Protean + Stamina (5) ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 hour), until the Kindred ends the ability or is incapacitated.",
                rouseChecks: 2,
                amalgamPrerequisites: [],
                summary: "Continuously leak seawater, halve fire damage and downgrade to Superficial.",
                dicePool: "Protean + Stamina",
                level: 5,
                discipline: "protean",
            },
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

            // Level 1 - Added
            { name: "Orthostasis", description: "A simple but highly effective trick involving the manipulation of the blood-brain barrier. Can create dizziness or vertigo in a target, or subtly affect their thought processes for social advantage. Cost: 1 Rouse Check. Dice Pools: Manipulation + Blood Sorcery vs. either the target’s Composure + Stamina or Composure + Wits. System: User makes a roll to inflict vertigo (-2 Dodge/Defense) or mental fog (-2 Social Combat pools using Mental/Social Attributes) for minutes equal to margin of success. Victim can identify user with a successful Intelligence + Occult vs. Wits + Subterfuge. Duration: Minutes equal to margin of success.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 1 }], summary: "Inflict vertigo or mental fog for a few minutes.", dicePool: "Manipulation + Blood Sorcery vs. Composure + Stamina or Wits", level: 1, discipline: "blood sorcery" },

            // Level 2
            { name: "Blood's Curse", description: "Increase others' Bane Severity.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Increase others' Bane Severity.", dicePool: "Manipulation + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Extinguish Vitae", description: "Make another vampire hungrier.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Make another vampire hungrier.", dicePool: "Resolve + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Agatiyon Famulus", description: "Bind more power and intelligence to a bonded Famulus. (Amalgam: Animalism 1, Bond Famulus)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 1 }], summary: "Bind more power and intelligence to a bonded Famulus.", dicePool: "Wits + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Gnaw", description: "Summon a swarm from oblivion to attack.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Summon a swarm from oblivion to attack.", dicePool: "Manipulation + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Sealing Antiphon", description: "Seals another's power with a hymn.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Seals another's power with a hymn.", dicePool: "Charisma + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Sanguine Bond", description: "Transfer damage mended to a victim.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Transfer damage mended to a victim.", dicePool: "Stamina + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Scour Secrets", description: "Locate particular information in text.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Locate particular information in text.", dicePool: "Intelligence + Blood Sorcery", level: 2, discipline: "blood sorcery" },

            // Level 2 - Added
            { name: "Seek the Inner Truth", description: "Discern secrets from blood or vitae. Cost: 1 Rouse Check. Dice Pools: Wits + Blood Sorcery. System: Touching or tasting blood, roll Wits + Blood Sorcery at Difficulty 3 (add Blood Potency if vitae). On success, learn a closely-kept secret; critical success may reveal even hidden or forgotten truths. Duration: Instant.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Discern secrets from blood or vitae.", dicePool: "Wits + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "The Small Death", description: "Send a sleeping mortal into a deathlike coma. Amalgam: Obfuscate 2. Cost: 1 Rouse Check. Dice Pools: Composure + Blood Sorcery. System: Target must be asleep/unconscious. Roll Composure + Blood Sorcery at Difficulty equal to target's Stamina. On success, target enters a coma indistinguishable from death for days equal to successes (min 24h). Cannot be awakened by normal means. Duration: Days equal to successes.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "obfuscate", level: 2 }], summary: "Send a sleeping mortal into a deathlike coma.", dicePool: "Composure + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Land God's Stride", description: "Navigate a locality with uncanny luck by bonding to local ley lines. Cost: 1 Rouse Check. System: Spill a Rouse Check's worth of blood on the ground to bond with the area. For the scene, add bonus dice equal to Blood Sorcery rating to Streetwise, Awareness, Investigation, or Survival checks. Does not reveal supernatural features. Duration: One scene.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Navigate a locality with uncanny luck.", dicePool: "N/A", level: 2, discipline: "blood sorcery" },
            { name: "Wield the Sanguine Sacrament", description: "Transform blood into a supernatural weapon or projectile. Cost: 1 Rouse Check (2 if using own Vitae). Dice Pools: Resolve or Manipulation + Blood Sorcery. System: Treated as an attack contested by target’s dodge. Melee: Resolve + Blood Sorcery. Ranged: Manipulation + Blood Sorcery. Ranged distance: 5ft x Blood Potency. Duration: Weapon/projectile dissolves after use. Can be combined with Scorpion’s Touch, Corrosive Vitae, Baal’s Caress if activated. Special: Additional rouse check per use.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 1 }], summary: "Create a blood weapon or projectile for one attack.", dicePool: "Resolve or Manipulation + Blood Sorcery", level: 2, discipline: "blood sorcery" },
            { name: "Hyperfixation", description: "Force a target to focus on a person, object, or task, or grant yourself total focus. Cost: 1 Rouse Check. Dice Pools: Manipulation + Blood Sorcery vs. Wits + Composure (if unwilling). System: Target can do nothing but focus on the chosen object/task for the scene unless hurt or in danger. To break focus, must spend Willpower. User can grant self or willing subject a 3-dice bonus to pools involving the fixation, but must spend Willpower to act outside it. Duration: One scene.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Force or grant total focus for a scene.", dicePool: "Manipulation + Blood Sorcery vs. Wits + Composure", level: 2, discipline: "blood sorcery" },

            // Level 3
            { name: "Blood of Potency", description: "Increase Blood Potency temporarily.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Increase Blood Potency temporarily.", dicePool: "Resolve + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Ripples of the Heart", description: "Change resonances or implant compulsions.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Change resonances or implant compulsions.", dicePool: "Manipulation + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Scorpion's Touch", description: "Turn blood into venom.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Turn blood into venom.", dicePool: "Strength + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Balefire Ignition", description: "Summon a life eating flame. (Amalgam: Oblivion 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "oblivion", level: 2 }], summary: "Summon a life eating flame.", dicePool: "Resolve + Blood Sorcery", level: 3, discipline: "blood sorcery" },
            { name: "Transitive Bond", description: "Bond via blood in a container or mortal.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Bond via blood in a container or mortal.", dicePool: "Intelligence + Blood Sorcery", level: 3, discipline: "blood sorcery" },

            // Level 3 - Added
            { name: "Trace the Blood's Current", description: "Discern the lineage and location of Kindred related to a vitae donor. Cost: 1 Rouse Check. Dice Pools: Wits + Blood Sorcery vs. Stamina + Blood Potency. System: Touch or taste Kindred vitae, roll Wits + Blood Sorcery vs. Stamina + Blood Potency. On success, sense all who share the donor's lineage and can attempt to locate them with further rolls. Duration: One scene.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Discern Kindred lineage and location from vitae.", dicePool: "Wits + Blood Sorcery vs. Stamina + Blood Potency", level: 3, discipline: "blood sorcery" },
            { name: "The Dragon's Ire", description: "Project an aura that prevents Willpower use and penalizes Discipline rolls. Amalgam: Animalism 3. Cost: 1 Rouse Check. Dice Pools: Resolve + Blood Sorcery vs. Resolve + Composure. System: Aura radius = 3m x Animalism rating. Living creatures can't spend Willpower. Vampires resist with Resolve + Composure; on failure, can't spend Willpower and take -2 dice to Discipline pools against user. Duration: One scene.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "animalism", level: 3 }], summary: "Prevent Willpower use and penalize Disciplines in an aura.", dicePool: "Resolve + Blood Sorcery vs. Resolve + Composure", level: 3, discipline: "blood sorcery" },
            { name: "Killswitch", description: "Paralyze a target who has consumed your vitae by uttering a keyphrase. Cost: 1 Rouse Check. Dice Pools: Manipulation + Blood Sorcery vs. Resolve + Composure (Kindred may use Resolve + Fortitude). System: Target must have consumed your vitae. On hearing the phrase, target resists; on failure, is paralyzed for hours equal to margin of success (min 1), or until keyphrase is repeated with another rouse check. Total failure: Kindred falls into torpor, mortals fall unconscious. Duration: Power remains viable for a month after vitae is consumed.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 3 }], summary: "Paralyze a target who has consumed your vitae.", dicePool: "Manipulation + Blood Sorcery vs. Resolve + Composure", level: 3, discipline: "blood sorcery" },

            // Level 4
            { name: "Blood Aegis", description: "Block projectiles with blood.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Block projectiles with blood.", dicePool: "Stamina + Blood Sorcery", level: 4, discipline: "blood sorcery" },
            { name: "Fulminating Vitae", description: "Turn blood into an explosive weapon.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Turn blood into an explosive weapon.", dicePool: "Strength + Blood Sorcery", level: 4, discipline: "blood sorcery" },
            { name: "Marionette", description: "Control spilled blood, corpses, or living humans like puppets. (Amalgam: Shape the Sanguine Sacrament)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 1 }], summary: "Control spilled blood, corpses, or living humans like puppets.", dicePool: "Manipulation + Blood Sorcery", level: 4, discipline: "blood sorcery" },
            { name: "Draught of Power", description: "Baali gives a bit of their power to another, the Baali then grows in power in response to the indulgence of the victim.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Baali gives a bit of their power to another, the Baali then grows in power in response to the indulgence of the victim.", dicePool: "Charisma + Blood Sorcery", level: 4, discipline: "blood sorcery" },
            { name: "Theft of Vitae", description: "Steal blood from a distance.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Steal blood from a distance.", dicePool: "Resolve + Blood Sorcery", level: 4, discipline: "blood sorcery" },

            // Level 4 - Added
            { name: "Philtre of Feral Delusion", description: "Transform vitae into a contact poison that induces bestial hallucinations. Amalgam: Obfuscate 3. Cost: 1+ Rouse Checks. Dice Pools: Composure + Blood Sorcery vs. Resolve + Occult or Fortitude. System: Apply poison via skin contact (Dexterity + Larceny vs. Wits + Awareness to do so subtly). On success, target takes Superficial Willpower damage and may suffer bestial impulses. Duration: Varies.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "obfuscate", level: 3 }], summary: "Contact poison induces bestial hallucinations.", dicePool: "Composure + Blood Sorcery vs. Resolve + Occult or Fortitude", level: 4, discipline: "blood sorcery" },
            { name: "Crimson Puppeteer", description: "Paralyze and control a target’s body by manipulating their blood. Cost: 1 Rouse Check. Dice Pools: Intelligence + Blood Sorcery vs. Stamina + Composure (Kindred: Fortitude + Composure). System: On failure, target is paralyzed for turns equal to margin of failure (min 1). User can direct target’s physical actions, but cannot force Kindred to use Disciplines or self-harm. Humans take 1 Aggravated damage per turn. Duration: Until turns elapse or user stops concentrating.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Paralyze and control a target’s body for several turns.", dicePool: "Intelligence + Blood Sorcery vs. Stamina + Composure", level: 4, discipline: "blood sorcery" },
            { name: "Pluck the Mind's Eye", description: "Erase a target’s skills and specializations for a scene. Cost: 2 Rouse Checks (1 if target has consumed your vitae). Dice Pools: Manipulation + Blood Sorcery vs. Intelligence + Resolve (Kindred: Resolve + Fortitude). System: On success, target takes Superficial Willpower damage and loses dots/specializations in chosen skills for the scene. If target has consumed caster’s vitae, penalty to Defense pool equal to caster’s Blood Potency. Duration: One scene.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "dominate", level: 4 }], summary: "Erase a target’s skills and specializations for a scene.", dicePool: "Manipulation + Blood Sorcery vs. Intelligence + Resolve", level: 4, discipline: "blood sorcery" },

            // Level 5
            { name: "Baal's Caress", description: "Turn blood into stronger venom. (Amalgam: Scorpion's Touch?)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 3 }], summary: "Turn blood into stronger venom.", dicePool: "Strength + Blood Sorcery", level: 5, discipline: "blood sorcery" },
            { name: "Cauldron of Blood", description: "Boil blood inside a target's body.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Boil blood inside a target's body.", dicePool: "Resolve + Blood Sorcery", level: 5, discipline: "blood sorcery" },
            { name: "Born Again", description: "Mark mortal to be possessed.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Mark mortal to be possessed.", dicePool: "Manipulation + Blood Sorcery", level: 5, discipline: "blood sorcery" },
            { name: "Reclamation of Vitae", description: "Reclaim the vitae from your ghouls.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Reclaim the vitae from your ghouls.", dicePool: "Stamina + Blood Sorcery", level: 5, discipline: "blood sorcery" },

            // Level 5 - Added
            { name: "Clot the Earth's Veins", description: "Inflict drastic, destructive change on the environment within 5m. Cost: 2 Rouse Checks. Dice Pools: Resolve + Blood Sorcery (Diff 8). System: Concentrate for a turn, roll Resolve + Blood Sorcery at Diff 8. On failure, take Aggravated Willpower damage equal to margin; on success, take 1 Aggravated Willpower. Can cause landslides, collapse structures, redirect rivers, etc. Always causes collateral damage and may inflict Stains. Special: Can permanently seal a Furcus if used at such a site. Duration: Instant.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Inflict drastic, destructive change on the environment.", dicePool: "Resolve + Blood Sorcery (Diff 8)", level: 5, discipline: "blood sorcery" },
            { name: "Cascade the Sanguine Sacrament", description: "Wield blood from up to five sources at once, using Shape the Sanguine Sacrament and Wield the Sanguine Sacrament simultaneously. Cost: 2 Rouse Checks (1 full turn to activate). Dice Pools: Intelligence + Blood Sorcery. System: Use both abilities a number of times per turn equal to sources drawn from. If using mortals, take a Stain and mortals take Aggravated damage. Duration: Until blood is expended or user stops concentrating. Prerequisite: Wield the Sanguine Sacrament.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 2 }], summary: "Wield blood from up to five sources at once.", dicePool: "Intelligence + Blood Sorcery", level: 5, discipline: "blood sorcery" },
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

            // Added Level 1
            { name: "Incorruptibility", description: "Preserve a Kindred corpse or body part from decomposing into ash for hours. Cost: 1 Rouse Check. Dice Pool: Stamina + Oblivion (Diff 2 + target's Blood Potency). On success, prevents decay for hours equal to margin of success (min 1); critical success lasts until sunrise. Failure reduces flesh to ash. Preserved flesh cannot be diablerized but retains vitae for rituals.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Preserve Kindred corpses for experimentation.", dicePool: "Stamina + Oblivion (Diff 2 + BP)", level: 1, discipline: "oblivion" },

            // Added Level 1
            { name: "Marrow Feast", description: "Feed from the marrow of fresh bones to slake hunger. Amalgam: Obfuscate 1. Cost: Free. System: Can slake 1 hunger per large bone (femur, rib, humerus) from remains less than 2 weeks old. Cannot reduce hunger to 0 or gain Resonance.", rouseChecks: 0, amalgamPrerequisites: [{ discipline: "obfuscate", level: 1 }], summary: "Feed from the marrow of fresh bones.", dicePool: "N/A", level: 1, discipline: "oblivion" },

            // Level 2
            { name: "Arms of Ahriman", description: "Use shadows to attack. (Amalgam: Potence 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "potence", level: 2 }], summary: "Use shadows to attack.", dicePool: "Strength + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Fatal Prediction", description: "Doom someone to injury or death. (Amalgam: Auspex 2)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Doom someone to injury or death.", dicePool: "Manipulation + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Carrion Banquet", description: "Slake additional hunger from corpses. (Amalgam: Fortitude 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "fortitude", level: 1 }], summary: "Slake additional hunger from corpses.", dicePool: "Stamina + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Soul Swap", description: "Swap the aura of two people. (Amalgam: blood sorcery 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 1 }], summary: "Swap the aura of two people.", dicePool: "Manipulation + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Shadow Cast", description: "Create shadows (gives bonuses).", rouseChecks: 1, amalgamPrerequisites: [], summary: "Create shadows (gives bonuses).", dicePool: "Dexterity + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Where the Veil Thins", description: "Sense the strength of the Veil, and reduce ceremony difficulties if it's thin.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Sense the strength of the Veil, and reduce ceremony difficulties if it's thin.", dicePool: "Wits + Oblivion", level: 2, discipline: "oblivion" },

            // Added Level 2
            { name: "Grim Insight", description: "Experience a mortal's final moments before death. Amalgam: Auspex 2. Cost: 1 Rouse Check. Dice Pool: Resolve + Oblivion. System: In presence or line of sight of corpse, roll at ST-determined difficulty. On success, enter trance to witness last moments. Can be used on Kindred remains but is harder.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 2 }], summary: "Witness a mortal's final moments before death.", dicePool: "Resolve + Oblivion", level: 2, discipline: "oblivion" },
            { name: "Thanatosis", description: "Inflict rapid decay on a Kindred, making them appear as a walking corpse. Cost: 1 Rouse Check. Dice Pool: Resolve + Oblivion vs. Stamina + Composure (or Fortitude). On success, target loses Looks Merits, cannot use Blush of Life, and takes -3 to Social Pools. Mortals are horrified. Duration: Hours equal to margin of success. Only usable on Kindred.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Inflict rapid decay on a Kindred.", dicePool: "Resolve + Oblivion vs. Stamina + Composure/Fortitude", level: 2, discipline: "oblivion" },

            // Added Level 2
            { name: "Rigor Mortis", description: "Paralyze a victim with a deathly stiffness. Cost: 1 Rouse Check. Dice Pool: Intelligence + Oblivion vs. Stamina + Composure (or Fortitude for vampires). On success, victim takes -2 to all physical pools for the scene. Mortals are paralyzed for the scene. Duration: One scene.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Paralyze a victim with a deathly stiffness.", dicePool: "Intelligence + Oblivion vs. Stamina + Composure/Fortitude", level: 2, discipline: "oblivion" },

            // Level 3
            { name: "Aura of Decay", description: "Decay everything around.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Decay everything around.", dicePool: "Stamina + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Passion Feast", description: "Feed on wraiths, draining Passion. (Amalgam: Fortitude 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "fortitude", level: 2 }], summary: "Feed on wraiths, draining Passion.", dicePool: "Stamina + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Shadow Perspective", description: "Project senses through shadows.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Project senses through shadows.", dicePool: "Wits + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Shadow Servant", description: "Send your shadow out to spy. (Amalgam: Auspex 1)", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "auspex", level: 1 }], summary: "Send your shadow out to spy.", dicePool: "Wits + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Nigtmare Theatre", description: "Haunt someone with nightmares. (Amalgam: Presence 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "presence", level: 2 }], summary: "Haunt someone with nightmares.", dicePool: "Manipulation + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Clinging Affinity", description: "A shadow that fills victim with despair. (Amalgam: Presence 3)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "presence", level: 3 }], summary: "A shadow that fills victim with despair.", dicePool: "Manipulation + Oblivion", level: 3, discipline: "oblivion" },
            { name: "Touch of Oblivion", description: "Decay a living or unliving body.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Decay a living or unliving body.", dicePool: "Stamina + Oblivion", level: 3, discipline: "oblivion" },

            // Added Level 3
            { name: "Sardenzo's Sepulcher", description: "Absorb blood spilled on earth while using Earth Meld. Amalgam: Protean 3. Cost: 1 Rouse Check. System: While underground, blood spilled within 3m x Oblivion rating is absorbed, satiating hunger. Blood has no resonance and cannot be used for diablerie. Duration: Passive.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "protean", level: 3 }], summary: "Absorb blood spilled on earth while using Earth Meld.", dicePool: "N/A", level: 3, discipline: "oblivion" },

            // Added Level 3
            { name: "Dust to Dust", description: "Discorporate into a pile of ash, immune to damage but unable to act. Amalgam: Obfuscate 3. Cost: 1 Rouse Check. System: No roll required unless disguising as Final Death (Oblivion + Subterfuge vs. Wits + Occult). Remain as ash indefinitely, immune to all damage. Reform in 1 turn. If ash is disturbed, reform at largest pile. Duration: Indefinite until user reforms.", rouseChecks: 1, amalgamPrerequisites: [{ discipline: "obfuscate", level: 3 }], summary: "Discorporate into a pile of ash, immune to damage.", dicePool: "Oblivion + Subterfuge vs. Wits + Occult (if disguising)", level: 3, discipline: "oblivion" },

            // New Level 3 Powers
            { name: "Eyes of Ahriman", description: `Lock eyes with a target to channel the abyss, dealing superficial Willpower damage and stunning mortals or forcing vampires to resist Fear Frenzy. Cost: 1 Rouse Check. System: Charisma + Oblivion vs. Resolve + Composure.`, rouseChecks: 1, amalgamPrerequisites: [{ discipline: "dominate", level: 2 }], summary: "Channel the abyss through your gaze, stunning or terrifying targets.", dicePool: "Charisma + Oblivion vs. Resolve + Composure", level: 3, discipline: "oblivion" },
            { name: "Platonian Silhouette", description: `Steal the shadow of an object and conjure it as a nearly indestructible, abyssal copy. Cost: 1+ Rouse Checks. System: Touch an object casting a shadow, make a Rouse Check to incorporate its shadow. Can conjure it later with another Rouse Check. Armor grants rating equal to Oblivion dots; weapons deal unhalved damage to supernaturals. Lasts until sunrise or scene.`, rouseChecks: 1, amalgamPrerequisites: [], summary: "Steal and conjure abyssal copies of objects from their shadows.", dicePool: "N/A", level: 3, discipline: "oblivion" },


            // Level 4
            { name: "Profane the Sanctified", description: "Corrode True Faith and holy symbols. (Amalgam: Aura of Decay or Touch of Oblivion)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "oblivion", level: 3 }], summary: "Corrode True Faith and holy symbols.", dicePool: "Stamina + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Necrotic Plague", description: "Cause damage over time.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Cause damage over time.", dicePool: "Stamina + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Stygian Shroud", description: "Impose darkness on an area.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Impose darkness on an area.", dicePool: "Wits + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Pareidolian", description: "Have your shadow possessed by an entity. (Amalgam: blood sorcery 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 2 }], summary: "Have your shadow possessed by an entity.", dicePool: "Wits + Oblivion", level: 4, discipline: "oblivion" },
            { name: "Umbrous Clutch", description: "Pull someone through their shadow into yours.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Pull someone through their shadow into yours.", dicePool: "Strength + Oblivion", level: 4, discipline: "oblivion" },

            // Added Level 4
            { name: "Night Drinker's Curse", description: "Infect a mortal vessel with a supernatural disease. Any Kindred (other than domitor) who drinks from them suffers Stigmata-like effects, cannot Blood Surge, and must make extra Rouse Checks. Lasts nights equal to hunger slaked. Mortal killed while infected rots instantly. Cost: 1 Rouse Check. Duration: Permanent.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Infect a vessel with a supernatural disease that harms Kindred.", dicePool: "N/A", level: 4, discipline: "oblivion" },

            // Added Level 4
            { name: "Breath of Dhumavati", description: "Vomit a line of necrotic bile that rots flesh and harms souls. Cost: 1 Rouse Check, 1 Stain. Dice Pool: Stamina + Oblivion vs. Dexterity + Athletics (or Stamina + Fortitude for Kindred). Range: Oblivion rating in feet (min 4). Living targets take Aggravated Health Damage; Kindred and Wraiths suffer similar effects. Grappled targets do not resist. Duration: Instant.", rouseChecks: 1, amalgamPrerequisites: [], summary: "Vomit necrotic bile that rots flesh and harms souls.", dicePool: "Stamina + Oblivion vs. Dexterity + Athletics/Fortitude", level: 4, discipline: "oblivion" },
            // New Level 4 Power
            { name: "Ravenous Abyss", description: `Feed through shadows, inflicting aggravated damage and draining blood at a distance. Cost: 1+ Rouse Checks. System: When using an Oblivion Power to attack, make an extra Rouse Check to feed on a target, dealing 2 Aggravated Damage and feeding up to half Oblivion rating. Blood loses qualities. Duration: That turn (can extend with more Rouse Checks).`, rouseChecks: 1, amalgamPrerequisites: [{ discipline: "potence", level: 3 }], summary: "Feed through shadows, inflicting aggravated damage and draining blood.", dicePool: "N/A", level: 4, discipline: "oblivion" },
            { name: "Exquisite Corpse", description: "Become immune to sunlight while in daysleep, appearing as a corpse. Amalgam: Fortitude 3 (Defy Bane). Cost: 2 Rouse Checks. System: Make 2 Rouse Checks before daysleep; immune to sunlight until awakening. Only Intelligence + Occult (Diff 5) reveals the body is not a true corpse. If in Hunger Torpor, effect persists. Duration: Until awakening from daysleep or torpor.", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "fortitude", level: 3 }], summary: "Immune to sunlight while in daysleep, appear as a corpse.", dicePool: "N/A", level: 4, discipline: "oblivion" },

            // Level 5
            { name: "The Darkness Within", description: "Animate someone's shadow to attack.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Animate someone's shadow to attack.", dicePool: "Strength + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Shadow Step", description: "Teleport between shadows.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Teleport between shadows.", dicePool: "Dexterity + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Skuld Fulfilled", description: "Re-impose old injury or sickness.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Re-impose old injury or sickness.", dicePool: "Manipulation + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Tenebrous Avatar", description: "Become a shadow.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Become a shadow.", dicePool: "Wits + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Pestilence", description: "Summon a wind that rots everything and raises the dead.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Summon a wind that rots everything and raises the dead.", dicePool: "Stamina + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Hell's Yawning Maw", description: "Summon a demonic Baelfire Hellion. (Amalgam: blood sorcery 2)", rouseChecks: 2, amalgamPrerequisites: [{ discipline: "blood sorcery", level: 2 }], summary: "Summon a demonic Baelfire Hellion.", dicePool: "Resolve + Oblivion", level: 5, discipline: "oblivion" },
            { name: "Withering Spirit", description: "Erode a target's will.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Erode a target's will.", dicePool: "Manipulation + Oblivion", level: 5, discipline: "oblivion" },

            // Added Level 5
            { name: "Acheron Vortex", description: "Tear open a rift into the Tempest, banishing Wraiths within 50ft. Cost: 2 Rouse Checks, 1 Stain. Dice Pool: Resolve + Oblivion. Wraiths must make Willpower checks vs. user's roll or be sucked in. Mortals/Kindred must also roll Willpower; mortals take Aggravated Willpower damage, Kindred risk Fear Frenzy. Duration: One scene.", rouseChecks: 2, amalgamPrerequisites: [], summary: "Tear open a rift into the Tempest, banishing Wraiths.", dicePool: "Resolve + Oblivion", level: 5, discipline: "oblivion" },
        ],
    },
    melpominee: {
        clans: ["Daughters of Cacophony", "Caitiff"],
        summary: "Control voices and sound to influence minds",
        logo: obfuscateLogo,
        powers: [
            // Level 1
            {
                name: "The Missing Voice",
                description: "The character can \"throw\" her voice anywhere within her line of sight. This enables the Daughter to carry on surreptitious conversations, sing duets with herself, or cause any number of distractions. This power can also be combined with other Melpominee powers to disguise their source (and some Daughters use it to conceal the fact that Melpominee powers do not function through recorded media).",
                rouseChecks: 0,
                amalgamPrerequisites: [],
                summary: "Project voice anywhere within line of sight. Can be combined with other Melpominee powers.",
                dicePool: "N/A",
                level: 1,
                discipline: "melpominee",
            },

            // Level 2
            {
                name: "Phantom Speaker",
                description: "The Daughter can project her voice to any individual she has personally met. Distance is no object, but it must be night wherever the target presently is. The vampire can sing, talk, or otherwise project her voice in any way she sees fit (including other uses of Melpominee), but she cannot hear what she is saying, and therefore suffers a +1 difficulty to any rolls accompanying her utterance.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Project voice to any personally met individual, regardless of distance.",
                dicePool: "Wits + Performance",
                level: 2,
                discipline: "melpominee",
            },

            // Level 3
            {
                name: "Madrigal",
                description: "Music has the power to sway the listener, engendering specific emotions through artful lyrics, pounding crescendo, or haunting melody. The Daughters of Cacophony can tap into music's power, forcing listeners to feel whatever they wish. The emotion becomes so powerful that the listener must act, though what a listener does isn't something the Siren can directly control.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Force listeners to feel specific emotions through music, compelling them to act.",
                dicePool: "Charisma + Performance vs Resolve + Awareness",
                level: 3,
                discipline: "melpominee",
            },

            // Level 4
            {
                name: "Siren's Beckoning",
                description: "The Daughters of Cacophony don't spread madness as surely (or as visibly) as the Malkavians, but their songs are definitely detrimental to one's sanity. With this power, the Daughter can drive any listener to madness. Most of the time, the victim is too fascinated to realize that he should leave the area and block out the music from his mind.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Drive listeners to madness through song.",
                dicePool: "Manipulation + Performance vs Resolve + Awareness",
                level: 4,
                discipline: "melpominee",
            },

            // Level 5
            {
                name: "Virtuosa",
                description: "Most of the low-level Melpominee powers can only be used on one target at a time. When the Daughter reaches this level of mastery in her Discipline, she can \"entertain\" a wider audience. Each member of the audience hears the same message.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Use Phantom Speaker or Siren's Beckoning on multiple targets simultaneously.",
                dicePool: "N/A",
                level: 5,
                discipline: "melpominee",
            },
            {
                name: "Mosh Pit",
                description: "This rather dangerous power can be used to inspire frenzy in any supernatural creature prone to such a thing (such as vampires and werewolves). The Daughter sings of her primal anger, and her target finds it hard not to lose themselves to their most violent urges.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Inspire frenzy in supernatural creatures through song.",
                dicePool: "Manipulation + Performance vs Willpower",
                level: 5,
                discipline: "melpominee",
            },
            {
                name: "Primal Scream",
                description: "With Primal Scream the Daughter's song is one of terror, not rage. It is awe inspiring and makes her appear frightening in the extreme. Her target becomes terrified beyond belief.",
                rouseChecks: 1,
                amalgamPrerequisites: [],
                summary: "Inspire Rötschreck in targets through terrifying song.",
                dicePool: "Manipulation + Performance vs Willpower",
                level: 5,
                discipline: "melpominee",
            },
        ],
    },
    "thin-blood alchemy": {
        clans: ["Thin-blood"],
        summary: "",
        logo: obfuscateLogo,
        powers: [],
    },

    valeren: {
        clans: ["Salubri"],
        summary: "Healing and purification abilities, divided into Path of the Healer (Obeah) and Path of the Warrior",
        logo: obfuscateLogo,
        powers: [
            // Level 1
            {
                name: "Sense Vitality - Path of the Healer",
                description: "With but a touch the Kindred can tell the general health and state of their patient. When used on humans or animals the Kindred can tell the persons age, vitality, and general health, this includes Ghouls (and other Enhanced Mortals). When used on another Kindred the user can tell the vampires blood potency, willpower and general health. When used on other supernatural creatures the information becomes somewhat muddied but at the very least the Kindred should be able to tell the general health of the creature. Do note that general health does mean the Storyteller should provide the Kindred with an accurate idea of how many marked and unmarked health boxes the target currently has. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: A single individual within Touch Range. ❖ Cost: None ❖ Conditions: Must make physical touch with the targets skin. ❖ Risk: None. The ability is extremely subtle and hard to pick up on. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: 1 Action (1 second)",
                summary: "Touch to assess target's health, vitality, blood potency, and willpower",
                dicePool: "None",
                level: 1,
                discipline: "valeren",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Anaesthetic Touch - Path of the Healer",
                description: "The user's touch takes the pain away from their patient allowing them to provide them with a few moments of respite. The target loses all sensation of pain. If the hold is not broken for an entire minute the target falls asleep as well. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: A single individual within Touch Range. ❖ Cost: None ❖ Conditions: Must make physical touch with the targets skin. ❖ Risk: Minor. Your touch will visibly soothe the victim, but it is highly likely that in the heat of the moment any witnesses will have other problems to deal with. ❖ Test: None ❖ Resistance Roll: Stamina + Resolve (3, if the target wishes to deny sleep. Mortals have no protection against this ability.) ❖ Duration: 1 Action (1 second) for the effects if the pain suppression to take effect and 1 Round (1 minute) for the target to be put to sleep.",
                summary: "Touch to remove pain and potentially induce sleep",
                dicePool: "None",
                level: 1,
                discipline: "valeren",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Auguring Gift - Path of the Healer",
                description: "The Kindred can quickly determine the targets ailments and their source. The user can determine what type of disease, poison or venom is impacting the target and its general source (natural, manufactured, supernatural). The user or his allies can then use this knowledge to potentially save the victim. The ability provides no information on curses. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: A single individual within Touch Range. ❖ Cost: None ❖ Conditions: Must make physical touch with the targets skin. ❖ Risk: Minor. The power is very hard to notice. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: 1 Round (1 minute)",
                summary: "Touch to diagnose diseases, poisons, and venoms affecting the target",
                dicePool: "None",
                level: 1,
                discipline: "valeren",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Sense Lethality - Path of the Warrior",
                description: "This ability allows the Kindred to understand the potential danger a target poses. The Kindred can understand, quite accurately, just how dangerous an individual is to them and their allies were they to potentially use their gifts against them. The power does not outright provide the character with an idea of the targets exact capabilities (mental, physical, or spiritual) but should give them a rough rating (from 1 to 5, as per the dot system) on how dangerous the target is to them and/or their allies. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: A single individual within Touch Range. ❖ Cost: None ❖ Conditions: Must make physical touch with the targets skin. ❖ Risk: None. The ability is extremely subtle and hard to pick up on. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: 1 Action (1 second)",
                summary: "Touch to assess how dangerous a target is (1-5 scale)",
                dicePool: "None",
                level: 1,
                discipline: "valeren",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Peaceful Touch - Path of the Warrior",
                description: "The Kindred can calm down a raging drunkard or a rampaging vampire. With a touch the Kindred can either calm down an individual who is in the grips of anger or break a Kindred's Frenzy. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: A single individual within Touch Range. ❖ Cost: None ❖ Conditions: Must make physical touch with the targets skin. They can only break a Frenzy if the target is not purposefully remaining in Frenzy or affected by a continuous effect (such as during a Hunger Frenzy). ❖ Risk: Moderate. The ability is subtle but the effects can be noticeable. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: 1 Action (1 second) for the effects to take place after which they last for 1 Scene (10 minutes).",
                summary: "Touch to calm anger or break Frenzy in target",
                dicePool: "None",
                level: 1,
                discipline: "valeren",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Renewed Vigour - Path of the Warrior",
                description: "The Kindred's body is strengthened to endure the harsh lifestyle of its master. The Kindred adds 1 dice to their current roll. ❖ Type: Reflexive ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 point of Superficial Willpower damage. ❖ Conditions: The use of this power must be announced before any tests or resistance rolls are made by its user. Only 1 dice can be added at a time. Can never be used on Willpower or Humanity tests. ❖ Risk: None. The ability is subtle and hard to notice. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: 1 Action (a few seconds)",
                summary: "Add 1 dice to any roll (except Willpower/Humanity) at cost of 1 Superficial Willpower damage",
                dicePool: "None",
                level: 1,
                discipline: "valeren",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            // Level 2
            {
                name: "Healer's Blood - Path of the Healer",
                description: "The Kindred can enhance their blood to have miraculous healing properties. If successful then those who partake of the Kindred's blood can benefit from its healing properties. They will be healed of the effects of any venoms, diseases or poisons (natural or artificial only, supernatural versions of these cannot be reversed using this ability) and heal 1 point of Aggravated or 3 points of Superficial Health damage (targets choice). ❖ Type: Reflexive ❖ Tag: Physical ❖ Range & Targets: A single individual currently drinking blood from the Kindred. ❖ Cost: 1 Rouse Check (this includes the blood lost) ❖ Conditions: The target must drink the Kindred's blood. That ability can only affect a single target at a time. ❖ Risk: Minor. The effects are miraculous, but the target is drinking your blood. ❖ Test: Valeren + Intelligence (3) ❖ Resistance Roll: None ❖ Duration: 1 Scene (10 minutes)",
                summary: "Enhance blood to heal diseases, poisons, and restore health to those who drink it",
                dicePool: "Valeren + Intelligence",
                level: 2,
                discipline: "valeren",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Song Of The Blooded - Path of the Warrior",
                description: "Reciting ancient words of wisdom, the Kindred temporarily enhances his and his allies' supernatural abilities. If successful, the Kindred and all allies within Vocal Range add 1 dice to all their tests when it comes to activating their supernatural powers (abilities, reflexive and rituals). ❖ Type: Ability ❖ Tag: Spiritual ❖ Range & Targets: The Kindred and all allies within Vocal Range. ❖ Cost: 1 Rouse Check ❖ Conditions: The Kindred's words must be heard but do not need to be understood. ❖ Risk: None. At most your words are seen as a curiosity. ❖ Test: Valeren + Wits (3) ❖ Resistance Roll: None ❖ Duration: 1 Scene (10 minutes)",
                summary: "Enhance supernatural abilities of self and allies within vocal range",
                dicePool: "Valeren + Wits",
                level: 2,
                discipline: "valeren",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Peace Maker - Path of the Healer",
                description: "The Kindred creates an aura of calm around them causing arguments to cease and tensions to die down. If successful, all individuals within 10 meters (30 feet) of the Kindred will find it hard to grow frustrated or angry. Any abilities or actions which influence their victims towards violence will have their dice pool halved (rounding up) if a test needs to be made to activate said abilities or actions or fail automatically if no test is required. ❖ Type: Ability ❖ Tag: Mental ❖ Range & Targets: Everyone within 10 meters (30 feet) of the Kindred, including the Kindred himself. ❖ Cost: 1 Rouse Check ❖ Conditions: This ability cannot stop an already ongoing brawl, although it can help straighten things out afterwards. ❖ Risk: Minor. With your entrance arguments seem to die down and some might start to question your importance. ❖ Test: Valeren + Intelligence (3) ❖ Resistance Roll: None ❖ Duration: 1 Action (1 second) for the effects to take place after which the effects last for 1 Scene (10 minutes).",
                summary: "Create aura of calm that reduces violence and anger in 30-foot radius",
                dicePool: "Valeren + Intelligence",
                level: 2,
                discipline: "valeren",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Safe Passage - Path of the Healer",
                description: "The user is seen as a sacrosanct and others find it hard to raise a hand against them. If successful, then any individual acting with ill intention against the user loses two dice from any roll which is targeting the Kindred. ❖ Type: Ability ❖ Tag: Mental ❖ Range & Targets: Affects all individuals within 10 meters (30 feet) of the Kindred. ❖ Cost: 1 Rouse Check ❖ Conditions: The ability only lasts if the Kindred is not taking any overt aggressive action (mental, spiritual or physical) against the target(s) or their allies. Self-defense which resolves in the target being injured does not break the hold which the ability has. ❖ Risk: Minor. The effects of this power are subtle and hard to pick up on. ❖ Test: Valeren + Intelligence (3) ❖ Resistance Roll: Stamina + Resolve (mortals have no protection against this ability) ❖ Duration: 1 Scene (10 minutes)",
                summary: "Others suffer -2 dice to attack you while you remain non-aggressive",
                dicePool: "Valeren + Intelligence",
                level: 2,
                discipline: "valeren",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Soul's Breath - Path of the Healer",
                description: "The Kindred had learned to subsist from the breath of mortals, instead of their blood. The Kindred can inhale the breath of mortals (usually disguised as a kiss) to regain some of their hunger. This is a very limited substitute however and can never make their Hunger lower than 3. Each mortal's breath can only satisfy 1 point of Hunger per Scene. ❖ Type: Upgrade ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: None ❖ Conditions: Must inhale the mortal's breath, which is generally done through a kiss. Can only be used if the Kindred's Humanity is 7 or higher. ❖ Risk: Minor. The power is subtle and extremely hard to pick up on. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent.",
                summary: "Feed on mortal breath instead of blood (requires Humanity 7+, minimum Hunger 3)",
                dicePool: "None",
                level: 2,
                discipline: "valeren",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Burning Touch - Path of the Warrior",
                description: "Sometimes the threat of pain is enough to end a fight before it begins. With this ability the Kindred can inflict horrible pain on any potential trouble makers without any actual damage. If successful, the target is wracked by incredible pain as if they are being burned from the inside out. This can potentially cause a fear frenzy if used excessively against Kindred. Otherwise, any target impacted by the power's effects will automatically be intimidated by the Kindred for the rest of the Scene (it cannot make any opposing rolls against the user's intimidation). Although painful the ability never causes any physical damage. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: A single individual within Touch Range. ❖ Cost: 1 Rouse Check ❖ Conditions: Must make physical touch with the targets skin. ❖ Risk: High. The target will likely scream in pain when touched. ❖ Test: Valeren + Wits (3) ❖ Resistance Roll: Stamina + Resolve (mortals have no protection against this ability) ❖ Duration: The pain lasts for 1 Action (a few seconds), while the intimidation effects last for 1 Scene (10 minutes).",
                summary: "Touch to cause excruciating pain without damage, intimidating target",
                dicePool: "Valeren + Wits",
                level: 2,
                discipline: "valeren",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            // Level 3
            {
                name: "Mens Sana - Path of the Healer",
                description: "With a calm touch the Kindred banishes a victim's mental disorders. If successful, the target loses a single mental disorder. Sadly, when it comes to highly deranged individuals (or Malkavians) the ability can only mitigate the disorders for 1 Sessions. If you have the Dementation Remastered book on hand, then this ability can completely nullify a single Mild Derangement or temporarily remove a Severe Derangement until the end of the Session. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: A single individual within Touch Range. ❖ Cost: 1 Rouse Check ❖ Conditions: Must make physical touch with the targets skin. ❖ Risk: Moderate. The target's character visibly changes for the better in an instant. ❖ Test: Valeren + Intelligence (4) ❖ Resistance Roll: None ❖ Duration: 1 Action (1 second) for the effects to take hold, after which the effects are permanent unless your dealing with heavily deranged individuals. In such cases the effects only last until the end of the Session (24 hours).",
                summary: "Touch to cure mental disorders (permanent except for severely deranged)",
                dicePool: "Valeren + Intelligence",
                level: 3,
                discipline: "valeren",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Father's Judgment - Path of the Warrior",
                description: "With a word or with a touch the Kindred shuts off a targets access to their powers. This ability can be manifested by either a touch or Vocally by ushering the name of the targets sire in their presence. If successful, the target loses access to all powers (including upgrades) whose level is higher than 1. Disciplines which were not inherited directly from the target's sire (or are not part of the Clans general 3 Disciplines) are not affected. ❖ Type: Ability ❖ Tag: Spiritual ❖ Range & Targets: A single individual within Touch or Vocal Range. ❖ Cost: 1 Rouse Check ❖ Conditions: Must make physical touch with the targets skin or usher the name of the targets sire in their presence. Only works on Kindred. ❖ Risk: Minor. The target can suddenly become worried or agitated to an outside observer. ❖ Test: Valeren + Wits (4) ❖ Resistance Roll: Stamina + Resolve (no resistance roll can be made if the user ushers the name of their sire correctly) ❖ Duration: 1 Scene (10 minutes)",
                summary: "Suppress Kindred powers above level 1 by touch or speaking their sire's name",
                dicePool: "Valeren + Wits",
                level: 3,
                discipline: "valeren",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Samiel's Vengeance - Path of the Warrior",
                description: "With a cry of resolve the Kindred strikes against his enemies, using the pain he had suffered to heighten his combat abilities. This power can only be used immediately after the Kindred had received 1 or more points of Aggravated Damage. If successful, the Kindred adds 1 dice to all his combat rolls (excluding those meant for the activation of supernatural abilities or Resistance Rolls) for each power he currently possesses from the Path of the Warrior. ❖ Type: Reflexive ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Rouse Check ❖ Conditions: Can only be used immediately after the Kindred had received 1 or more points of Aggravated Damage. ❖ Risk: Minor. Generally, this ability is only used in combat, where all parties have more pressing concerns. ❖ Test: Valeren + Wits (4) ❖ Resistance Roll: None ❖ Duration: 1 Scene (10 minutes)",
                summary: "After taking Aggravated damage, gain combat dice equal to Warrior path powers",
                dicePool: "Valeren + Wits",
                level: 3,
                discipline: "valeren",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Ending The Watch - Path of the Warrior",
                description: "With a touch the Kindred ends the life of a human without pain. If successful, the target dies without pain immediately as if it fell into a deep slumber. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: A single individual within Touch Range. ❖ Cost: 1 Rouse Check ❖ Conditions: Must make physical touch with the targets skin. Can only be user on Mortals (Enhanced mortals are not affected). ❖ Risk: Moderate. The target seemingly falls asleep and dies peacefully. ❖ Test: Valeren + Wits (3) ❖ Resistance Roll: None ❖ Duration: 1 Action (a few seconds) for the effects to take place.",
                summary: "Touch to instantly kill mortals painlessly (they appear to fall asleep)",
                dicePool: "Valeren + Wits",
                level: 3,
                discipline: "valeren",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            // Level 4
            {
                name: "King David's Blessing - Path of the Healer",
                description: "The Kindred becomes adapt at healing the ailments and wounds of others with but a touch. If successful this ability works exactly the same way as Healer's Blood, with the exception that the Kindred can create the same effects by simply touching the target rather than feeding them their blood. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: A single individual within Touch Range. ❖ Cost: 1 Rouse Check ❖ Conditions: Must make physical touch with the targets skin. ❖ Risk: High. The targets wounds visibly heal, and their condition rapidly improves. ❖ Test: Valeren + Intelligence (5 - if the character possesses Healer's Blood as well then, the test difficulty is reduced to 3) ❖ Resistance Roll: None ❖ Duration: 1 Round (5 minutes) for the effects to make a lasting impact.",
                summary: "Touch-based healing like Healer's Blood (difficulty 3 if you have Healer's Blood)",
                dicePool: "Valeren + Intelligence",
                level: 4,
                discipline: "valeren",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Fiery Agony - Path of the Warrior",
                description: "With a look the Kindred can cause unbearable pain to his enemies. If successful this ability works exactly the same way as Burning Touch, with the exception that the Kindred can create the same effects by simply making Eye Contact with the target rather than touching them. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: A single individual within Visual Range. ❖ Cost: 1 Rouse Check ❖ Conditions: Must make Eye Contact. ❖ Risk: High. The target begins to scream in great pain. ❖ Test: Valeren + Wits (5- if the character possesses Burning Touch as well then, the test difficulty is reduced to 3) ❖ Resistance Roll: Stamina + Resolve ❖ Duration: Same as Burning Touch.",
                summary: "Eye contact version of Burning Touch (difficulty 3 if you have Burning Touch)",
                dicePool: "Valeren + Wits",
                level: 4,
                discipline: "valeren",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            // Level 5
            {
                name: "Purification - Path of the Healer",
                description: "At its most powerful the Obeah path can be used to purify an individual of all forms of supernatural, natural, or man-made corruptions and poisons. If successful, then the target suffers the following: • It loses all forms of mental disorders. • All forms of intrusive mental influences (such as those from the powers of Dominate) are removed. • Any terminal conditions they might have suffered during the chronicle (such as cancer) are removed. • The effects of any poisons are nullified. • All diseases they currently have are cured. • All forms of supernatural curses (excluding Kindred or Clan Banes) are removed. • All Blood Bonds are broken. • Finally, if the target is possessed by a supernatural entity than that entity is driven out as well. ❖ Type: Ritual ❖ Tag: Physical, Mental & Spiritual ❖ Range & Targets: A single individual who is fed the Kindreds blood and spends an evening under their active care. ❖ Cost: 1 Scene + 2 Rouse Checks ❖ Conditions: The target must either comply with the instructions of the user or be restrained. Also note while miraculous this ability can do little to reverse death or restore what the target had already lost (memories, mind, body parts, their soul etc.) ❖ Risk: Moderate. This ability should never be used in the open and is generally carried out behind closed doors. Additionally, if the ritual is interrupted than the test is automatically considered a failure. ❖ Test: Valeren + Intelligence (7) ❖ Resistance Roll: Stamina + Resolve (in cases where the target is actively resisting the users care). ❖ Duration: 1 Scene (1 full night from sunrise to sunset or 12 hours)",
                summary: "Ultimate purification ritual - removes all mental disorders, influences, diseases, poisons, curses, and Blood Bonds",
                dicePool: "Valeren + Intelligence",
                level: 5,
                discipline: "valeren",
                rouseChecks: 2,
                amalgamPrerequisites: [],
            },
            {
                name: "Sword Of The Righteous - Path of the Warrior",
                description: "The ultimate expression of Valeren, with this ability the Kindred douses a blade in his blood. The blade catches fire when it strikes the corrupt and the flames devour the target, fuelled by the weight of the victim's own sins. If successful, a bladed weapon is enhanced with the Kindreds blood (this must be some form of melee weapon with a sharp edge). If the bladed weapon strikes a target, then the target will suffer 10 points of Aggravated damage. This amount is reduced by 1 for each unmarked Humanity box the target possesses. So, a target with Humanity 7 would receive only 3 points of Aggravated damage. There is no defence against this strike, aside from parrying or dodging (Fortitude offers no protection). The flames are magical in nature and feed on the sins inside the target's soul. They can cause a fear frenzy once the blade ignites but will never phase their wielder. Once a blow is successfully delivered the blade crumbles into dust. In instances where the targets humanity is questionable (Garou, Ghosts, Mages) the verdict is left to the Storyteller. ❖ Type: Ritual ❖ Tag: Physical & Spiritual ❖ Range & Targets: A single bladed weapon. ❖ Cost: 1 Scene + 2 Rouse Checks ❖ Conditions: The Kindred must have Humanity 7 or higher to manifest this ritual successfully. The enchanted blade must break the targets skin and make contact with their blood for the power to activate. Only one instance of such a blade can exist at a time. ❖ Risk: High. While leaving no trace of itself, the weapon does cause its victim to burst into flames. Even worse the blade can be lost to an enemy and used against the wielder. ❖ Test: Valeren + Wits (7) ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 full night from sunrise to sunset or 12 hours) to enchant the blade. After which the effects of the blade last for the duration of one successful strike although the flames it causes might keep going.",
                summary: "Enchant blade to deal 10 Aggravated damage minus target's Humanity (requires Humanity 7+)",
                dicePool: "Valeren + Wits",
                level: 5,
                discipline: "valeren",
                rouseChecks: 2,
                amalgamPrerequisites: [],
            },
        ],
    },
    vicissitude: {
        clans: ["Tzimisce"],
        summary: "Manipulate and reshape flesh, bone, and blood into new forms",
        logo: obfuscateLogo,
        powers: [
            // Level 1
            {
                name: "Flesh Works",
                description: "The user's flesh moves and reshapes itself according to the whims of its master allowing him to modify their physical attributes, sprout weapons or even transform their body entirely into new and horrifying forms. When used the Kindred must select one of the options under the Effects section. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: 1 Rouse Check ❖ Conditions: None ❖ Risk: High. The user is literally reshaping their flesh, this will be noticeable. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: 1 Round (a few seconds) to manifest, after which it remains in play until the end of the Scene (1 hour), until the Kindred is incapacitated or until they spend 1 Round (a few seconds) to end the ability. EFFECTS: ❖ Fleshchange: The user can move one of his dots in any Physical Attribute to another Physical Attribute. He cannot exceed more than 5 dots in this manner and must always maintain at least 1 dot in each Physical Attribute. This ability grows more powerful overtime. At level 3 the user can redistribute 2 dots instead of 1 and at level 5 he can redistribute 3 dots in this Manner.",
                summary: "Reshape flesh to redistribute Physical Attribute dots or gain special effects like weapon limbs or enhanced features",
                dicePool: "None",
                level: 1,
                discipline: "vicissitude",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Flesh Crafting",
                description: "The user takes his time to work on his newest project. He moulds his subjects with his hands and various tools. Flesh runs like wax, fat becomes putty, tendons and skin can be stretched to unnatural lengths and bone is fused into new shapes. The Kindred can only use this ability once per Session. When activated the user rolls the test and counts up the number of successes. The value, in addition to the number of dots he currently has in Vicissitude, equals the number of points the Kindred can use on his newest project using the Flesh Crafting section of this book. ❖ Type: Ritual ❖ Tag: Physical ❖ Range & Targets: Targets one or more individuals or appropriate \"material\" within Touch Range. ❖ Cost: 1 Scene + 1 Rouse Check ❖ Conditions: Can only be used once per Session. Check the Flesh Crafting section for more details. ❖ Risk: High. The user is creating a permanent flesh creation. If discovered, it is a blatant Masquerade violation. ❖ Test: Vicissitude + Composure or Crafting ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 hour or more) to finish the ritual. Any creations made will remain active as long as their upkeep is met (check the Flesh Crafting section).",
                summary: "Craft permanent flesh creatures and modifications using animals, cadavers, or living subjects",
                dicePool: "Vicissitude + Composure or Crafting",
                level: 1,
                discipline: "vicissitude",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Flesh Adept",
                description: "The user makes his first cautious steps on the path of Vicissitude. He learns to shape flesh and mould it into new and interesting shapes. The user has acquired his first dot in Vicissitude. At this point he gains both Level 0 abilities – Flesh Works and Flesh Crafting. Flesh Crafting: He can now use animals (but not animal ghouls belonging to other Kindred) and fresh cadavers in his Flesh Crafting rituals. He can use the art of Targa and create Kisebi. Mortals and Kindred cannot be targeted as their will is too powerful for the Kindred to gain dominion over their flesh. Flesh Works: The user must choose to add one additional option to his list of Effects from the following: ❖ Malleable Visage: The Kindred can modify his facial features to look different. He cannot outright imitate an existing person and he will always possess some recognizable features which can be picked up on by those who know them, but can otherwise use this ability to trick most people into believing he is someone else. ❖ Hermaphrodite: The Kindred can change their sex as desired in order to fool enemies and seduce targets based on their preference. This does not outright change the identity of the Kindred but it does make their appearance more feminine or more masculine accordingly. ❖ Face Of Progress: The users face takes on a fearsome alien aspect. Any mortal who gazes upon the Kindred must pass a Willpower test (2) or flee the Scene. On the other hand, users of Vicissitude find the features endearing and the user gains a 1 dice bonus to any non-supernatural Charisma based rolls when interacting with other Vicissitude users.",
                summary: "Basic Vicissitude mastery - can use animals/cadavers in Flesh Crafting, gains Malleable Visage, Hermaphrodite, or Face of Progress",
                dicePool: "Varies",
                level: 1,
                discipline: "vicissitude",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            // Level 2
            {
                name: "Meat Crafter",
                description: "The Kindred has grown comfortable and confident with his abilities. More so he has begun to develop something of a fascination with his work and even started experimenting on himself and others. Flesh Crafting: The user can now use Mortals and Enhanced Mortals (including animal ghouls) in his Flesh Crafting rituals. He can create Szlachtas and use the art of Ithon. Kindred cannot be targeted at this stage as their inner beast rebels against the powers of the user. Flesh Works: The user must choose to either add one additional option from the list below or from any of the lists from prior levels. ❖ Kraken's Kiss: The Kindred's mouth sprouts numerous tentacles allowing them to hold down their chosen prey with greater ease. Any grappling roll or bite attack the Kindred performs benefits from a 1 dice bonus. ❖ Skin Trap: The skin of the Vampire seems to increase in volume and hang off his limbs in large folds. When attacked the skin peels off and wraps itself around those who seek to bring its master harm. Any physical attack directed at the Kindred suffers a 1 dice penalty. ❖ Entrail Saraband: The Vampires stomach bursts open and a mass of wriggling tentacles, formed from the user's own entrails, seek to wrap themselves around the foe. The user benefits from a 2 dice bonus whenever attempting to grapple a target.",
                summary: "Advanced flesh crafting - can use mortals/enhanced mortals, gains Kraken's Kiss, Skin Trap, or Entrail Saraband",
                dicePool: "Varies",
                level: 2,
                discipline: "vicissitude",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            // Level 3
            {
                name: "Bone Scholar",
                description: "Bones, cartilage and tendons, the user has learned how to manipulate them all. Vicissitude had become almost second nature to him at this point and he finds that he can sprout weapons and create truly formidable flesh creations with little effort. Flesh Crafting: The user can now use Kindred in his Flesh Crafting rituals. Flesh Works: The user must choose to either add one additional option from the list below or from any of the lists from prior levels. ❖ Bone Blades: Large bone blades burst from the users' arms. While active the user cannot use his hands to pick up or hold objects. All physical damage made by the bone blades cannot be halved. ❖ Body Arsenal: The Kindred can replace one hand with any type of melee weapon (blades, hammers, saws etc). Unlike bone blades this transformation only affects one hand so the other is generally free to hold and wield objects. The user can use either brawl or melee to wield the flesh grafted weapons. ❖ Impaler's Coat: Almost reflexively bone like spikes burst forth from the Kindreds body as the user is attacked. Any attacker launching a physical attack on the Kindred in close combat (brawl or melee) will automatically suffer 2 points of Superficial Damage, unless they have a Dexterity rating greater than 3.",
                summary: "Bone manipulation mastery - can use Kindred in Flesh Crafting, gains Bone Blades, Body Arsenal, or Impaler's Coat",
                dicePool: "Varies",
                level: 3,
                discipline: "vicissitude",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            // Level 4
            {
                name: "Flesh Savant",
                description: "The user has mastered all the basic principles of Vicissitude. Flesh, muscle, fat, tendons and bone all change according to his will. Now he truly begins to plunge into the depths of this dark power as he unlocks new and exciting (most would call them nightmarish) abilities. Flesh Crafting: The user can now attempt to create Vozhds with Flesh Crafting. Flesh Works: The user must choose to either add one additional option from the list below or from any of the lists from prior levels. ❖ Devouring Blood: The user's blood turns to sludge and is filled with flesh eating bacteria. Anyone who makes contact with the Kindred's blood suffers a point of Superficial Damage. Anyone who attempts to drink from the Kindred automatically fails and suffers a point of Aggravated Damage. For story purposes the blood itself is also animated to a degree and any wounds caused at close range will reflexively jettison out a small trickle of vitae to automatically strike the users assailant. ❖ Cocoon: The Kindred automatically manifests a cocoon around their body as they enter Torpor. The cocoon is made out of an oil secreted by the Kindred's body and crystalizes into a solid, fire-resistant shell. Repeated attacks can eventually break open the cocoon but the difficulty is similar to trying to break open a safe. ❖ Liquefy The Mortal Coil: The vampire's palms become covered with small barbs. These inject the victim with a minuscule portion of the Kindred's blood as the user places the palm of his hands on the target (a successful Touch attack is needed). The corrupted vitae devours flesh and rots away bone, liquifying portions of the target's body in moments. This attack causes 2 points of Superficial Damage to Kindred (which cannot be halved) and one point of Aggravated Damage to Mortals and Enhanced Mortals.",
                summary: "Advanced flesh mastery - can create Vozhds, gains Devouring Blood, Cocoon, or Liquefy The Mortal Coil",
                dicePool: "Varies",
                level: 4,
                discipline: "vicissitude",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            // Level 5
            {
                name: "Vicissitude Master",
                description: "The Kindred is a master of Vicissitude. He can warp his form with but a thought and his lair produces a steady stream of monstrosities, no two of which are ever the same. Flesh Crafting: The user can now create Flesh Cathedrals. Flesh Works: The user must choose to either add one additional option from the list below or from any of the lists from prior levels. ❖ Horrid Form: The user's body twists and grows as he assumes the much-dreaded Zulo war form. In this form all Mortals and Enhanced Mortals must pass a Willpower test of 5 or flee the Scene in terror. The user adds 1 dice to all physical rolls and can chose to activate up to 2 additional Flesh Works Effects (no additional Rouse Checks are needed). ❖ Bloodform: The Kindred's body liquefies into a blood red ichor. While in this form only fire and sunlight can harm him. He can move at a speed of 5 meters (30 feet) per Round. Can pass through small nooks and cracks but cannot do any other actions. He cannot be affected by powers which require Eye Contact and cannot use any of his other abilities nor use any other Effects from Flesh Works. He still benefits from all upgrades. ❖ Will Over Form: This is treated as an upgrade which remains constantly active. The Kindred can now target others with Flesh Works as long as he touches the intended target. However, unless the target possesses Vicissitude themselves, they take a point of Aggravated Damage as the effects manifest. ❖ Doppelgänger: The user can perfectly mimic the physical properties and vocal cords of an individual they drank from. Unlike other vampiric powers, which focus on tricking the mind, this ability outright physically alters the user to look like their targets perfect copy. The ability can be kept going at the end of each Scene if an additional Rouse Check is made. The user does not inherit any of the targets supernatural or physical qualities aside from their looks. ❖ Chiropteran Marauder: This ability works exactly like Horrid Form with the exception that the user can only chose 1 additional Flesh Work Effect, instead of 2, and grows massive wings granting them the ability of semi-flight. The Kindred can fly up to a height of 10 meters and can glide on wind currents.",
                summary: "Master of Vicissitude - can create Flesh Cathedrals, gains Horrid Form, Bloodform, Will Over Form, Doppelgänger, or Chiropteran Marauder",
                dicePool: "Varies",
                level: 5,
                discipline: "vicissitude",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
        ],
    },
    // Missing disciplines - placeholder entries with obfuscate logo
    chimestry: {
        clans: [],
        summary: "",
        logo: obfuscateLogo,
        powers: [],
    },
    dementation: {
        clans: [],
        summary: "",
        logo: obfuscateLogo,
        powers: [],
    },
    "koldunic sorcery": {
        clans: [],
        summary: "",
        logo: obfuscateLogo,
        powers: [],
    },
    serpentis: {
        clans: ["Ministry"],
        summary: "Serpentine powers focusing on corruption, transformation, and venomous abilities",
        logo: obfuscateLogo,
        powers: [
            // Level 1
            {
                name: "Divine Image",
                description: "The Vampire's social manipulation goes beyond being just the centre of attention. With this ability, they become the centre of their follower's whole world. If more than one instance of Awe is active in the same location at once then the user who has a higher rating in Presence and used their ability more recently would generally be the centre of attention. With this upgrade, the user is always considered the highest Presence user unless another Kindred possesses Divine Image as well. ❖ Type: Upgrade ❖ Tag: Mental ❖ Range & Targets: Targets the user himself. ❖ Cost: None ❖ Conditions: Must possess Awe from Presence. ❖ Risk: Moderate. This ability makes mortals flock to your side just to be able to see you. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                summary: "Always be considered highest Presence user when multiple Awe effects are active (requires Awe)",
                dicePool: "None",
                level: 1,
                discipline: "serpentis",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Touch Of The Asp",
                description: "With the softest of touch, the Kindred enhances a target's darkest needs. The target begins to feel an unrelenting need to satisfy its addiction. Regardless if the addiction is Mild or Severe the target will attempt to actively seek it out. Any action not done in pursuit of this goal suffers a 2 dice penalty to all its rolls. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: A single individual within Touch Range. ❖ Cost: None ❖ Conditions: Must make physical touch with the target's skin. The target must have a pre-existing addiction. ❖ Risk: Minor. The target can become agitated and uncomfortable to be around. ❖ Test: None ❖ Resistance Roll: Stamina + Resolve (3, Mortals have no protection against this ability.) ❖ Duration: 1 Action (1 second) for the effects to take hold, after which they last for 1 Scene (1 hour).",
                summary: "Touch to enhance target's addiction, causing -2 dice to non-addiction related actions",
                dicePool: "None",
                level: 1,
                discipline: "serpentis",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Skin Of Adder",
                description: "The Kindred's skin grows patches of scales and becomes more durable. The Kindred can ignore up to 2 points of Superficial Damage he receives each Round. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the user himself. ❖ Cost: None ❖ Conditions: Only affects Superficial Damage. ❖ Risk: High. The power physically changes how the Kindred looks and makes them appear supernatural to outsiders. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: 1 Scene (10 minutes) or until the Kindred voluntarily ends the ability or is incapacitated.",
                summary: "Grow scales, ignore 2 points of Superficial Damage per Round",
                dicePool: "None",
                level: 1,
                discipline: "serpentis",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Serpents Flesh",
                description: "The Kindred's joints become more flexible, and he loses his normal ability to project false life. The Kindred adds 1 dice to any Dexterity-based roll. While the power is active the Kindred cannot use Blush of Life. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: None ❖ Conditions: None ❖ Risk: Minor. While the power itself doesn't outright make the Vampire supernaturally flexible it does prevent them from imitating life. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: 1 Scene (10 minutes) or until the Kindred voluntarily ends the ability or is incapacitated.",
                summary: "Gain +1 dice to Dexterity rolls but cannot use Blush of Life",
                dicePool: "None",
                level: 1,
                discipline: "serpentis",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Eyes Of The Serpent",
                description: "The Kindred's eyes become predatory and focused. Those whose gaze locks with the Vampire find themselves unable to move or break eye contact, their reaction similar to that of a deer caught in headlights. Unless the target passes its Resistance Roll it cannot move. ❖ Type: Ability ❖ Tag: Physical & Mental ❖ Range & Targets: A single individual within Visual Range. ❖ Cost: None ❖ Conditions: Must make Eye Contact. This ability can only be used once per Scene. ❖ Risk: Minor. While the eyes do physically change, they do so in a very subtle manner. ❖ Test: None ❖ Resistance Roll: Stamina + Resolve (3, mortals have no protection against this ability) ❖ Duration: Until eye contact is broken or the Kindred voluntarily ends the ability.",
                summary: "Eye contact paralyzes target until contact is broken (once per scene)",
                dicePool: "None",
                level: 1,
                discipline: "serpentis",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            // Level 2
            {
                name: "Breath The Sandstorm",
                description: "The Kindred forces a mouthful of its own vitae into its mouth and exhales it as a fine red dust that fills an area. If successful then everyone, including the user himself, is temporarily blinded as a red mist of dust blocks all line of sight. All actions that require Visual Range, Eye Contact or sight in general have their dice pool halved (rounding up). ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Everyone within 10 meters (30 feet) of the Kindred. ❖ Cost: 1 Rouse Check ❖ Conditions: Must be able to open his mouth to breathe out the miniature sandstorm. Individuals carrying protective eye equipment are not affected. ❖ Risk: High. This is blatantly a supernatural event and is a Masquerade breach if done in public. ❖ Test: Serpentis + Stamina (2) ❖ Resistance Roll: None ❖ Duration: 1 Round per dot in Serpentis (a few seconds to a minute).",
                summary: "Exhale blinding red dust affecting 30-foot radius, halving sight-based dice pools",
                dicePool: "Serpentis + Stamina",
                level: 2,
                discipline: "serpentis",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Seed Of Corruption",
                description: "Not all venom is meant to harm or incapacitate, sometimes it is just intended to subtly alter the target. The Kindred can give a Mild addiction of any type to a Mortal they feed from. ❖ Type: Upgrade ❖ Tag: Mental & Physical ❖ Range & Targets: Targets anyone the Kindred feeds from. ❖ Cost: None ❖ Conditions: Must feed from the target via bite. Enhanced Mortals and Kindred are not affected. ❖ Risk: Minor. This ability alters the mental and physical needs of an individual and their new craving will be noticed by their friends, but linking it to you will be a stretch. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                summary: "Give Mild addiction to mortals you feed from",
                dicePool: "None",
                level: 2,
                discipline: "serpentis",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Cobra Fangs",
                description: "The Kindred's fangs produce a dangerous serpentine venom. The Kindred can voluntarily Poison any targets he bites. Mortals and Enhanced Mortals can be affected but not Kindred. ❖ Type: Upgrade ❖ Tag: Physical ❖ Range & Targets: Targets anyone the Kindred bites. ❖ Cost: None ❖ Conditions: Enhanced Mortals can be affected; Kindred are still immune. ❖ Risk: Minor. This ability simply makes your bite more deadly. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                summary: "Bite attacks can poison mortals and enhanced mortals",
                dicePool: "None",
                level: 2,
                discipline: "serpentis",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            // Level 3
            {
                name: "Basilisk Breath",
                description: "The Kindred exhales a poisonous corrosive mist at its adversaries. If successful the Kindred breaths out a corrosive mist. This breath attack is projected in the shape of a cone with a length of 3 meters (or 10 feet) and a maximum width of 1 meter (or 3 feet). The measurements are meant as a rough idea only. Anyone caught in the cone takes 3 Points of Superficial Damage and is Poisoned if they fail their resistance rolls. Kindred can be damaged but never suffer the Poisoned effect. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Anyone caught in the 3-meter (10 feet) x 1 meter (3 feet) cone. ❖ Cost: 1 Rouse Check ❖ Conditions: Must be able to open his mouth to breathe out the toxic mist. ❖ Risk: High. This power can only be explained as a supernatural event and breaches the Masquerade. ❖ Test: Serpentis + Stamina (3) ❖ Resistance Roll: Stamina + Resolve (Mortals have no protection against this ability) ❖ Duration: 1 Action (a few seconds), the Poison lasts until cured or until it has run its course.",
                summary: "Breathe corrosive cone doing 3 Superficial Damage and poisoning targets",
                dicePool: "Serpentis + Stamina",
                level: 3,
                discipline: "serpentis",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Forbidden Blood",
                description: "The Kindred's blood responds to those who drink it, unlocking hidden yearnings and addictions they never knew they had. Anyone who feeds from the Kindred runs the risk of developing a Mild or Severe addiction. The type and nature of the addiction which the victim develops are left for the player to decide when targeting Mortals and for the Storyteller to decide when targeting Enhanced Mortals and Kindred. ❖ Type: Reflexive ❖ Tag: Physical ❖ Range & Targets: Anyone who drinks the Kindred's vitae. ❖ Cost: 1 Rouse Check ❖ Conditions: The target must ingest the Kindred's vitae. ❖ Risk: Moderate. This has the potential to permanently alter the target's wants and needs but is otherwise subtle. ❖ Test: None ❖ Resistance Roll: Stamina + Resolve (4, Mortals have no protection against this power) ❖ Duration: Permanent or until the target manages to overcome the addiction through a lack of access or therapy.",
                summary: "Those who drink your blood risk developing Mild or Severe addictions",
                dicePool: "None",
                level: 3,
                discipline: "serpentis",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "The Untethered Heart",
                description: "The Kindred's heart has the ability to move through its chest cavity and instinctively avoids damage. Any action specifically targeting the Kindred's heart, be it a gunshot, staking or a physical attack suffers a 3 dice penalty to its rolls or fails automatically if no roll is required. ❖ Type: Upgrade ❖ Tag: Physical ❖ Range & Targets: Targets the Kindred himself. ❖ Cost: None ❖ Conditions: None ❖ Risk: None. Unless examined via an X-ray this power cannot be picked up on. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                summary: "Heart moves to avoid damage, -3 dice to heart-targeting attacks",
                dicePool: "None",
                level: 3,
                discipline: "serpentis",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            // Level 4
            {
                name: "Typhon's Maw",
                description: "The Vampires fangs grow in rows and drip a virulent toxin that thickens blood and dissolves flesh. If successful the Kindred's bite attacks Poison any target he bites. However, unlike normal this venom inflicts 1 point of Aggravated Damage to Mortals and Enhanced Mortals every Round. The Poison effect can still be treated if the right knowledge and equipment are on hand. It also affects other Kindred but with less severe effects, causing them 1 point of Superficial Damage every Round instead. While the power is in effect the user cannot issue Vocal commands. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Anyone the user bites. ❖ Cost: 1 Rouse Check ❖ Conditions: None ❖ Risk: High. This power changes the structure of the Kindred's maw and fills it with needle-like fangs that drip venom. ❖ Test: Serpentis + Stamina (4, if the Kindred possesses Cobra Fangs as well then, the test difficulty is reduced to 3) ❖ Resistance Roll: Stamina + Resolve (4, to resist the Poison, Mortals have no protection against this attack, Enhanced Mortals do) ❖ Duration: The mutation lasts for 1 Scene (1 hour), the Kindred voluntarily ends the power or is incapacitated. The effects of Poison last until they run their course or are cured.",
                summary: "Multiple fanged maw with deadly venom causing ongoing damage (difficulty 3 with Cobra Fangs)",
                dicePool: "Serpentis + Stamina",
                level: 4,
                discipline: "serpentis",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Form Of The Desert Storm",
                description: "The Kindred turns into a cloud of red sand and dust. If successful the Kindred turns into a miniature sandstorm. While in this form only fire and sunlight can harm him. He can move up to 10 meters (30 feet) away from his current position while in this form and can pass through small nooks and cracks but cannot do any other actions. While in this form, he cannot be affected by powers which require Eye Contact and cannot use any of his other abilities. He still benefits from all his upgrades, however. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the user himself. ❖ Cost: 1 Rouse Checks ❖ Conditions: None ❖ Risk: High. The ability is manifested instantaneously and if performed in public it will cause a panic. ❖ Test: Serpentis + Stamina (4) ❖ Resistance Roll: None ❖ Duration: 1 Round (a few seconds to a minute), until the Kindred ends the ability or is incapacitated.",
                summary: "Transform into sandstorm, only vulnerable to fire/sunlight, can move 30 feet",
                dicePool: "Serpentis + Stamina",
                level: 4,
                discipline: "serpentis",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            // Level 5
            {
                name: "Avatar Of Set",
                description: "The Vampire transforms into a Typhonic avatar of destruction. If successful the Kindred transforms into a jackal-like monstrosity reminiscent of a Typhonic beast. All Mortals and Enhanced Mortals will flee from the Scene in terror unless they pass a Willpower test (3). The Kindred gains a 2 dice bonus to all physical rolls and damage from its attacks cannot be halved. Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the user himself. ❖ Cost: 2 Rounds + 2 Rouse Checks ❖ Conditions: Males only. ❖ Risk: Very High. You have turned into a monstrous beast. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: The Kindred needs 2 Rounds (1 minute) to manifest the ability. Afterwards, the power lasts for 1 Scene (1 Hour), until the Kindred sacrifices a Round (a few seconds) to end the ability or is incapacitated.",
                summary: "Transform into jackal-like Typhonic beast, +2 physical dice, unhalved damage (males only)",
                dicePool: "None",
                level: 5,
                discipline: "serpentis",
                rouseChecks: 2,
                amalgamPrerequisites: [],
            },
            {
                name: "Avatar Of Apep",
                description: "The Vampire transforms into a serpent of terror and destruction. If successful the Kindred transforms into a large snake-like monster drenched in shadows. All Mortals and Enhanced Mortals will flee from the Scene in terror unless they pass a Willpower test (3). The Kindred gains a 2 dice bonus to all physical rolls, cannot use items and its bite attacks count as benefiting from Typhon's Maw. Type: Ability ❖ Tag: Physical ❖ Range & Targets: Targets the user himself. ❖ Cost: 2 Rounds + 2 Rouse Checks ❖ Conditions: Females only. ❖ Risk: Very High. You have turned into a monstrous beast. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: The Kindred needs 2 Rounds (1 minute) to manifest the ability. Afterwards, the power lasts for 1 Scene (1 Hour), until the Kindred sacrifices a Round (a few seconds) to end the ability or is incapacitated.",
                summary: "Transform into serpentine shadow monster, +2 physical dice, bite has Typhon's Maw (females only)",
                dicePool: "None",
                level: 5,
                discipline: "serpentis",
                rouseChecks: 2,
                amalgamPrerequisites: [],
            },
        ],
    },
    necromancy: {
        clans: [],
        summary: "",
        logo: obfuscateLogo,
        powers: [],
    },
    obtenebration: {
        clans: [],
        summary: "",
        logo: obfuscateLogo,
        powers: [],
    },
    quietus: {
        clans: ["Banu Haqim"],
        summary: "Assassination arts divided into Path of Poisons and Path of Curses, with accompanying Assamite Sorcery",
        logo: obfuscateLogo,
        powers: [
            // Level 1
            {
                name: "Scorpions Curse - Path of Poisons",
                description: "The Kindred has learned to transmit his poison through the vampiric feeding method. The Kindred can transmit any Poison from the Assamite Sorcery section via bite. ❖ Type: Upgrade ❖ Tag: Physical ❖ Range & Targets: Anyone the user bites. ❖ Cost: None ❖ Conditions: None ❖ Risk: Moderate. The upgrade still requires you to bite the target which can quickly become a Masquerade breach. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                summary: "Transmit Assamite Sorcery poisons through bite",
                dicePool: "None",
                level: 1,
                discipline: "quietus",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Blood Essence - Path of Curses",
                description: "The assassin finds that after feeding he can use his own blood to curse the target. The Kindred can use his own blood to cast a curse on a target using Assamite Sorcery, provided the target was the last vessel the vampire drank from. ❖ Type: Upgrade ❖ Tag: Physical ❖ Range & Targets: Targets whoever the user last fed from. ❖ Cost: None ❖ Conditions: None ❖ Risk: Minor. The target will develop any symptoms remotely, however considering the user still needs to feed from the target, such an act will likely tie them to the effect. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                summary: "Use your blood to cast curses on your last feeding victim",
                dicePool: "None",
                level: 1,
                discipline: "quietus",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Crimson Tempering - Path of Curses",
                description: "Vitae is of key significance to Kindred, but it rarely holds its potency when not taken directly from the vein. The skilled masters of the Banu Haqim have long found a way around such limitations. The Kindred can cast this ritual on any small glass vial or similar container which he submerges in blood. As the spell comes to fruition and the blood bubbles away the container remains unchanged, with the exception of a slight red hue. Any blood deposited into such a container will be preserved for far longer than normal, including Kindred Vitae. ❖ Type: Ritual ❖ Tag: Physical ❖ Range & Targets: A single glass container within Touch Range ❖ Cost: 1 Scene + a sufficient amount of blood to submerge the container (the blood can come from any source) ❖ Conditions: The glass container can at most hold a pint of blood (roughly half a litre). It needs to be submerged in blood for the Ritual to work (during its creation process). ❖ Risk: Minor. As long as it is done away from prying eyes there should be no problems. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 hour) to perform the ritual. The effects on the glass container last for roughly a month, after which the effect of the ritual will start to gradually dissipate.",
                summary: "Create blood-preserving containers that maintain vitae potency for a month",
                dicePool: "None",
                level: 1,
                discipline: "quietus",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            // Level 2
            {
                name: "Baal's Caress - Path of Poisons",
                description: "As the Kindred coats a blade in his own vitae, the poisons, he concocted stick to the weapon turning it deadly. Any surface which the Kindred coats in his vitae can transmit a predetermined Poison from the Assamite Sorcery section. The effects last for an entire Scene provided the coated surface makes contact with the target's bloodstream or is ingested. ❖ Type: Ability ❖ Tag: Physical ❖ Range & Targets: Any surface the user coats in his Vitae during a Scene. ❖ Cost: 1 Rouse Check ❖ Conditions: Cannot be used on bullets as their ignition and velocity will dissipate the poison too much for it to be effective. ❖ Risk: Minor, you are noticeably coating a surface in your blood. ❖ Test: Quietus + Intelligence (2) ❖ Resistance Roll: None ❖ Duration: 1 Scene",
                summary: "Coat surfaces with poisonous vitae to transmit Assamite Sorcery poisons",
                dicePool: "Quietus + Intelligence",
                level: 2,
                discipline: "quietus",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Taste Of Death - Path of Poisons",
                description: "The Kindred's vitae becomes poisonous to all who would drink from the vampire. The Kindred can lace his blood with the powers of Assamite Sorcery, allowing him to use its poisons on any who would drink from him. ❖ Type: Reflexive ❖ Tag: Physical ❖ Range & Targets: Anyone who drinks the Kindred's vitae. ❖ Cost: 1 Rouse Check ❖ Conditions: The target must ingest the user's vitae. ❖ Risk: Moderate. You are already being fed from. The power itself merely has a more dramatic effect afterwards. ❖ Test: Quietus + Intelligence (2) ❖ Resistance Roll: None ❖ Duration: 1 Round (until the feeding is done).",
                summary: "Make your vitae poisonous to those who drink from you",
                dicePool: "Quietus + Intelligence",
                level: 2,
                discipline: "quietus",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Blood Of Ancients - Path of Curses",
                description: "A sire's link to their child is unmistakable and so it is that the childer will suffer for their creator's hubris. The Kindred can use the blood of the target's Sire to cast a curse on the target using Assamite Sorcery. ❖ Type: Upgrade ❖ Tag: Physical ❖ Range & Targets: Targets any childer who belongs to the sire, whose blood was used. ❖ Cost: None ❖ Conditions: None ❖ Risk: None ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                summary: "Use a sire's blood to curse their childer with Assamite Sorcery",
                dicePool: "None",
                level: 2,
                discipline: "quietus",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            // Level 3
            {
                name: "Rapturous Touch - Path of Poisons",
                description: "Blades and blood are no longer needed for the assassin to infect his target. A simple, but firm grip, will more than suffice. The Kindred can transmit any Poison from the Assamite Sorcery section via Touch. ❖ Type: Power ❖ Tag: Physical ❖ Range & Targets: Any individual within Touch Range. ❖ Cost: 1 Rouse Check ❖ Conditions: The Kindred must perform a firm and noticeable grip in order for the effect to work (a firm handshake does suffice). ❖ Risk: None ❖ Test: Quietus + Intelligence (3) ❖ Resistance Roll: None ❖ Duration: 1 Scene",
                summary: "Transmit Assamite Sorcery poisons through touch",
                dicePool: "Quietus + Intelligence",
                level: 3,
                discipline: "quietus",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Baal's Due - Path of Curses",
                description: "Often the quickest way to a tyrant's heart is through his progeny. The Kindred can use the last drop of another vampire's blood to cast curses, from the Assamite Sorcery section, on the sire of that vampire. The last drop of blood is literally the last portion of blood the Kindred manages to extract from a target before their destruction. This power can be used in combination with Blood Essence if the Kindred diablarizes the vampire, but generally, the blood is extracted by slaying the target during the course of the ritual. ❖ Type: Upgrade ❖ Tag: Physical ❖ Range & Targets: Can target any Kindred. ❖ Cost: None ❖ Conditions: The effects do not work on Thin Blood, Caitiffs or Sires who are unknown to the user of this ability. ❖ Risk: High. Not only are you performing murder, but you're also getting your hands bloody trying to do it in a particular way. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                summary: "Use a vampire's last blood drop to curse their sire",
                dicePool: "None",
                level: 3,
                discipline: "quietus",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            // Level 4
            {
                name: "Haqim's Chosen Blades - Path of Poisons",
                description: "The humble blade is the assassin's chosen tool. The Kindred can empower a single melee weapon with this ritual. The chosen weapon is considered to be permanently coated in the Kindred's blood and can transmit any Poison from the Assamite Sorcery section as long as it injures a target. Additionally, the user gains an extra dice whenever making Melee rolls with the chosen weapon. ❖ Type: Ritual ❖ Tag: Physical ❖ Range & Targets: A single weapon within Touch Range. ❖ Cost: 1 Scene + 1 Rouse Check ❖ Conditions: The weapon must have a piercing end and be bladed (blunt weapons such as hammers will not suffice). Only a single instance of such a weapon can exist at one time and the weapon's supernatural properties only come to life in the hands of its master. ❖ Risk: None ❖ Test: Quietus + Intelligence (4) ❖ Resistance Roll: None ❖ Duration: Until the Kindred is destroyed or chosen to empower a new weapon with this",
                summary: "Permanently empower a blade to transmit poisons and gain +1 melee dice",
                dicePool: "Quietus + Intelligence",
                level: 4,
                discipline: "quietus",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            // Level 5
            {
                name: "The Slave's Revenge - Path of Curses",
                description: "Ghouls have been used and abused by Kindred for centuries. While this ability does little to improve their lot in life, it does give their death a final purpose. The Kindred can use the last drop of blood from a Ghoul belonging to another vampire to cast curses, from the Assamite Sorcery section, on the master of that Ghoul. The last drop of blood is literally the last portion of blood the Kindred manages to extract from a target before their death. This power can be used in combination with Blood Essence if the Kindred drains the Ghoul dry, but generally, the blood is extracted by slaying the target during the course of the ritual. ❖ Type: Upgrade ❖ Tag: Physical ❖ Range & Targets: Can only target Ghouls. ❖ Cost: None ❖ Conditions: The curse chosen only works on Kindred. ❖ Risk: High. You are performing a ritual on an empowered mortal. Unlike other Kindred, ghouls don't tend to age into oblivion when killed so you might have a body you need to dispose of after the ritual is finished. ❖ Test: None ❖ Resistance Roll: None",
                summary: "Use a ghoul's last blood drop to curse their Kindred master",
                dicePool: "None",
                level: 5,
                discipline: "quietus",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
        ],
    },
    spiritus: {
        clans: ["Ahrimanes", "Lhiannan"],
        summary: "Nature-based spiritual abilities and communion with spirits",
        logo: obfuscateLogo,
        powers: [
            // Level 1
            {
                name: "Land Whisper",
                description: "The Kindred whispers a silent word and waits for the spirits of the land to answer. The Kindred can whisper or speak out loud in any form or fashion she chooses and direct her questions to the spirits of nature around her. Sometimes a spirit might reply with a voice only the user can hear or there might be no answer forthcoming. This is left to the discretion of the Storyteller. Regardless of the outcome the user will be able to pick up on sounds others cannot, from the spirits around her granting a 2 dice bonus to all Survival rolls. ❖ Type: Upgrade ❖ Tag: Physical & Spiritual ❖ Range & Targets: Targets the Kindred herself and all other spirits nearby. ❖ Cost: None ❖ Conditions: The bonus only applies in areas where nature is abundant (forests, mountains, meadows). ❖ Risk: Low. The user can be seen talking to themselves which does raise suspicion. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                summary: "Communicate with nature spirits and gain +2 dice to Survival rolls in natural areas",
                dicePool: "None",
                level: 1,
                discipline: "spiritus",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Prayer To Gaia",
                description: "The user ushers a prayer to the Earth Mother, asking her for assistance in this trying time. The user ushers a prayer, asking the spirits for assistance. Once completed the user gains a 1 dice bonus to all Physical and Mental rolls. ❖ Type: Ritual ❖ Tag: Spiritual ❖ Range & Targets: Targets the Kindred herself. ❖ Cost: 1 Scene ❖ Conditions: The ritual must be performed in an area of significant natural vitality. The bonus only applies in areas where nature is abundant (forests, mountains, meadows). ❖ Risk: Low. You are performing what is in essence a prayer to nature. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: 1 Scene to manifest (10 minutes) after which it lasts until the end of the Session (6 hours).",
                summary: "Prayer ritual granting +1 dice to Physical and Mental rolls in natural areas",
                dicePool: "None",
                level: 1,
                discipline: "spiritus",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            {
                name: "Garou Speech",
                description: "The spirits have seen it fit to bless the user with an understanding of Garou language. The user can understand and read Garou language. They can also communicate with them in their own tongue in a limited fashion. Garou speech is more than just words, rather it is a combination of half uttered human sentences, mixed with bestial growls and body language. If the user is creative, they might be able to use Protean to assist them. ❖ Type: Upgrade ❖ Tag: Physical & Spiritual ❖ Range & Targets: Targets the Kindred herself. ❖ Cost: None ❖ Conditions: None. If the user possesses Protean, then their Garou Speech is clearer to Werewolves than it would normally be. ❖ Risk: Moderate. You are talking and behaving strangely. Chances are you are also talking to a werewolf so the Masquerade might be of secondary concern. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                summary: "Understand and speak Garou language (enhanced with Protean)",
                dicePool: "None",
                level: 1,
                discipline: "spiritus",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            // Level 2
            {
                name: "Aspect Of The Wild Hunt",
                description: "The Kindred's connection to the spirits grows, allowing her to call upon animal characteristics at will. If successful, the user can choose ONE of the following bonuses: Wolf: The user enhances her sense of smell adding 2 dice to any scent related test they make. Eagle: The user enhances their eyesight and can see across great distances without the aid of technology. Bear: The user adds 1 dice to all Brawl related rolls. ❖ Type: Ability ❖ Tag: Physical & Spiritual ❖ Range & Targets: Targets the Kindred herself. ❖ Cost: 1 Rouse Check ❖ Conditions: Can only be used once per Scene. ❖ Risk: None. Your enhanced abilities are a wonder to behold but they do not physically alter your form, nor does the power have any visible effect. ❖ Test: Spiritus + Humanity (3) ❖ Resistance Roll: None ❖ Duration: 1 Scene (1 hour)",
                summary: "Gain animal aspects - Wolf (scent), Eagle (sight), or Bear (brawl) for one scene",
                dicePool: "Spiritus + Humanity",
                level: 2,
                discipline: "spiritus",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Raven Queen",
                description: "The vampire stretches out her arms and from seemingly nowhere a flock of ravens materializes to peck and confuse her enemies. The Kindred summons a flock of ravens. These count as spirit constructs. The ravens will attack individuals or groups as directed by the user. However, once a target is chosen it cannot be changed. The target, at most, suffers minor scratches and a 1 dice penalty to all its rolls while the effects last. ❖ Type: Ability ❖ Tag: Physical & Spiritual ❖ Range & Targets: Targets an individual or a group within 30 meters (100 feet). ❖ Cost: 1 Rouse Check ❖ Conditions: One use per Scene. ❖ Risk: High. While the ravens themselves look natural, they materialize from nowhere and follow the rules for Spirit Constructs. ❖ Test: Spiritus + Humanity (3) ❖ Resistance Roll: None ❖ Duration: Until the end of the next Round (2-3 minutes).",
                summary: "Summon spirit ravens that impose -1 dice penalty on targets",
                dicePool: "Spiritus + Humanity",
                level: 2,
                discipline: "spiritus",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Guardians Of The Den",
                description: "The user manifests a pair of wolves at her side which act as ferocious guardians. If successful 2 wolves will materialize next to the user. These entities will instinctively guard the user and attack any of her enemies who are openly hostile. They count as spirit constructs but otherwise have all the same attributes as normal wolves. ❖ Type: Ability ❖ Tag: Physical & Spiritual ❖ Range & Targets: The wolves will materialize separately within 1 meter (3 feet) of the user. ❖ Cost: 1 Round + 1 Rouse Check ❖ Conditions: One use per Scene. ❖ Risk: High. The wolves themselves will cause a panic and follow the rules for Spirt Constructs. ❖ Test: Spiritus + Humanity (3) ❖ Resistance Roll: None ❖ Duration: 1 Round to manifest (a few seconds) after which they will remain active for the rest of the Scene (10 minutes)",
                summary: "Summon two spirit wolves as guardians for one scene",
                dicePool: "Spiritus + Humanity",
                level: 2,
                discipline: "spiritus",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            // Level 3
            {
                name: "The Tenacious Mother",
                description: "The Kindred taps into her reserves of resolve, ready to sacrifice it all for her progeny, for a moment overriding the instincts of the Beast itself. If successful then the user can re-roll ALL black dice when using Willpower to re-roll dice, instead of just the normal 3. They still need to spend Willpower as normal. ❖ Type: Ability ❖ Tag: Mental & Spiritual ❖ Range & Targets: Targets the Kindred herself. ❖ Cost: 1 Rouse Check ❖ Conditions: None ❖ Risk: Minor. This ability strengthens the Kindred's resolve. ❖ Test: Spiritus + Humanity (4) ❖ Resistance Roll: None ❖ Duration: 1 Scene (10 minutes)",
                summary: "Re-roll ALL black dice when using Willpower instead of just 3",
                dicePool: "Spiritus + Humanity",
                level: 3,
                discipline: "spiritus",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            {
                name: "Spirit Beast",
                description: "The power of Spiritus flows through the users' veins, allowing her to interact with other spirits on a more personal level. All of the user's physical attacks can now harm spirits and are treated as having the Spiritual tag. ❖ Type: Upgrade ❖ Tag: Spiritual ❖ Range & Targets: Targets the Kindred herself. ❖ Cost: None ❖ Conditions: None ❖ Risk: Low. Only those with supernatural sight can see that the user's aura is especially vibrant. ❖ Test: None ❖ Resistance Roll: None ❖ Duration: Permanent",
                summary: "Physical attacks can harm spirits and gain Spiritual tag",
                dicePool: "None",
                level: 3,
                discipline: "spiritus",
                rouseChecks: 0,
                amalgamPrerequisites: [],
            },
            // Level 4
            {
                name: "Brother Bear",
                description: "The Kindred strikes the ground with all her might ushering a desperate plea to the earth mother. As enemies close around her, they are stunned to find a massive bear standing guard over their would-be victim. If successful, the Kindred summons a large bear to her aid. This entity will instinctively guard the user and attack any of her enemies who are openly hostile. It counts as a spirit constructs (page 9). ❖ Type: Ability ❖ Tag: Physical & Spiritual ❖ Range & Targets: The bear will materialize within 3 meters (10 feet) of the user. ❖ Cost: 1 Round + 1 Rouse Check ❖ Conditions: The ability will only work in areas where nature is abundant (forests, mountains, meadows). ❖ Risk: High. The bear itself will cause a panic and follow the rules for Spirit Constructs. ❖ Test: Spiritus + Humanity (5) ❖ Resistance Roll: None ❖ Duration: 1 Round to manifest (a few seconds) after which it will remain active for the rest of the Scene (10 minutes).",
                summary: "Summon a large spirit bear guardian (requires natural areas)",
                dicePool: "Spiritus + Humanity",
                level: 4,
                discipline: "spiritus",
                rouseChecks: 1,
                amalgamPrerequisites: [],
            },
            // Level 5
            {
                name: "Umbra Hunter",
                description: "The user's connection to the Umbra is now such that she can step through the veil and travel its enigmatic depths. The user can enter or exit the Umbra by performing this Ability. She must perform this ability separately each time when entering and exiting the Umbra. ❖ Type: Ability ❖ Tag: Physical + Spiritual ❖ Range & Targets: Targets the user herself. ❖ Cost: 2 Rounds + 2 Rouse Checks ❖ Conditions: The ability will only work in areas where nature is abundant (forests, mountains, meadows). The user must have the Spirit Beast ability. ❖ Risk: Low. To the untrained eye the user simply disappears. ❖ Test: The ability will only work in areas where nature is abundant (forests, mountains, meadows). ❖ Resistance Roll: None ❖ Duration: 2 Rounds to manifest (a few minutes) after which the effects remain in place until the user returns to the physical world.",
                summary: "Enter or exit the Umbra (requires Spirit Beast and natural areas)",
                dicePool: "Spiritus + Humanity",
                level: 5,
                discipline: "spiritus",
                rouseChecks: 2,
                amalgamPrerequisites: [],
            },
        ],
    },
    "": {
        clans: [],
        summary: "",
        logo: obfuscateLogo,
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



// Ceremonies: identical to Rituals, but for Oblivion
export const ceremonySchema = z.object({
    name: z.string(),
    summary: z.string(),
    rouseChecks: z.number().min(0).int(),
    requiredTime: z.string(),
    dicePool: z.string(),
    ingredients: z.string(),
    level: z.number().min(1).int(),
})
export type Ceremony = z.infer<typeof ceremonySchema>

export const Ceremonies: Ceremony[] = [
    { name: "Gift of False Life", summary: "Reanimate a corpse to perform one task (Ashes to Ashes)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Knowing Stone", summary: "Scry a ghost's location from its name (Ashes to Ashes or Binding Fetter)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Summon Spirit", summary: "Summon a ghost with its fetter (Binding Fetter)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Gift of the Blood Pearl", summary: "Blood Pearls animate corpses (Blood Sorcery 1)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Glutton's Insight", summary: "Absorbs victims' memories through feasting (Carrion Banquet or Rapacious Communion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Desperate Cry", summary: "Desperate pact heals wounds but inflicts lasting harm (Rapacious Communion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Traveler's Call", summary: "Alert another Shalimite to your location (Oblivion Sight, Shalimite)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Poet's Prose", summary: "Blood-scribed messages glow for Oblivion's eyes alone (Lambent Dark)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    { name: "Sin's Graceful Flame", summary: "Balefire candle, revealing sins and fueling infernal power. (Daimonion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 1 },
    // New Level 1 Ceremonies
    { name: "Corpse Liquor", summary: "Determine if a mortal will become a wraith by brewing and drinking their flesh.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll", ingredients: "At least 1 ounce of flesh from a living mortal, salt, wyrmwood, strong alcohol, caster’s vitae", level: 1 },
    { name: "Il Malocchio", summary: "Implant a preserved Kindred eye to gain deathsight and bonuses to necromancy.", rouseChecks: 1, requiredTime: "1 scene", dicePool: "Wits + Oblivion", ingredients: "A preserved eye from a Kindred with Auspex, your own eye (sacrificed)", level: 1 },
    { name: "Watcher in the Dark", summary: "Spy on a person or location through a stolen item and shadows.", rouseChecks: 1, requiredTime: "1 scene", dicePool: "Oblivion Ceremony Roll", ingredients: "A stolen item from the target or location, caster’s vitae", level: 1 },
    // New Level 2 Ceremonies
    { name: "Fruit of the Mandragore", summary: "Grow a mandrake that produces hunger-slaking fruit and creates a vengeful specter.", rouseChecks: 1, requiredTime: "1 week", dicePool: "Oblivion Ceremony Roll", ingredients: "A living vessel, goat/cow’s milk, bat blood, caster’s vitae", level: 2 },
    { name: "High Saturday's Dance", summary: "Haunt a target with wraiths, inflicting penalties to Social and Mental pools.", rouseChecks: 1, requiredTime: "1 scene", dicePool: "Oblivion Ceremony Roll", ingredients: "A personal possession of the target, boula drum, colored sand/cornmeal, caster’s vitae", level: 2 },
    { name: "Abyssal Investiture", summary: "Anoint people to make them invisible to electronics and unrecordable.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll", ingredients: "Purified water, caster’s vitae, a completely dark room", level: 2 },
    { name: "Poor Yorick's Mask", summary: "Create a mask that blocks supernatural detection and repels wraiths.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll", ingredients: "Ashes from a cremated corpse, grave wax, purified water, full-face mask", level: 2 },
    // Added Level 2 Ceremony
    { name: "Vitrine Prison", summary: "Trap a piece of a target's shadow in a glass container, penalizing their Mental Pools and allowing the caster to view their memories.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll vs. Resolve + Occult (or Fortitude)", ingredients: "Sealable glass container, moth's wing, black wax", level: 2 },
    // New Level 3 Ceremonies
    { name: "Charon's Needle", summary: "Track a wraith and inflict aggravated Willpower damage with a silvered fingerbone.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll", ingredients: "Fingerbone from a wraith, molten silver", level: 3 },
    { name: "Plunge Into Darkness", summary: "Create an aura that disables electronics and blocks transmissions.", rouseChecks: 1, requiredTime: "1 turn", dicePool: "Oblivion Ceremony Roll", ingredients: "Lodestone with Theban runes, caster’s vitae", level: 3 },
    { name: "Abyzou's Grasp", summary: "Curse a Kindred to be unable to Embrace until a lead tablet is recovered.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll", ingredients: "Lead tablet, venomous animal, stagnant water", level: 3 },
    // Added Level 3 Ceremony
    { name: "Craft Fetch", summary: "Create a doppelganger of a target from their clothing, string, sticks, and vitae. The Fetch is a tactile illusion, not sentient, and has Health equal to the creator's Oblivion rating.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll", ingredients: "Clothing from target, red string, blackthorn sticks, iron nail, caster's vitae", level: 3 },
    // New Level 4 Ceremonies
    { name: "Shava Sadhana", summary: "Blood Bond wraiths by meditating on a corpse with hallucinogens.", rouseChecks: 1, requiredTime: "1 night", dicePool: "Oblivion Ceremony Roll", ingredients: "Milk of Somalata, psilocybin, fresh corpse", level: 4 },
    { name: "Cloak of Xipe Totec", summary: "Flay a victim and wear their skin to become their double.", rouseChecks: 1, requiredTime: "1 night", dicePool: "Oblivion Ceremony Roll", ingredients: "Victim, obsidian dagger, golden bowl, aromatics", level: 4 },
    { name: "Lost Shadow", summary: "Become a target’s shadow, able to attack them and use Oblivion powers.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Oblivion Ceremony Roll", ingredients: "Target’s full name, abyssal cephalopod ink, caster’s vitae", level: 4 },
    // Added Level 4 Ceremony
    { name: "Witch-Ridden Slumber", summary: "Caster enters a Torpor-like state to invade the dreams of a victim whose blood was used in the potion, inflicting Aggravated Willpower damage and feeding on their fear.", rouseChecks: 1, requiredTime: "1 night (brew); 1 scene (use)", dicePool: "Oblivion Ceremony Roll", ingredients: "Powdered black goat horn, rock salts, red valerian root, dried monkshood, at least 1 pint of target's blood", level: 4 },
    // New Level 5 Ceremonies
    { name: "Unliving Effigy", summary: "Create a doll to inflict damage and injuries on a target from afar.", rouseChecks: 1, requiredTime: "1 night", dicePool: "Oblivion Ceremony Roll", ingredients: "Target’s hair/clothing, clay, salt, grave dirt, caster’s vitae, iron needle", level: 5 },
    { name: "The Cry That Slays the Light", summary: "Blanket an area in supernatural darkness, allowing vampires to act by day.", rouseChecks: 1, requiredTime: "1 hour before sunrise", dicePool: "Oblivion Ceremony Roll", ingredients: "Intense Null resonance vessel, light-proofed chamber, obsidian/meteoric knife, caster’s vitae", level: 5 },
    // Level 2
    { name: "Repulsion Of Corposes", summary: "Glyphs repel undead, revealing caster's name if scrutinized (Carrion Banquet or Where the Veil Thins)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 2 },
    { name: "Birth The Barghest", summary: "Fuse corpses into an undead Barghest guardian (Soul Swap)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 2 },
    { name: "Ashen Relic", summary: "Preserve Kindred body parts as relics (Ashes to Ashes or Oblivion Sight)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 2 },
    { name: "Awaken the Homuncular Servant", summary: "Create a small programmable minion (Where the Veil Thins)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 2 },
    { name: "Blinding the Alloy Eye", summary: "Cameras cannot perceive or detect you (Shadow Cast)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 2 },
    { name: "Compel Spirit", summary: "Force a spirit to obey (Where the Veil Thins)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 2 },
    { name: "Maw of Ahriman", summary: "Fill an orifice with Oblivion", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 2 },
    // Level 3
    { name: "Beckon The Broken Soul", summary: "Summons tormented souls from Oblivion (Rapacious Communion or Daimonion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Craft Flesh Golem", summary: "Create a Frankenstein-esque flesh golem from three corpses (Aura of Decay or Necrotic Plague)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Create Corpse Suit", summary: "Create sentient flesh clothes (Shadow Perspective or Touch of Oblivion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Hell-Bound Heart", summary: "Sacrifices 9 mortals for permanent demonic transformations (Daimonion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Fortezza Sindonica", summary: "Make a barrier wraiths cannot pass (Where the Veil Thins, Hecata)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Harrowhaunt", summary: "Haunt a building to repel mortals (Aura of Decay)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Host Spirit", summary: "Invite a spirit into your body for power (Aura of Decay)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Knit the Veil", summary: "Make the Shroud impenetrable (Where the Veil Thins)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Name of the Father", summary: "Paralyze someone with despair (Shadow Perspective, Shalimite)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "The Shallow Slumber", summary: "Reduce torpor duration (Passion Feast or Touch of Oblivion)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Shambling Hordes", summary: "Create obedient, long-lasting zombies (Aura of Decay)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    { name: "Wisdom of the Dead", summary: "Borrow skills from a corpse (Oblivion Sight or Where the Veil Thins)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 3 },
    // Level 4
    { name: "Befoul Vessel", summary: "Corrupt a mortal's blood so it increases Hunger when tasted (Necrotic Touch)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 4 },
    { name: "Profane Edge of Depravity", summary: "Profane weapons amplify damage but reflect on creator (Pareidolian or Arms of Ahriman)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 4 },
    { name: "Confine to Malkav's Bastile", summary: "Imprisons demons within a Malkavian's shattered psyche (Soul Swap or Where the Shroud Thins)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 4 },
    { name: "Bind the Spirit", summary: "Anchor a ghost to haunt a person or location (Necrotic Plague)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 4 },
    { name: "Death Rattle", summary: "Cause someone to relive a particular wraith's death (Fatal Precognition)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 4 },
    { name: "Bind to Mortal Form", summary: "Extend a human's lifespan (Necrotic Plague or Skuld Fulfilled)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 4 },
    { name: "Split the Veil", summary: "Tear open the Shroud (Necrotic Plague)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 4 },
    // Level 5
    { name: "Ex Nihilo", summary: "Cross into the Shadowlands (Withering Spirit, Split the Veil?)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 5 },
    { name: "The Bell of Gomorrah", summary: "Summon nightmares corrupting vampires and mortals (Nightmare Theatre)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 5 },
    { name: "Repulsion of The Fallen", summary: "Glyphs repel demons punishing infernalists with holy backlash (Where the Veil Thins or Hell's Yawning Maw)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 5 },
    { name: "Gravespawn Sovereign", summary: "Animates stone guardians through corpse-fed oblivion (Crown of The Lost Clan (Auspex 1))", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 5 },
    { name: "Lazarene Blessing", summary: "Put a wraith into a physical body (Skuld Fulfilled)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 5 },
    { name: "Gift of True Life", summary: "Transfer lifespan from one mortal to another (Necrotic Plague or Passion Feast)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 5 },
    { name: "Pit of Contemplation", summary: "Create a doorway into Oblivion itself (Tenebrous Avatar, Shalimite)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Oblivion", ingredients: "", level: 5 }
]

export const Rituals: Ritual[] = [
    { name: "Astromancy", summary: "Learn a subject's skills and goals", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Catoptromancy", summary: "Enchant a pair of mirrors to show what is reflected in their opposite, useful for communication and information gathering. Mirrors transmit only visuals, not sound, and cannot pierce supernatural concealment. If either mirror is damaged, the enchantment breaks.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "A pair of mirrors or mirrored objects, powdered crystal, the caster’s vitae", level: 1 },
    { name: "Thief's Pawprints", summary: "Anoint an object so that anyone but the caster who touches it is marked with stains only visible to the caster. Stains last until the ritual is performed on another object.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Brightly-colored paint or ink, the caster’s vitae", level: 1 },
    { name: "Aapilu Awakening", summary: "Summon and bind an aapilu, Can be casted at higher dots for stronger summons", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Beelzebeatit", summary: "Rid an area of animals", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Bind the Accusing Tongue", summary: "Prevent someone from speaking ill of you", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Blood Apocrypha", summary: "Hide a message in a vessel's blood", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Blood to Water", summary: "Turn spilled blood to pure water", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Blood Walk", summary: "Learn a subject's name, gen, and sire", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Bloody Message", summary: "Show a message to a type of person", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Clinging of the Insect", summary: "Walk on walls and ceilings", rouseChecks: 1, requiredTime: "5min", dicePool: "Intelligence + Blood Sorcery", ingredients: "Living spider, your own blood", level: 1 },
    { name: "Coax the Garden", summary: "Awaken plants to hinder enemies (Bahari)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Craft Bloodstone", summary: "Create a magical tracking beacon", rouseChecks: 1, requiredTime: "3 nights", dicePool: "Intelligence + Blood Sorcery", ingredients: "Small magnet, your blood", level: 1 },
    { name: "Douse the Fear", summary: "Suppress natural fear of fire (Cainite)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Enrich the Blood", summary: "Make a vessel more nourishing", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Herd Ward (Minor)", summary: "Ward a person against others' feeding", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Letter Ward", summary: "Ward a letter so only the intended receipient can read it", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Revealing the Crimson Trail", summary: "Detect spilled blood, no matter how old", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Seal the Brand", summary: "Make a permanent mark on the body", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Crimson Woad", summary: "Inbue spirits to protect from critical injuries", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Sense the Touchstone", summary: "Track someone's touchstone", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Bottle Catch", summary: "Make a trap from a dicipline", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Curse of the Walking Body", summary: "Make a victim appear dead", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Ward Against Destruction", summary: "Makes an object more durable", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Ward Against Theft", summary: "Harms those attempting to steal", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Shepherd's Vigil", summary: "Find the location of all herd members", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 },
    { name: "Wake with Evening's Freshness", summary: "Wake up if disturbed during the day", rouseChecks: 1, requiredTime: "5min", dicePool: "Intelligence + Blood Sorcery", ingredients: "Burnt bones of a rooster", level: 1 },
    { name: "Ward against Ghouls", summary: "Create a ward against ghouls", rouseChecks: 1, requiredTime: "5min", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 1 }
,
// Level 2 Rituals
{ name: "As Fog On Water", summary: "Walk on water", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Crone's Hand", summary: "Decay plant-based materials by touch for hours. Cannot affect materials protected by Cainite Ward or Warding Circle.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "A pine cone, the caster’s vitae", level: 2 },
{ name: "Mask of Eros", summary: "Supernaturally increase allure for seduction or manipulation of mortals. Grants bonus to Social Pools for seduction/persuasion. Does not work on Kindred.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Fresh Sanguine-humored blood, a sprig of dried mint", level: 2 },
{ name: "Seal the Gate of Blood", summary: "Enchant an amulet to protect a person from being fed upon. Blood drawn by a vampire transmutes to sand unless taken by clinical means. Amulet is fragile and breaks if damaged.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Sand from a shoreline, natron, a piece of the recipient, the caster’s vitae", level: 2 },
{ name: "The Alamut's Tithe", summary: "Enchant a blade and container so that blood drawn by the blade from a willing Kindred is instantly transported to the container, regardless of distance. Blood cannot be used for Disciplines or Blood Bonds.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "A sealable container, a bladed implement, a willing Kindred participant", level: 2 },
{ name: "Bloody Chrism", summary: "Reshape someone into Michael (Unknown)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Calix Secretus", summary: "Imbue blood into an object", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Calling the Aura's Remnants", summary: "Interrogate the memories of the dead (Chicago)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Communicate with Kindred Sire", summary: "Speak telepathically to your Sire", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Craftmaster", summary: "Steal someone's skills and specialties", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Depths of Nightmare", summary: "Inflict willpower-damaging nightmares", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Elemental Grasp", summary: "Command elements to impede (Koldunic Sorcery)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Enhance Dyscrasia", summary: "Stabilize a Dyscrasia to let it be tapped repeatedly (Penny Dining Club)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Eyes of Babel", summary: "Eat someone's eyes and tongue to know all languages they know", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Illuminate the Trail of Prey", summary: "See a target's path", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Curse of The Chrone's Pride", summary: "Curse someone to be hideous and repellant", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Baptise The Unworthy", summary: "Turn the blood of a sinner into power", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Le Sang de l'Amour", summary: "Lovers know each others' locations", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Soporific Touch", summary: "Intoxicate a target to lower inhibitions", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Shroud of Silence", summary: "Prevent sound from leaving a room", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Silentia Mortis", summary: "Talisman's holder makes no sound", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Dark Heart of The Wood", summary: "Take ambient energy to make a fake spirit", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Tiamat Glistens", summary: "Attune to a place of power", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Truth of Blood", summary: "Learn whether statements are truthful", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Unseen Underground", summary: "Become invisible while underground", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Viscera Garden", summary: "Grow plants from corpses", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Ward against Spirits", summary: "Create a ward against intangible things", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Warding Circle against Ghouls", summary: "Create a warding circle against ghouls", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },
{ name: "Web of Hunger", summary: "Steal blood from everyone underground (Special artifact)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 2 },

// Level 3 Rituals
{ name: "Bladed Hands", summary: "Turn your hands into knives (Milwaukee)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Black Box", summary: "Hide information in an electronic device, accessible only via the caster’s vitae. Information is undetectable by conventional means. Devices act erratically for mundane tasks.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "A data-capable electronic device, an engraving tool, the caster’s vitae", level: 3 },
{ name: "Splinter Servant", summary: "Imbue a stake with animation to seek and stake a Kindred. The stake uses the caster’s Resolve + Blood Sorcery to attempt staking. Can be re-enchanted if recovered.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Blood Sorcery", ingredients: "A yew stake, crimson wax, nightshade twine, the caster’s vitae", level: 3 },
{ name: "Typhon's Loving Caress", summary: "Imbue a thistle spine with the power to feed by touch, slaking Hunger and causing euphoria. Victim must resist to notice the effect.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Dexterity + Blood Sorcery", ingredients: "A thistle spine, frankincense or musk, red wine, bull or predator blood, the caster’s vitae", level: 3 },
{ name: "Blood Sigil", summary: "Store a message in a vampire's body", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Bloodless Feast", summary: "Sanctify blood and its drinkers (Bloodless)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Communal Vigor", summary: "Increase pack's BP to match priest's (Sabbat)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Dagon's Call", summary: "Rupture blood vessels remotely", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Grim Chrysalis", summary: "Entomb yourself to heal damage", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Deflection of the Wooden Doom", summary: "Prevent one staking attempt", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Elemental Shelter", summary: "Meld into an element (= Earth Meld) (Koldunic Sorcery)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Essence of Air", summary: "Fly for a limited time", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Eyes of the Past", summary: "See a scene from the past (Chicago)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Ward against Aapilum", summary: "Ward against Baali and aapilum", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Fire in the Blood", summary: "Torture someone by heating their blood (Cainite)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Firewalker", summary: "Protect targets against fire", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Galvanic Ruination", summary: "Destroy electrical equipment in an area", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Gentle Mind", summary: "Prevent another vampire from frenzying (Chicago)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Haunted House", summary: "Make people think a building is haunted (Milwaukee)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Herd Ward (Major)", summary: "Ward a herd against others' feeding", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Illusion of Peaceful Death", summary: "Conceal the cause of death, as long as it's not exsanguination (Chicago)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Illusion of Perfection", summary: "= Mask of 1000 Faces (Obfuscate 3) (Milwaukee)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Nepenthe", summary: "Remove Stains, risk addiction", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "One with the Blade", summary: "Make a weapon impervious to harm", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Sanguine Watcher", summary: "Create an animal spy (Milwaukee)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Seeing with the Sky's Eyes", summary: "Learn about a target's surroundings", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Seeking Tiamat", summary: "Locate furcae", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Sleep of Judas", summary: "Put a vampire into a drugged sleep (Special blood tree)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Soul of the Hemonculus", summary: "Create a living servant", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Stone of the True Form", summary: "End illusions and shapeshifting", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Trespass", summary: "Enter any structure", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "The Unseen Change", summary: "Lupines entering an area are forced into wolf form (Chicago)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Viral Haruspex", summary: "Learn facts from cold carriers (Plague Oracle)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Death Pact", summary: "Deflect harm to a blood bound follower", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Ward against Lupines", summary: "Create a ward against werewolves", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },
{ name: "Warding Circle against Spirits", summary: "Create a warding circle against intangible things", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 3 },

// Level 4 Rituals
{ name: "Compel the Inanimate", summary: "Give an object a single command", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Mark of Jabal", summary: "Brand a recipient with a mark that appears under specific circumstances, granting bonuses or penalties to social pools. Can be removed by the caster at a cost.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Tattoo ink or henna, rock salt, powdered plant thorns, a sharp-tipped object, the caster’s vitae and the recipient’s vitae", level: 4 },
{ name: "Impaler's Blessing", summary: "Enchant a weapon to paralyze Kindred if it pierces the heart. Only one weapon can be enchanted at a time.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Vervain flowers, iron horseshoe or padlock, purified water, a piercing weapon", level: 4 },
{ name: "Will-o'-the-Wick", summary: "Create a candle that reveals anything concealed by supernatural means in its light. Vampires and wraiths must resist or be revealed. Candle burns for minutes equal to Blood Potency + successes.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence or Dexterity + Craft (Diff 3)", ingredients: "Grave dirt, beeswax, animal brains, crushed peat, cotton wick soaked in vitae", level: 4 },
{ name: "Directing Ahriman's Lance", summary: "Create a divining talisman from a swallowed item belonging to a target. Lowers difficulty to locate the target and buzzes when they are near.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "A ritual dagger, an image or item belonging to the target", level: 4 },
{ name: "Warding Circle against Aapilum", summary: "Ward against Baali and aapilum", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Balm of Bathory", summary: "Make someone beautiful, at a cost", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Defense of the Sacred Haven", summary: "Protect an area against sunlight", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Egregore Consultation", summary: "Borrow skills from flu carriers (Plague Oracle)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Eyes of the Nighthawk", summary: "See through a raptor's eyes", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Feast of Ashes", summary: "A vampire can only feed on ashes", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Guided Memory", summary: "Access a donor's memories and powers", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Incorporeal Passage", summary: "Become insubstantial", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Innocence of the Child's Heart", summary: "Conceal diablerie and vampirism from Scry the Soul (Auspex 3) (Nicolai's secret)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Innocence's Veil", summary: "Conceal diablerie", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Invisible Chains of Binding", summary: "Keep a target from moving", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Land's Sustenance", summary: "Feed on suffering in an area", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Protean Curse", summary: "Turn someone into a bat (Chicago)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Rending the Sweet Earth", summary: "Unearth a vampire using Earth Meld (Protean 3) (Chicago)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Doors To Everywhere", summary: "Connect any door of a haven to another", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Notatum Unum", summary: "Create possesed Ghouls", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Riding the Earth's Veins", summary: "Teleport; no control of your destination", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Ward against Cainites", summary: "Create a ward against vampires", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },
{ name: "Warding Circle against Lupines", summary: "Create a warding circle against werewolves", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 4 },

// Level 5 Rituals
{ name: "Antebrachia Ignium", summary: "Ignite your arms without taking damage (Cainite)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Libertas", summary: "Sever a Blood Bond between individuals, risking mental damage. Difficulty increases per additional individual. On success, the bond breaks; on failure, targets suffer Aggravated Willpower damage. Kindred reduced to 0 Willpower enter torpor; mortals may suffer strokes or Stains.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Cauldron, blood from domitor and bound, iron chain with Phoenician cuneiform, caster’s vitae", level: 5 },
{ name: "Hook of Ereshkigal", summary: "Impale and suspend the subject to resolve Stains on Humanity. Each hour, make Resolve + Blood Sorcery vs. unfilled Humanity boxes to resolve a Stain. Each hour inflicts Aggravated Damage. If Health is filled, subject meets Final Death.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Resolve + Blood Sorcery", ingredients: "Large metal hook, rope or chain, blood of a mortal under entheogens", level: 5 },
{ name: "Obscene Genesis", summary: "Create a perfect clone of a vampire, which awakens as a rabid Wight. Clone shares all physical qualities and Disciplines, but has only 1 in Social and Mental Attributes. Gestation time is 30 days minus margin of success. Special: Scry the Soul reveals the clone as an abomination; Diablerie crumbles it to dust.", rouseChecks: 1, requiredTime: "30 days minus margin of success", dicePool: "Intelligence + Blood Sorcery", ingredients: "Sealed chamber, 1lb vampire flesh, human amniotic fluid, Mandragora extract, embalming chemicals", level: 5 },
{ name: "Dark Mother's Vengeance", summary: "Strip a vampire of Discipline dots for one month by anointing objects associated with them. If caster reaches Hunger 5 during the ritual, they enter torpor but the curse still takes effect.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "Athame knife, pewter chalice, up to five objects from the victim, the caster’s vitae", level: 5 },
{ name: "Atrocity's Release", summary: "Undo the effects of diablerie", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Dominion", summary: "Prevent others from using disciplines in your domain", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Eden's Bounty", summary: "Drain blood from a one-mile radius (Bahari)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Elemental Attack", summary: "Attack via elements, doing agg (Koldunic Sorcery)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Escape to True Sanctuary", summary: "Set up two circles, allowing you to teleport from one to the other", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Fisher King", summary: "Learn about an area", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Heart of Stone", summary: "Remove emotions and prevent staking", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Reawakened Vigor", summary: "Restore Blood Potency after torpor", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Shaft of Belated Dissolution", summary: "Enchant a stake to cause Final Death, even if it misses the heart", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Simulacrum Gate", summary: "Teleport a large number of vampires", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Transferring the Soul", summary: "Let a Diablerized vampire take control (Oblivion 5)", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Baal's Pithos", summary: "Make a construct that makes deals of power", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
{ name: "Ward Against Oblivion", summary: "Protect against Oblivion creatures", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 },
    { name: "Warding Circle against Cainites", summary: "Create a warding circle against vampires", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery", ingredients: "", level: 5 }
,
// Level 4 Rituals (Added)
{ name: "Warding Circle Against Magic", summary: "Prevents all Blood Sorcery, Oblivion, Rituals, and Ceremonies within the circle. Anyone attempting to use such powers against someone inside must contest Willpower vs. the caster's Intelligence + Blood Sorcery. Also defends against non-vampiric magic.", rouseChecks: 1, requiredTime: "1 hour", dicePool: "Intelligence + Blood Sorcery vs. Willpower (see V5 Corebook pg. 275)", ingredients: "Circle inscribed with the same blade used to draw the caster's vitae.", level: 4 }
];

// Assamite Sorcery Rituals
export const assamiteSorceryRitualSchema = z.object({
    name: z.string(),
    summary: z.string(),
    rouseChecks: z.number().min(0).int(),
    requiredTime: z.string(),
    dicePool: z.string(),
    ingredients: z.string(),
    level: z.number().min(1).int(),
})
export type AssamiteSorceryRitual = z.infer<typeof assamiteSorceryRitualSchema>

export const AssamiteSorceryRituals: AssamiteSorceryRitual[] = [
    // PATH OF POISONS - Level 1
    { name: "Ishtar's Touch - Path of Poisons", summary: "Target feels intoxicated - suffers 1 dice penalty to all rolls for 12 hours (Mortals and Enhanced Mortals only)", rouseChecks: 0, requiredTime: "Instant", dicePool: "None", ingredients: "Entire bottle of strong liquor consumed by user", level: 1 },
    { name: "Alamut's Blessing - Path of Poisons", summary: "Inflicts Poisoned condition causing fever, sweating, and potential death through heatstroke (Mortals and Enhanced Mortals only)", rouseChecks: 0, requiredTime: "Instant", dicePool: "None", ingredients: "Small vial of sand consumed by user", level: 1 },
    { name: "Scorpion's Sting - Path of Poisons", summary: "Paralyzes target - unable to move or talk (12h Mortals, 6h Enhanced Mortals, 1h Kindred). Cured by vampiric bite/saliva", rouseChecks: 0, requiredTime: "Instant", dicePool: "None", ingredients: "Scorpion or arachnid consumed by user", level: 1 },

    // PATH OF POISONS - Level 2  
    { name: "Taste Of Bliss - Path of Poisons", summary: "Target feels euphoric - Mortals/Enhanced Mortals nap peacefully, Kindred avoid Frenzy and can't use Willpower to re-roll", rouseChecks: 0, requiredTime: "Instant", dicePool: "Quietus + Intelligence (2)", ingredients: "Milk of Poppy or suitable substitute", level: 2 },
    { name: "Baal's Kiss - Path of Poisons", summary: "Like Alamut's Blessing but affects Kindred too - cannot cause Aggravated damage to Kindred, prevents wound healing via blood", rouseChecks: 0, requiredTime: "Instant", dicePool: "Quietus + Intelligence (3)", ingredients: "Sand mixed with human blood", level: 2 },
    { name: "Deny The Flock - Path of Poisons", summary: "Infectious flu-like symptoms spread among mortals - makes them tired, lethargic, and blood tastes sour to Kindred for 1 week", rouseChecks: 0, requiredTime: "Instant", dicePool: "Quietus + Intelligence (2)", ingredients: "Blood from currently ill mortal", level: 2 },

    // PATH OF POISONS - Level 3
    { name: "Blood Clot - Path of Poisons", summary: "Thickens blood - Mortals/Enhanced Mortals take 1 Aggravated damage, Kindred cannot use Rouse Check powers. Cured by Thin Blood vitae", rouseChecks: 0, requiredTime: "Instant", dicePool: "Quietus + Intelligence (3)", ingredients: "Vial of snake venom", level: 3 },
    { name: "Grip Of Humility - Path of Poisons", summary: "Target loses all Fortitude benefits and cannot halve damage (Kindred only). Cured by draining a mortal dry", rouseChecks: 0, requiredTime: "Instant", dicePool: "Quietus + Intelligence (3)", ingredients: "Blood from holy man (priest, rabbi, etc.)", level: 3 },

    // PATH OF POISONS - Level 4
    { name: "Thin The Blood - Path of Poisons", summary: "Target cannot use Rouse Check abilities and all Upgrades cease function for 1 night. Cured by drinking from lower generation or draining Kindred", rouseChecks: 0, requiredTime: "Instant", dicePool: "Quietus + Intelligence (4)", ingredients: "Last vessel must be Thin Blood", level: 4 },

    // PATH OF POISONS - Level 5
    { name: "Blood Of Destruction - Path of Poisons", summary: "Target takes 1 Aggravated damage per Blood Potency dot, plus 1 more per Rouse Check used. Cured by draining same-clan Kindred", rouseChecks: 0, requiredTime: "Instant", dicePool: "Quietus + Intelligence (5)", ingredients: "Blood from same clan as target", level: 5 },

    // PATH OF CURSES - Level 1
    { name: "Dagon's Call - Path of Curses", summary: "Target feels compelled to visit specific location within one week or succumbs to urge", rouseChecks: 0, requiredTime: "Instant", dicePool: "None", ingredients: "Picture of location submerged in victim's blood", level: 1 },
    { name: "Alamut's Warning - Path of Curses", summary: "Send item with Quietus symbol - when opened, target experiences visions of their death and loses Willpower recovery for one night", rouseChecks: 0, requiredTime: "Instant", dicePool: "None", ingredients: "Drop of victim's blood on item, mortal courier", level: 1 },
    { name: "Song Of Distant Vitae - Path of Curses", summary: "Ritually boil victim's blood - sends telepathic death vision to all Kindred within 100km as public death mark", rouseChecks: 0, requiredTime: "Instant", dicePool: "None", ingredients: "Victim's blood ritually boiled away", level: 1 },

    // PATH OF CURSES - Level 2
    { name: "Erosion - Path of Curses", summary: "Lead item planted near target (10m/30ft) causes 1 dice penalty to all rolls until removed", rouseChecks: 0, requiredTime: "Instant", dicePool: "Quietus + Intelligence (2)", ingredients: "Lead piece melted and cooled in water and victim's blood", level: 2 },
    { name: "Forbidden Masquerade - Path of Curses", summary: "Mortal target fears fire, burns in sunlight sensation, craves blood for 1 week (mental effects only). Cured by near-death experience", rouseChecks: 0, requiredTime: "Instant", dicePool: "Quietus + Intelligence (2)", ingredients: "Victim's vitae", level: 2 },
    { name: "Marks Of Humanity - Path of Curses", summary: "Target's Humanity temporarily doubles (max 10) for 1 night, causing potential remorse, insanity, or suicide", rouseChecks: 0, requiredTime: "Instant", dicePool: "Quietus + Intelligence (2)", ingredients: "Blood from morally upstanding individual mixed with victim's blood", level: 2 },

    // PATH OF CURSES - Level 3
    { name: "Blood Sweat - Path of Curses", summary: "Target sweats blood for 1 week - creates Masquerade concerns and makes them smell sweet to Kindred. Cured by drinking from Kindred 2+ generations lower", rouseChecks: 0, requiredTime: "Instant", dicePool: "Quietus + Intelligence (3)", ingredients: "Victim's blood boiled in user's hand (causes 1 Aggravated damage to user)", level: 3 },
    { name: "Weaken The Ancient Bond - Path of Curses", summary: "Breaks target's blood bonds, ghoul loyalty, and Dominate/Presence effects for 3 days", rouseChecks: 0, requiredTime: "Instant", dicePool: "Quietus + Intelligence (3)", ingredients: "Victim's blood mixed with Thin Blood", level: 3 },

    // PATH OF CURSES - Level 4
    { name: "Dam The Hearts River - Path of Curses", summary: "Every time target uses Disciplines (except upgrades) they gain Humanity stain for 1 week (Kindred only)", rouseChecks: 0, requiredTime: "Instant", dicePool: "Quietus + Intelligence (4)", ingredients: "Victim's blood mixed with blood from serious sinner (death row inmate, serial killer)", level: 4 },

    // PATH OF CURSES - Level 5
    { name: "Poison The Well Of Life - Path of Curses", summary: "Target can only feed on other Kindred for 1 week (Kindred only)", rouseChecks: 0, requiredTime: "Instant", dicePool: "Quietus + Intelligence (5)", ingredients: "User must be at Hunger 4 when performing ritual", level: 5 },
];

// Spiritus Rituals: identical to Rituals, but for Spiritus
export const spiritusRitualSchema = z.object({
    name: z.string(),
    summary: z.string(),
    rouseChecks: z.number().min(0).int(),
    requiredTime: z.string(),
    dicePool: z.string(),
    ingredients: z.string(),
    level: z.number().min(1).int(),
})
export type SpirituRitual = z.infer<typeof spiritusRitualSchema>

export const SpirituRituals: SpirituRitual[] = [
    // Level 1
    { name: "Mother's Blood", summary: "Create potion to aid pregnant mothers and infants - dramatically increases delivery success and infant survival", rouseChecks: 0, requiredTime: "1 Scene", dicePool: "None", ingredients: "User's blood, milk, honey, herbs", level: 1 },
    
    // Level 2  
    { name: "Gaia's Vigil", summary: "Mark another Spiritus user with spiritual rune - anyone feeding from them inherits trackable scent", rouseChecks: 1, requiredTime: "1 Scene", dicePool: "Spiritus + Humanity", ingredients: "Spiritual rune materials", level: 2 },
    
    // Level 3
    { name: "Aegis Of Innocence", summary: "Create talisman making children under 16 invisible to wearer during Frenzy", rouseChecks: 1, requiredTime: "1 Scene", dicePool: "Spiritus + Humanity", ingredients: "Talisman materials", level: 3 },
    
    // Level 4
    { name: "Return The Pup", summary: "Identify Garou/Kinfolk and discover their mother, Tribe, and Sept through feeding", rouseChecks: 1, requiredTime: "1 Scene", dicePool: "Spiritus + Humanity", ingredients: "None (requires feeding)", level: 4 },
    
    // Level 5
    { name: "Guiding Tears", summary: "Create potion causing bloody tears that mark Umbra path for navigation back to origin point", rouseChecks: 1, requiredTime: "1 Scene", dicePool: "Spiritus + Humanity", ingredients: "Potion materials", level: 5 },
];

// Serpentis Rituals: identical to Rituals, but for Serpentis
export const serpentisRitualSchema = z.object({
    name: z.string(),
    summary: z.string(),
    rouseChecks: z.number().min(0).int(),
    requiredTime: z.string(),
    dicePool: z.string(),
    ingredients: z.string(),
    level: z.number().min(1).int(),
})
export type SerpentisRitual = z.infer<typeof serpentisRitualSchema>

export const SerpentisRituals: SerpentisRitual[] = [
    // Level 1
    { name: "Ophidian Infestation", summary: "Infest building with serpents and lizards for one year by killing local specimen and hanging remains", rouseChecks: 0, requiredTime: "1 Scene", dicePool: "None", ingredients: "Living local serpent/lizard specimen, user's blood", level: 1 },
    { name: "Godhead", summary: "Strengthen hold over followers - they gain +2 dice against manipulation and mental powers", rouseChecks: 0, requiredTime: "1 Scene", dicePool: "None", ingredients: "Ornate deity headgear", level: 1 },
    { name: "Cheat The Scales Of Anubis", summary: "Mask signs of diablerie for one night using pure-hearted human blood", rouseChecks: 0, requiredTime: "1 Scene", dicePool: "None", ingredients: "Blood from pure-hearted human, user's vitae", level: 1 },
    
    // Level 2
    { name: "Apep's Fury", summary: "Curse target to be sought and attacked by snakes within 100 meters", rouseChecks: 1, requiredTime: "Instant", dicePool: "Serpentis + Resolve", ingredients: "User's blood smeared on target", level: 2 },
    { name: "Set's Curse", summary: "Curse area to increase crime and substance abuse, gain +2 Charisma dice vs local mortals", rouseChecks: 1, requiredTime: "1 Scene", dicePool: "Serpentis + Resolve", ingredients: "Blood from local animal, criminal, and priest", level: 2 },
    { name: "Pact With Set", summary: "Break target's blood bonds and make them vulnerable to mental manipulation", rouseChecks: 1, requiredTime: "1 Scene", dicePool: "Serpentis + Resolve", ingredients: "User's vitae, personal object from target's master", level: 2 },
    
    // Level 3
    { name: "Heart Of Darkness", summary: "Remove heart from body, cannot be staked but heart becomes vulnerable point (lose 1 Humanity)", rouseChecks: 1, requiredTime: "1 Scene", dicePool: "Serpentis + Resolve", ingredients: "Suitable container with death symbolism", level: 3 },
    { name: "Mark Of Exile", summary: "Curse target with Nosferatu bane - appear disgusting to all for one week", rouseChecks: 1, requiredTime: "1 Scene", dicePool: "Serpentis + Resolve", ingredients: "User's vitae, ancient curse symbols", level: 3 },
    
    // Level 4
    { name: "Mummify", summary: "Mummify target - mortals die, enhanced mortals/Kindred enter special torpor", rouseChecks: 0, requiredTime: "1 Session", dicePool: "Serpentis + Resolve", ingredients: "Bandages, blood to soak bandages", level: 4 },
    
    // Level 5
    { name: "Mother/Father Of Monsters", summary: "Transform broken individual into Typhonic monster under your command (requires Humanity 5 or lower)", rouseChecks: 2, requiredTime: "1 Scene", dicePool: "Serpentis + Resolve", ingredients: "Broken individual, large portion of user's blood", level: 5 },
];

export const powerIsRitual = (p: Power | Ritual | Ceremony | SpirituRitual | SerpentisRitual | AssamiteSorceryRitual): p is Ritual | Ceremony | SpirituRitual | SerpentisRitual | AssamiteSorceryRitual => {
    return (p as Power | Ritual | Ceremony | SpirituRitual | SerpentisRitual | AssamiteSorceryRitual)["ingredients" as keyof typeof p] !== undefined;
}