import { Button, Divider, Grid, Group, Text, Tooltip } from "@mantine/core"
import { useEffect, useState } from "react"
import ReactGA from "react-ga4"
import { AttributesKey, attributeDescriptions, attributesKeySchema } from "../../data/Attributes"
import { Character } from "../../data/Character"
import { globals } from "../../globals"
import { upcase } from "../utils"

type AttributePickerProps = {
    character: Character
    setCharacter: (character: Character) => void
    nextStep: () => void
}

type AttributeSetting = {
    strongest: AttributesKey | null
    weakest: AttributesKey | null
    medium: AttributesKey[]
}

const AttributePicker = ({ character, setCharacter, nextStep }: AttributePickerProps) => {
    const phoneScreen = globals.isPhoneScreen

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", title: "Attribute Picker" })
    }, [])

    const [pickedAttributes, setPickedAttributes] = useState<AttributeSetting>({ strongest: null, weakest: null, medium: [] })

    // Dev mode helper functions
    const incrementAttribute = (attribute: AttributesKey) => {
        const currentValue = character.attributes[attribute]
        if (currentValue < 5) {
            setCharacter({
                ...character,
                attributes: {
                    ...character.attributes,
                    [attribute]: currentValue + 1
                }
            })
        }
    }

    const decrementAttribute = (attribute: AttributesKey) => {
        const currentValue = character.attributes[attribute]
        if (currentValue > 1) {
            setCharacter({
                ...character,
                attributes: {
                    ...character.attributes,
                    [attribute]: currentValue - 1
                }
            })
        }
    }

    const createButton = (attribute: AttributesKey, i: number) => {
        const alreadyPicked = [pickedAttributes.strongest, pickedAttributes.weakest, ...pickedAttributes.medium].includes(attribute)

        // In dev mode, show manual controls
        if (globals.devMode) {
            const currentValue = character.attributes[attribute]
            
            return (
                <Grid.Col key={attribute} span={4}>
                    <Group spacing="xs" position="center" align="center">
                        <Button
                            size="xs"
                            color="red"
                            onClick={() => decrementAttribute(attribute)}
                            disabled={currentValue <= 1}
                        >
                            -
                        </Button>
                        <div style={{ textAlign: 'center', minWidth: '80px' }}>
                            <Text size="sm" weight={500}>{upcase(attribute)}</Text>
                            <Text size="lg" weight={700}>{currentValue}</Text>
                        </div>
                        <Button
                            size="xs"
                            color="green"
                            onClick={() => incrementAttribute(attribute)}
                            disabled={currentValue >= 5}
                        >
                            +
                        </Button>
                    </Group>
                    {i % 3 === 0 || i % 3 === 1 ? <Divider size="xl" orientation="vertical" /> : null}
                </Grid.Col>
            )
        }

        // Original selection logic for normal mode
        let onClick: () => void
        if (alreadyPicked) {
            onClick = () => {
                setPickedAttributes({
                    strongest: pickedAttributes.strongest === attribute ? null : pickedAttributes.strongest,
                    medium: pickedAttributes.medium.filter((it) => it !== attribute),
                    weakest: pickedAttributes.weakest === attribute ? null : pickedAttributes.weakest,
                })
            }
        } else if (!pickedAttributes.strongest) {
            onClick = () => {
                setPickedAttributes({ ...pickedAttributes, strongest: attribute })
            }
        } else if (!pickedAttributes.weakest) {
            onClick = () => {
                setPickedAttributes({ ...pickedAttributes, weakest: attribute })
            }
        } else if (pickedAttributes.medium.length < 2) {
            onClick = () => {
                setPickedAttributes({ ...pickedAttributes, medium: [...pickedAttributes.medium, attribute] })
            }
        } else {
            onClick = () => {
                const finalPick = { ...pickedAttributes, medium: [...pickedAttributes.medium, attribute] }
                const attributes = {
                    strength: 2,
                    charisma: 2,
                    intelligence: 2,
                    dexterity: 2,
                    manipulation: 2,
                    wits: 2,
                    stamina: 2,
                    composure: 2,
                    resolve: 2,
                }
                attributes[finalPick.strongest!] = 4
                attributes[finalPick.weakest!] = 1
                finalPick.medium.forEach((medium) => (attributes[medium] = 3))
                setCharacter({ ...character, attributes })
                nextStep()
            }
        }

        const dots = (() => {
            if (attribute === pickedAttributes.strongest) return "💪"
            if (attribute === pickedAttributes.weakest) return "🪶"
            if (pickedAttributes.medium.includes(attribute)) return "👌"
            return ""
        })()

        const trackClick = () => {
            ReactGA.event({
                action: "attribute clicked",
                category: "attributes",
                label: attribute,
            })
        }

        return (
            <Grid.Col key={attribute} span={4}>
                <Tooltip
                    disabled={alreadyPicked}
                    label={attributeDescriptions[attribute]}
                    transitionProps={{ transition: "slide-up", duration: 200 }}
                    events={globals.tooltipTriggerEvents}
                >
                    <Button
                        p={phoneScreen ? 0 : "default"}
                        leftIcon={dots}
                        variant={alreadyPicked ? "outline" : "filled"}
                        color="grape"
                        fullWidth
                        onClick={() => {
                            trackClick()
                            onClick()
                        }}
                    >
                        <Text fz={phoneScreen ? 12 : "inherit"}>{upcase(attribute)}</Text>
                    </Button>
                </Tooltip>

                {i % 3 === 0 || i % 3 === 1 ? <Divider size="xl" orientation="vertical" /> : null}
            </Grid.Col>
        )
    }

    const toPick = (() => {
        if (!pickedAttributes.strongest) return "strongest"
        else if (!pickedAttributes.weakest) return "weakest"
        else return "medium"
    })()

    const strongestStyle = toPick === "strongest" ? { fontSize: globals.largeFontSize } : { fontSize: globals.smallFontSize, color: "grey" }
    const weakestStyle = toPick === "weakest" ? { fontSize: globals.largeFontSize } : { fontSize: globals.smallFontSize, color: "grey" }
    const mediumStyle = toPick === "medium" ? { fontSize: globals.largeFontSize } : { fontSize: globals.smallFontSize, color: "grey" }

    return (
        <div>
            {globals.devMode ? (
                <Text ta="center" fz="xl" fw={700} c="blue" mb="md">
                    DEV MODE: Manual Attribute Control
                </Text>
            ) : (
                <>
                    <Text style={strongestStyle} ta={"center"}>
                        {toPick === "strongest" ? ">" : ""} Pick your <b>strongest</b> attribute! (lvl 4)
                    </Text>
                    <Text style={weakestStyle} ta={"center"}>
                        {toPick === "weakest" ? ">" : ""} Pick your <b> weakest</b> attribute! (lvl 1)
                    </Text>
                    <Text style={mediumStyle} ta={"center"}>
                        {toPick === "medium" ? ">" : ""} Pick <b>{3 - pickedAttributes.medium.length} medium</b> attribute
                        {pickedAttributes.medium.length < 2 ? "s" : ""}! (lvl 3)
                    </Text>
                    <Text style={{ fontSize: "14px", color: "grey" }} ta={"center"}>
                        Remaining attributes will be lvl 2
                    </Text>
                </>
            )}

            <Text mt={"xl"} ta="center" fz="xl" fw={700} c="red">
                Attributes
            </Text>

            <hr color="#e03131" />

            <Group>
                <Grid grow>
                    <Grid.Col span={4}>
                        <Text fs="italic" fw={700} ta="center">
                            Physical
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Text fs="italic" fw={700} ta="center">
                            Social
                        </Text>
                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Text fs="italic" fw={700} ta="center">
                            Mental
                        </Text>
                    </Grid.Col>
                    {["strength", "charisma", "intelligence", "dexterity", "manipulation", "wits", "stamina", "composure", "resolve"]
                        .map((a) => attributesKeySchema.parse(a))
                        .map((clan, i) => createButton(clan, i))}
                </Grid>
            </Group>

            {globals.devMode && (
                <Group position="center" mt="xl">
                    <Button onClick={nextStep} color="grape">
                        Continue to Next Step
                    </Button>
                </Group>
            )}
        </div>
    )
}

export default AttributePicker
