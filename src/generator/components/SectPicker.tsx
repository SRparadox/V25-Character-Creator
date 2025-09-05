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
import { sectSchema } from "../../data/Character";

export type Sect = typeof sectSchema._type;

import FollowersOfSetIcon from "../../resources/sectIcons/FollowersOfSet.png";
import TheBahariIcon from "../../resources/sectIcons/TheBahari.png";
import ChurchOfCainIcon from "../../resources/sectIcons/ChurchOfCain.png";
import NonBelieverIcon from "../../resources/sectIcons/NonBeliever.png";

const sects: { name: Sect; color: string; icon: string }[] = [
  { name: "Followers of Set", color: "#8B5CF6", icon: FollowersOfSetIcon },
  { name: "The Bahari", color: "#F59E42", icon: TheBahariIcon },
  { name: "Church of Cain", color: "#EF4444", icon: ChurchOfCainIcon },
  { name: "Non Believer", color: "#6B7280", icon: NonBelieverIcon },
];

export type SectPickerProps = {
  character: Character;
  setCharacter: (character: Character) => void;
  nextStep: () => void;
};

const SectPicker = ({ character, setCharacter, nextStep }: SectPickerProps) => {
  const [selectedSect, setSelectedSect] = useState<Sect | null>(
    sectSchema.safeParse(character.sect).success ? character.sect as Sect : null
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
