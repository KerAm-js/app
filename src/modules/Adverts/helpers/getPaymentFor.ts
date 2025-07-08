import { ENUM_TITLES } from "./../../../consts/enums";
import { IAdvert } from "../../../types/Advert";

export const getPriceString = (advert: IAdvert) => {
  if (advert.advertType === "TECHNIC") {
    return {
      first: [
        advert.price,
        " руб/" + ENUM_TITLES[advert?.paymentUnit]?.toLowerCase(),
      ],
    };
  }

  if (advert.coefficient === -1) {
    return {
      first: [
        advert.price,
        advert.measureIn === "WEIGHT" ? " руб/т" : "руб/м3",
      ],
    };
  }

  const isMeasuredInWeight = advert.measureIn === "WEIGHT";
  const firstPrice = isMeasuredInWeight
    ? advert.price
    : Math.floor(advert.price / advert.coefficient);
  const secondPrice = isMeasuredInWeight
    ? advert.price * advert.coefficient
    : advert.price;

  return {
    first: [firstPrice, " руб/т"],
    second: [secondPrice, " руб/м3"],
  };
};
