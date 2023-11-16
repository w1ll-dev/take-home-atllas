import { interRegular, interSemiBold } from "@styles/fonts";
import { dark, light } from "@styles/themes";
import { color, radius, size, space, zIndex } from "@tamagui/themes";
import { createTamagui, createTokens } from "tamagui";

const tokens = createTokens({
  size,
  space,
  zIndex,
  color,
  radius,
});

const config = createTamagui({
  tokens,
  _fonts: {
    heading: interSemiBold,
    body: interRegular,
  },
  get fonts() {
    return this._fonts;
  },
  set fonts(value) {
    this._fonts = value;
  },
  themes: {
    dark,
    light,
  },
});

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
