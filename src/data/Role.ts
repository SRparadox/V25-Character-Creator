import { z } from "zod"
import { specialtySchema } from "./Specialties"
import { disciplineNameSchema, RoleName } from "./NameSchemas"

const selectableMeritsAndFlawsSchema = z.object({
    options: z.object({ name: z.string(), summary: z.string(), maxLevel: z.number() }).array(),
    totalPoints: z.number().int(),
})
export type SelectableMeritsAndFlaws = z.infer<typeof selectableMeritsAndFlawsSchema>

export const roleSchema = z.object({
    name: z.string(),
    summary: z.string(),
    specialtyOptions: specialtySchema.array(),
    disciplineOptions: z.object({ name: disciplineNameSchema }).array(),
    meritsAndFlaws: z.object({ name: z.string(), level: z.number().int(), summary: z.string() }).array(),
    selectableMeritsAndFlaws: selectableMeritsAndFlawsSchema.array(),
    skillBonuses: z.record(z.string(), z.number().int()).optional(),
    selectableSkillBonuses: z.object({
        options: z.string().array(),
        points: z.number().int(),
    }).optional(),
    humanityChange: z.number().int(),
    bloodPotencyChange: z.number().int(),
})
export type Role = z.infer<typeof roleSchema>

export const Roles: Record<RoleName, Role> = {
    "Blood Puppet": {
        name: "Blood Puppet",
        summary: "You are less a servant and more an emergency source of food, almost being more of a pet kept around because you make your master feel good.",
        specialtyOptions: [
            { skill: "insight", name: "Empathy" },
            { skill: "performance", name: "Acting" }
        ],
        disciplineOptions: [{ name: "animalism" }, { name: "fortitude" }, { name: "presence" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [],
        skillBonuses: { "medicine": 1 },
        selectableSkillBonuses: {
            options: ["athletics", "survival"],
            points: 1,
        },
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Body Double": {
        name: "Body Double",
        summary: "You were not ghouled for your skills but because you are an uncanny doppelganger for your domitor, used to maintain the Masquerade during daylight hours.",
        specialtyOptions: [
            { skill: "subterfuge", name: "Alternate Identity" },
            { skill: "larceny", name: "Forgery" }
        ],
        disciplineOptions: [{ name: "obfuscate" }, { name: "presence" }, { name: "dominate" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [],
        skillBonuses: { "performance": 1 },
        selectableSkillBonuses: {
            options: ["streetwise", "politics"],
            points: 1,
        },
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Bodyguard": {
        name: "Bodyguard",
        summary: "While most Kindred can defend themselves, those who specialize in mental abilities still rely on bodyguards. You act as a barrier between your employer and both violence and annoyances.",
        specialtyOptions: [
            { skill: "drive", name: "Chauffeur" },
            { skill: "firearms", name: "Covering Fire" }
        ],
        disciplineOptions: [{ name: "celerity" }, { name: "fortitude" }, { name: "potence" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [],
        skillBonuses: { "insight": 1, "intimidation": 1 },
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Business Manager": {
        name: "Business Manager",
        summary: "You oversee the financial holdings and maintain the ledgers for your master. You might manage a small business or supervise larger operations that have grown beyond your domitor's abilities.",
        specialtyOptions: [
            { skill: "academics", name: "Bookkeeping" },
            { skill: "leadership", name: "Office Management" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "dominate" }, { name: "presence" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [],
        skillBonuses: { "finance": 1, "investigation": 1 },
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Butler": {
        name: "Butler",
        summary: "You have the task of cleaning up after your master and seeing to various household needs. You are expected to anticipate your master's needs, often before they are spoken aloud.",
        specialtyOptions: [
            { skill: "craft", name: "Cooking" },
            { skill: "insight", name: "Desires" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "animalism" }, { name: "presence" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [],
        skillBonuses: { "etiquette": 1, "leadership": 1 },
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Cleaner": {
        name: "Cleaner",
        summary: "A ghoul employed to fix breaches of the Masquerade and 'clean up' scenes of feeding or frenzy. You sanitize sites, dispose of bodies, and remove signs of supernatural activity.",
        specialtyOptions: [
            { skill: "craft", name: "Repairs" },
            { skill: "larceny", name: "Forgery" }
        ],
        disciplineOptions: [{ name: "obfuscate" }, { name: "fortitude" }, { name: "auspex" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [],
        skillBonuses: { "awareness": 1, "investigation": 1 },
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    "Concierge": {
        name: "Concierge",
        summary: "You work as a personal assistant to your domitor, managing their appointments and scheduling. Kindred are required to go through you to speak to your master, imparting authority while forcing you to confront dangerous beings.",
        specialtyOptions: [
            { skill: "academics", name: "Notekeeping" },
            { skill: "etiquette", name: "Office" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "presence" }, { name: "dominate" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [],
        skillBonuses: { "investigation": 1, "technology": 1 },
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Day Guard": {
        name: "Day Guard",
        summary: "You are a guardian, watching over your domitor's haven during daylight hours and protecting their assets and property while ensuring the safety of their sleeping form.",
        specialtyOptions: [
            { skill: "larceny", name: "Home Security" },
            { skill: "insight", name: "Motives" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "fortitude" }, { name: "animalism" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [],
        skillBonuses: { "awareness": 1, "firearms": 1 },
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Farmer": {
        name: "Farmer",
        summary: "Your purpose is to gather blood for your master. You find victims that your domitor will find appealing and bring them to a safe location, then remove them when finished.",
        specialtyOptions: [
            { skill: "insight", name: "Empathy" },
            { skill: "performance", name: "Acting" }
        ],
        disciplineOptions: [{ name: "presence" }, { name: "dominate" }, { name: "animalism" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [],
        skillBonuses: { "medicine": 1 },
        selectableSkillBonuses: {
            options: ["athletics", "survival"],
            points: 1,
        },
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    "Hatchet Man": {
        name: "Hatchet Man",
        summary: "The enemies of the Kindred feel safe from reprisal during daylight hours. Your job is to make sure they see the error of their ways by striking at your domitor's enemies during the day.",
        specialtyOptions: [
            { skill: "melee", name: "Axes" },
            { skill: "firearms", name: "Point Blank Shots" }
        ],
        disciplineOptions: [{ name: "potence" }, { name: "celerity" }, { name: "fortitude" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [],
        skillBonuses: { "streetwise": 1, "survival": 1 },
        humanityChange: -2,
        bloodPotencyChange: 0,
    },
    "Landlord": {
        name: "Landlord",
        summary: "You provide a safe haven for your domitor. You not only look after their resting place during the day, but own it and likely consider it your home.",
        specialtyOptions: [
            { skill: "craft", name: "Property Maintenance" },
            { skill: "finance", name: "Real Estate" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "animalism" }, { name: "fortitude" }],
        meritsAndFlaws: [
            { name: "Haven", level: 2, summary: "Haven Merit with Location addon" }
        ],
        selectableMeritsAndFlaws: [],
        skillBonuses: { "craft": 1, "finance": 1 },
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Political Tool": {
        name: "Political Tool",
        summary: "You are used to further your domitor's political aims, potentially being a government official, lobbyist, or someone with the ear of someone of importance.",
        specialtyOptions: [
            { skill: "politics", name: "Government Relations" },
            { skill: "persuasion", name: "Lobbying" }
        ],
        disciplineOptions: [{ name: "dominate" }, { name: "presence" }, { name: "auspex" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [
            {
                options: [
                    { name: "Allies", summary: "Political allies and connections", maxLevel: 1 },
                    { name: "Influence", summary: "Political influence and power", maxLevel: 1 }
                ],
                totalPoints: 1,
            }
        ],
        skillBonuses: { "politics": 1 },
        selectableSkillBonuses: {
            options: ["intimidation", "persuasion"],
            points: 1,
        },
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Spy": {
        name: "Spy",
        summary: "One of the most dangerous tasks a ghoul can be assigned is espionage. You are affiliated with rival Kindred, acquiring information and secrets while risking discovery and brutal death.",
        specialtyOptions: [
            { skill: "stealth", name: "Forgettable" },
            { skill: "subterfuge", name: "Hide Motives" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "obfuscate" }, { name: "dominate" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [],
        skillBonuses: { "awareness": 1, "larceny": 1 },
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Tech Support": {
        name: "Tech Support",
        summary: "Older Kindred have difficulties adapting to the rapidly changing modern world. You were selected to manage their technological needs and answer questions about modern life.",
        specialtyOptions: [
            { skill: "academics", name: "Research" },
            { skill: "technology", name: "Network Security" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "dominate" }, { name: "obfuscate" }],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [],
        skillBonuses: { "science": 1, "technology": 1 },
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "": {
        name: "",
        summary: "",
        specialtyOptions: [],
        disciplineOptions: [],
        meritsAndFlaws: [],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
}