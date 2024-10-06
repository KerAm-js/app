import { dumpSvg } from "../assets/svg/dump";
import { excavatorSvg } from "../assets/svg/excavator";
import { shovelSvg } from "../assets/svg/shovel";
import { TAdvertType } from "../types/Advert";

export const getAdvertTypeIconFunc = (advertType: TAdvertType) => {
  switch (advertType) {
    case "TECHNIC":
      return excavatorSvg;
    case "NON_MATERIAL":
      return shovelSvg;
    case "DUMP":
      return dumpSvg;
    default:
      return excavatorSvg;
  }
};

export const getAdvertTypeTitle = (advertType: TAdvertType) => {
  switch (advertType) {
    case "TECHNIC":
      return "Техника";
    case "NON_MATERIAL":
      return "Нерудные материалы";
    case "DUMP":
      return "Свалки";
  }
};
