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
    humanityChange: z.number().int(),
    bloodPotencyChange: z.number().int(),
})
export type Role = z.infer<typeof roleSchema>

export const Roles: Record<RoleName, Role> = {
    "Bodyguard": {
        name: "Bodyguard",
        summary: "Protect your domitor and their interests with your life.",
        specialtyOptions: [
            { skill: "athletics", name: "Endurance" },
            { skill: "awareness", name: "Threats" },
            { skill: "brawl", name: "Protective Combat" },
            { skill: "firearms", name: "Protective Shooting" }
        ],
        disciplineOptions: [{ name: "celerity" }, { name: "fortitude" }, { name: "potence" }],
        meritsAndFlaws: [
            { name: "Retainer", level: 1, summary: "Connection to your domitor's organization" },
            { name: "Dependent", level: 2, summary: "Your domitor relies on your protection" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Spy": {
        name: "Spy",
        summary: "Gather information and secrets for your vampiric master.",
        specialtyOptions: [
            { skill: "investigation", name: "Information Gathering" },
            { skill: "stealth", name: "Surveillance" },
            { skill: "subterfuge", name: "Deception" },
            { skill: "technology", name: "Electronic Surveillance" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "obfuscate" }, { name: "dominate" }],
        meritsAndFlaws: [
            { name: "Contacts", level: 2, summary: "Information network" },
            { name: "Enemy", level: 1, summary: "Someone you've spied on" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Assassin": {
        name: "Assassin",
        summary: "Eliminate your domitor's enemies with precision and stealth.",
        specialtyOptions: [
            { skill: "firearms", name: "Assassination" },
            { skill: "melee", name: "Silent Kills" },
            { skill: "stealth", name: "Infiltration" },
            { skill: "subterfuge", name: "Cover Identity" }
        ],
        disciplineOptions: [{ name: "celerity" }, { name: "obfuscate" }, { name: "potence" }],
        meritsAndFlaws: [
            { name: "Contacts", level: 1, summary: "Criminal underworld" },
            { name: "Enemy", level: 2, summary: "Law enforcement or surviving targets" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: -1,
        bloodPotencyChange: 0,
    },
    "Socialite": {
        name: "Socialite",
        summary: "Navigate high society and social circles for your master.",
        specialtyOptions: [
            { skill: "etiquette", name: "High Society" },
            { skill: "persuasion", name: "Social Manipulation" },
            { skill: "performance", name: "Public Speaking" },
            { skill: "insight", name: "Social Dynamics" }
        ],
        disciplineOptions: [{ name: "presence" }, { name: "dominate" }, { name: "auspex" }],
        meritsAndFlaws: [
            { name: "Fame", level: 1, summary: "Social recognition" },
            { name: "Resources", level: 1, summary: "Access to wealth and luxury" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Scholar": {
        name: "Scholar",
        summary: "Research and study for your domitor's intellectual pursuits.",
        specialtyOptions: [
            { skill: "academics", name: "Research" },
            { skill: "investigation", name: "Information Analysis" },
            { skill: "occult", name: "Supernatural Knowledge" },
            { skill: "technology", name: "Digital Research" }
        ],
        disciplineOptions: [{ name: "auspex" }, { name: "blood sorcery" }, { name: "dominate" }],
        meritsAndFlaws: [
            { name: "Library", level: 2, summary: "Extensive research materials" },
            { name: "Academic Ally", level: 1, summary: "Connection to educational institutions" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Servant": {
        name: "Servant",
        summary: "Handle daily tasks and mundane affairs for your vampiric master.",
        specialtyOptions: [
            { skill: "craft", name: "Maintenance" },
            { skill: "drive", name: "Chauffeuring" },
            { skill: "etiquette", name: "Proper Service" },
            { skill: "streetwise", name: "Errands" }
        ],
        disciplineOptions: [{ name: "animalism" }, { name: "fortitude" }, { name: "obfuscate" }],
        meritsAndFlaws: [
            { name: "Haven", level: 1, summary: "Access to your domitor's property" },
            { name: "Resources", level: 1, summary: "Allowance for expenses" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: 0,
        bloodPotencyChange: 0,
    },
    "Enforcer": {
        name: "Enforcer",
        summary: "Intimidate and coerce others to follow your master's will.",
        specialtyOptions: [
            { skill: "intimidation", name: "Physical Coercion" },
            { skill: "brawl", name: "Unarmed Combat" },
            { skill: "streetwise", name: "Criminal Methods" },
            { skill: "athletics", name: "Physical Prowess" }
        ],
        disciplineOptions: [{ name: "potence" }, { name: "presence" }, { name: "fortitude" }],
        meritsAndFlaws: [
            { name: "Contacts", level: 1, summary: "Criminal connections" },
            { name: "Notoriety", level: 1, summary: "Known for violent methods" }
        ],
        selectableMeritsAndFlaws: [],
        humanityChange: -1,
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