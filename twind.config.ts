// Config object that will go into the setup() function of twind, where appropiate.

// See: https://twind.dev/handbook/configuration.html For all available options.

import { Configuration } from "$twind";
import * as colors from "$twind/colors";

// Sheet will be set on /routes/_render.ts
export const config: Omit<Configuration, "sheet"> = {
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
