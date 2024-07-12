import { IDumpGeneral, IDumpParams, IDumpPrice, TDumpTransactionType } from "./Dump";
import { IMaterialGeneral, IMaterialParams, IMaterialPrice, TMaterialTransactionType } from "./Material";
import {
  ITechnicGeneral,
  ITechnicParams,
  ITechnicPrice,
  TTechnicTransactionType,
} from "./Technic";

export type TAdvert = ITechnicAdvert | IDumpAdvert | IMaterialAdvert;

export type TAdvertType = keyof IAdvertMap;

interface IAdvert {
  id: number;
  type: TAdvertType;
  status: "published" | "stopped" | "deleted";
  transactionType: string;
  title: string;
  userId: number;
  userRating: number;
  updatedAt: number;
  views: Array<number>;
  likes: Array<number>;
  username: string;
  photos: Array<string>;
}

export interface ITechnicAdvert extends IAdvert {
  type: "technic";
  transactionType: TTechnicTransactionType;
  general: IAdvertMap["technic"]["general"];
  params: IAdvertMap["technic"]["params"];
  price: IAdvertMap["technic"]["price"];
}

export interface IDumpAdvert extends IAdvert {
  type: "dump";
  transactionType: TDumpTransactionType;
  general: IAdvertMap["dump"]["general"];
  params: IAdvertMap["dump"]["params"];
  price: IAdvertMap["dump"]["price"];
}

export interface IMaterialAdvert extends IAdvert {
  type: "material";
  transactionType: TMaterialTransactionType;
  general: IAdvertMap["material"]["general"];
  params: IAdvertMap["material"]["params"];
  price: IAdvertMap["material"]["price"];
}

interface IAdvertMap {
  technic: {
    general: ITechnicGeneral;
    params: ITechnicParams;
    price: ITechnicPrice;
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
