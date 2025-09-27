import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Divider, Grid, Group, Modal, SegmentedControl, Stack, Text, Title, Tooltip, useMantineTheme } from "@mantine/core"
import ReactGA from "react-ga4"
import { Character, meritFlawSchema } from "../data/Character"
import { disciplines } from "../data/Disciplines"
import { Roles } from "../data/Role"
import { upcase } from "../generator/utils"
import { globals } from "../globals"
import usePointStates from "../hooks/usePointStates"
import PointPicker from "./PointPicker"
import Tally from "./Tally"
import { useEffect } from "react"
import { DisciplineName, disciplineNameSchema, RoleName } from "~/data/NameSchemas"

type RoleModalProps = {
    modalOpened: boolean
    closeModal: () => void
    character: Character
    pickedRole: RoleName
    setCharacter: (character: Character) => void
    nextStep: () => void
    specialty: string
    setSpecialty: (specialty: string) => void
    discipline: string
    setDiscipline: (specialty: string) => void
}

const RoleModal = ({
    modalOpened,
    closeModal,
    setCharacter,
    nextStep,
    character,
    pickedRole,
    specialty,
    setSpecialty,
    discipline,
    setDiscipline,
}: RoleModalProps) => {
    const theme = useMantineTheme()

    const smallScreen = globals.isSmallScreen
    const phoneScreen = globals.isPhoneScreen

    const role = Roles[pickedRole]
    const pickedDiscipline = disciplines[discipline as DisciplineName]

    const { pointStates, updatePointStates, setFromSelectableMeritsAndFlaws } = usePointStates(role.selectableMeritsAndFlaws)
    useEffect(() => {
        setFromSelectableMeritsAndFlaws(role.selectableMeritsAndFlaws)
    }, [pickedRole])

    const titleWidth = smallScreen ? "300px" : "750px"

    if (role.selectableMeritsAndFlaws.length > 0 && !pointStates?.at(role.selectableMeritsAndFlaws.length - 1)) {
        return <></>
    }

    return (
        <Modal
            withCloseButton={false}
            size="xl"
            opened={modalOpened}
            onClose={() => {
                closeModal()
            }}
            title={
                <div style={{ width: titleWidth }}>
                    <Text fw={700} fz={"30px"} ta="center">
                        {role.name}
                    </Text>
                    <Text style={{ fontSize: "25px", color: "grey" }} ta={"center"}>
                        This role comes with the following benefits and responsibilities
                    </Text>
                </div>
            }
            centered
        >
            <Stack>
                <Divider my="sm" />

                {role.bloodPotencyChange !== 0 ? (
                    <div>
                        <Grid>
                            <Grid.Col span={smallScreen ? 8 : 4}>
                                <Text fw={700} fz={"xl"}>
                                    Blood Potency Change:
                                </Text>
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <Text fz={"xl"} fw={700} ta={"center"} c={role.bloodPotencyChange > 0 ? "green" : "red"}>{`${
                                    role.bloodPotencyChange > 0 ? "+" : ""
                                }${role.bloodPotencyChange}`}</Text>
                            </Grid.Col>
                        </Grid>
                        <Divider my="sm" variant="dotted" />
                    </div>
                ) : null}

                {role.humanityChange !== 0 ? (
                    <div>
                        <Grid>
                            <Grid.Col span={smallScreen ? 8 : 4}>
                                <Text fw={700} fz={"xl"}>
                                    Humanity Change:
                                </Text>
                            </Grid.Col>
                            <Grid.Col span={4}>
                                <Text fz={"xl"} ta={"center"} fw={700} c={role.humanityChange > 0 ? "green" : "red"}>{`${
                                    role.humanityChange > 0 ? "+" : ""
                                }${role.humanityChange}`}</Text>
                            </Grid.Col>
                        </Grid>
                        <Divider my="sm" variant="dotted" />
                    </div>
                ) : null}
                
                {role.meritsAndFlaws.length !== 0 || role.selectableMeritsAndFlaws.length !== 0 ? (
                    <div>
                        <Group position="apart">
                            <Text fw={700} fz={"xl"}>
                                Merits and Flaws:
                            </Text>
                            <Stack w={"100%"}>
                                {role.meritsAndFlaws.map((mf) => {
                                    return (
                                        <Grid key={mf.name}>
                                            <Grid.Col span={smallScreen ? 8 : 4}>
                                                <Text miw={"220px"} maw={"80%"} fz={"xl"}>
                                                    {`${mf.name}: `}
                                                    <Text fz={"xs"}>{mf.summary}</Text>
                                                </Text>
                                            </Grid.Col>
                                            <Grid.Col span={4}>
                                                <Text fz={"xl"} ta={"center"}>
                                                    Lvl
                                                    <Tally
                                                        n={mf.level}
                                                        style={{ color: theme.colors.red[7], marginTop: "-5px" }}
                                                        size={"28px"}
                                                    />
                                                </Text>
                                            </Grid.Col>
                                        </Grid>
                                    )
                                })}

                                {role.selectableMeritsAndFlaws.map(({ options, totalPoints }, i) => {
                                    const subPointStates = pointStates[i].subPointStates
                                    const spentPoints = subPointStates.reduce((acc, cur) => {
                                        return acc + cur.selectedPoints
                                    }, 0)
                                    return (
                                        <>
                                            <Divider my="sm" />
                                            <Group key={i} position="apart">
                                                <Text maw={"80%"} fz={"xl"}>
                                                    {`Pick ${totalPoints} point(s) from: `}
                                                </Text>
                                                <Text>
                                                    Remaining: <Title ta={"center"} c={"red"}>{`${totalPoints - spentPoints}`}</Title>
                                                </Text>
                                                <Stack>
                                                    {options.map((option, j) => {
                                                        const { selectedPoints, maxLevel } = subPointStates[j]
                                                        return (
                                                            <Group key={role.name + "/" + option.name + j}>
                                                                <Tooltip
                                                                    disabled={option.summary === ""}
                                                                    label={`${upcase(option.summary)}`}
                                                                    transitionProps={{ transition: "slide-up", duration: 200 }}
                                                                    events={globals.tooltipTriggerEvents}
                                                                >
                                                                    <Text w={"140px"}>{option.name}</Text>
                                                                </Tooltip>
                                                                <PointPicker
                                                                    points={selectedPoints}
                                                                    setPoints={(n) => {
                                                                        updatePointStates(n, i, j)
                                                                    }}
                                                                    maxLevel={maxLevel}
                                                                />
                                                            </Group>
                                                        )
                                                    })}
                                                </Stack>
                                            </Group>
                                        </>
                                    )
                                })}
                            </Stack>
                        </Group>
                        <Divider my="sm" />
                    </div>
                ) : null}

                <Text fw={700} fz={"xl"} ta="center">
                    Select a skill specialty
                </Text>
                <SegmentedControl
                    size={phoneScreen ? "sm" : "md"}
                    color="yellow"
                    value={specialty}
                    onChange={setSpecialty}
                    data={role.specialtyOptions.map((specialty) => ({
                        label: `${upcase(specialty.skill)}: ${specialty.name}`,
                        value: `${specialty.skill}_${specialty.name}`,
                    }))}
                />
                <Divider my="sm" />

                <Text fw={700} fz={"xl"} ta="center">
                    Take a bonus level to a discipline
                </Text>
                <Tooltip
                    label={`${upcase(discipline)}: ${pickedDiscipline.summary}`}
                    transitionProps={{ transition: "slide-up", duration: 200 }}
                    events={globals.tooltipTriggerEvents}
                >
                    <SegmentedControl
                        size={phoneScreen ? "sm" : "md"}
                        color="yellow"
                        value={discipline}
                        onChange={setDiscipline}
                        data={role.disciplineOptions.map((discipline) => ({
                            label: upcase(discipline.name),
                            value: discipline.name,
                        }))}
                    />
                </Tooltip>

                <Divider my="sm" />

                <Group position="apart">
                    <Button color="yellow" variant="subtle" leftIcon={<FontAwesomeIcon icon={faChevronLeft} />} onClick={closeModal}>
                        Back
                    </Button>

                    <Button
                        color="yellow"
                        onClick={async () => {
                            const pickedSpecialty = role.specialtyOptions.find(({ name }) => name === specialty.split("_")[1])
                            const pickedDiscipline = role.disciplineOptions.find(({ name }) => name === discipline)
                            if (!pickedSpecialty) {
                                console.error(`Couldn't find specialty with name ${specialty}`)
                            } else if (!pickedDiscipline) {
                                console.error(`Couldn't find discipline with name ${discipline}`)
                            } else {
                                const pickedMeritsAndFlaws = role.selectableMeritsAndFlaws.flatMap((selectable, i) => {
                                    const subPointStates = pointStates[i].subPointStates
                                    const pickedMerits = selectable.options.flatMap((option, j) => {
                                        const { selectedPoints } = subPointStates[j]
                                        if (selectedPoints === 0) return []
                                        return meritFlawSchema.parse({
                                            name: option.name,
                                            summary: option.summary,
                                            level: selectedPoints,
                                            type: "merit",
                                        })
                                    })
                                    return pickedMerits
                                })

                                const pickedDiscipline = disciplineNameSchema.parse(discipline)
                                const changedPickedDiscipline = pickedDiscipline !== character.role?.pickedDiscipline
                                setCharacter({
                                    ...character,
                                    role: {
                                        name: pickedRole,
                                        pickedDiscipline,
                                        pickedSpecialties: [pickedSpecialty],
                                        pickedMeritsAndFlaws,
                                    },
                                    disciplines: changedPickedDiscipline ? [] : character.disciplines,
                                    rituals: changedPickedDiscipline ? [] : character.rituals,
                                })

                                ReactGA.event({
                                    action: "role confirm clicked",
                                    category: "role",
                                    label: pickedRole,
                                })

                                closeModal()
                                nextStep()
                            }
                        }}
                    >
                        Confirm
                    </Button>
                </Group>
            </Stack>
        </Modal>
    )
}

export default RoleModal