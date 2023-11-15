import { dumpSvg } from "../assets/svg/dump";
import { excavatorSvg } from "../assets/svg/excavator";
import { shovelSvg } from "../assets/svg/shovel";
import { TAdvertType } from "../types/Advert";

export const getAdvertTypeIconFunc = (advertType: TAdvertType) => {
  switch (advertType) {
    case "technic":
      return excavatorSvg;
    case "shovel":
      return shovelSvg;
    case "dump":
      return dumpSvg;
  }
};
