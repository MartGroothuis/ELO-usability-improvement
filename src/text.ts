// This file cannot contain Webpack-resolved imports (e.g. "~src/foo").

import * as CONFIG from "./config";
import U from "./userscript";

export default {
  heading: U.name + " working!",
  title_suffix: ` [${U.name} ${U.version}]`,
  messages: {
    greeting: (name: string) => `Hello, ${name}!`,
    info: (n: number) => `This page contains ${n} div(s).`,
  },
  foobars: {
    content: (i: number) => `div.${CONFIG.CLASS.foobar} number ${i}`,
    info: (n: number) => `Below are ${n} foobars. `,
    more: "Moar!",
  },
  preferences: {
    foobars: {
      label: "Foobars",
      insert: {
        label: "Insert foobars",
        description: "Insert some foobars",
      },
      number: {
        label: "Number of foobars",
        description: "Number of foobars to insert",
      },
    },
    username: {
      label: "Username",
      description: "Your username",
    },
  },
} as const;
