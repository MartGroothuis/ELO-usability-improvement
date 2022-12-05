export class Actions {
  public static removeClassName(element: Element, className: string) {
    element.classList.remove(className);
  }

  public static addClassName(element: Element, className: string) {
    element.classList.add(className);
  }

  public static replaceClassName(
    element: Element,
    oldName: string,
    newName: string
  ) {
    element.className = element.className.replace(oldName, newName);
  }

  public static waitForElementToLoad(
    element: Element | undefined | null,
    maxTries = 1000,
    delay = 10
  ): Promise<Element> {
    let tries = 0;
    return new Promise((resolve, reject) => {
      let interval = setInterval(() => {
        tries++;

        if (element) {
          clearInterval(interval);
          resolve(element);
        }
        if (tries > maxTries) {
          clearInterval(interval);
          reject();
        }
      }, delay);
    });
  }

  public static waitForHTMLCollectionToLoad(
    element: HTMLCollection | undefined,
    maxTries = 1000,
    delay = 10
  ): Promise<HTMLCollection> {
    let tries = 0;
    return new Promise((resolve, reject) => {
      let interval = setInterval(() => {
        tries++;
        console.log(element);

        if (element) {
          clearInterval(interval);
          resolve(element);
        }
        if (tries > maxTries) {
          clearInterval(interval);
          reject();
        }
      }, delay);
    });
  }
}
