// This file cannot contain Webpack-resolved imports (e.g. "~src/foo").

import U from "./userscript";

export const NAME = U.sitename;
export const HOSTNAME = U.hostname;

export const SELECTOR_HEADING = "body h1";
export const SELECTOR_MAIN = "body div";
export const SELECTOR_HEADER = "d2l-branding-navigation-background-color";
