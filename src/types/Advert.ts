import { IDumpGeneral, IDumpParams, IDumpPrice } from "./Dump";
import { IShovelGeneral, IShovelParams, IShovelPrice } from "./Showel";
import { ITechnicGeneral, ITechnicParams, ITechnincPrice } from "./Technic";

export type TAdvertType = keyof IAdvertMap;

export interface ITechnicAdvert {
  id: string;
  type: "technic";
  username: string;
  userId: string;
  userRating: number;
  updatedAt: number;
  views: Array<string>;
  likes: Array<string>;
  title: string;
  general: IAdvertMap["technic"]["general"];
  params: IAdvertMap["technic"]["params"];
  price: IAdvertMap["technic"]["price"];
}

export interface IDumpAdvert {
  id: string;
  type: "dump";
  username: string;
  userId: string;
  userRating: number;
  updatedAt: number;
  views: Array<string>;
  likes: Array<string>;
  title: string;
  general: IAdvertMap["dump"]["general"];
  params: IAdvertMap["dump"]["params"];
  price: IAdvertMap["dump"]["price"];
}

export interface IShovelAdvert {
  id: string;
  type: "shovel";
  username: string;
  userId: string;
  userRating: number;
  updatedAt: number;
  views: Array<string>;
  likes: Array<string>;
  title: string;
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
