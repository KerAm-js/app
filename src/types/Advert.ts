import { IDumpGeneral, IDumpParams, IDumpPrice } from "./Dump";
import { IMaterialGeneral, IMaterialParams, IMaterialPrice } from "./Material";
import { ITechnicGeneral, ITechnicParams, ITechnincPrice } from "./Technic";

export type TAdvertType = keyof IAdvertMap;

interface IAdvert {
  id: string;
  type: string;
  status: 'published' | 'stopped' | 'deleted',
  transactionType: string;
  title: string;
  userId: string;
  userRating: number;
  updatedAt: number;
  views: Array<string>;
  likes: Array<string>;
  username: string;
  photos: Array<string>;
}

export interface ITechnicAdvert extends IAdvert {
  type: "technic";
  transactionType: "Сдать в аренду" | "Взять в аренду";
  general: IAdvertMap["technic"]["general"];
  params: IAdvertMap["technic"]["params"];
  price: IAdvertMap["technic"]["price"];
}

export interface IDumpAdvert extends IAdvert {
  type: "dump";
  transactionType: "Отвал" | "Нужен отвал" | "Вывоз" | "Нужен вывоз";
  general: IAdvertMap["dump"]["general"];
  params: IAdvertMap["dump"]["params"];
  price: IAdvertMap["dump"]["price"];
}

export interface IMaterialAdvert extends IAdvert {
  type: "material";
  transactionType: "Купить" | "Продать";
  general: IAdvertMap["material"]["general"];
  params: IAdvertMap["material"]["params"];
  price: IAdvertMap["material"]["price"];
}

export type TAdvert = ITechnicAdvert | IDumpAdvert | IMaterialAdvert;

interface IAdvertMap {
  technic: {
    general: ITechnicGeneral;
    params: ITechnicParams;
    price: ITechnincPrice;
  };
  material: {
    general: IMaterialGeneral;
    params: IMaterialParams;
    price: IMaterialPrice;
  };
  dump: {
    general: IDumpGeneral;
    params: IDumpParams;
    price: IDumpPrice;
  };
}
