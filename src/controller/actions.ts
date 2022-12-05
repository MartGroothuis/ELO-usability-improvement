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

  public static hostnameToHostnameList(hostnames: readonly string[]): string[] {
    let hostnameList = [];
    for (let i = 0; i < hostnames.length; i++) {
      hostnameList.push(`*://${hostnames[i]}/*`);
      hostnameList.push(`*://www.${hostnames[i]}/*`);
    }
    return hostnameList;
  }
}
