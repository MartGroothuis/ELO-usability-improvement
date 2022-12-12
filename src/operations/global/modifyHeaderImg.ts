import { Actions } from '~src/controller/actions'
import { GlobalRepository } from '~src/repository/globalRepository'

export default () => {
  GlobalRepository.getInstance()
    .getHeaderImg()
    .then((headerImg) => {
      console.log(headerImg)
      headerImg.style.maxHeight = '45px'
      Actions.addClassName(headerImg, 'small-header-img')
    })
}
