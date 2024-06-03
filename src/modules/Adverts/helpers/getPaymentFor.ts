import { TAdvert } from "../../../types/Advert";

export const getPriceString = ({ type, price, params }: TAdvert) => {
  return {
    first: [
      price.price,
      " руб/" + (type === "technic" ? price.paymentFor.toLowerCase() : "т"),
    ],
    second:
      type === "technic"
        ? undefined
        : [price.price * params.coefficient, " руб/м3"],
  };
};
