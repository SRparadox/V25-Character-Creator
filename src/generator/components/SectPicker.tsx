import { useState } from "react";
import { Button, Group, Stack, Text, Title, Center } from "@mantine/core";
import { Character } from "../../data/Character";

export type Sect = "Followers of Set" | "The Bahari" | "Church of Cain" | "Non Believer";

const sects: { name: Sect; color: string; icon: string }[] = [
  { name: "Followers of Set", color: "#8B5CF6", icon: require("../../resources/sectIcons/FollowersOfSet.png") },
  { name: "The Bahari", color: "#F59E42", icon: require("../../resources/sectIcons/TheBahari.png") },
  { name: "Church of Cain", color: "#EF4444", icon: require("../../resources/sectIcons/ChurchOfCain.png") },
  { name: "Non Believer", color: "#6B7280", icon: require("../../resources/sectIcons/NonBeliever.png") },
];

export type SectPickerProps = {
  character: Character;
  setCharacter: (character: Character) => void;
  nextStep: () => void;
};

const SectPicker = ({ character, setCharacter, nextStep }: SectPickerProps) => {
  const [selectedSect, setSelectedSect] = useState<Sect | null>(character.sect || null);

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
