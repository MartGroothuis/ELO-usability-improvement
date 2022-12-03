import { HomeRepository } from "~src/repository/homeRepository";

export function removeBanner() {
  let banner = HomeRepository.getInstance().getBanner();
  banner?.remove();
};
