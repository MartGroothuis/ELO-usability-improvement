import { HomeRepository } from "~src/repository/homeRepository";

export function removeBanner() {
  HomeRepository.getInstance()
    .getBanner()
    .then((banner) => {
      banner?.remove();
    });
}
