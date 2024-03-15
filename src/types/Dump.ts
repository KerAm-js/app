import { TGeneral, TParams, TPrice } from "./others";

export interface IDumpGeneral extends TGeneral {}

export interface IDumpParams extends TParams {
  wasteType: string;
  dangerClass: "1 класс" | "2 класс" | "3 класс" | "4 класс" | "5 класс";
  transport: "Самосвал 3-х осный" | "Самосвал 4-х осный" | "Тонар";
  measureIn: "Тоннах" | "м3";
  amount: number;
}

export interface IDumpPrice extends TPrice {}
