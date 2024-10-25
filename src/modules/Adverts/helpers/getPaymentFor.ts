import { ENUM_TITLES } from './../../../consts/enums';
import { IAdvert } from "../../../types/Advert";

export const getPriceString = (advert: IAdvert) => {
  return {
    first: [
      advert.price,
      " руб/" +
        (advert.advertType === "TECHNIC"
          ? ENUM_TITLES[advert?.paymentUnit]?.toLowerCase()
          : "т"),
    ],
    second:
      advert.advertType === "TECHNIC"
        ? undefined
        : [advert.price * advert.coefficient, " руб/м3"],
  };
};
