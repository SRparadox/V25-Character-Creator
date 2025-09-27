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
        name: "Corrosive Vitae",
        summary: "Transform blood into corrosive acid that can eat through materials",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, acid or corrosive substance",
        level: 1
    },
    {
        name: "Far Reach",
        summary: "Extend limbs to reach distant objects or attack from range",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, elastic or stretchy material",
        level: 1
    },
    {
        name: "Haze",
        summary: "Create a cloud of concealing mist to obscure vision",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, water or vapor source",
        level: 1
    },
    {
        name: "Envelop",
        summary: "Create a protective barrier around yourself against attacks",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, protective material (metal, stone, etc.)",
        level: 1
    },
    {
        name: "Chameleonskin",
        summary: "Blend into surroundings like a chameleon",
        rouseChecks: 1,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, chameleon scales or adaptive material",
        level: 1
    },

    // Level 2 Alchemy Formulas
    {
        name: "Defractionate",
        summary: "Separate into multiple forms temporarily to confuse enemies",
        rouseChecks: 2,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, mirror fragments or reflective surface",
        level: 2
    },
    {
        name: "Profane Hieros Gamos",
        summary: "Merge temporarily with another willing subject, sharing abilities",
        rouseChecks: 2,
        requiredTime: "5 minutes",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood from both subjects, bonding agent",
        level: 2
    },
    {
        name: "Awaken",
        summary: "Temporarily animate an object to perform simple tasks",
        rouseChecks: 2,
        requiredTime: "1 minute",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, the target object, animating catalyst",
        level: 2
    },
    {
        name: "Counterfeit",
        summary: "Create a duplicate of a small object with limited functionality",
        rouseChecks: 2,
        requiredTime: "10 minutes",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, the original object, replicating material",
        level: 2
    },
    {
        name: "Ghostly Visage",
        summary: "Become incorporeal for a short time to pass through objects",
        rouseChecks: 2,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, ectoplasmic substance or spirit medium",
        level: 2
    },

    // Level 3 Alchemy Formulas
    {
        name: "Crucible of Calcinatio",
        summary: "Purify and enhance blood to increase its potency",
        rouseChecks: 2,
        requiredTime: "1 hour",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, purifying agents, alchemical crucible",
        level: 3
    },
    {
        name: "Fixatio",
        summary: "Make temporary changes permanent through alchemical stabilization",
        rouseChecks: 3,
        requiredTime: "1 hour",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, stabilizing compounds, permanent medium",
        level: 3
    },
    {
        name: "Rubedo",
        summary: "Achieve temporary transcendence of thin-blood limitations, gaining true vampire powers briefly",
        rouseChecks: 3,
        requiredTime: "10 minutes",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, rare alchemical components, philosopher's stone fragment",
        level: 3
    },
    {
        name: "Athanor Corporis",
        summary: "Transform your body into a living alchemical furnace to process materials",
        rouseChecks: 3,
        requiredTime: "30 minutes",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, metallic compounds, heat source",
        level: 3
    },
    {
        name: "Mercurial Transformation",
        summary: "Transform into liquid mercury to flow through small spaces",
        rouseChecks: 3,
        requiredTime: "1 turn",
        dicePool: "Intelligence + Thin-Blood Alchemy",
        ingredients: "Blood, mercury or liquid metal, transformation catalyst",
        level: 3
    }
];

export default AlchemyFormulas;