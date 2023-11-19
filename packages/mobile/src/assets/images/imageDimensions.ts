import { ImageName } from "./imageName";

type MediaDimensions = { width: number; height: number };

const ImageDimensions: Record<ImageName, MediaDimensions> = {
  darkLogo: {
    width: 251,
    height: 64,
  },
  lightLogo: {
    width: 251,
    height: 74,
  },
  close: {
    width: 20,
    height: 20,
  },
};

export { ImageDimensions };
export type { MediaDimensions };
