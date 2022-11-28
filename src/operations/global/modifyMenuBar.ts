import { Actions } from "~src/controller/actions";
import { GlobalRepository } from "../../repository/globalRepository";

export default () => {
	const menuBar = GlobalRepository.getInstance().getMenuBar();
	Actions.addClassName(menuBar, "main-color");
}