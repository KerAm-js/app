import { TGeneral, TParams, TPrice } from "./others";

export interface IDumpGeneral extends TGeneral {}


export interface IDumpParams extends TParams {
  otherParams: {};
}

export interface IDumpPrice extends TPrice {}