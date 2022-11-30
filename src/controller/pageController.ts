export class PageController {
	public static isHomePage() {
		return PageController.getPathName() === "home";
	}

	public static isCoursePage() {
		return PageController.getPathName().includes("le/lessons");
	}

	public static isWeirdBetweenPage() {
		return PageController.getPathName().includes("home/");
	}

	private static getPathName() {
		return document.location.pathname.replace("/d2l/", "");
	}
}