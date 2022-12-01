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

  public getContainer(): Promise<Element> {
    // try every 10 ms to find this element and return a promise when it is found
    let tries = 0
    return new Promise((resolve, reject) => {
      let interval = setInterval(() => {
        tries++
        let container = document.getElementsByClassName("main")[0];
        if (container) {
          clearInterval(interval);
          resolve(container);
        }
        if (tries > 1000) {
          clearInterval(interval);
          reject();
        }
      }, 10);
    });
  }
}
