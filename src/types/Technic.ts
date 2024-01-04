import { TAdress, TGeneral, TParams, TPrice } from "./others";

const techAd = {
  type: "",
  mark: "",
  model: "",
  productionYear: "",
  equipment: "",
  photos: [],
  weight: undefined,
  height: undefined,
  volume: undefined,
  passengersCount: undefined,
  pipeLength: undefined,
  boomLength: undefined,
  liftingCapacity: undefined,
  performance: undefined,
  cargoType: undefined,
  rollerType: undefined,
  rollersCount: undefined,
  technicType: undefined,
  OSSIG: undefined,
  axesNumber: undefined,
  bodyLength: undefined,
  trailerType: undefined,
  loadingType: undefined,
  count: 0,
  workMode: "День",
  rentalPeriod: undefined,
  rentalDaysCount: 0,
  address: "",
  secondAddress: undefined,
  distance: undefined,
  comment: "",
  price: 0,
  paymentType: "Наличные",
  paymentFor: "смену",
  username: "",
  phoneNumber: "",
}

export interface ITechnicGeneral extends TGeneral {
  count: number;
  rentalPeriod?: {
    from: number; //date
    to: number; //date
  };
  rentalDaysCount: number;
  secondAdress?: TAdress;
  distance?: number; // meters
}

export interface ITechnicParams extends TParams {
  mainParams: {
    Марка: string;
    Модель?: string;
    Год: number;
    Оборудование?: Array<string>;
  };
  otherParams: {
    weight?: {value: number, title: 'Вес'};
    Высота?: number;
    Объём?: number;
    "Количество пассажиров"?: number;
    "Длина трубы"?: number;
    "Длина стрелы"?: number;
    Грузоподъёмность?: number;
    Производительность?: number;
    "Вид груза"?: string;
    "Тип вальцов"?: "гладкие" | "комбинированные";
    "Количество вальцов"?: number;
    Тип?: "габаритный" | "негабаритный";
    Оссиг?: "Подключён" | "Не подключён";
    "Количество осей"?: number;
    "Длина кузова"?: number;
    "Тип прицепа"?: "Прицеп" | "Полуприцеп" | "Корыта" | "Прямая площадка";
    "Вид погрузки"?: "Задняя" | "Передняя";
  };
}

export interface ITechnincPrice extends TPrice {
  paymentFor: "смену" | "час" | "м3/км" | "т/км";
}
