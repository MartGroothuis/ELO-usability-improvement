import { ALWAYS } from "userscripter/lib/environment";
import { Operation, operation } from "userscripter/lib/operations";

import { PageController } from "./controller/pageController";
import removeContainer from "./operations/courseContent/removeContainer";
import addCollapseBar from "./operations/global/addCollapseBar";
import modifyHeaderImg from "./operations/global/modifyHeaderImg";

import modifyMenuBar from "./operations/global/modifyMenuBar";
import modifyNavigationBar from "./operations/global/modifyNavigationBar";

import {
  redirectCourseWidget,
  removeBanner,
  widenWidgets,
} from "./operations/home";

const OPERATIONS: ReadonlyArray<Operation<any>> = [
  operation({
    description: "modify header",
    condition: ALWAYS,
    action: modifyMenuBar,
  }),
  operation({
    description: "Add collapse bar",
    condition: ALWAYS,
    action: addCollapseBar
  }),
  operation({
    description: "modify header img",
    condition: ALWAYS,
    action: modifyHeaderImg,
  }),
  operation({
    description: "modify navigation bar",
    condition: ALWAYS,
    action: modifyNavigationBar,
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
    description:
      "Change links in course widget cards to redirect to correct page",
    condition: PageController.isHomePage,
    action: redirectCourseWidget,
  }),
  operation({
    description: "Remove container from course content",
    condition: PageController.isCoursePage,
    action: removeContainer,
  }),
];

export default OPERATIONS;
