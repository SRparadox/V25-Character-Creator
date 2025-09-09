import { Badge, Button, Card, Center, Grid, Group, ScrollArea, Space, Stack, Text } from "@mantine/core"
import { useEffect } from "react"
import ReactGA from "react-ga4"
import { Character, containsBloodSorcery } from "../../data/Character"
import { Rituals } from "../../data/Disciplines"
import { globals } from "../../globals"
import { upcase } from "../utils"

type RitualsPickerProps = {
    character: Character
    setCharacter: (character: Character) => void
    nextStep: () => void
}

const RitualsPicker = ({ character, setCharacter, nextStep }: RitualsPickerProps) => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", title: "Rituals Picker" })
    }, [])
    if (!containsBloodSorcery(character.disciplines)) {
        return <></>
    }

    const smallScreen = globals.isSmallScreen
    const phoneScreen = globals.isPhoneScreen

    const getRitualCardCols = () => {
        const devMode = globals.devMode;
        return Rituals.map((ritual) => {
            const trackClick = () => {
                ReactGA.event({
                    action: "ritual clicked",
                    category: "rituals",
                    label: ritual.name,
                })
            }
            const onClick = () => {
                setCharacter({
                    ...character,
                    rituals: devMode
                        ? [...(character.rituals || []), ritual].filter((r, i, arr) => arr.findIndex(rr => rr.name === r.name) === i)
                        : [ritual],
                })
                trackClick()
                if (!devMode) nextStep()
            }

            let cardHeight = phoneScreen ? 180 : 215
            if (ritual.name.length > 15) cardHeight += 25
            return (
                <Grid.Col key={ritual.name} span={smallScreen ? 12 : 6}>
                    <Card mb={20} h={cardHeight} style={{ backgroundColor: "rgba(26, 27, 30, 0.90)" }}>
                        <Group position="apart" mt="0" mb="xs">
                            <Text fz={smallScreen && !phoneScreen ? "xs" : "sm"} weight={500}>
                                {ritual.name}
                            </Text>
                            <Badge pos={"absolute"} top={0} right={0} radius={"xs"} color="pink" variant="light">
                                lv {ritual.level}
                            </Badge>
                        </Group>

                        <Text fz={"sm"} size="sm" color="dimmed">
                            {upcase(ritual.summary)}
                        </Text>

                        <div style={{ position: "absolute", bottom: "0", width: "100%", padding: "inherit", left: 0 }}>
                            <Button onClick={onClick} variant="light" color="blue" fullWidth radius="md">
                                <Text truncate>Take {ritual.name}</Text>
                            </Button>
                        </div>
                    </Card>
                </Grid.Col>
            )
        })
    }

    const height = globals.viewportHeightPx
    return (
        <div style={{ width: smallScreen ? "393px" : "810px", marginTop: phoneScreen ? "60px" : "80px", position: "relative" }}>
            {globals.devMode && (
                <div style={{ position: "absolute", top: 10, right: 20, zIndex: 1000 }}>
                    <Text fw={900} fz={"lg"} c="lime" bg="#222" p={6} style={{ borderRadius: 8 }}>
                        DEV MODE ACTIVE
                    </Text>
                </div>
            )}
            <Text fw={700} fz={smallScreen ? "14px" : "28px"} ta="center">
                {globals.devMode ? "Dev Mode: Pick as many rituals as you want!" : "⛤ Pick 1 free Ritual ⛤"}
            </Text>

            <Text mt={"xl"} ta="center" fz="xl" fw={700} c="red">
                Rituals
            </Text>
            <hr color="#e03131" />
            <Space h={"sm"} />

            <Stack align="center" spacing="xl" w={"100%"}>
                <ScrollArea h={smallScreen ? height - 320 : height - 400} pb={20} w={"105%"}>
                    <Center>
                        <Stack>
                            <Grid w={"100%"}>{getRitualCardCols()}</Grid>
                        </Stack>
                    </Center>
                </ScrollArea>
            </Stack>
        </div>
    )
}

export default RitualsPicker
