import { IDumpGeneral, IDumpParams, IDumpPrice } from "./Dump";
import { IShovelGeneral, IShovelParams, IShovelPrice } from "./Showel";
import { ITechnicGeneral, ITechnicParams, ITechnincPrice } from "./Technic";

export type TAdvertType = keyof IAdvertMap;

export type TAdvert =
  | {
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
  | {
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
  | {
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
    };

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
