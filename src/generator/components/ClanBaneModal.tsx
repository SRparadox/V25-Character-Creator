import { Card, Modal, Stack, Text, Title } from "@mantine/core";
import { ClanName } from "~/data/NameSchemas";
import { clans } from "../../data/Clans";

interface ClanBaneModalProps {
  opened: boolean;
  clan: ClanName;
  onSelect: (bane: string) => void;
  onClose: () => void;
}

const ClanBaneModal = ({ opened, clan, onSelect, onClose }: ClanBaneModalProps) => {
  const banes: string[] = clans[clan]?.banes || [];
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Title order={3}>Select a Bane</Title>}
      centered
      size="lg" // Make modal larger
      styles={{
        body: { minHeight: 350 },
        title: { fontSize: 28, textAlign: "center" },
      }}
    >
      <Stack spacing="md">
        {banes.filter(Boolean).map((bane: string, idx: number) => (
          <Card
            key={idx}
            shadow="md"
            padding="lg"
            radius="md"
            withBorder
            style={{ cursor: "pointer", background: "#fff0f0", borderColor: "#c92a2a" }}
            onClick={() => onSelect(bane)}
          >
            <Text size="lg" align="center" style={{ fontWeight: 500, color: "#c92a2a" }}>
              {bane}
            </Text>
          </Card>
        ))}
        {banes.filter(Boolean).length === 0 && (
          <Text align="center">No banes available for this clan.</Text>
        )}
      </Stack>
    </Modal>
  );
};

export default ClanBaneModal;
