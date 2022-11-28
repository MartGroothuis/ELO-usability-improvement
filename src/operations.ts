import { log } from "userscripter";
import { ALWAYS, DOMCONTENTLOADED } from "userscripter/lib/environment";
import { Operation, operation } from "userscripter/lib/operations";

import { P, Preferences } from "~src/preferences";
import * as SITE from "~src/site";

import modifyMenuBar from "./operations/global/modifyMenuBar";
import removeBanner from "./operations/home/removeBanner";
import widenWidgets from "./operations/home/widenWidgets";

const OPERATIONS: ReadonlyArray<Operation<any>> = [
    operation({
        description: "modify header",
        condition: ALWAYS,
        action: modifyMenuBar
    }),
    operation({
        description: "remove home page banner",
        condition: ALWAYS,
        action: removeBanner
    }),
    operation({
        description: "make home page widgets full page width",
        condition: ALWAYS,
        action: widenWidgets
    })
];

export default OPERATIONS;
