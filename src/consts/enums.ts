import {
  ITechnicAdvert,
  IAdvert,
  IDumpAdvert,
  IMaterialAdvert,
} from "../types/Advert";

export const ALL = "Все";

export const ENUM_TITLES: { [key in TEnum]: string } = {
  BUY: "Купля",
  SELL: "Продажа",
  GIVE_A_RENT: "Аренда",
  TAKE_A_RENT: "Нужна аренда",
  NEED_SOIL_DUMP: "Нужен отвал",
  NEED_SOIL_REMOVAL: "Нужен вывоз",
  SOIL_DUMP: "Отвал",
  SOIL_REMOVAL: "Вывоз",
  ANY: "Любой",
  CASH: "Наличные",
  CLASS_1: "1 класс",
  CLASS_2: "2 класс",
  CLASS_3: "3 класс",
  CLASS_4: "4 класс",
  CLASS_5: "5 класс",
  DAY: "День",
  DELIVERY: "Доставка",
  DELETED: "Удалено",
  DUMP: "Свалки",
  FLAT_TRAILER: "Прямая площадка",
  FRONT: "Передняя",
  FULL: "24 часа",
  HOUR: "Час",
  LOWBOY: "Корыто",
  MIXED: "Комбинированные",
  NIGHT: "Ночь",
  NON_CASH: "Безналичные",
  NON_MATERIAL: "Нерудные материалы",
  OVERALL: "Негабаритный",
  OVERSIZE: "Габаритный",
  PUBLISHED: "Опубликовано",
  REAR: "Задняя",
  SELF_PICKUP: "Самовывоз",
  SEMI_TRAILER: "Полуприцеп",
  SHIFT: "Смена",
  SMOOTH: "Гладкие",
  STOPPER: "Скрыто",
  TRAILER: "Прицеп",
  VOLUME: "Объём",
  WEIGHT: "Вес",
  M3_KM: "м3/км",
  T_KM: "т/км",
  NOT_SPECIFIED: "",
  TECHNIC: "Техника",
};

export const TECHNIC_TRANSACTION_TYPES: ITechnicAdvert["transactionType"][] = [
  "GIVE_A_RENT",
  "TAKE_A_RENT",
];
export const DUMP_TRANSACTION_TYPES: IDumpAdvert["transactionType"][] = [
  "SOIL_DUMP",
  "SOIL_REMOVAL",
  "NEED_SOIL_DUMP",
  "NEED_SOIL_REMOVAL",
];
export const MATERIAL_TRANSACTION_TYPES: IMaterialAdvert["transactionType"][] =
  ["BUY", "SELL"];

export const ADVERT_STATUSES: IAdvert["advertStatus"][] = [
  "DELETED",
  "PUBLISHED",
  "STOPPER",
];
export const PAYMENT_TYPES: IAdvert["paymentType"][] = [
  "CASH",
  "NON_CASH",
  "ANY",
];
export const LOADING_TYPES: ITechnicAdvert["loadingType"][] = ["FRONT", "REAR"];
export const PAYMENT_UNITS: ITechnicAdvert["paymentUnit"][] = [
  "HOUR",
  "SHIFT",
  "M3_KM",
  "T_KM",
];
export const ROLLER_TYPES: ITechnicAdvert["rollerType"][] = ["MIXED", "SMOOTH"];
export const SHIFT_TYPES: ITechnicAdvert["shiftType"][] = [
  "DAY",
  "NIGHT",
  "FULL",
];
export const SIZE_TYPES: ITechnicAdvert["sizeType"][] = ["OVERALL", "OVERSIZE"];
export const TRAILER_TYPES: ITechnicAdvert["trailerType"][] = [
  "TRAILER",
  "SEMI_TRAILER",
  "FLAT_TRAILER",
  "LOWBOY",
];
export const DANGER_CLASSES: IDumpAdvert["dangerClass"][] = [
  "CLASS_1",
  "CLASS_2",
  "CLASS_3",
  "CLASS_4",
  "CLASS_5",
];
export const MEASURE_IN: IDumpAdvert["measureIn"][] = ["WEIGHT", "VOLUME"];
export const DELIVERY: IMaterialAdvert["deliveryType"][] = [
  "DELIVERY",
  "SELF_PICKUP",
];
export const AXES_COUNTS = ["3", "4"];

type TEnum =
  | IAdvert["transactionType"]
  | IAdvert["advertStatus"]
  | IAdvert["advertType"]
  | IAdvert["paymentType"]
  | ITechnicAdvert["loadingType"]
  | ITechnicAdvert["paymentUnit"]
  | ITechnicAdvert["rollerType"]
  | ITechnicAdvert["shiftType"]
  | ITechnicAdvert["sizeType"]
  | ITechnicAdvert["trailerType"]
  | IDumpAdvert["dangerClass"]
  | IDumpAdvert["measureIn"]
  | IMaterialAdvert["deliveryType"]
  | IMaterialAdvert["measureIn"];

export const ENUMS = {
  technincTransactionTypes: TECHNIC_TRANSACTION_TYPES.map(
    (i) => ENUM_TITLES[i]
  ),
  dumpTransactionTypes: DUMP_TRANSACTION_TYPES.map((i) => ENUM_TITLES[i]),
  materialTransactionTypes: MATERIAL_TRANSACTION_TYPES.map(
    (i) => ENUM_TITLES[i]
  ),
  advertStatuses: ADVERT_STATUSES.map((i) => ENUM_TITLES[i]),
  paymentTypes: PAYMENT_TYPES.map((i) => ENUM_TITLES[i]),
  loadingTypes: LOADING_TYPES.map((i) => ENUM_TITLES[i]),
  paymentUnits: PAYMENT_UNITS.map((i) => ENUM_TITLES[i]),
  rollerTypes: ROLLER_TYPES.map((i) => ENUM_TITLES[i]),
  shiftTypes: SHIFT_TYPES.map((i) => ENUM_TITLES[i]),
  sizeTypes: SIZE_TYPES.map((i) => ENUM_TITLES[i]),
  trailerTypes: TRAILER_TYPES.map((i) => ENUM_TITLES[i]),
  dangerClasses: DANGER_CLASSES.map((i) => ENUM_TITLES[i]),
  measureIn: MEASURE_IN.map((i) => ENUM_TITLES[i]),
  delivery: DELIVERY.map((i) => ENUM_TITLES[i]),
};

export const OSSIG_TITLES = ['Подключён', 'Не подключён'];

export const FILTER_ENUMS_WITH_ALL = {
  advertStatuses: [...ENUMS.advertStatuses, ALL],
  paymentTypes: [...ENUMS.paymentTypes, ALL],
  loadingTypes: [...ENUMS.loadingTypes, ALL],
  paymentUnits: [...ENUMS.paymentUnits, ALL],
  rollerTypes: [...ENUMS.rollerTypes, ALL],
  shiftTypes: [...ENUMS.shiftTypes, ALL],
  sizeTypes: [...ENUMS.sizeTypes, ALL],
  trailerTypes: [...ENUMS.trailerTypes, ALL],
  dangerClasses: [...ENUMS.dangerClasses, ALL],
  measureIn: [...ENUMS.measureIn, ALL],
  delivery: [...ENUMS.delivery, ALL],
  axesCount: [...AXES_COUNTS, ALL],
  ossig: [...OSSIG_TITLES, ALL]
};
