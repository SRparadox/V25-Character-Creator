import { Accordion, Badge, Button, Card, Center, Grid, Group, Image, List, ScrollArea, Space, Stack, Text } from "@mantine/core"
import { useEffect, useState } from "react"
import ReactGA from "react-ga4"
import { Character, containsBloodSorcery } from "../../data/Character"
import { Discipline, Power, disciplines } from "../../data/Disciplines"
import { globals } from "../../globals"
import { intersection, upcase } from "../utils"
import { DisciplineName } from "~/data/NameSchemas"

type DisciplinesPickerProps = {
    character: Character
    setCharacter: (character: Character) => void
    nextStep: () => void
}

const getAvailableDisciplines = (character: Character): Record<DisciplineName, Discipline> => {
    if (globals.devMode) {
        // In dev mode, show all disciplines (like Caitiff)
        return { ...disciplines };
    }
    const availableDisciplines: Record<string, Discipline> = {}
    console.log('Character availableDisciplineNames:', character.availableDisciplineNames)
    for (const n of character.availableDisciplineNames) {
        // Only add disciplines that actually exist in the disciplines object
        console.log(`Checking discipline: "${n}", exists: ${!!disciplines[n]}`)
        if (disciplines[n]) {
            availableDisciplines[n] = disciplines[n]
        } else {
            console.warn(`Discipline "${n}" not found in disciplines object`)
        }
    }
    console.log('Available disciplines for clan:', Object.keys(availableDisciplines))
    return availableDisciplines
}

