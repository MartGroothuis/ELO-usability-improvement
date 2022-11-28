import { log } from "userscripter";
import { ALWAYS, DOMCONTENTLOADED } from "userscripter/lib/environment";
import { Operation, operation } from "userscripter/lib/operations";

import { P, Preferences } from "~src/preferences";
import { menuGenerator } from "~src/preferences-menu";
import * as SITE from "~src/site";
import T from "~src/text";
import U from "~src/userscript";

import insertFoobars from "./operations/foobars";

const OPERATIONS: ReadonlyArray<Operation<any>> = [
    operation({
        description: "change heading content",
        condition: ALWAYS,
        dependencies: { heading: SITE.SELECTOR_HEADING },
        action: e => {
            e.heading.textContent = T.heading;
        },
    }),
    operation({
        description: "insert foobars",
        condition: () => Preferences.get(P.foobars._.insert),
        dependencies: { mainDiv: SITE.SELECTOR_MAIN },
        action: insertFoobars,
    }),
    operation({
        description: "change title",
        condition: ALWAYS,
        action: () => {
            document.title = document.title + T.title_suffix;
        },
    }),
    operation({
        description: "print console messages",
        condition: ALWAYS,
        action: () => {
            log.log(T.messages.greeting(Preferences.get(P.username)));
            log.log(T.messages.info(document.querySelectorAll("div").length));
        },
    }),
    operation({
        description: "insert preferences menu",
        condition: ALWAYS,
        action: () => {
            const form = menuGenerator(P);
            document.body.appendChild(form);
        },
        deferUntil: DOMCONTENTLOADED,
    }),
];

export default OPERATIONS;
