export class Actions {
	public static addClassName(element: Element, className: string) {
		element.classList.add(className);
	}

	public static replaceClassName(element: Element, oldName: string, newName: string) {
		element.className = element.className.replace(oldName, newName);
	}
}