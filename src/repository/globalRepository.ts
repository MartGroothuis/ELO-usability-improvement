export class GlobalRepository {
  private static instance: GlobalRepository
  private rootElement: string

  private constructor(rootElement: string) {
    this.rootElement = rootElement
  }

  public static getInstance() {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new GlobalRepository('')
    }

    return this.instance
  }

  // This is the main menu bar
  public async getMenuBar(): Promise<Element> {
    // try every 10 ms to find this element and return a promise when it is found
    let tries = 0
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        tries++

        const menuBar = document.getElementsByClassName(
          'd2l-branding-navigation-background-color d2l-visible-on-ancestor-target'
        )[0]

        if (menuBar) {
          clearInterval(interval)
          resolve(menuBar)
        }
        if (tries > 1000) {
          clearInterval(interval)
          reject()
        }
      }, 10)
    })
  }

  // get the d2l-navigation-main-header
  public async getNavigation(): Promise<Element> {
    let tries = 0
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        tries++

        //d2l-navigation-main-header querySelector
        const navigation = document.querySelector('d2l-navigation-main-header')

        if (navigation?.shadowRoot) {
          clearInterval(interval)
          resolve(navigation)
        }
        if (tries > 1000) {
          clearInterval(interval)
          reject()
        }
      }, 10)
    })
  }

  // Get the header img
  public async getHeaderImg(): Promise<HTMLImageElement> {
    let tries = 0
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        tries++

        const headerImg = document.querySelector('d2l-navigation-link-image')
        const shadowRoot = headerImg?.shadowRoot?.children[0];
        const imgWrapper = shadowRoot?.children[1];
        const img = imgWrapper?.children[0] as HTMLImageElement;

        if (img) {
          clearInterval(interval)
          resolve(img)
        }
        if (tries > 1000) {
          clearInterval(interval)
          reject()
        }
      }, 10)
    })
  }
}
