import { Actions } from "~src/controller/actions";

export class CourseRepository {
  private static instance: CourseRepository;
  private rootElement: string;

  private constructor(rootElement: string) {
    this.rootElement = rootElement;
  }

  public static getInstance() {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new CourseRepository("");
    }

    return this.instance;
  }

  public async getContainer(): Promise<Element> {
    let container = document.getElementsByClassName("main")[0];

    return await Actions.waitForElementToLoad(container);
  }
}
