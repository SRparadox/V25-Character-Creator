import { Center, Text } from "@mantine/core"
import { Character, containsBloodSorcery } from "../data/Character"
import AttributePicker from "./components/AttributePicker"
import BasicsPicker from "./components/BasicsPicker"
import ClanPicker from "./components/ClanPicker"
import DisciplinesPicker from "./components/DisciplinesPicker"
import { Power } from "../data/Disciplines";
import Final from "./components/Final"
import GenerationPicker from "./components/GenerationPicker"
import Intro from "./components/Intro"
import MeritsAndFlawsPicker from "./components/MeritsAndFlawsPicker"
import PredatorTypePicker from "./components/PredatorTypePicker"
import SkillsPicker from "./components/SkillsPicker"
import TouchstonePicker from "./components/TouchstonePicker"
import ErrorBoundary from "../components/ErrorBoundary"
import RitualsPicker from "./components/RitualsPicker"
import CeremoniesPicker from "./components/CeremoniesPicker"

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

    const getStepComponent = () => {
        // Unclean solution: Stepper in AsideBar only gives us an index to use here and if we don't have a blood-sorcery step (at 8) it breaks alignment of the steps. Ideally we'd get a string from the stepper rather than a number and then we wouldn't have to map things here
    const patchedSelectedStep = !hasBloodSorcery && selectedStep >= 8 ? selectedStep + 1 : selectedStep
        // Insert Rituals and Ceremonies logic
        if (hasBloodSorcery && hasOblivion) {
            if (selectedStep === 8) {
                return (
                    <RitualsPicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => setSelectedStep(selectedStep + 1)}
                    />
                );
            }
            if (selectedStep === 9) {
                return (
                    <CeremoniesPicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => setSelectedStep(selectedStep + 1)}
                    />
                );
            }
        } else if (hasBloodSorcery) {
            if (selectedStep === 8) {
                return (
                    <RitualsPicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => setSelectedStep(selectedStep + 1)}
                    />
                );
            }
        } else if (hasOblivion) {
            if (selectedStep === 8) {
                return (
                    <CeremoniesPicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => setSelectedStep(selectedStep + 1)}
                    />
                );
            }
        }
        switch (selectedStep) {
            case 0:
                return (
                    <Intro
                        setCharacter={setCharacter}
                        nextStep={() => {
                            setSelectedStep(selectedStep + 1)
                        }}
                    />
                )
            case 1:
                return (
                    <ClanPicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => {
                            setSelectedStep(selectedStep + 1)
                        }}
                    />
                )
            case 2:
                return (
                    <AttributePicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => {
                            setSelectedStep(selectedStep + 1)
                        }}
                    />
                )
            case 3:
                return (
                    <SkillsPicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => {
                            setSelectedStep(selectedStep + 1)
                        }}
                    />
                )
            case 4:
                return (
                    <GenerationPicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => {
                            setSelectedStep(selectedStep + 1)
                        }}
                    />
                )
            case 5:
                return (
                    <PredatorTypePicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => {
                            setSelectedStep(selectedStep + 1)
                        }}
                    />
                )
            case 6:
                return (
                    <BasicsPicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => {
                            setSelectedStep(selectedStep + 1)
                        }}
                    />
                )
            case 7:
                return (
                    <DisciplinesPicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => {
                            setSelectedStep(selectedStep + 1)
                        }}
                    />
                )
            case 8:
                return (
                    <RitualsPicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => {
                            setSelectedStep(selectedStep + 1)
                        }}
                    />
                )
            case 9:
                return (
                    <CeremoniesPicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => {
                            setSelectedStep(selectedStep + 1)
                        }}
                    />
                )
            case 10:
                return (
                    <TouchstonePicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => {
                            setSelectedStep(selectedStep + 1)
                        }}
                    />
                )
            case 11:
                return (
                    <MeritsAndFlawsPicker
                        character={character}
                        setCharacter={setCharacter}
                        nextStep={() => {
                            setSelectedStep(selectedStep + 1)
                        }}
                    />
                )
            case 12:
                return <Final character={character} setCharacter={setCharacter} setSelectedStep={setSelectedStep} />
            default:
                return <Text size={"xl"}>{`Error: Step ${selectedStep} is not implemented`}</Text>
        }
    }

    return (
        <Center h={"100%"}>
            <ErrorBoundary key={selectedStep}>{getStepComponent()}</ErrorBoundary>
        </Center>
    )
}

export default Generator
