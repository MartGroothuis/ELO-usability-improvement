import { Actions } from "~src/controller/actions";
import { CourseRepository } from "../../repository/courseRepository";

export default () => {
  CourseRepository.getInstance()
    .getContainer()
    .then((container) => {
      console.log("container found");
      Actions.removeClassName(container, "main");
    })
    .finally(() => {
      console.log("container not found");
    });
  console.log("container getInstance");
};
