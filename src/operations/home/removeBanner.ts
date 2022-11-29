import { HomeRepository } from "~src/repository/homeRepository";

export default () => {
  let banner = HomeRepository.getInstance().getBanner();
  banner?.remove();
};
