const Icons = {
  close: require("./files/close.png"),
  darkLogo: require("./files/dark-logo.png"),
  lightLogo: require("./files/light-logo.png"),
};

type IconName = keyof typeof Icons;

export { Icons };
export type { IconName };
