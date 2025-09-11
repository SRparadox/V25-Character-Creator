import { Modal, Button, Stack, Text, Title } from "@mantine/core";
import { ClanName } from "~/data/NameSchemas";
import { clans } from "../../data/Clans";

interface ClanBaneModalProps {
  opened: boolean;
  clan: ClanName;
  onSelect: (bane: string) => void;
  onClose: () => void;
}

const ClanBaneModal = ({ opened, clan, onSelect, onClose }: ClanBaneModalProps) => {
  const banes = clans[clan]?.banes || [];
  return (
    <Modal opened={opened} onClose={onClose} title={<Title order={3}>Select a Bane</Title>} centered>
      <Stack>
        {banes.filter(Boolean).map((bane, idx) => (
          <Button key={idx} variant="light" color="red" onClick={() => onSelect(bane)}>
            <Text>{bane}</Text>
          </Button>
        ))}
        {banes.filter(Boolean).length === 0 && <Text>No banes available for this clan.</Text>}
      </Stack>
    </Modal>
  );
};

export default ClanBaneModal;
