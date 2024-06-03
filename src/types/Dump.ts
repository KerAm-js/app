import { TGeneral, TParams, TPrice } from "./others";

export type TDumpTransactionType =
  | "Отвал"
  | "Нужен отвал"
  | "Вывоз"
  | "Нужен вывоз";

export interface IDumpGeneral extends TGeneral {}

export interface IDumpParams extends TParams {
  wasteType: string;
  coefficient: number;
  dangerClass: "1 класс" | "2 класс" | "3 класс" | "4 класс" | "5 класс";
  transport: "Самосвал 3-х осный" | "Самосвал 4-х осный" | "Тонар";
  measure: "weight" | "volume";
  amount: number;
}

export interface IDumpPrice extends TPrice {
}
