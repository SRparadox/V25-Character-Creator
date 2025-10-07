import { Button, Checkbox, Space, Stack, Text, Group, Card, Alert, Accordion } from "@mantine/core"
import { useEffect, useState } from "react"
import { Character } from "../../data/Character"
import { methuselahPowers, MethuselahPower } from "../../data/ElderPowers"
import ReactGA from "react-ga4"
import { IconInfoCircle } from "@tabler/icons-react"

type MethuselahPowerPickerProps = {
    character: Character
    setCharacter: (character: Character) => void
    nextStep: () => void
}

const MethuselahPowerPicker = ({ character, setCharacter, nextStep }: MethuselahPowerPickerProps) => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", title: "Methuselah Power Picker" })
    }, [])

    const [selectedPowers, setSelectedPowers] = useState<MethuselahPower[]>(character.selectedMethuselahPowers || [])
    
    const maxSelections = 2

    // Group powers by discipline
    const groupedPowers = methuselahPowers.reduce((groups, power) => {
        const discipline = power.requirements || "General"
        if (!groups[discipline]) {
            groups[discipline] = []
        }
        groups[discipline].push(power)
        return groups
    }, {} as Record<string, MethuselahPower[]>)

    // Sort disciplines alphabetically, but put General first
    const sortedDisciplines = Object.keys(groupedPowers).sort((a, b) => {
        if (a === "General") return -1
        if (b === "General") return 1
        return a.localeCompare(b)
    })

    const handlePowerToggle = (power: MethuselahPower) => {
        const isSelected = selectedPowers.some(p => p.name === power.name)
        
        if (isSelected) {
            // Remove power
            setSelectedPowers(selectedPowers.filter(p => p.name !== power.name))
        } else {
            // Add power if under limit
            if (selectedPowers.length < maxSelections) {
                setSelectedPowers([...selectedPowers, power])
            }
        }
    }

    return (
        <div style={{ width: "100%", maxWidth: "800px" }}>
            <Text fz={"30px"} ta={"center"}>
                Choose <b>Methuselah Powers</b>
            </Text>
            <Text style={{ fontSize: "25px", color: "grey" }} ta={"center"}>
                Select up to {maxSelections} Methuselah Powers
            </Text>

            <Text mt={"xl"} ta="center" fz="xl" fw={700} c="red">
                Methuselah Powers ({selectedPowers.length}/{maxSelections} selected)
            </Text>
            <hr color="#e03131" />
            <Space h={"sm"} />

            <Alert icon={<IconInfoCircle size={16} />} title="Note" color="blue" mb="md">
                All selected Elder and Methuselah Powers will be added to the Notes section of your character sheet.
            </Alert>

            <Accordion variant="contained" style={{ width: "100%" }}>
                {sortedDisciplines.map((discipline) => (
                    <Accordion.Item key={discipline} value={discipline}>
                        <Accordion.Control>
                            <Text fw={600} size="md">
                                {discipline} ({groupedPowers[discipline].length} powers)
                            </Text>
                        </Accordion.Control>
                        <Accordion.Panel>
                            <Stack spacing="sm">
                                {groupedPowers[discipline].map((power) => {
                                    const isSelected = selectedPowers.some(p => p.name === power.name)
                                    const canSelect = selectedPowers.length < maxSelections || isSelected
                                    
                                    return (
                                        <Card
                                            key={power.name}
                                            p="md"
                                            withBorder
                                            style={{
                                                cursor: canSelect ? "pointer" : "not-allowed",
                                                opacity: canSelect ? 1 : 0.6,
                                                backgroundColor: isSelected ? "#f0f0f0" : "white",
                                                border: isSelected ? "2px solid #e03131" : "1px solid #ddd"
                                            }}
                                            onClick={() => canSelect && handlePowerToggle(power)}
                                        >
                                            <Group position="apart" align="flex-start">
                                                <div style={{ flex: 1 }}>
                                                    <Group spacing="sm" align="center">
                                                        <Checkbox
                                                            checked={isSelected}
                                                            readOnly
                                                            style={{ pointerEvents: "none" }}
                                                        />
                                                        <div>
                                                            <Text fw={600} size="md">{power.name}</Text>
                                                            {power.requirements && power.requirements !== discipline && (
                                                                <Text size="sm" c="dimmed" italic>
                                                                    Requires: {power.requirements}
                                                                </Text>
                                                            )}
                                                        </div>
                                                    </Group>
                                                    <Text size="sm" mt="xs" style={{ lineHeight: 1.4 }}>
                                                        {power.description}
                                                    </Text>
                                                </div>
                                            </Group>
                                        </Card>
                                    )
                                })}
                            </Stack>
                        </Accordion.Panel>
                    </Accordion.Item>
                ))}
            </Accordion>

            <Space h="md" />
            
            <Group position="center">
                <Button
                    color="grape"
                    onClick={() => {
                        setCharacter({ 
                            ...character, 
                            selectedMethuselahPowers: selectedPowers
                        })
                        ReactGA.event({
                            action: "methuselah powers submit clicked",
                            category: "methuselah-powers",
                            label: `${selectedPowers.length} powers selected`,
                        })
                        nextStep()
                    }}
                >
                    Confirm ({selectedPowers.length}/{maxSelections})
                </Button>
            </Group>
        </div>
    )
}

export default MethuselahPowerPicker