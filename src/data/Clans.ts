import { z } from "zod"
import banuHaqimLogo from "../resources/clanIcons/BanuHaqim.webp"
import brujahLogo from "../resources/clanIcons/Brujah.webp"
import gangrelLogo from "../resources/clanIcons/Gangrel.webp"
import hecataLogo from "../resources/clanIcons/Hecata.webp"
import lasombraLogo from "../resources/clanIcons/Lasombra.webp"
import malkavianLogo from "../resources/clanIcons/Malkavian.webp"
import ministryLogo from "../resources/clanIcons/Ministry.webp"
import nosferatuLogo from "../resources/clanIcons/Nosferatu.webp"
import ravnosLogo from "../resources/clanIcons/Ravnos.webp"
import salubriLogo from "../resources/clanIcons/Salubri.webp"
import caitiffLogo from "../resources/clanIcons/logoCaitiff.png"
import thinbloodLogo from "../resources/clanIcons/logoThinblood.svg"
import toreadorLogo from "../resources/clanIcons/Toreador.webp"
import tremereLogo from "../resources/clanIcons/Tremere.webp"
import tzimisceLogo from "../resources/clanIcons/Tzimisce.webp"
import ventrueLogo from "../resources/clanIcons/Ventrue.webp"
import lamiaLogo from "../resources/clanIcons/Lamia.webp"
import nagarajaLogo from "../resources/clanIcons/Nagaraja.webp"
import daughtersofCacophonyLogo from "../resources/clanIcons/DaughtersofCacophony.webp"
import ahrimanesLogo from "../resources/clanIcons/Ahrimanes.webp"
import lhiannanLogo from "../resources/clanIcons/Lhiannan.webp"
import { ClanName, clanNameSchema, disciplineNameSchema } from "./NameSchemas"
import gargoyleLogo from "../resources/clanIcons/Gargoyles.webp"
import kiasydLogo from "../resources/clanIcons/Kiasyd.webp"
import baaliLogo from "../resources/clanIcons/Baali.webp"

export const clanSchema = z.object({
    name: clanNameSchema,
    description: z.string(),
    logo: z.string(),
    banes: z.array(z.string()),
    compulsion: z.string(),
    nativeDisciplines: disciplineNameSchema.array(),
})
export type Clan = z.infer<typeof clanSchema>
export const clanKeySchema = clanSchema.keyof()
export type ClanKey = z.infer<typeof clanKeySchema>

