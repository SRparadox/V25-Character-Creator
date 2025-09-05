// Religion data for ReligionPicker
import NoneBelieverIcon from "../../resources/religionIcons/NoneBeliever.webp";
import FollowerOfSetIcon from "../../resources/religionIcons/FollowerOfSet.webp";
import ChurchOfCaineIcon from "../../resources/religionIcons/ChurchofCaine.webp";
import BahariIcon from "../../resources/religionIcons/Bahari.webp";

export const religionsData = {
  "None Believer": {
    color: "#6B7280",
    summary: "No particular religious or spiritual belief; unconcerned with Kindred faiths.",
    icon: NoneBelieverIcon,
  },
  "Follower of Set": {
    color: "#bfc9d9",
    summary: "A Setite faith focused on the worship of Set/Typhon, the god of chaos, darkness, and transformation.",
    icon: FollowerOfSetIcon,
  },
  "Church of Caine": {
    color: "#e63946",
    summary: "The faith of those who worship Caine as the first vampire and seek to fulfill his legacy, often associated with the Sabbat.",
    icon: ChurchOfCaineIcon,
  },
  "Bahari": {
    color: "#a259f4",
    summary: "Followers of Lilith, the Dark Mother. The Bahari embrace forbidden knowledge, pain, and transformation as paths to enlightenment.",
    icon: BahariIcon,
  },
};
