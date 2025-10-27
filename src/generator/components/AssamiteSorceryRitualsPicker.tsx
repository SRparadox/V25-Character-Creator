import { Badge, Button, Card, Center, Grid, Group, ScrollArea, Space, Stack, Text } from "@mantine/core";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { AssamiteSorceryRituals } from "../../data/Disciplines";
import { Character } from "../../data/Character";
import { globals } from "../../globals";
import { upcase } from "../utils";

interface AssamiteSorceryRitualsPickerProps {
  character: Character;
  setCharacter: (character: Character) => void;
  nextStep: () => void;
}

const AssamiteSorceryRitualsPicker = ({ character, setCharacter, nextStep }: AssamiteSorceryRitualsPickerProps) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", title: "Assamite Sorcery Rituals Picker" });
  }, []);

  const smallScreen = globals.isSmallScreen;
  const phoneScreen = globals.isPhoneScreen;
  const height = globals.viewportHeightPx;

  const getAssamiteSorceryRitualCardCols = () => {
    const devMode = globals.devMode;
    return AssamiteSorceryRituals.map((ritual) => {
      const trackClick = () => {
        ReactGA.event({
          action: "assamite sorcery ritual clicked",
          category: "assamite sorcery rituals",
          label: ritual.name,
        });
      };
      const onClick = () => {
        setCharacter({
          ...character,
          assamiteSorceryRituals: devMode
            ? [...(character.assamiteSorceryRituals || []), ritual].filter((r, i, arr) => arr.findIndex(rr => rr.name === r.name) === i)
            : [ritual],
        });
        trackClick();
        if (!devMode) nextStep();
      };
      const onUnselect = () => {
        setCharacter({
          ...character,
          assamiteSorceryRituals: (character.assamiteSorceryRituals || []).filter((r) => r.name !== ritual.name),
        });
      };

      let cardHeight = phoneScreen ? 180 : 215;
      if (ritual.name.length > 15) cardHeight += 25;
      const isPicked = (character.assamiteSorceryRituals || []).some((r) => r.name === ritual.name);
      return (
        <Grid.Col key={ritual.name} span={smallScreen ? 12 : 6}>
          <Card mb={20} h={cardHeight} style={{ backgroundColor: "rgba(26, 27, 30, 0.90)" }}>
            <Group position="apart" mt="0" mb="xs">
              <Text fz={smallScreen && !phoneScreen ? "xs" : "sm"} weight={500}>
                {ritual.name}
              </Text>
              <Badge pos={"absolute"} top={0} right={0} radius={"xs"} color="red" variant="light">
                lv {ritual.level}
              </Badge>
            </Group>
            <Text fz={"sm"} size="sm" color="dimmed">
              {upcase(ritual.summary)}
            </Text>
            <div style={{ position: "absolute", bottom: "0", width: "100%", padding: "inherit", left: 0, display: 'flex', gap: 8 }}>
              <Button onClick={onClick} variant="light" color="red" fullWidth radius="md">
                <Text truncate>Take {ritual.name}</Text>
              </Button>
              {devMode && isPicked && (
                <Button onClick={onUnselect} variant="outline" color="yellow" radius="md">
                  Unselect
                </Button>
              )}
            </div>
          </Card>
        </Grid.Col>
      );
    });
  };

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
        {globals.devMode ? "Dev Mode: Pick as many Assamite Sorcery rituals as you want!" : "⚔️ Pick 1 free Assamite Sorcery Ritual ⚔️"}
      </Text>
      <Text mt={"xl"} ta="center" fz="xl" fw={700} c="red">
        Assamite Sorcery Rituals
      </Text>
      <hr color="#fa5252" />
      <Space h={"sm"} />
      <Stack align="center" spacing="xl" w={"100%"}>
        <ScrollArea h={smallScreen ? height - 320 : height - 400} pb={20} w={"105%"}>
          <Center>
            <Stack>
              <Grid w={"100%"}>{getAssamiteSorceryRitualCardCols()}</Grid>
            </Stack>
          </Center>
        </ScrollArea>
      </Stack>
    </div>
  );
};

export default AssamiteSorceryRitualsPicker;