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

  const isMeasuredInWeight = advert.measureIn === ENUM_TITLES.WEIGHT;
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
