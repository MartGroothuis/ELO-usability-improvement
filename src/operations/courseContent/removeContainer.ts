import { Actions } from "~src/controller/actions";
import { CourseRepository } from "../../repository/courseRepository";

export default () => {
  CourseRepository.getInstance()
    .getContainer()
    .then((container) => {
      Actions.removeClassName(container, "main");
    });
};
