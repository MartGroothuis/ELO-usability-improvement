import { Actions } from '~src/controller/actions'
import { HomeRepository } from '~src/repository/homeRepository'

export function widenWidgets() {
  HomeRepository.getInstance()
    .getWidgets()
    .then((widgets) => {
      // This has to be done this way because when you change the className of an object it will be removed from the array
      // and therefore the array will become one smaller. By always using the 0 index in the while loop you will eventualy pass
      // every item in the array
      while (widgets.length > 0) {
        const widget = widgets[0]
        Actions.replaceClassName(widget, 'homepage-col-6', 'homepage-col-12')
      }
    })
}
