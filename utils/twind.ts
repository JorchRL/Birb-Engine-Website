// Config object that will go into the setup() function of twind, where appropiate.

// See: https://twind.dev/handbook/configuration.html For all available options.

import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "$twind";
import * as colors from "$twind/colors";

export * from "$twind";

export const config: Configuration = {
  //
  // Opinionated Reset
  preflight: (preflight) => ({
    ...preflight,
    // override preflight here

    // declare a font face
    // "@font-face": [
    //   {
    //     fontFamily: "Futura",
    //     fontWeight: '400',
    //     src: `url(/fonts/.../futura.woff) format("woff")`
    //   }
    // ]
  }),
  //
  darkMode: "class",
  mode: "silent",
  theme: {
    // Add to the default theme instead of overriding.
    extend: {
      screens: {
        "portrait": { "raw": "(orientation: portrait)" },
      },
      fontFamily: {
        // sans: ["Futura"],
        // serif: ["Times"],
      },
      colors: { ...colors },
    },
  },
};

if (IS_BROWSER) setup(config);