export const clans: Record<ClanName, Clan> = {
    Brujah: {
        name: "Brujah",
        description: "Rebels who always fight against the power, easy to anger",
        logo: brujahLogo,
    banes: [
        "Violent Temper: All difficulties to resist Frenzy are increased by 2 (max of 10).",
        "Violence - When a messy critical occurs as the result of any Skill test outside of combat, a Brujah vampire causes damage to the subject of their interaction equal to their Bane Severity, in addition to any other result of the Hunger dice. The type of damage is dependent on the situation either physical or mental. The damage is Aggravated unless the player spends a point of Willpower to turn it into Superficial."
    ],
        compulsion:
            "Rebellion: Rebel against orders or expectations of an authority or change somebody's mind (by force if necessary). Until then, receive two-dice penalty on all rolls.",
        nativeDisciplines: ["celerity", "potence", "presence"],
    },
    Gangrel: {
        name: "Gangrel",
        description: "Beastlike and close to nature",
        logo: gangrelLogo,
    banes: [
        "Bestial Features: In frenzy, gain one or more animal features (physical trait, smell, behavior..). Lasts for one more night after.",
        "Survival Instincts - Subtract dice equal to the Bane Severity in any roll to resist fear Frenzy. The pool cannot be below one die."
    ],
        compulsion:
            "Feral Impulses: For one scene, take three-dice penalty to Manipulation and Intelligence. Can only speak one-word sentences.",
        nativeDisciplines: ["animalism", "fortitude", "protean"],
    },
    Nosferatu: {
        name: "Nosferatu",
        description: "Disfigured lurkers in the shadows",
        logo: nosferatuLogo,
    banes: [
        "Repulsiveness: You count as having the Repulsive Flaw (-2) and can never improve your Looks Merit. Any attempt to disguise as non-deformed (even supernatural) takes BANE_SEVERITY dice penalty.",
        "Infestation - The Haven of a Nosferatu is always infested with vermin, any attempt to do something that requires concentration takes a two plus Bane Severity penalty, as well as the same penalty to social tests at ST discretion. Additionally, when a Nosferatu spends a scene at an enclosed location, the vermin appears and causes the same penalty though reduced to equal only the Bane Severity. Any attempt to control these vermin with Animalism is done at a penalty equal to Bane Severity."
    ],
        compulsion:
            "Cryptophilia: Become obsessed with obtaining secrets. Refuse to share secrets with others, except in strict trade for greater secrets.",
        nativeDisciplines: ["animalism", "obfuscate", "potence"],
    },
    Malkavian: {
        name: "Malkavian",
        description: "Clairvoyants who are driven mad by their gift",
        logo: malkavianLogo,
    banes: [
        "Fractured Perspective: You are cursed with at least one type of mental derangement.",
        // Variant Bane
        "Unnatural Manifestations - Using Discipline powers within close proximity of mortals scares them and any social interactions other than Intimidation suffer a dice penalty equal to their Bane Severity. This is not Masquerade-breaking, but the dislike remains for the duration of one scene. Other vampires subject to this recognize the Malkavian as a vampire but suffer no penalty."
    ],
        compulsion:
            "Delusion: Two-dice penalty to Dexterity, Manipulation, Compusre and Wits as well as resists to terror frenzy for one scene.",
        nativeDisciplines: ["auspex", "dominate", "obfuscate"],
    },
    Tremere: {
        name: "Tremere",
        description: "Blood mages, driven by their hunger for knowledge",
        logo: tremereLogo,
    banes: [
        "Deficient Blood: Can't create blood bonds with other kindred, ghouling takes an additional BANE_SEVERITY drinks.",
        // Variant Bane
        "Stolen Blood - When performing a Blood Surge they need to make Rouse Checks equal to their Bane Severity. If these Rouse Checks increase their Hunger to 5 or higher, they can choose whether to back off their Blood Surge or perform it to then hit Hunger 5 afterward."
    ],
        compulsion:
            "Perfectionism: Until you score a critical win, all actions have a two-dice penalty. Penalty is reduced by one die for every repeat of an action.",
        nativeDisciplines: ["auspex", "dominate", "blood sorcery"],
    },
    Ventrue: {
        name: "Ventrue",
        description: "High and mighty rulers, continually grasping for more power",
        logo: ventrueLogo,
    banes: [
        "Rarefied Tastes: Pick a group of preferred victims. Feeding from anyone outside that group costs BANE_SEVERITY willpower points.",
        "Hierarchy - The Ventrue suffer a penalty equal to their Bane Severity to their Discipline dice pools when using them against a vampire of a lower generation. They must also spend Willpower equal to this penalty if they wish to directly attack other vampires of a lower generation."
    ],
        compulsion:
            "Arrogance: Until somebody obeys an order from you (not forced by Dominate), you take a two-dice penalty on all rolls not related to leadership.",
        nativeDisciplines: ["dominate", "fortitude", "presence"],
    },
    Toreador: {
        name: "Toreador",
        description: "Beauty-obsessed artists, elegant and often snobby",
        logo: toreadorLogo,
    banes: [
        "Aesthetic Fixation: While you're in less than beautiful surroundings you take BANE_SEVERITY dice penalty on Discipline rolls.",
        // Variant Bane
        "Agonizing Empathy - Whenever their feeding causes Aggravated damage to a mortal, the vampire suffers the same damage in return but cannot receive more than their Bane Severity. This damage is generally Aggravated. The damage itself is reflected as vivid bruising wherever they bit their victim as internal bleeding takes place."
    ],
        compulsion:
            "Obsession: Become fixated with something in the scene. Take a two-dice penalty on any actions that aren't directly related to that thing. Lasts until you can't perceive the thing or scene ends.",
        nativeDisciplines: ["auspex", "celerity", "presence"],
    },

    Lasombra: {
        name: "Lasombra",
        description: "Shadowy predators and ruthless social climbers",
        logo: lasombraLogo,
    banes: [
        "Distorted Image: Reflections and (audio) recordings of you distort and flicker. Touch technology is unresponsive.",
        // Variant Bane
        "Callousness - Whenever making a Remorse test remove a number of dice equal to the Bane Severity. The dice pool cannot be reduced below 1."
    ],
        compulsion:
            "Ruthlessness: Next failure after compulsion causes all rolls to receive a penalty until future attempt at same action succeeds.",
        nativeDisciplines: ["dominate", "potence", "oblivion"],
    },
    "Banu Haqim": {
        name: "Banu Haqim",
        description: "Assassins and judges with a twisted passion for justice",
        logo: banuHaqimLogo,
    banes: [
        "Blood Addiction: Drinking from another vampire provokes a Hunger Frenzy test of difficulty 2 + BANE_SEVERITY.",
        "Noxious Blood - The Blood of the Banu Haqim is toxic to mortals, but not to other vampires. Due to this mortals receive Aggravated Damage equal to the Bane Severity of the vampire for each Rouse Check’s worth of Blood consumed. Their Blood cannot be used to heal mortal injuries. In amounts below the amount needed to Blood Bond, it does not harm them, even if directly injected into them."
    ],
        compulsion:
            "Judgment: Drink at least 1 hunger of blood from anyone who acts against on of your personal convictions. If you can't, take three-dice penalty to all rolls until compulsion is satisfied or scene ends.",
        nativeDisciplines: ["celerity", "obfuscate", "blood sorcery"],
    },
    Ministry: {
        name: "Ministry",
        description: "Cult-like clan that uses temptation as a weapon",
        logo: ministryLogo,
    banes: [
        "If under bright light, take a BANE_SEVERITY penalty to all rolls. Take BANE_SEVERITY additional damage from sunlight.",
        // Variant Bane
        "Cold-Blooded - They can only use Blush of Life if they have recently fed from a living vessel in the same scene or up to roughly an hour ago, Storytellers discretion. When they do so, it requires a number of Rouse Checks equal to their Bane Severity rather than just one."
    ],
        compulsion:
            "Transgression: Take a two-dice penalty on all rolls not related to enticing someone (even themselves) to break a Chronicle Tenet or personal Conviction, causing at least one Stain and ending this Compulsion.",
        nativeDisciplines: ["obfuscate", "presence", "protean"],
    },
    Ravnos: {
        name: "Ravnos",
        description: "Illusionists who are always on the move",
        logo: ravnosLogo,
    banes: [
        "Doomed: If you day-sleep in the same place more than once within 7 days, roll dice equal to BANE_SEVERITY and take aggravated damage equal to 10s rolled. Need to be at least 1 mile away from last sleeping place.",
        "Unbirth Name - If a Ravnos’ unbirth name is used against them, the name-wielding opponent receives a bonus equal to the Ravnos’ Bane Severity to resist their Discipline powers. Additionally, the Ravnos affected receives the same penalty to resist supernatural powers used by the opponent."
    ],
        compulsion:
            "Tempting Fate: Next time you're faced with a problem, you must choose the most dangerous and daring solution, or take a two-dice penalty. Lasts until the problem is solved or further attempts are impossible.",
        nativeDisciplines: ["animalism", "obfuscate", "presence"],
    },
    Tzimisce: {
        name: "Tzimisce",
        description: "Territorial, greedy flesh shapers",
        logo: tzimisceLogo,
    banes: [
        "Grounded: Choose a place or group, if you day-sleep away from that you take BANE_SEVERITY aggravated willpower damage.",
        // Variant Bane
        "Cursed Courtesy - If they wish to enter a place of residence uninvited they must spend Willpower equal to their Bane Severity, this penalty also applies to their Discipline pools while they are there. The invitation inside can only be made by someone who lives there and this does not occur in uninhabited homes or public places. Tzimisce with this Bane cannot take the uninvited Folkloric Block."
    ],
        compulsion:
            "Covetousness: Become obsessed with possessing something in the scene. Any action not taken toward this purpose incurs two-dice penalty. Persists you own it or ownership becomes impossible.",
        nativeDisciplines: ["animalism", "dominate", "protean"],
    },
    Hecata: {
        name: "Hecata",
        description: "Vampires specialized in necromancy",
        logo: hecataLogo,
    banes: [
        "Painful Kiss: Your vampire kiss is excruciatingly painful and brings no pleasure to your prey.",
        // Variant Bane
        "Decay - Hecata suffer additional dots in Flaws equal to their Bane Severity spread as they see fit across Retainer, Haven, and Resources Flaws. These Flaws can either be taken at Character Creation or removed by paying twice the amount of Background dots. Additionally, any purchase of dots in these Advantages costs an additional amount of experience points equal to their Bane Severity."
    ],
        compulsion:
            "Morbidity: Until you have either predicted a death or solved the cause of a local one, you suffer a three-dice penalty to other rolls. Conclusions don't need to be correct, but should make sense.",
        nativeDisciplines: ["auspex", "fortitude", "oblivion"],
    },
    Salubri: {
        name: "Salubri",
        description: "Almost extinct bloodline of mystical vampires",
        logo: salubriLogo,
    banes: [
        "Hunted: Your blood is tasty. When others drink from you, they must pass a Hunger Frenzy test to stop. You have a third eye on your forehead that cannot be obscured (even supernaturally), but can be covered with clothing. When you use disciplines it weeps blood and vampires with Hunger >= 4 must pass a Hunger Frenzy test.",
        // Variant Bane
        "Asceticism - Whenever their Hunger is below three, the Salubri suffer a penalty equal to their Bane Severity to any Discipline dice pools. The bleeding third eye still remains."
    ],
        compulsion:
            "Affective Empathy: Become overwhelmed with somebody's personal problem. Suffer a two-dice penalty to all actions that don't got towards solving the problem. Lasts until the problem is eased, an immediate crisis supersedes it or the scene ends.",
        nativeDisciplines: ["auspex", "dominate", "fortitude"],
    },
        Lamia: {
            name: "Lamia",
            description: "Bloodline of Hecata with a unique connection to death and resurrection.",
            logo: lamiaLogo,
            banes: ["Painful Kiss: Hecata may only take harmful drinks from mortals which result in blood loss. Unwilling mortals that are able to escape will make the attempt, even those who are convinced or willing must succeed in a Stamina + Resolve test against Difficulty 2 + Bane Severity in order to not recoil. Vampires who are willingly bit must make a Frenzy test against Difficulty 3 to avoid terror Frenzy."],
            compulsion: "Morbidity: The vampire must move something from life to death or vice versa, any action not taken to end or resurrect something suffers a two-dice penalty. The subject does not have to be a living thing and can instead be an object or more abstract such as ideas or conversation points. This Compulsion lasts until they manage to kill or return something to life.",
            nativeDisciplines: ["auspex", "fortitude", "oblivion"],
        },
        Nagaraja: {
            name: "Nagaraja",
            description: "Canabalistic bloodline compelled to be among the dead.",
            logo: nagarajaLogo,
            banes: ["Organvore: They must consume flesh, as well as drinking blood in order to slack their Hunger and hold back decay. For every night the Nagaraja doesn’t consume flesh they rot. The type of flesh varies with the severity of the Bane. Each night that they do not consume Flesh they lose a die in all social rolls and for every 5 days they rot persists they loose two dice to all physical attributes. The negative effects are reversed for ever health level of flesh consumed, die rolls never can be drop below 1."],
            compulsion: "Dead Temple: The vampire is compelled be among the dead, they feel an overwhelming urge to surround themselves with the dead, even a pile of bones will comfort them. If they cannot find a corpse they will be compelled to make one.",
            nativeDisciplines: ["auspex", "dominate", "oblivion"],
        },
        "Daughters of Cacophony": {
            name: "Daughters of Cacophony",
            description: "Masters of the Voice, their powers allow them to control music and its effects.",
            logo: daughtersofCacophonyLogo,
            banes: ["Tune - The Daughters of Cacophony constantly hear music. The tune is different for each Daughter. Some of them hear violins, some an orchestra, some pounding drums, and a few a chorus of screams. Each Fugue is unique to the Daughter who hears it, and while it has driven some of them mad, it is always beautiful to them in its own way. You can often hear a Daughter humming along to the tune in their head. This might be a form of synaesthesia, or it might be a hallucination. This constant song distracts the Daughters as much as it guides them, some say the songs contains words of insight. Because of this constant tune the difficulties of all their Awareness rolls increase by 1 for every level of their Bane and no Daughter of Cacophony may have Awareness above 3 dots."],
            compulsion: "DIN OF DELUSION - The song in the Daughters head becomes so intense it can make them mad. For one scene the Siren hears the Fugue so load they must concentrate to hear anything else. They also see colours and flickering images from their peripheral vision. They receive a two-dice penalty to rolls involving Manipulation, Composure, and Wits as well as on rolls to resist terror frenzy.",
            nativeDisciplines: ["fortitude", "auspex", "presence"],
        },
        DaughtersofCacophony: {
            name: "Daughters of Cacophony",
            description: "Masters of the Voice, their powers allow them to control music and its effects.",
            logo: daughtersofCacophonyLogo,
            banes: [
                "Tune - The Daughters of Cacophony constantly hear music. The tune is different for each Daughter. Some of them hear violins, some an orchestra, some pounding drums, and a few a chorus of screams. Each Fugue is unique to the Daughter who hears it, and while it has driven some of them mad, it is always beautiful to them in its own way. You can often hear a Daughter humming along to the tune in their head. This might be a form of synaesthesia, or it might be a hallucination. This constant song distracts the Daughters as much as it guides them, some say the songs contains words of insight. Because of this constant tune the difficulties of all their Awareness rolls increase by 1 for every level of their Bane and no Daughter of Cacophony may have Awareness above 3 dots."
            ],
            compulsion: "DIN OF DELUSION - The song in the Daughters head becomes so intense it can make them mad. For one scene the Siren hears the Fugue so load they must concentrate to hear anything else. They also see colours and flickering images from their peripheral vision. They receive a two-dice penalty to rolls involving Manipulation, Composure, and Wits as well as on rolls to resist terror frenzy.",
            nativeDisciplines: ["fortitude", "auspex", "presence"],
        },
        Ahrimanes: {
            name: "Ahrimanes",
            description: "Rare, all-female bloodline originally headed by Ádísa during the Dark Ages.",
            logo: ahrimanesLogo,
            banes: ["An Ahrimanes' blood is inert, and resists the ties of bondage. They are unable to create blood bonds or ghouls, and the modern Ahrimanes struggle to create additional childer."],
            compulsion: "CO-SURVIVOR: The pack is as strong as its weakest link, and failure out here in the wilderness means death. This compulsion tends to manifest when both you and another utterly fail in succession. You get a -2 penalty on all pools until you, or someone you're helping, succeeds on a Teamwork Dice Pool.",
            nativeDisciplines: ["animalism", "protean", "auspex"],
        },
        Lhiannan: {
            name: "Lhiannan",
            description: "Territorial, matriarchal and druidic bloodline with a unique connection to nature and spirits.",
            logo: lhiannanLogo,
            banes: ["The Lhiannan were part nature spirit, and so had a unique connection to the world of spirits, most notably in the form of their Ogham; this connection gave them an inhuman aura obvious even to humans (and it was exceedingly easy for others to gauge their natures through the use of Auspex)."],
            compulsion: "ZOOCHOSIS: Modern life is closing in around you. Streets packed with loud vehicles, narrow alleyways reeking of rot and garbage, the cries and constructions of unnatural society layered onto itself. When this compulsion manifests you tend to revert to a more primitive mental state; Repeating monotonous tasks, scratching the surface of your desk into a groove, or grinding your teeth. These effects confer a -2 Dice penalty to Social Pools until you can manage to find an open and more natural locale or speak with someone who understands your mental state.",
            nativeDisciplines: ["animalism", "presence", "protean"],
        },
    Caitiff: {
        name: "Caitiff",
        description: "Clanless vampires, often distrusted",
        logo: caitiffLogo,
    banes: ["Outcast: Increasing discipline levels costs XP equal to 6x the new level. (instead of 5x)"],
        compulsion: "Caitiffs have no compulsion",
        nativeDisciplines: [
            "animalism",
            "auspex",
            "celerity",
            "dominate",
            "fortitude",
            "obfuscate",
            "potence",
            "presence",
            "protean",
            "blood sorcery",
            "oblivion",
        ],
    },
    "Thin-blood": {
        name: "Thin-blood",
        description: "Half Vampire, half Human. Despised by all.",
        logo: thinbloodLogo,
    banes: ["Outcast: Increasing discipline levels costs XP equal to 6x the new level. (instead of 5x)"],
        compulsion: "Caitiffs have no compulsion",
        nativeDisciplines: ["thin-blood alchemy"],
    },
    // Blood of Outsiders
    Gargoyle: {
        name: "Gargoyle",
        description: "Gargoyle Bloodline - Born from the blood of Beasts, Dragons, and Horrors, Gargoyles manifest atavistic, downright inhuman visages.",
        logo: gargoyleLogo, // purple icon
    banes: ["Primordial Flesh - Gargoyles manifest inhuman anatomy. Whenever engaged in a physical task requiring finesse and roll a 1 on a Hunger Die, subtract Bane Severity from successes."],
        compulsion: "Dysphoria - In the throes of their Beast, the wrongness of their bodies becomes disconcerting. Until completely alone and unseen, take a 2-Die penalty to all dice pools.",
        nativeDisciplines: ["protean", "fortitude", "obfuscate"],
    },
    Kiasyd: {
        name: "Kiasyd",
        description: "Kiasyd Bloodline - Possessed of arcane taboos and impish tendencies.",
        logo: kiasydLogo, // purple icon
    banes: ["Taboo - Each Kiasyd has specific taboos equal to half Bane Severity (round up). Violating a taboo causes 1 Aggravated Willpower damage."],
        compulsion: "Chicanerous - Must inflict a serious mishap causing at least 1 Superficial Health or Willpower damage to someone nearby, or take a 2-Die penalty to all dice pools not contributing to this.",
        nativeDisciplines: ["dominate", "auspex", "oblivion"],
    },
    Baali: {
        name: "Baali",
        description: "Baali Bloodline - Vampires cursed with demonic influence and holy repulsion.",
        logo: baaliLogo, // purple icon
    banes: [
        "HOLY REPULSION - Must spend Willpower equal to Bane Severity to avoid repulsion by holy iconography, scripture, or prayer. Direct contact causes Superficial Damage equal to Bane Severity. In presence of True Faith, lose dice equal to Bane Severity in Willpower Tests, and damage from True Faith is doubled.",
        // Variant Bane
        "ANATHEMA - Your physical and spiritual existence was permeated by the powers of the Outer Dark from the moment of the Embrace, as if you had failed to uphold your end of some kind of cosmic balance. At character creation, you must choose an additional number of dots in Dark Bargains equal to your Bane Severity. You gain no positive merits or backgrounds from these."
    ],
        compulsion: "Devil's Bargain - Take a two dice penalty to all dice pools until you fail a test and agree to Succeed at a Cost, which brings success via demonic interference but always causes another problem.",
        nativeDisciplines: ["blood sorcery", "oblivion", "presence"],
    },
    "": {
        name: "",
        description: "",
        logo: "",
    banes: [""],
        compulsion: "",
        nativeDisciplines: [],
    },
};