import { Button, Select, Space, Stack, Text } from "@mantine/core"
import { useEffect, useState } from "react"
import { Character } from "../../data/Character"
import ReactGA from "react-ga4"

type GenerationPickerProps = {
    character: Character
    setCharacter: (character: Character) => void
    nextStep: () => void
}

const GenerationPicker = ({ character, setCharacter, nextStep }: GenerationPickerProps) => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", title: "Generation Picker" })
    }, [])

    const isThinBlood = character.clan === "Thin-blood"
    const isGhoul = character.clan === "Ghoul"

    const [generation, setGeneration] = useState<string | null>(
        isGhoul ? null : isThinBlood ? "14" : "13"
    )

    return (
        <div style={{ width: "100%" }}>
            <Text fz={"30px"} ta={"center"}>
                {isGhoul ? <><b>Generation</b></> : <>Pick your <b>Generation</b></>}
            </Text>
            <Text style={{ fontSize: "25px", color: "grey" }} ta={"center"}>
                {isGhoul 
                    ? "Ghouls are mortals enhanced by vampire blood - no generation applies" 
                    : isThinBlood 
                        ? "Thin-bloods are of high generation (14-16)" 
                        : "Most common choice is '13 - Neonate'"
                }
            </Text>

            <Text mt={"xl"} ta="center" fz="xl" fw={700} c="red">
                Generation
            </Text>
            <hr color="#e03131" />
            <Space h={"sm"} />

            <Stack align="center" spacing="xl">
                {isGhoul ? (
                    // For Ghouls, show a message instead of generation selector
                    <div style={{ textAlign: "center", padding: "20px" }}>
                        <Text fz={"xl"} fw={600} c="grape">
                            NONE - No generation for ghouls
                        </Text>
                        <Text fz={"md"} c="dimmed" mt="sm">
                            Ghouls are mortal servants sustained by vampire blood
                        </Text>
                    </div>
                ) : (
                    <Select
                        styles={(theme) => ({
                            item: {
                                // applies styles to selected item
                                "&[data-selected]": {
                                    "&, &:hover": {
                                        backgroundColor: theme.colors.grape,
                                        color: theme.colors.white,
                                    },
                                },

                                // applies styles to hovered item (with mouse or keyboard)
                                "&[data-hovered]": {},
                            },
                        })}
                        style={{ width: "100%" }}
                        value={generation}
                        onChange={setGeneration}
                        label="When were you turned?"
                        placeholder="Pick one"
                        data={
                            isThinBlood
                                ? [
                                      { value: "16", label: "16: Thin-blood - Weakest generation" },
                                      { value: "15", label: "15: Thin-blood - Very weak" },
                                      { value: "14", label: "14: Thin-blood - Recently turned" }
                                  ]
                                : [
                                      { value: "14", label: "14: Childer - Recently" },
                                      { value: "13", label: "13: Neonate - Been a while" },
                                      { value: "12", label: "12: Neonate - Been a while" },
                                      { value: "11", label: "11: Ancillae - I barely remember" },
                                      { value: "10", label: "10: Ancillae - I barely remember" },
                                      { value: "9", label: "9: ELDER Only - NPC" },
                                      { value: "8", label: "8: ELDER Only - NPC" },
                                      { value: "7", label: "7: ELDER Only - NPC" },
                                      { value: "6", label: "6: ELDER Only - NPC" },
                                      { value: "5", label: "5: METHUSELAH Only - NPC" },
                                      { value: "4", label: "4: METHUSELAH Only - NPC" },
                                  ]
                        }
                    />
                )}

                <Button
                    disabled={!isGhoul && generation === null}
                    color="grape"
                    onClick={() => {
                        if (isGhoul) {
                            // For Ghouls, set generation to 0 or a special value to indicate no generation
                            setCharacter({ ...character, generation: 0 })
                            ReactGA.event({
                                action: "generation submit clicked",
                                category: "generation",
                                label: "ghoul-no-generation",
                            })
                        } else {
                            const generationValue = parseInt(generation ?? "0")
                            const isElderGeneration = generationValue <= 9 && generationValue >= 6
                            const isMethuselahGeneration = generationValue <= 5 && generationValue >= 4
                            
                            setCharacter({ 
                                ...character, 
                                generation: generationValue,
                                isElder: isElderGeneration || isMethuselahGeneration,
                                isMethuselah: isMethuselahGeneration
                            })
                            ReactGA.event({
                                action: "generation submit clicked",
                                category: "generation",
                                label: generation ?? "0",
                            })
                        }
                        nextStep()
                    }}
                >
                    Confirm
                </Button>
            </Stack>
        </div>
    )
}

export default GenerationPicker
