export class HomeRepository {
	private static instance: HomeRepository;
	private rootElement: string;

	private constructor(rootElement: string) {
		this.rootElement = rootElement;
	}

	public static getInstance() {
		if (this.instance === null || this.instance === undefined) {
			this.instance = new HomeRepository("");
		}

		return this.instance;
	}

	public getBanner() {
		let banner = document.getElementById("CourseImageBannerPlaceholderId");

		return banner;
	}

	public getWidgets() {
		let widgets = document.getElementsByClassName("homepage-col-6");

		return widgets;
	}
}