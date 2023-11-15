import { IconName } from "./iconName";

type MediaDimensions = { width: number; height: number };

const IconDimensions: Record<IconName, MediaDimensions> = {
  close: {
    width: 20,
    height: 20,
  },
  darkLogo: {
    width: 251,
    height: 64,
  },
  lightLogo: {
    width: 251,
    height: 74,
  },
};

export { IconDimensions };
export type { MediaDimensions };
