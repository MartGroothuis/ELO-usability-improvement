import { Actions } from "~src/controller/actions";
import { HomeRepository } from "~src/repository/homeRepository";

export default () => {
  let widgets = HomeRepository.getInstance().getWidgets();

  for (let i = 0; i < widgets.length; i++) {
    let widget = widgets[i];
    Actions.replaceClassName(widget, "homepage-col-6", "homepage-col-12");
  }
};
