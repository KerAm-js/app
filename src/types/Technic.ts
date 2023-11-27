import { TAdress, TGeneral, TParams, TPrice } from "./others";

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
    Вес?: number;
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
