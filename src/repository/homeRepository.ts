import { Actions } from "~src/controller/actions";

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

  public async getBanner(): Promise<Element> {
    let banner = document.getElementById("CourseImageBannerPlaceholderId");

    return await Actions.waitForElementToLoad(banner);
  }

  public async getWidgets(): Promise<HTMLCollection> {
    let widgets = document.getElementsByClassName("homepage-col-6");

    return await Actions.waitForHTMLCollectionToLoad(widgets);
  }

  public async getCourses(): Promise<HTMLCollection> {
    // The index 0 here is for how high the course wrapper finds itself on the page compared to all the other homepage-col-12 items
    let courses = document.getElementsByClassName(
      "d2l-my-courses-widget d2l-token-receiver"
    )[0].shadowRoot?.children[0]?.shadowRoot?.children[2]?.children[0]
      ?.children[0]?.shadowRoot?.children[1]?.shadowRoot?.children[1]?.children;

    return await Actions.waitForHTMLCollectionToLoad(courses);
  }

  public async getCourseUrlFromCourse(course: Element): Promise<Element> {
    let courseUrl =
      course.shadowRoot?.children[1].shadowRoot?.children[0].children[0];

    return await Actions.waitForElementToLoad(courseUrl);
  }
}
