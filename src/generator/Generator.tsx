import { Center, Text } from "@mantine/core"
import { Character, containsBloodSorcery, containsOblivion, containsSerpentis, containsSpiritus, containsQuietus, isThinBlood } from "../data/Character"
import AttributePicker from "./components/AttributePicker"
import BasicsPicker from "./components/BasicsPicker"
import ClanPicker from "./components/ClanPicker"
import SectPicker from "./components/SectPicker"
import ReligionPicker from "./components/ReligionPicker"
import DisciplinesPicker from "./components/DisciplinesPicker"

import Final from "./components/Final"
import GenerationPicker from "./components/GenerationPicker"
import AgePicker from "./components/AgePicker"
import ElderPowerPicker from "./components/ElderPowerPicker"
import MethuselahPowerPicker from "./components/MethuselahPowerPicker"
import Intro from "./components/Intro"
import MeritsAndFlawsPicker from "./components/MeritsAndFlawsPicker"
import PredatorTypePicker from "./components/PredatorTypePicker"
import RolePicker from "./components/RolePicker"
import SkillsPicker from "./components/SkillsPicker"
import TouchstonePicker from "./components/TouchstonePicker"
import ErrorBoundary from "../components/ErrorBoundary"
import RitualsPicker from "./components/RitualsPicker"
import CeremoniesPicker from "./components/CeremoniesPicker"
import SerpentisRitualsPicker from "./components/SerpentisRitualsPicker"
import SpirituRitualsPicker from "./components/SpirituRitualsPicker"
import AssamiteSorceryRitualsPicker from "./components/AssamiteSorceryRitualsPicker"
import AlchemyPicker from "./components/AlchemyPicker"


// Export a function to get the step labels dynamically
export function getStepLabels(character: Character) {
    const hasBloodSorcery = containsBloodSorcery(character.disciplines);
    const hasOblivion = containsOblivion(character.disciplines);
    const hasSerpentis = containsSerpentis(character.disciplines);
    const hasSpiritus = containsSpiritus(character.disciplines);
    const hasQuietus = containsQuietus(character.disciplines);
    const hasThinBloodAlchemy = isThinBlood(character);
    
    // Check if character generation qualifies for Elder/Methuselah powers
    const isElderGeneration = character.generation <= 9 && character.generation >= 6;
    const isMethuselahGeneration = character.generation <= 5 && character.generation >= 4;
    const qualifiesForElderPowers = isElderGeneration || isMethuselahGeneration;
    
    const labels = [
        "Intro",
        "Clan",
        "Sect",
        "Religion",
        "Attributes",
        "Skills",
        "Generation",
    ];
    
    // Only show Age step if generation qualifies for Elder/Methuselah powers
    if (qualifiesForElderPowers) {
        labels.push("Age");
    }
    
    // Only show Elder Powers if character is flagged as Elder or Methuselah
    if (character.isElder || character.isMethuselah) {
        labels.push("Elder Powers");
    }
    
    // Only show Methuselah Powers if character is flagged as Methuselah
    if (character.isMethuselah) {
        labels.push("Methuselah Powers");
    }
    
    labels.push(character.clan === "Ghoul" ? "Role" : "Predator Type");
    labels.push("Basics");
    labels.push("Disciplines");
    
    if (hasBloodSorcery) labels.push("Rituals");
    if (hasOblivion) labels.push("Ceremonies");
    if (hasSerpentis) labels.push("Serpentis Rituals");
    if (hasSpiritus) labels.push("Spiritus Rituals");
    if (hasQuietus) labels.push("Assamite Sorcery Rituals");
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

const Generator = ({ character, setCharacter, selectedStep, setSelectedStep }: GeneratorProps) => {
    const hasBloodSorcery = containsBloodSorcery(character.disciplines);
    const hasOblivion = containsOblivion(character.disciplines);
    const hasSerpentis = containsSerpentis(character.disciplines);
    const hasSpiritus = containsSpiritus(character.disciplines);
    const hasQuietus = containsQuietus(character.disciplines);
    const hasThinBloodAlchemy = isThinBlood(character);

    // Define the props type for all step components
    type StepProps = {
        character: Character;
        setCharacter: (character: Character) => void;
        nextStep: () => void;
    };

    // Build steps array dynamically, matching getStepLabels
    const isElderGeneration = character.generation <= 9 && character.generation >= 6;
    const isMethuselahGeneration = character.generation <= 5 && character.generation >= 4;
    const qualifiesForElderPowers = isElderGeneration || isMethuselahGeneration;
    
    const steps: ((props: StepProps) => JSX.Element)[] = [
        (props) => <Intro {...props} />, // 0
        (props) => <ClanPicker {...props} />, // 1
        (props) => <SectPicker {...props} />, // 2
        (props) => <ReligionPicker {...props} />, // 3
        (props) => <AttributePicker {...props} />, // 4
        (props) => <SkillsPicker {...props} />, // 5
        (props) => <GenerationPicker {...props} />, // 6
    ];
    
    // Only add Age step if generation qualifies for Elder/Methuselah powers
    if (qualifiesForElderPowers) {
        steps.push((props) => <AgePicker {...props} />);
    }
    
    // Only add Elder Powers step if character is flagged as Elder or Methuselah
    if (character.isElder || character.isMethuselah) {
        steps.push((props) => <ElderPowerPicker {...props} />);
    }
    
    // Only add Methuselah Powers step if character is flagged as Methuselah
    if (character.isMethuselah) {
        steps.push((props) => <MethuselahPowerPicker {...props} />);
    }
    
    steps.push((props) => character.clan === "Ghoul" ? <RolePicker {...props} /> : <PredatorTypePicker {...props} />);
    steps.push((props) => <BasicsPicker {...props} />);
    steps.push((props) => <DisciplinesPicker {...props} />);
    
    if (hasBloodSorcery) steps.push((props) => <RitualsPicker {...props} />);
    if (hasOblivion) steps.push((props) => <CeremoniesPicker {...props} />);
    if (hasSerpentis) steps.push((props) => <SerpentisRitualsPicker {...props} />);
    if (hasSpiritus) steps.push((props) => <SpirituRitualsPicker {...props} />);
    if (hasQuietus) steps.push((props) => <AssamiteSorceryRitualsPicker {...props} />);
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
