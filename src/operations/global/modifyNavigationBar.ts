import { Actions } from '~src/controller/actions'
import { GlobalRepository } from '../../repository/globalRepository'

export default () => {
  GlobalRepository.getInstance()
    .getNavigation()
    .then((element) => {
      const style = document.createElement('style')
      style.innerHTML = `
      .d2l-navigation-header-container {
        height: 70px !important;
      }
      `

      element?.shadowRoot?.appendChild(style)
    })
}