const DisciplinesPicker = ({ character, setCharacter, nextStep }: DisciplinesPickerProps) => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", title: "Disciplines Picker" })
    }, [])

    const smallScreen = globals.isSmallScreen
    const phoneScreen = globals.isPhoneScreen
    const [pickedPowers, setPickedPowers] = useState<Power[]>([])
    const [pickedPredatorTypePower, setPickedPredatorTypePower] = useState<Power | undefined>()

    let allPickedPowers = pickedPredatorTypePower ? [...pickedPowers, pickedPredatorTypePower] : pickedPowers

    const disciplinesForClan = getAvailableDisciplines(character)
    const predatorTypeDiscipline = character.predatorType.pickedDiscipline ? disciplines[character.predatorType.pickedDiscipline] : undefined

    const isPicked = (power: Power) => {
        return allPickedPowers.map((power) => power.name).includes(power.name)
    }
    const missingAmalgamPrereq = (power: Power) => {
        for (const { discipline, level } of power.amalgamPrerequisites) {
            const pickedDisciplineLevel = allPickedPowers
                .map((power) => power.discipline)
                .filter((powerDisc) => powerDisc === discipline).length

            if (pickedDisciplineLevel < level) return true
        }
        return false
    }
    const missingPrerequisites = (power: Power) => {
        const powersOfDiscipline = disciplines[power.discipline].powers

        // lvl n powers require picking n-1 powers to access
        if (intersection(powersOfDiscipline, allPickedPowers).length < power.level - 1) return true

        if (missingAmalgamPrereq(power)) return true

        return false
    }
    const alreadyPickedTwoPowers = (power: Power) => {
        const powersOfDiscipline = disciplines[power.discipline].powers

        return intersection(powersOfDiscipline, pickedPowers).length === 2
    }
    const alreadyPickedTwoDisciplines = (power: Power) => {
        if (globals.devMode) return false;
        const pickedDisciplines = pickedPowers.map((power) => power.discipline)
        const uniquePickedDisciplines = [...new Set(pickedDisciplines)]
        return uniquePickedDisciplines.length >= 2 && !uniquePickedDisciplines.includes(power.discipline)
    }
    const allPowersPicked = () => {
        if (globals.devMode) return false;
        // Ghouls can only pick 1 discipline power total
        if (character.clan === "Ghoul") return pickedPowers.length >= 1;
        return pickedPowers.length >= 3;
    }

    const undoPick = () => {
        setPickedPowers(pickedPowers.slice(0, -1))
        // Prepare allPickedPowers to check if pickedPredatorTypePower still meets prerequisites
        allPickedPowers = pickedPowers.slice(0, -1)
        if (pickedPredatorTypePower && missingPrerequisites(pickedPredatorTypePower)) {
            setPickedPredatorTypePower(undefined)
        }
    }
    const undoPredatorTypePick = () => {
        // Prepare allPickedPowers to check if pickedPowers still meet prerequisites
        allPickedPowers = allPickedPowers
            .filter((p) => p.name !== pickedPredatorTypePower?.name)
            .filter((p) => !(p.discipline === pickedPredatorTypePower?.discipline && p.level > (pickedPredatorTypePower?.level ?? 0))) // remove powers of same discipline with higher level
        setPickedPredatorTypePower(undefined)
        setPickedPowers(pickedPowers.filter((p) => !missingPrerequisites(p)))
    }

    const getPowerCards = (powers: Power[], isForPredatorType = false) => {
        const fixedWidth = 260;
        const fixedHeight = 260;
        return powers.map((power) => {
            const isButtonDisabled =
                isPicked(power) ||
                missingPrerequisites(power) ||
                (!isForPredatorType && (!globals.devMode && (
                    // For Ghouls: only allow 1 power total, no restrictions on disciplines
                    (character.clan === "Ghoul" ? allPowersPicked() : (alreadyPickedTwoPowers(power) || alreadyPickedTwoDisciplines(power) || allPowersPicked()))
                ))) ||
                (isForPredatorType && pickedPredatorTypePower !== undefined)

            const trackClick = () => {
                ReactGA.event({
                    action: "power clicked",
                    category: "disciplines",
                    label: power.name,
                })
            }
            const onClick = () => (isForPredatorType ? setPickedPredatorTypePower(power) : setPickedPowers([...pickedPowers, power]))

            const amalgamHeight = 25
            return (
                <Card
                    key={power.name}
                    mb={20}
                    style={{
                        backgroundColor: "rgba(26, 27, 30, 0.90)",
                        width: fixedWidth,
                        minWidth: fixedWidth,
                        maxWidth: fixedWidth,
                        height: fixedHeight,
                        minHeight: fixedHeight,
                        maxHeight: fixedHeight,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        textAlign: "center"
                    }}
                >
                    <div style={{ width: "100%" }}>
                        <Group position="apart" mt="0" mb="xs" style={{ width: "100%" }}>
                            <Text fz={smallScreen && !phoneScreen ? "xs" : "sm"} weight={500}>
                                {power.name}
                            </Text>
                            <Badge pos={"absolute"} top={0} right={0} radius={"xs"} color="pink" variant="light">
                                lv {power.level}
                            </Badge>
                        </Group>
                        <Text fz={"sm"} size="sm" color="dimmed" mt={8}>
                            {upcase(power.summary)}
                        </Text>
                        {power.amalgamPrerequisites.length > 0 ? (
                            <div style={{ height: amalgamHeight, marginTop: 8 }}>
                                <Text size="sm" color="red">
                                    Requires:
                                </Text>
                                <List size="xs">
                                    {power.amalgamPrerequisites.map((prereq) => {
                                        return (
                                            <List.Item key={power.name + prereq.discipline}>
                                                {upcase(prereq.discipline)}: Lv {prereq.level}
                                            </List.Item>
                                        )
                                    })}
                                </List>
                                {missingAmalgamPrereq(power) ? null : (
                                    <Text size="xs" color="green">
                                        (requirements met)
                                    </Text>
                                )}
                            </div>
                        ) : null}
                    </div>
                    <div style={{ width: "100%", marginTop: "auto" }}>
                        <Button
                            disabled={isButtonDisabled}
                            onClick={() => {
                                onClick()
                                trackClick()
                            }}
                            variant="light"
                            color="blue"
                            fullWidth
                            radius="md"
                        >
                            <Text truncate>Take {power.name}</Text>
                        </Button>
                    </div>
                </Card>
            )
        })
    }

    const getDisciplineAccordionItem = (disciplineName: string, discipline: Discipline, isPredatorType = false) => {
        // Safety check: ensure discipline is defined
        if (!discipline || !discipline.powers) {
            console.warn(`Discipline '${disciplineName}' is undefined or has no powers`);
            return null;
        }

        const clanHasPrereqDisciplines = (power: Power) => {
            const prereqDisciplines = power.amalgamPrerequisites.map((prereq) => prereq.discipline)
            for (const disc of prereqDisciplines) {
                if (disciplinesForClan[disc] === undefined) return false
            }
            return true
        }

        // Only show Amalgams that the clan can theoretically pick; using predator-type to get amalgams is intentionally impossible
        const eligiblePowers = discipline.powers.filter(clanHasPrereqDisciplines)

        const lvl1Powers = eligiblePowers.filter((power) => power.level === 1)
        const lvl2Powers = eligiblePowers.filter((power) => power.level === 2)
        const lvl3Powers = eligiblePowers.filter((power) => power.level === 3)
        const lvl4Powers = eligiblePowers.filter((power) => power.level === 4)
        const lvl5Powers = eligiblePowers.filter((power) => power.level === 5)

        return (
            <Accordion.Item key={disciplineName + isPredatorType} value={disciplineName + isPredatorType}>
                <Accordion.Control icon={<Image src={discipline.logo} />}>{upcase(disciplineName)}</Accordion.Control>
                <Accordion.Panel>
                    <ScrollArea type="scroll" scrollbarSize={8} offsetScrollbars>
                        <Group noWrap align="flex-start">
                            <Stack align="center" spacing="xs">
                                <Text fw={700} fz="md" mt="sm">Level 1</Text>
                                {getPowerCards(lvl1Powers, isPredatorType)}
                            </Stack>
                            <Stack align="center" spacing="xs">
                                <Text fw={700} fz="md" mt="sm">Level 2</Text>
                                {getPowerCards(lvl2Powers, isPredatorType)}
                            </Stack>
                            <Stack align="center" spacing="xs">
                                <Text fw={700} fz="md" mt="sm">Level 3</Text>
                                {getPowerCards(lvl3Powers, isPredatorType)}
                            </Stack>
                            <Stack align="center" spacing="xs">
                                <Text fw={700} fz="md" mt="sm">Level 4</Text>
                                {getPowerCards(lvl4Powers, isPredatorType)}
                            </Stack>
                            <Stack align="center" spacing="xs">
                                <Text fw={700} fz="md" mt="sm">Level 5</Text>
                                {getPowerCards(lvl5Powers, isPredatorType)}
                            </Stack>
                        </Group>
                    </ScrollArea>
                </Accordion.Panel>
            </Accordion.Item>
        )
    }

    const getPickedPowersSection = () => {
        return (
            <Grid.Col span={smallScreen ? 12 : 2} mt={smallScreen ? "30px" : 0}>
                <Center style={{ height: "100%" }}>
                    <Stack>
                        {powersSortedByDiscipline.map((power) => {
                            if (power.discipline !== disciplineTitle) {
                                disciplineTitle = power.discipline
                                return (
                                    <div key={power.name}>
                                        <Text weight={700} size={"xl"}>
                                            {upcase(power.discipline)}
                                        </Text>
                                        <Text> {power.name}</Text>
                                    </div>
                                )
                            }
                            return <Text key={power.name}>{power.name}</Text>
                        })}
                        {pickedPowers.length > 0 ? (
                            <Button variant="light" color="red" onClick={undoPick}>
                                Undo last pick
                            </Button>
                        ) : null}

                        {/* Predator Type Discipline pick */}
                        {pickedPredatorTypePower ? (
                            <div>
                                {powersSortedByDiscipline.length > 0 ? <hr style={{ width: "100%" }} color="#e03131" /> : null}

                                <Text weight={700} size={"xl"}>
                                    {upcase(pickedPredatorTypePower.discipline)}
                                </Text>
                                <Text> {pickedPredatorTypePower.name}</Text>

                                <Button variant="light" color="red" onClick={undoPredatorTypePick}>
                                    Undo pred pick
                                </Button>
                            </div>
                        ) : null}
                    </Stack>
                </Center>
            </Grid.Col>
        )
    }

    const powersSortedByDiscipline = pickedPowers.sort()
    let disciplineTitle = ""
    const height = globals.viewportHeightPx

    const isThinBlood = character.clan === "Thin-blood"
    if (isThinBlood) {
        return (
            <div style={{ width: smallScreen ? "393px" : "810px", marginTop: globals.isPhoneScreen ? "60px" : "80px" }}>
                <Text fw={500} fz={smallScreen ? "14px" : "28px"} ta="center">
                    <b>Thin-bloods</b> do not pick disciplines
                    <br /> you gain them from blood resonance
                </Text>

                <Center mt={"lg"}>
                    <Button
                        color={"red"}
                        onClick={() => {
                            ReactGA.event({
                                action: "power clicked",
                                category: "disciplines",
                                label: "thin-blood - no disciplines",
                            })

                            nextStep()
                        }}
                    >
                        Continue
                    </Button>
                </Center>
            </div>
        )
    }

    return (
        <div style={{ width: smallScreen ? "393px" : "810px", marginTop: globals.isPhoneScreen ? "60px" : "80px", position: "relative" }}>
            {globals.devMode && (
                <div style={{ position: "absolute", top: 10, right: 20, zIndex: 1000 }}>
                    <Text fw={900} fz={"lg"} c="lime" bg="#222" p={6} style={{ borderRadius: 8 }}>
                        DEV MODE ACTIVE
                    </Text>
                </div>
            )}
            <Text fw={700} fz={smallScreen ? "14px" : "28px"} ta="center">
                {globals.devMode ? (
                    <>Dev Mode: Pick as many powers as you want!</>
                ) : character.clan === "Ghoul" ? (
                    <>
                        Pick 1 discipline power
                    </>
                ) : (
                    <>
                        Pick 2 powers in one discipline,
                        <br /> 1 power in another,
                        <br /> And 1 power in {character.predatorType.pickedDiscipline ? upcase(character.predatorType.pickedDiscipline) : "your Predator Type discipline"} from your Predator Type
                    </>
                )}
            </Text>

            <Text mt={"xl"} ta="center" fz="xl" fw={700} c="red">
                Disciplines
            </Text>
            <hr color="#e03131" />
            <Space h={"sm"} />

            <Stack align="center" spacing="xl" w={"100%"}>
                <Grid w={"100%"}>
                    {/* Picked Powers */}
                    {smallScreen ? null : getPickedPowersSection()}

                    {/* Discipline-List */}

                    <Grid.Col span={smallScreen ? 12 : 9} offset={smallScreen ? 0 : 1}>
                        <ScrollArea h={smallScreen ? height - 320 : height - 400} pb={20} w={"105%"}>
                            <Center>
                                <Accordion w={smallScreen ? "100%" : "600px"}>
                                    {Object.entries(disciplinesForClan).map(([name, discipline]) => {
                                        const item = getDisciplineAccordionItem(name, discipline);
                                        return item; // This might be null if discipline is invalid
                                    }).filter(Boolean)} {/* Filter out null values */}

                                    {/* Hide predator type discipline section for Ghouls */}
                                    {character.clan !== "Ghoul" && character.predatorType.pickedDiscipline && predatorTypeDiscipline && (
                                        <>
                                            <Text fw={700} mt={"lg"} c={"red"} ta={"center"}>
                                                Predator Type Discipline
                                            </Text>
                                            <hr color="#e03131" />
                                            {getDisciplineAccordionItem(character.predatorType.pickedDiscipline, predatorTypeDiscipline, true)}
                                        </>
                                    )}
                                </Accordion>
                            </Center>

                            {/* Picked Powers */}
                            {smallScreen ? getPickedPowersSection() : null}
                        </ScrollArea>
                    </Grid.Col>
                </Grid>

                <Button
                    disabled={globals.devMode ? false : 
                        character.clan === "Ghoul" ? 
                            !allPowersPicked() : 
                            !(allPowersPicked() && pickedPredatorTypePower)
                    }
                    color="grape"
                    onClick={() => {
                        setCharacter({
                            ...character,
                            disciplines: allPickedPowers,
                            rituals: containsBloodSorcery(allPickedPowers) ? character.rituals : [],
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

export default DisciplinesPicker
