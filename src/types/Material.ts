import { TGeneral, TParams, TPrice } from "./others";

export interface IMaterialGeneral extends TGeneral {
  delivery: "С доставкой" | "На самовывоз";
}

export interface IMaterialParams extends TParams {
  materialType: string;
  transport: "Самосвал 3-х осный" | "Самосвал 4-х осный" | "Тонар";
  measureIn: "Тоннах" | "м3";
  amount: number;
  fractions:
    | "5-20"
    | "20-40"
    | "40-70"
    | "Отсев гранитный"
    | "Отсев гравийный"
    | "Отсев известняковый"
    | "Отсев бетонный";
}

export interface IMaterialPrice extends TPrice {
  paymentFor: "Cмена" | "Час" | "м3" | "Тонна";
}
