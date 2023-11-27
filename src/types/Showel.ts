import { TGeneral, TParams, TPrice } from "./others";

export interface IShovelGeneral extends TGeneral {}

export interface IShovelParams extends TParams {
  otherParams: {};
}

export interface IShovelPrice extends TPrice {}