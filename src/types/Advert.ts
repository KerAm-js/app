import { IDumpGeneral, IDumpParams, IDumpPrice } from "./Dump";
import { IShovelGeneral, IShovelParams, IShovelPrice } from "./Showel";
import { ITechnicGeneral, ITechnicParams, ITechnincPrice } from "./Technic";

export type TAdvertType = keyof IAdvertMap;

interface IAdvert {
  id: string;
  type: "technic" | "dump" | "shovel";
  title: string;
  userId: string;
  userRating: number;
  updatedAt: number;
  views: Array<string>;
  likes: Array<string>;
  username: string;
}

export interface ITechnicAdvert extends IAdvert {
  type: "technic";
  general: IAdvertMap["technic"]["general"];
  params: IAdvertMap["technic"]["params"];
  price: IAdvertMap["technic"]["price"];
}

export interface IDumpAdvert extends IAdvert {
  type: "dump";
  typeOfTransaction: 'Сдать в аренду' | 'Взять в аренду';
  general: IAdvertMap["dump"]["general"];
  params: IAdvertMap["dump"]["params"];
  price: IAdvertMap["dump"]["price"];
}

export interface IShovelAdvert extends IAdvert {
  type: "shovel";
  typeOfTransaction: 'Сдать в аренду' | 'Взять в аренду';
  general: IAdvertMap["shovel"]["general"];
  params: IAdvertMap["shovel"]["params"];
  price: IAdvertMap["shovel"]["price"];
}

export type TAdvert = ITechnicAdvert | IDumpAdvert | IShovelAdvert;

interface IAdvertMap {
  technic: {
    general: ITechnicGeneral;
    params: ITechnicParams;
    price: ITechnincPrice;
  };
  shovel: {
    general: IShovelGeneral;
    params: IShovelParams;
    price: IShovelPrice;
  };
  dump: {
    general: IDumpGeneral;
    params: IDumpParams;
    price: IDumpPrice;
  };
}
