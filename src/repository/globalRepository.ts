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
  getMenuBar() {
    let menuBar = document.getElementsByClassName(
      "d2l-branding-navigation-background-color d2l-visible-on-ancestor-target"
    )[0];
    return menuBar;
  }
}
