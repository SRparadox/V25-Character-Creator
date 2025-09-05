import { Badge, Button, Card, Center, Grid, Group, ScrollArea, Space, Stack, Text } from "@mantine/core";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Ceremonies } from "../../data/Disciplines";
import { Character } from "../../data/Character";
import { globals } from "../../globals";
import { upcase } from "../utils";

interface CeremoniesPickerProps {
  character: Character;
  setCharacter: (character: Character) => void;
  nextStep: () => void;
}

const CeremoniesPicker = ({ character, setCharacter, nextStep }: CeremoniesPickerProps) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", title: "Ceremonies Picker" });
  }, []);

  const smallScreen = globals.isSmallScreen;
  const phoneScreen = globals.isPhoneScreen;
  const height = globals.viewportHeightPx;

  const getCeremonyCardCols = () => {
    return Ceremonies.map((ceremony) => {
      const trackClick = () => {
        ReactGA.event({
          action: "ceremony clicked",
          category: "ceremonies",
          label: ceremony.name,
        });
      };
      const onClick = () => {
        setCharacter({
          ...character,
          ceremonies: [ceremony], // TODO: allow multiple ceremonies if needed
        });
        trackClick();
        nextStep();
      };
      let cardHeight = phoneScreen ? 180 : 215;
      if (ceremony.name.length > 15) cardHeight += 25;
      return (
        <Grid.Col key={ceremony.name} span={smallScreen ? 12 : 6}>
          <Card mb={20} h={cardHeight} style={{ backgroundColor: "rgba(26, 27, 30, 0.90)" }}>
            <Group position="apart" mt="0" mb="xs">
              <Text fz={smallScreen && !phoneScreen ? "xs" : "sm"} weight={500}>
                {ceremony.name}
              </Text>
              <Badge pos={"absolute"} top={0} right={0} radius={"xs"} color="violet" variant="light">
                lv {ceremony.level}
              </Badge>
            </Group>
            <Text fz={"sm"} size="sm" color="dimmed">
              {upcase(ceremony.summary)}
            </Text>
            <div style={{ position: "absolute", bottom: "0", width: "100%", padding: "inherit", left: 0 }}>
              <Button onClick={onClick} variant="light" color="grape" fullWidth radius="md">
                <Text truncate>Take {ceremony.name}</Text>
              </Button>
            </div>
          </Card>
        </Grid.Col>
      );
    });
  };

  return (
    <div style={{ width: smallScreen ? "393px" : "810px", marginTop: phoneScreen ? "60px" : "80px" }}>
      <Text fw={700} fz={smallScreen ? "14px" : "28px"} ta="center">
        ⛤ Pick 1 free Ceremony ⛤
      </Text>
      <Text mt={"xl"} ta="center" fz="xl" fw={700} c="violet">
        Ceremonies
      </Text>
      <hr color="#ae3ec9" />
      <Space h={"sm"} />
      <Stack align="center" spacing="xl" w={"100%"}>
        <ScrollArea h={smallScreen ? height - 320 : height - 400} pb={20} w={"105%"}>
          <Center>
            <Stack>
              <Grid w={"100%"}>{getCeremonyCardCols()}</Grid>
            </Stack>
          </Center>
        </ScrollArea>
      </Stack>
    </div>
  );
};

export default CeremoniesPicker;
