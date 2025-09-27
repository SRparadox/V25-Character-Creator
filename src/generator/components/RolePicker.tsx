import { Button, Divider, Grid, ScrollArea, Space, Stack, Text, Tooltip } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { useEffect, useState } from "react"
import ReactGA from "react-ga4"
import { Character } from "../../data/Character"
import { Roles } from "../../data/Role"
import { globals } from "../../globals"
import RoleModal from "../../components/RoleModal"
import { RoleName } from "~/data/NameSchemas"

type RolePickerProps = {
    character: Character
    setCharacter: (character: Character) => void
    nextStep: () => void
}

const RolePicker = ({ character, setCharacter, nextStep }: RolePickerProps) => {
    const phoneScreen = globals.isPhoneScreen

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", title: "Role Picker" })
    }, [])

    const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false)
    const [pickedRole, setPickedRole] = useState<RoleName>("")

    const [specialty, setSpecialty] = useState("")
    const [discipline, setDiscipline] = useState("")

    const createButton = (roleName: RoleName, color: string) => {
        return (
            <Tooltip
                label={Roles[roleName].summary}
                key={roleName}
                transitionProps={{ transition: "slide-up", duration: 200 }}
            >
                <Button
                    color={color}
                    onClick={() => {
                        const firstSpecialtyOption = Roles[roleName].specialtyOptions[0]
                        const firstDisciplineOption = Roles[roleName].disciplineOptions[0]

                        setPickedRole(roleName)
                        setSpecialty(`${firstSpecialtyOption?.skill}_${firstSpecialtyOption?.name}`)
                        setDiscipline(firstDisciplineOption?.name)
                        openModal()
                    }}
                >
                    {roleName}
                </Button>
            </Tooltip>
        )
    }

    const createRoleStack = () => (
        <Stack spacing="xl">
            <Grid m={0}>
                <Grid.Col span={4}>
                    <h1>Combat</h1>
                </Grid.Col>
                <Grid.Col offset={phoneScreen ? 1 : 0} span={phoneScreen ? 6 : 4}>
                    <Stack>
                        {([
                            "Bodyguard", "Assassin", "Enforcer"
                        ] as RoleName[]).map((roleName) =>
                            createButton(roleName, "red")
                        )}
                    </Stack>
                </Grid.Col>
            </Grid>

            <Divider color="grape" />

            <Grid m={0}>
                <Grid.Col span={4}>
                    <h1>Social</h1>
                </Grid.Col>
                <Grid.Col offset={phoneScreen ? 1 : 0} span={phoneScreen ? 6 : 4}>
                    <Stack>
                        {([
                            "Socialite", "Servant"
                        ] as RoleName[]).map((roleName) =>
                            createButton(roleName, "grape")
                        )}
                    </Stack>
                </Grid.Col>
            </Grid>

            <Divider color="blue" />

            <Grid m={0}>
                <Grid.Col span={4}>
                    <h1>Intelligence</h1>
                </Grid.Col>
                <Grid.Col offset={phoneScreen ? 1 : 0} span={phoneScreen ? 6 : 4}>
                    <Stack>
                        {([
                            "Spy", "Scholar"
                        ] as RoleName[]).map((roleName) =>
                            createButton(roleName, "blue")
                        )}
                    </Stack>
                </Grid.Col>
            </Grid>
        </Stack>
    )

    const height = globals.viewportHeightPx
    const heightBreakPoint = 1250
    return (
        <div style={{ width: "100%", marginTop: height < heightBreakPoint ? "50px" : "55px" }}>
            <Text fz={globals.largeFontSize} ta={"center"}>
                <div>
                    What is your <b>role</b> as a ghoul?
                </div>
            </Text>

            <Text mt={"xl"} ta="center" fz="xl" fw={700} c="yellow">
                Role
            </Text>
            <hr color="#fab005" />
            <Space h={"sm"} />

            {height < heightBreakPoint ? <ScrollArea h={height - 230}>{createRoleStack()}</ScrollArea> : createRoleStack()}

            {pickedRole != "" ? (
                <RoleModal
                    modalOpened={modalOpened}
                    closeModal={closeModal}
                    character={character}
                    pickedRole={pickedRole}
                    setCharacter={setCharacter}
                    nextStep={nextStep}
                    specialty={specialty}
                    setSpecialty={setSpecialty}
                    discipline={discipline}
                    setDiscipline={setDiscipline}
                />
            ) : null}
        </div>
    )
}

export default RolePicker