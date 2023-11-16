import { createFont } from "tamagui";

const fonts = {
  InterExtraLight: "InterExtraLight",
  InterRegular: "InterRegular",
  InterSemiBold: "InterSemiBold",
};

const interSemiBold = createFont({
  family: `${fonts.InterSemiBold}`,
  size: {
    1: 25,
    2: 30,
    3: 35,
    // ...
  },
});

const interRegular = createFont({
  family: `${fonts.InterRegular}`,
  size: {
    1: 15,
    2: 20,
    3: 25,
  },
});

export { fonts, interRegular, interSemiBold };
