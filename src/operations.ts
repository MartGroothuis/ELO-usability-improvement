import { log } from "userscripter";
import { ALWAYS, DOMCONTENTLOADED } from "userscripter/lib/environment";
import { Operation, operation } from "userscripter/lib/operations";

import { P, Preferences } from "~src/preferences";
import * as SITE from "~src/site";
import { PageController } from "./controller/pageController";

import modifyMenuBar from "./operations/global/modifyMenuBar";
import { redirectCourseWidget, removeBanner, widenWidgets } from "./operations/home";

const OPERATIONS: ReadonlyArray<Operation<any>> = [
  operation({
    description: "modify header",
    condition: ALWAYS,
    action: modifyMenuBar,
  }),
  operation({
    description: "Remove home page banner",
    condition: PageController.isHomePage,
    action: removeBanner,
  }),
  operation({
    description: "Make home page widgets full page width",
    condition: PageController.isHomePage,
    action: widenWidgets,
  }),
  operation({
    description: "Change links in course widget cards to redirect to correct page",
    condition: PageController.isHomePage,
    action: redirectCourseWidget,
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
