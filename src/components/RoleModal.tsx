import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button, Divider, Grid, Group, Modal, SegmentedControl, Stack, Text, Tooltip } from "@mantine/core"
import { useState } from "react"
import ReactGA from "react-ga4"
import { Character } from "../data/Character"
import { disciplines } from "../data/Disciplines"
import { Roles } from "../data/Role"
import { upcase } from "../generator/utils"
import { globals } from "../globals"
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
    const smallScreen = globals.isSmallScreen
    const phoneScreen = globals.isPhoneScreen

    const role = Roles[pickedRole]
    const pickedDiscipline = disciplines[discipline as DisciplineName]
    
    // State for selectable skill bonuses
    const [selectedSkillForBonus, setSelectedSkillForBonus] = useState(
        role.selectableSkillBonuses ? role.selectableSkillBonuses.options[0] : ""
    )

    const titleWidth = smallScreen ? "300px" : "750px"

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
                
                {role.skillBonuses && Object.keys(role.skillBonuses).length > 0 ? (
                    <div>
                        <Text fw={700} fz={"xl"}>
                            Skill Bonuses:
                        </Text>
                        <Grid>
                            {Object.entries(role.skillBonuses).map(([skill, bonus]) => (
                                <Grid.Col span={smallScreen ? 12 : 6} key={skill}>
                                    <Text fz={"lg"}>
                                        {upcase(skill)}: +{bonus}
                                    </Text>
                                </Grid.Col>
                            ))}
                        </Grid>
                        <Divider my="sm" />
                    </div>
                ) : null}

                {role.selectableSkillBonuses ? (
                    <div>
                        <Text fw={700} fz={"xl"} ta="center">
                            Choose skill to receive +{role.selectableSkillBonuses.points} bonus
                        </Text>
                        <SegmentedControl
                            size={phoneScreen ? "sm" : "md"}
                            color="yellow"
                            value={selectedSkillForBonus}
                            onChange={setSelectedSkillForBonus}
                            data={role.selectableSkillBonuses.options.map((skill) => ({
                                label: upcase(skill),
                                value: skill,
                            }))}
                        />
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
                            const pickedDisciplineOption = role.disciplineOptions.find(({ name }) => name === discipline)
                            if (!pickedSpecialty) {
                                console.error(`Couldn't find specialty with name ${specialty}`)
                            } else if (!pickedDisciplineOption) {
                                console.error(`Couldn't find discipline with name ${discipline}`)
                            } else {
                                const pickedDiscipline = disciplineNameSchema.parse(discipline)
                                const changedPickedDiscipline = pickedDiscipline !== character.role?.pickedDiscipline
                                
                                // Apply skill bonuses directly to character skills
                                const updatedSkills = { ...character.skills }
                                
                                // Apply fixed skill bonuses
                                if (role.skillBonuses) {
                                    Object.entries(role.skillBonuses).forEach(([skill, bonus]) => {
                                        if (skill in updatedSkills) {
                                            updatedSkills[skill as keyof typeof updatedSkills] = Math.max(0, updatedSkills[skill as keyof typeof updatedSkills] + bonus)
                                        }
                                    })
                                }
                                
                                // Apply selectable skill bonuses
                                if (role.selectableSkillBonuses && selectedSkillForBonus) {
                                    if (selectedSkillForBonus in updatedSkills) {
                                        updatedSkills[selectedSkillForBonus as keyof typeof updatedSkills] = Math.max(0, updatedSkills[selectedSkillForBonus as keyof typeof updatedSkills] + role.selectableSkillBonuses.points)
                                    }
                                }
                                
                                setCharacter({
                                    ...character,
                                    skills: updatedSkills,
                                    role: {
                                        name: pickedRole,
                                        pickedDiscipline,
                                        pickedSpecialties: [pickedSpecialty],
                                        pickedMeritsAndFlaws: [], // Empty array since we're not using merits/flaws anymore
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