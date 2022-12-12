export class HomeRepository {
  private static instance: HomeRepository
  private rootElement: string

  private constructor(rootElement: string) {
    this.rootElement = rootElement
  }

  public static getInstance() {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new HomeRepository('')
    }

    return this.instance
  }

  public async getBanner(): Promise<Element> {
    // try every 10 ms to find this element and return a promise when it is found
    let tries = 0
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        tries++

        const banner = document.getElementById('CourseImageBannerPlaceholderId')

        if (banner) {
          clearInterval(interval)
          resolve(banner)
        }
        if (tries > 1000) {
          clearInterval(interval)
          reject()
        }
      }, 10)
    })
  }

  public async getWidgets(): Promise<HTMLCollection> {
    // try every 10 ms to find this element and return a promise when it is found
    let tries = 0
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        tries++

        const widgets = document.getElementsByClassName('homepage-col-6')

        if (widgets) {
          clearInterval(interval)
          resolve(widgets)
        }
        if (tries > 1000) {
          clearInterval(interval)
          reject()
        }
      }, 10)
    })
  }

  public getCourses(): Promise<HTMLCollection> {
    // try every 10 ms to find this element and return a promise when it is found
    let tries = 0
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        tries++

        // The index 0 here is for how high the course wrapper finds itself on the page compared to all the other homepage-col-12 items
        const courses = document.getElementsByClassName(
          'd2l-my-courses-widget d2l-token-receiver'
        )?.[0]?.shadowRoot?.children[0]?.shadowRoot?.children[2]?.children[0]
          ?.children[0]?.shadowRoot?.children[1]?.shadowRoot?.children[1]
          ?.children

        if (courses) {
          clearInterval(interval)
          resolve(courses)
        }
        if (tries > 1000) {
          clearInterval(interval)
          reject()
        }
      }, 10)
    })
  }

  public getCourseUrlFromCourse(course: Element): Promise<Element> {
    // try every 10 ms to find this element and return a promise when it is found
    let tries = 0
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        tries++

        const courseUrl =
          course?.shadowRoot?.children[1].shadowRoot?.children[0].children[0]

        if (courseUrl) {
          clearInterval(interval)
          resolve(courseUrl)
        }
        if (tries > 1000) {
          clearInterval(interval)
          reject()
        }
      }, 10)
    })
  }
}
