import { TAdress, TGeneral, TParams, TPrice } from "./others";

export interface ITechnicGeneral extends TGeneral {
  count: number;
  rentalPeriod?: {
    from: number; //date
    to: number; //date
  };
  rentalDaysCount: number;
  secondAdress?: TAdress;
  distance?: number; // kilometers
}

export interface ITechnicParams extends TParams {
  technicType: string;
  mark?: string;
  model?: string;
  productionYear?: string;
  equipment?: string;
  weight?: number;
  height?: number;
  volume?: number;
  passengersCount?: number;
  pipeLength?: number;
  boomLength?: number;
  liftingCapacity?: number;
  performance?: number;
  cargoType?: string;
  rollerType?: "Гладкие" | "Комбинированные";
  rollersCount?: number;
  sizeType?: "Габаритный" | "Негабаритный";
  OSSIG?: "Подключён" | "Не подключён";
  axesCount?: number;
  bodyLength?: number;
  trailerType?: "Прицеп" | "Полуприцеп" | "Корыто" | "Прямая площадка";
  loadingType?: "Задняя" | "Передняя";
}

export interface ITechnincPrice extends TPrice {
  paymentFor: "Cмена" | "Час" | "м3/км" | "т/км";
}
