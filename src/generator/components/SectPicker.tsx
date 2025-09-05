import { useState } from "react";
import { Button, Group, Stack, Text, Title, Center } from "@mantine/core";
// Update the import to match the actual export from Character.ts
// For example, if it's a default export:
// import Character from "../../data/Character";

// Or, if the file exports an interface/type with a different name, use that name:
// import { ActualExportedName } from "../../data/Character";

// If Character is not exported, add the following to ../../data/Character.ts:
// export type Character = { /* ...fields... */ };

// Placeholder import to avoid error (update as needed):
import type { Character } from "../../data/Character";
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

const sects: { name: Sect; color: string; icon: string }[] = [
  { name: "Camarilla", color: "#bfc9d9", icon: CamarillaIcon },
  { name: "Anarch", color: "#e63946", icon: AnarchIcon },
  { name: "Independent", color: "#f4a259", icon: IndependentIcon },
  { name: "Ashirra", color: "#2a9d8f", icon: AshirraIcon },
  { name: "Black Hand", color: "#22223b", icon: BlackHandIcon },
  { name: "Sabbat", color: "#6d597a", icon: SabbatIcon },
  { name: "TalMaheRa", color: "#f72585", icon: TalMaheRaIcon },
];

export type SectPickerProps = {
  character: Character;
  setCharacter: (character: Character) => void;
  nextStep: () => void;
};

const SectPicker = ({ character, setCharacter, nextStep }: SectPickerProps) => {
  const [selectedSect, setSelectedSect] = useState<Sect | null>(
    sects.some(s => s.name === character.sect) ? (character.sect as Sect) : null
  );

  const handleSelect = (sect: Sect) => {
    setSelectedSect(sect);
    setCharacter({ ...character, sect });
  };

  return (
    <Center h="100%">
      <Stack spacing="xl" align="center">
        <Title order={2}>Choose a Sect</Title>
        <Group spacing="lg">
          {sects.map(({ name, color, icon }) => (
            <Button
              key={name}
              variant={selectedSect === name ? "filled" : "outline"}
              color={color}
              onClick={() => handleSelect(name)}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 120, height: 120 }}
            >
              <img src={icon} alt={name} style={{ width: 48, height: 48, marginBottom: 8 }} />
              <Text>{name}</Text>
            </Button>
          ))}
        </Group>
        <Button disabled={!selectedSect} onClick={nextStep} color="grape" size="lg">
          Next
        </Button>
      </Stack>
    </Center>
  );
};

export default SectPicker;
