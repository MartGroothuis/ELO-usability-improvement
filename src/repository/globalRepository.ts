import { Actions } from "~src/controller/actions";

export class GlobalRepository {
  private static instance: GlobalRepository;
  private rootElement: string;

  private constructor(rootElement: string) {
    this.rootElement = rootElement;
  }

  public static getInstance() {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new GlobalRepository("");
    }

    return this.instance;
  }

  // This is the main menu bar
  public async getMenuBar(): Promise<Element> {
    // try every 10 ms to find this element and return a promise when it is found
    let tries = 0;
    return new Promise((resolve, reject) => {
      let interval = setInterval(() => {
        tries++;

        let menuBar = document.getElementsByClassName(
          "d2l-branding-navigation-background-color d2l-visible-on-ancestor-target"
        )[0];

        if (menuBar) {
          clearInterval(interval);
          resolve(menuBar);
        }
        if (tries > 1000) {
          clearInterval(interval);
          reject();
        }
      }, 10);
    });
  }
}
