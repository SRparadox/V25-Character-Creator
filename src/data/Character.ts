
// Returns a new empty Character object

export const getEmptyCharacter = (): Character => ({
    playerName: "",
    chronicleName: "",
    name: "",
    description: "",
    notes: "",
    sire: "",
    clan: "",
    selectedBane: "",
    sect: "",
    religion: "",
    predatorType: { name: "", pickedDiscipline: "", pickedSpecialties: [], pickedMeritsAndFlaws: [] },
    role: undefined,
    touchstones: [],
    ambition: "",
    desire: "",
    attributes: {
        strength: 1,
        dexterity: 1,
        stamina: 1,
        charisma: 1,
        manipulation: 1,
        composure: 1,
        intelligence: 1,
        wits: 1,
        resolve: 1,
    },
    skills: {
        athletics: 0,
        brawl: 0,
        craft: 0,
        drive: 0,
        firearms: 0,
        melee: 0,
        larceny: 0,
        stealth: 0,
        survival: 0,
        "animal ken": 0,
        etiquette: 0,
        insight: 0,
        intimidation: 0,
        leadership: 0,
        performance: 0,
        persuasion: 0,
        streetwise: 0,
        subterfuge: 0,
        academics: 0,
        awareness: 0,
        finance: 0,
        investigation: 0,
        medicine: 0,
        occult: 0,
        politics: 0,
        science: 0,
        technology: 0,
    },
    skillSpecialties: [],
    availableDisciplineNames: [],
    disciplines: [],
    rituals: [],
    ceremonies: [],
    bloodPotency: 0,
    generation: 0,
    maxHealth: 0,
    willpower: 0,
    experience: 0,
    humanity: 0,
    merits: [],
    flaws: [],
});
import { z } from "zod"
import { Power, powerSchema, ritualSchema, ceremonySchema } from "./Disciplines"
import { specialtySchema } from "./Specialties"
import { skillsSchema } from "./Skills"
import { attributesSchema } from "./Attributes"
import { clanNameSchema, disciplineNameSchema, predatorTypeNameSchema, roleNameSchema } from "./NameSchemas"

export const religionSchema = z.union([
    z.literal("Bahari"),
    z.literal("Church of Caine"),
    z.literal("Followers of Set"),
    z.literal("Non Believer"),
    z.literal(""),
]);


// Use Sect type from SectPicker

export const meritFlawSchema = z.object({
    name: z.string(),
    level: z.number().min(1).int(),
    summary: z.string(),
    type: z.union([z.literal("merit"), z.literal("flaw"), z.literal("bargainflaw")]),
})
export type MeritFlaw = z.infer<typeof meritFlawSchema>

export const touchstoneSchema = z.object({
    name: z.string(),
    description: z.string(),
    conviction: z.string(),
})
export type Touchstone = z.infer<typeof touchstoneSchema>

export const sectSchema = z.union([
    z.literal("Camarilla"),
    z.literal("Anarch"),
    z.literal("Independent"),
    z.literal("Ashirra"),
    z.literal("Black Hand"),
    z.literal("Sabbat"),
    z.literal("TalMaheRa"),
    z.literal(""),
]);

export const characterSchema = z.object({
    playerName: z.string(),
    chronicleName: z.string(),
    name: z.string(),
    description: z.string(),
    notes: z.string(),
    sire: z.string(),
    clan: clanNameSchema,
    selectedBane: z.string(),
    sect: sectSchema, // SectPicker value
    religion: religionSchema,
    // clanDisciplines:
    predatorType: z.object({
        name: predatorTypeNameSchema,
        pickedDiscipline: disciplineNameSchema,
        pickedSpecialties: specialtySchema.array(),
        pickedMeritsAndFlaws: meritFlawSchema.array(),
    }),
    role: z.object({
        name: roleNameSchema,
        pickedDiscipline: disciplineNameSchema,
        pickedSpecialties: specialtySchema.array(),
        pickedMeritsAndFlaws: meritFlawSchema.array(),
    }).optional(),
    touchstones: touchstoneSchema.array(),
    ambition: z.string(),
    desire: z.string(),

    attributes: attributesSchema,
    skills: skillsSchema,
    skillSpecialties: specialtySchema.array(),
    availableDisciplineNames: disciplineNameSchema.array(),
    disciplines: powerSchema.array(),
    rituals: ritualSchema.array(),
    ceremonies: ceremonySchema.array(),

    bloodPotency: z.number().min(0).int(),
    generation: z.number().min(0).int(),

    maxHealth: z.number().min(0).int(),
    willpower: z.number().min(0).int(),
    experience: z.number().min(0).int(),
    humanity: z.number().min(0).int(),

    merits: meritFlawSchema.array(),
    flaws: meritFlawSchema.array(),

})


export type Character = z.infer<typeof characterSchema>;

export const containsBloodSorcery = (powers: Power[]) => powers.filter((power) => power.discipline === "blood sorcery").length > 0
