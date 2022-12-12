// This file cannot contain Webpack-resolved imports (e.g. "~src/foo").

import U from "./userscript";

export const PREFIX_ID: string = U.id + "-";
export const PREFIX_CLASS: string = U.id + "-";

// How long to wait between performing operations (DOM manipulation etc) during page load:
export const OPERATIONS_INTERVAL = 200; // ms
// How many extra tries to perform after DOMContentLoaded before considering remaining operations failed:
export const OPERATIONS_EXTRA_TRIES = 3;

const c = (x: string) => PREFIX_CLASS + x;

export const CLASS = {
  foobar: c("foobar"),
  preferenceDescription: c("preference-description"),
} as const;
