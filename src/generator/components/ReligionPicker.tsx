import { useState } from "react";
import { Button, Group, Stack, Text, Title, Center } from "@mantine/core";
import type { Character } from "../../data/Character";
import BaharaIcon from "../../resources/religionIcons/Bahara.webp";
import ChurchofCaineIcon from "../../resources/religionIcons/ChurchofCaine.webp";
import FollowersofSetIcon from "../../resources/religionIcons/followersofSet.webp";
import NonBelieverIcon from "../../resources/religionIcons/nonbeliever.webp";

export type Religion =
  | "Bahari"
  | "Church of Caine"
  | "Followers of Set"
  | "Non Believer";

const religions: { name: Religion; color: string; icon: string; summary: string }[] = [
  {
    name: "Bahari",
    color: "#a259f4",
    icon: BaharaIcon,
    summary:
      "Followers of Lilith, the Dark Mother. The Bahari embrace forbidden knowledge, pain, and transformation as paths to enlightenment.",
  },
  {
    name: "Church of Caine",
    color: "#e63946",
    icon: ChurchofCaineIcon,
    summary:
      "The faith of those who worship Caine as the first vampire and seek to fulfill his legacy, often associated with the Sabbat.",
  },
  {
    name: "Followers of Set",
    color: "#bfc9d9",
    icon: FollowersofSetIcon,
    summary:
      "A Setite faith focused on the worship of Set/Typhon, the god of chaos, darkness, and transformation.",
  },
  {
    name: "Non Believer",
    color: "#6B7280",
    icon: NonBelieverIcon,
    summary: "Any other faith, cult, or personal philosophy not listed here.",
  },
];

export type ReligionPickerProps = {
  character: Character;
  setCharacter: (character: Character) => void;
  nextStep: () => void;
};

const ReligionPicker = ({ character, setCharacter, nextStep }: ReligionPickerProps) => {
  const [selectedReligion, setSelectedReligion] = useState<Religion | null>(
    religions.some((r) => r.name === character.religion) ? (character.religion as Religion) : null
  );

  const handleSelect = (religion: Religion) => {
    setSelectedReligion(religion);
    setCharacter({ ...character, religion });
  };

  return (
    <Center h="100%">
      <Stack spacing="xl" align="center">
        <Title order={2}>Choose a Religion</Title>
        <Group spacing="lg">
          {religions.map(({ name, color, icon, summary }) => (
            <Button
              key={name}
              variant={selectedReligion === name ? "filled" : "outline"}
              color={color}
              onClick={() => handleSelect(name)}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 160, height: 180, padding: 0 }}
            >
              <img src={icon} alt={name} style={{ width: 48, height: 48, marginTop: 12, marginBottom: 8 }} />
              <Text fw={700} size="lg">{name}</Text>
              <Text size="sm" color="dimmed" ta="center" style={{ minHeight: 40, marginTop: 4, marginBottom: 0, padding: 2 }}>
                {summary}
              </Text>
            </Button>
          ))}
        </Group>
        <Button disabled={!selectedReligion} onClick={nextStep} color="grape" size="lg">
          Next
        </Button>
      </Stack>
    </Center>
  );
};

export default ReligionPicker;
