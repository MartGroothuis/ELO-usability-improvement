import { log } from "userscripter";
import { ALWAYS, DOMCONTENTLOADED } from "userscripter/lib/environment";
import { Operation, operation } from "userscripter/lib/operations";

import { P, Preferences } from "~src/preferences";
import * as SITE from "~src/site";
import { PageController } from "./controller/pageController";

import modifyMenuBar from "./operations/global/modifyMenuBar";
import removeBanner from "./operations/home/removeBanner";
import widenWidgets from "./operations/home/widenWidgets";

const OPERATIONS: ReadonlyArray<Operation<any>> = [
  operation({
    description: "modify header",
    condition: ALWAYS,
    action: modifyMenuBar,
  }),
  operation({
    description: "remove home page banner",
    condition: PageController.isHomePage,
    action: removeBanner,
  }),
  operation({
    description: "make home page widgets full page width",
    condition: PageController.isHomePage,
    action: widenWidgets,
  }),
  operation({
    description: "Weird page test",
    condition: PageController.isWeirdBetweenPage,
    action: () => console.log("weird page")
  }),
  operation({
    description: "Home page test",
    condition: PageController.isHomePage,
    action: () => console.log("home page")
  }),
  operation({
    description: "Course page test",
    condition: PageController.isCoursePage,
    action: () => console.log("course page")
  })
];

export default OPERATIONS;
