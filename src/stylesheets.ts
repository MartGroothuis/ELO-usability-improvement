import { ALWAYS } from "userscripter/lib/environment";
import { Stylesheets, stylesheet } from "userscripter/lib/stylesheets";

import { P, Preferences } from "~src/preferences";

import stylesheetMain from "./stylesheets/main.scss";

function i(x: string) {
  return "example-userscript-stylesheet-" + x;
}

const STYLESHEETS = {
  main: stylesheet({
    condition: ALWAYS,
    css: stylesheetMain,
  }),
} as const;

// This trick uncovers type errors in STYLESHEETS while retaining the static knowledge of its properties (so we can still write e.g. STYLESHEETS.foo):
const _: Stylesheets = STYLESHEETS;
void _;

export default STYLESHEETS;
