import { TECHNIC_PARAMS } from "../consts/data";
import { TechnicParams } from "../types/Technic";

export const getLabelForTechnicParam = (key: keyof TechnicParams) => {
  let label = TECHNIC_PARAMS[key]?.title;
  if (TECHNIC_PARAMS[key]?.measurement) {
    label += " (" + TECHNIC_PARAMS[key]?.measurement + ")";
  }
  return label || "";
};
