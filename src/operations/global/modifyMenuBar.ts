import { Actions } from "~src/controller/actions";
import { GlobalRepository } from "../../repository/globalRepository";

export default () => {
  GlobalRepository.getInstance()
    .getMenuBar()
    .then((element) => {
      Actions.addClassName(element, "main-color");
    });
};
