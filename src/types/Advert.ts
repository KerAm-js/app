import { IUser } from "./User";

export type TAdvertType = keyof IAdvertMap 

// export interface IAdvert<T extends TAdvertType> {
//   id: string;
//   type: T;
//   username: string;
//   userId: string;
//   userRating: number;
//   updatedAt: number;
//   views: Array<string>;
//   likes: Array<string>;
//   title: string;
//   general: IAdvertMap[T]["general"];
//   params: IAdvertMap[T]["params"];
//   price: IAdvertMap[T]["price"];
// }

export type TAdvert = {
  id: string;
  type: 'technic';
  username: string;
  userId: string;
  userRating: number;
  updatedAt: number;
  views: Array<string>;
  likes: Array<string>;
  title: string;
  general: IAdvertMap['technic']["general"];
  params: IAdvertMap['technic']["params"];
  price: IAdvertMap['technic']["price"];
} | {
  id: string;
  type: 'dump';
  username: string;
  userId: string;
  userRating: number;
  updatedAt: number;
  views: Array<string>;
  likes: Array<string>;
  title: string;
  general: IAdvertMap['dump']["general"];
  params: IAdvertMap['dump']["params"];
  price: IAdvertMap['dump']["price"];
} | {
  id: string;
  type: 'shovel';
  username: string;
  userId: string;
  userRating: number;
  updatedAt: number;
  views: Array<string>;
  likes: Array<string>;
  title: string;
  general: IAdvertMap['shovel']["general"];
  params: IAdvertMap['shovel']["params"];
  price: IAdvertMap['shovel']["price"];
}

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

export type TAdress = {
  latitude: number;
  longitude: number;
};

type TWorkMode = "day" | "night" | "all";

type TGeneral = {
  workMode: TWorkMode;
  comment?: string;
  address: string;
};

type TParams = {
  photos: Array<string>;
}

type TPrice = {
  price: number;
  paymentType: "cash" | "non-cash" | "all";
};

interface ITechnicGeneral extends TGeneral {
  count: number;
  rentalPeriod: {
    from: number; //date
    to: number; //date
  };
  rentalDaysCount: number;
  secondAdress?: TAdress;
  distance?: number; // meters
}

interface IShovelGeneral extends TGeneral {}

interface IDumpGeneral extends TGeneral {}

export interface ITechnicParams extends TParams {
  'Вид техники': string;
  'Марка'?: string;
  'Модель'?: string;
  'Год'?: number;
  'Оборудование'?: Array<string>;
  otherParams?: {
    'Вес'?: number;
    'Высота'?: number;
    'Объём'?: number;
    'Количество пассажиров'?: number;
    'Длина трубы'?: number;
    'Длина стрелы'?: number;
    'Грузоподъёмность'?: number;
    'Производительность'?: number;
    'Вид груза'?: string;
    'Тип вальцов'?: "гладкие" | "комбинированные";
    'Количество вальцов'?: number;
    'Тип'?: "габаритный" | "негабаритный";
    'Оссиг'?: "Подключён" | "Не подключён";
    'Количество осей'?: number;
    'Длина кузова'?: number;
    'Тип прицепа'?: "Прицеп" | "Полуприцеп" | "Корыта" | "Прямая площадка";
    'Вид погрузки'?: "Задняя" | "Передняя";
  }
}

interface IShovelParams extends TParams {
  otherParams?: {}
}

interface IDumpParams extends TParams {
  otherParams?: {}
}

interface ITechnincPrice extends TPrice {
  paymentFor: "смену" | "час" | "м3/км" | "т/км";
}

interface IShovelPrice extends TPrice {}

interface IDumpPrice extends TPrice {}
