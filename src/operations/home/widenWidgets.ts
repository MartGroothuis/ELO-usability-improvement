import { Actions } from "~src/controller/actions";
import { HomeRepository } from "~src/repository/homeRepository";

export default () => {
  let widgets = HomeRepository.getInstance().getWidgets();

  while (widgets.length > 0) {
    Actions.replaceClassName(widgets[0], "homepage-col-6", "homepage-col-12");
  }
};
