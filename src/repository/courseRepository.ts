export class CourseRepository {
  private static instance: CourseRepository
  private rootElement: string

  private constructor(rootElement: string) {
    this.rootElement = rootElement
  }

  public static getInstance() {
    if (this.instance === null || this.instance === undefined) {
      this.instance = new CourseRepository('')
    }

    return this.instance
  }

  public async getContainer(): Promise<Element> {
    // try every 10 ms to find this element and return a promise when it is found
    let tries = 0
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        tries++

        const container = document.getElementsByClassName('main')[0]

        if (container) {
          clearInterval(interval)
          resolve(container)
        }
        if (tries > 1000) {
          clearInterval(interval)
          reject()
        }
      }, 10)
    })
  }
}
