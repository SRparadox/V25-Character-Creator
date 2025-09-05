import BaharaIcon from "../../resources/religionIcons/Bahara.webp";
import ChurchofCaineIcon from "../../resources/religionIcons/ChurchofCaine.webp";
import FollowersofSetIcon from "../../resources/religionIcons/followersofSet.webp";
import NonBelieverIcon from "../../resources/religionIcons/nonbeliever.webp";

export const religionsData = {
  Bahari: {
    color: "#a259f4",
    icon: BaharaIcon,
    summary:
      "Followers of Lilith, the Dark Mother. The Bahari embrace forbidden knowledge, pain, and transformation as paths to enlightenment.",
  },
  "Church of Caine": {
    color: "#e63946",
    icon: ChurchofCaineIcon,
    summary:
      "The faith of those who worship Caine as the first vampire and seek to fulfill his legacy, often associated with the Sabbat.",
  },
  "Followers of Set": {
    color: "#bfc9d9",
    icon: FollowersofSetIcon,
    summary:
      "A Setite faith focused on the worship of Set/Typhon, the god of chaos, darkness, and transformation.",
  },
  "Non Believer": {
    color: "#6B7280",
    icon: NonBelieverIcon,
    summary: "Any other faith, cult, or personal philosophy not listed here.",
  },
};
