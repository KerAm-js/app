import {
  ITechnicGeneral,
  ITechnicParams,
  ITechnicPrice,
  TTechnicTransactionType,
} from "../../../types/Technic";

type TTechnicParamsFilter = {
  [key in keyof Pick<
    ITechnicParams,
    | "axesCount"
    | "bodyLength"
    | "boomLength"
    | "liftingCapacity"
    | "height"
    | "weight"
    | "volume"
    | "pipeLength"
    | "performance"
    | "passengersCount"
    | "rollersCount"
  >]: { from: number; to: number };
} & {
  [key in keyof Pick<ITechnicParams, "technicType" | "equipment">]: string[];
} & {
  [key in keyof Pick<
    ITechnicParams,
    "OSSIG" | "trailerType" | "sizeType" | "loadingType" | "rollerType"
  >]: string;
};

type TTechnicGeneralFilter = {
  [key in keyof Pick<
    ITechnicGeneral,
    "count" | "rentalPeriod" | "rentalDaysCount"
  >]: { from: number; to: number };
} & {
  [key in keyof Pick<ITechnicGeneral, "workMode">]: string;
};

type TTechnicPriceFilter = {
  [key in keyof Pick<ITechnicPrice, "paymentFor">]: string[];
} & {
  [key in keyof Pick<ITechnicPrice, "paymentType">]: string;
} & {
  [key in keyof Pick<ITechnicPrice, "price">]: { from: number; to: number };
};

export type TTechnicFilter = {
  transactionType: TTechnicTransactionType;
} & TTechnicParamsFilter &
  TTechnicGeneralFilter &
  TTechnicPriceFilter;

export type TDumpFilter = {};

export type TMaterialFilter = {};

export type TFilterState = {
  technic?: TTechnicFilter;
  dump?: TDumpFilter;
  material?: TMaterialFilter;
};
