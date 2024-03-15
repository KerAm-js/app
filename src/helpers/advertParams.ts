import { TECHNIC_PARAMS } from "../consts/data";
import { ITechnicParams } from "../types/Technic";

export const getLabelForTechnicParam = (key: keyof ITechnicParams) => {
  let label = TECHNIC_PARAMS[key]?.title;
  if (TECHNIC_PARAMS[key]?.measurement) {
    label += " (" + TECHNIC_PARAMS[key]?.measurement + ")";
  }
  return label || "";
};
