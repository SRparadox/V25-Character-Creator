import { Button, Checkbox, Space, Stack, Text } from "@mantine/core"
import { useEffect, useState } from "react"
import { Character } from "../../data/Character"
import ReactGA from "react-ga4"

type AgePickerProps = {
    character: Character
    setCharacter: (character: Character) => void
    nextStep: () => void
}

const AgePicker = ({ character, setCharacter, nextStep }: AgePickerProps) => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", title: "Age Picker" })
    }, [])

    const [isElder, setIsElder] = useState<boolean>(character.isElder)
    const [isMethuselah, setIsMethuselah] = useState<boolean>(character.isMethuselah)

    // If generation indicates Methuselah (4-5), force both elder and methuselah to true
    const isMethuselahGeneration = character.generation <= 5 && character.generation >= 4
    // If generation indicates Elder (6-9), allow elder selection but force methuselah off
    const isElderGeneration = character.generation <= 9 && character.generation >= 6

    useEffect(() => {
        if (isMethuselahGeneration) {
            setIsElder(true)
            setIsMethuselah(true)
        } else if (isElderGeneration) {
            setIsMethuselah(false)
        } else {
            setIsElder(false)
            setIsMethuselah(false)
        }
    }, [isMethuselahGeneration, isElderGeneration])

    const handleElderChange = (checked: boolean) => {
        if (isMethuselahGeneration) return // Can't change if Methuselah generation
        setIsElder(checked)
        if (!checked) {
            setIsMethuselah(false) // If not elder, can't be methuselah
        }
    }

    const handleMethuselahChange = (checked: boolean) => {
        if (isMethuselahGeneration) return // Can't change if Methuselah generation
        if (!isElderGeneration) return // Can't be methuselah without appropriate generation
        setIsMethuselah(checked)
        if (checked) {
            setIsElder(true) // If methuselah, must be elder
        }
    }

    return (
        <div style={{ width: "100%" }}>
            <Text fz={"30px"} ta={"center"}>
                Choose your <b>Age</b>
            </Text>
            <Text style={{ fontSize: "25px", color: "grey" }} ta={"center"}>
                Elder and Methuselah powers are available based on generation and choice
            </Text>

            <Text mt={"xl"} ta="center" fz="xl" fw={700} c="red">
                Age Categories
            </Text>
            <hr color="#e03131" />
            <Space h={"sm"} />

            <Stack align="center" spacing="xl">
                <div style={{ textAlign: "center", padding: "20px" }}>
                    <Text fz={"lg"} fw={600} mb="md">
                        Generation {character.generation}
                    </Text>
                    
                    <Stack spacing="md" align="flex-start">
                        <Checkbox
                            checked={isElder}
                            onChange={(event) => handleElderChange(event.currentTarget.checked)}
                            disabled={isMethuselahGeneration || (!isElderGeneration && character.generation > 9)}
                            label={
                                <div>
                                    <Text fw={600} size="md">Elder Powers</Text>
                                    <Text size="sm" c="dimmed">
                                        {isMethuselahGeneration 
                                            ? "Automatically enabled for Methuselah generation"
                                            : isElderGeneration
                                                ? "Available for Elder generation (6-9)"
                                                : "Only available for Elder generations (6-9)"
                                        }
                                    </Text>
                                </div>
                            }
                        />
                        
                        <Checkbox
                            checked={isMethuselah}
                            onChange={(event) => handleMethuselahChange(event.currentTarget.checked)}
                            disabled={isMethuselahGeneration || character.generation > 5}
                            label={
                                <div>
                                    <Text fw={600} size="md">Methuselah Powers</Text>
                                    <Text size="sm" c="dimmed">
                                        {isMethuselahGeneration 
                                            ? "Automatically enabled for Methuselah generation"
                                            : "Only available for Methuselah generations (4-5)"
                                        }
                                    </Text>
                                </div>
                            }
                        />
                    </Stack>
                </div>

                <Button
                    color="grape"
                    onClick={() => {
                        setCharacter({ 
                            ...character, 
                            isElder: isElder,
                            isMethuselah: isMethuselah
                        })
                        ReactGA.event({
                            action: "age submit clicked",
                            category: "age",
                            label: `elder:${isElder}, methuselah:${isMethuselah}`,
                        })
                        nextStep()
                    }}
                >
                    Confirm
                </Button>
            </Stack>
        </div>
    )
}

export default AgePicker