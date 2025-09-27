import { Center, Text } from "@mantine/core"
import { Character, containsBloodSorcery, isThinBlood } from "../data/Character"
import AttributePicker from "./components/AttributePicker"
import BasicsPicker from "./components/BasicsPicker"
import ClanPicker from "./components/ClanPicker"
import SectPicker from "./components/SectPicker"
import ReligionPicker from "./components/ReligionPicker"
import DisciplinesPicker from "./components/DisciplinesPicker"
import { Power } from "../data/Disciplines";
import Final from "./components/Final"
import GenerationPicker from "./components/GenerationPicker"
import Intro from "./components/Intro"
import MeritsAndFlawsPicker from "./components/MeritsAndFlawsPicker"
import PredatorTypePicker from "./components/PredatorTypePicker"
import RolePicker from "./components/RolePicker"
import SkillsPicker from "./components/SkillsPicker"
import TouchstonePicker from "./components/TouchstonePicker"
import ErrorBoundary from "../components/ErrorBoundary"
import RitualsPicker from "./components/RitualsPicker"
import CeremoniesPicker from "./components/CeremoniesPicker"
import AlchemyPicker from "./components/AlchemyPicker"


// Export a function to get the step labels dynamically
export function getStepLabels(character: Character) {
    const hasBloodSorcery = containsBloodSorcery(character.disciplines);
    const hasOblivion = character.disciplines.some((power: Power) => power.discipline === "oblivion");
    const hasThinBloodAlchemy = isThinBlood(character);
    const labels = [
        "Intro",
        "Clan",
        "Sect",
        "Religion",
        "Attributes",
        "Skills",
        "Generation",
        character.clan === "Ghoul" ? "Role" : "Predator Type",
        "Basics",
        "Disciplines",
    ];
    if (hasBloodSorcery) labels.push("Rituals");
    if (hasOblivion) labels.push("Ceremonies");
    if (hasThinBloodAlchemy) labels.push("Alchemy");
    labels.push("Touchstones");
    labels.push("Merits & Flaws");
    labels.push("Final");
    return labels;
}

export type GeneratorProps = {
    character: Character
    setCharacter: (character: Character) => void

    selectedStep: number
    setSelectedStep: (step: number) => void
}

const containsOblivion = (powers: Power[]) => powers.some((power) => power.discipline === "oblivion");

const Generator = ({ character, setCharacter, selectedStep, setSelectedStep }: GeneratorProps) => {
    const hasBloodSorcery = containsBloodSorcery(character.disciplines);
    const hasOblivion = containsOblivion(character.disciplines);
    const hasThinBloodAlchemy = isThinBlood(character);

    // Define the props type for all step components
    type StepProps = {
        character: Character;
        setCharacter: (character: Character) => void;
        nextStep: () => void;
    };

    // Build steps array dynamically, matching getStepLabels
    const steps: ((props: StepProps) => JSX.Element)[] = [
        (props) => <Intro {...props} />, // 0
        (props) => <ClanPicker {...props} />, // 1
        (props) => <SectPicker {...props} />, // 2
        (props) => <ReligionPicker {...props} />, // 3
        (props) => <AttributePicker {...props} />, // 4
        (props) => <SkillsPicker {...props} />, // 5
        (props) => <GenerationPicker {...props} />, // 6
        (props) => character.clan === "Ghoul" ? <RolePicker {...props} /> : <PredatorTypePicker {...props} />, // 7
        (props) => <BasicsPicker {...props} />, // 8
        (props) => <DisciplinesPicker {...props} />, // 9
    ];
    if (hasBloodSorcery) steps.push((props) => <RitualsPicker {...props} />);
    if (hasOblivion) steps.push((props) => <CeremoniesPicker {...props} />);
    if (hasThinBloodAlchemy) steps.push((props) => <AlchemyPicker {...props} />);
    steps.push((props) => <TouchstonePicker {...props} />);
    steps.push((props) => <MeritsAndFlawsPicker {...props} />);
    steps.push((props) => <Final {...props} setSelectedStep={setSelectedStep} />);

    const getStepComponent = () => {
        if (selectedStep < steps.length) {
            const StepComponent = steps[selectedStep];
            return StepComponent({
                character,
                setCharacter,
                nextStep: () => setSelectedStep(selectedStep + 1),
            });
        }
        return <Text size={"xl"}>{`Error: Step ${selectedStep} is not implemented`}</Text>;
    };

    return (
        <Center h={"100%"}>
            <ErrorBoundary key={selectedStep}>{getStepComponent()}</ErrorBoundary>
        </Center>
    )
}

export default Generator
