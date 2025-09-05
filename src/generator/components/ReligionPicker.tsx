import { useState } from "react";
import { Button, Stack, Text, Title, Center, Card, SimpleGrid } from "@mantine/core";
import type { Character } from "../../data/Character";
import BaharaIcon from "../../resources/religionIcons/Bahari.webp";
import ChurchofCaineIcon from "../../resources/religionIcons/ChurchofCaine.webp";
import FollowersofSetIcon from "../../resources/religionIcons/followersofSet.webp";
import NonBelieverIcon from "../../resources/religionIcons/nonbeliever.webp";

export type Religions =
  | "Bahari"
  | "Church of Caine"
  | "Followers of Set"
  | "Non Believer";

const religions: { name: Religions; color: string; icon: string; summary: string }[] = [
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
  const [selectedReligion, setSelectedReligion] = useState<Religions | null>(
  religions.some((r) => r.name === character.religion) ? (character.religion as Religions) : null
  );

  const handleSelect = (religion: Religions) => {
    setSelectedReligion(religion);
    setCharacter({ ...character, religion });
  };

  return (
    <Center h="100%">
      <Stack spacing="xl" align="center" w="100%">
        <Title order={2}>Choose a Religion</Title>
        <SimpleGrid cols={4} spacing="lg" breakpoints={[{ maxWidth: 'md', cols: 2 }, { maxWidth: 'sm', cols: 1 }]}
          style={{ width: '100%', maxWidth: 900 }}>
          {religions.map(({ name, color, icon, summary }) => (
            <Card
              key={name}
              shadow={selectedReligion === name ? "xl" : "sm"}
              padding="lg"
              radius="md"
              withBorder
              style={{
                borderColor: selectedReligion === name ? color : undefined,
                borderWidth: selectedReligion === name ? 3 : 1,
                borderStyle: 'solid',
                cursor: 'pointer',
                background: selectedReligion === name ? `${color}22` : undefined,
                transition: 'box-shadow 0.2s, border-color 0.2s',
                minHeight: 220,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
              onClick={() => handleSelect(name)}
            >
              <img src={icon} alt={name} style={{ width: 56, height: 56, marginBottom: 12, marginTop: 4 }} />
              <Text fw={700} size="lg" mb={4} align="center">{name}</Text>
              <Text size="sm" color="dimmed" align="center" style={{ minHeight: 48 }}>{summary}</Text>
            </Card>
          ))}
        </SimpleGrid>
        <Button disabled={!selectedReligion} onClick={nextStep} color="grape" size="lg" mt="md">
          Next
        </Button>
      </Stack>
    </Center>
  );
};

export default ReligionPicker;
