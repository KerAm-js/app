import { TECHNIC_PARAMS, TECHNICS } from "../consts/data";
import { ITechnicOtherParams } from "../types/Technic";

export const getLabelForParam = (key: keyof ITechnicOtherParams) => {
  let label = TECHNIC_PARAMS[key]?.title;
  if (TECHNIC_PARAMS[key]?.measurement) {
    label += " (" + TECHNIC_PARAMS[key]?.measurement + ")";
  }
  return label || "";
};
