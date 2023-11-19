const Images = {
  darkLogo: require("./files/dark-logo.png"),
  lightLogo: require("./files/light-logo.png"),
  close: require("./files/close.png"),
};

type ImageName = keyof typeof Images;

export { Images };
export type { ImageName };
