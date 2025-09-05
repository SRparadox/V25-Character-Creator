import { useState } from "react";
import { Card, Center, Grid, Image, ScrollArea, Text, Title, useMantineTheme } from "@mantine/core";
// Update the import to match the actual export from Character.ts
// For example, if it's a default export:
// import Character from "../../data/Character";

// Or, if the file exports an interface/type with a different name, use that name:
// import { ActualExportedName } from "../../data/Character";

// If Character is not exported, add the following to ../../data/Character.ts:
// export type Character = { /* ...fields... */ };

// Placeholder import to avoid error (update as needed):
import type { Character } from "../../data/Character";
import { sectsData } from "../../data/Sects";
import CamarillaIcon from "../../resources/sectIcons/Camarilla.webp";
import AnarchIcon from "../../resources/sectIcons/Anarch.webp";
import IndependentIcon from "../../resources/sectIcons/Independent.webp";
import AshirraIcon from "../../resources/sectIcons/Ashirra.webp";
import BlackHandIcon from "../../resources/sectIcons/BlackHand.webp";
import SabbatIcon from "../../resources/sectIcons/Sabbat.webp";
import TalMaheRaIcon from "../../resources/sectIcons/TalMaheRa.webp";

export type Sect =
  | "Camarilla"
  | "Anarch"
  | "Independent"
  | "Ashirra"
  | "Black Hand"
  | "Sabbat"
  | "TalMaheRa";


const sectNames = Object.keys(sectsData) as Sect[];

export type SectPickerProps = {
  character: Character;
  setCharacter: (character: Character) => void;
  nextStep: () => void;
};


const SectPicker = ({ character, setCharacter, nextStep }: SectPickerProps) => {
  const theme = useMantineTheme();
  const [selectedSect, setSelectedSect] = useState<Sect | null>(
    sectNames.includes(character.sect as Sect) ? (character.sect as Sect) : null
  );

  const createSectPick = (sect: Sect) => {
    const { color, icon, summary } = sectsData[sect];
    const bgColor = theme.fn.linearGradient(0, "rgba(26, 27, 30, 0.90)", color);
    return (
      <Grid.Col key={sect} span={4}>
        <Card
          className="hoverCard"
          shadow="sm"
          padding="lg"
          radius="md"
          h={275}
          style={{ background: bgColor, cursor: "pointer", border: selectedSect === sect ? `2px solid ${color}` : undefined }}
          onClick={() => {
            setCharacter({ ...character, sect });
            setSelectedSect(sect);
            nextStep();
          }}
        >
          <Card.Section>
            <Center pt={10}>
              <Image fit="contain" withPlaceholder src={icon} height={120} width={120} alt={sect} />
            </Center>
          </Card.Section>
          <Center>
            <Title p="md">{sect}</Title>
          </Center>
          <Text h={55} size="sm" color="dimmed" ta="center">
            {summary}
          </Text>
        </Card>
      </Grid.Col>
    );
  };

  return (
    <div>
      <Text fz={"30px"} ta={"center"}>
        Pick your <b>Sect</b>
      </Text>
      <Text ta="center" fz="xl" fw={700} c="grape">
        Sect
      </Text>
      <hr color="#b5179e" />
      <ScrollArea h={500} w={"100%"} p={20}>
        <Grid grow m={0}>{sectNames.map((sect) => createSectPick(sect))}</Grid>
      </ScrollArea>
    </div>
  );
};

export default SectPicker;
