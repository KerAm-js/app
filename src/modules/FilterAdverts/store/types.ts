import {
  DumpAdvertDto,
  ITechnicAdvert,
  MaterialAdvertDto,
} from "../../../types/Advert";

type TTechnicParamsFilter = {
  [key in keyof Pick<
    ITechnicAdvert,
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
  [key in keyof Pick<ITechnicAdvert, "technicType" | "equipment">]: string[];
} & {
  [key in keyof Pick<
    ITechnicAdvert,
    "OSSIG" | "trailerType" | "sizeType" | "loadingType" | "rollerType"
  >]: string;
};

type TTechnicGeneralFilter = {
  [key in keyof Pick<
    ITechnicAdvert,
    "unitAmount" | "rentalFrom" | "rentalTo" | "rentalDaysCount"
  >]: { from: number; to: number };
} & {
  [key in keyof Pick<ITechnicAdvert, "shiftType">]: string;
};

type TTechnicPriceFilter = {
  [key in keyof Pick<ITechnicAdvert, "paymentUnit">]: string[];
} & {
  [key in keyof Pick<ITechnicAdvert, "paymentType">]: string;
} & {
  [key in keyof Pick<ITechnicAdvert, "price">]: { from: number; to: number };
};

export type TTechnicFilter = {
  transactionType: ITechnicAdvert["transactionType"];
} & TTechnicParamsFilter &
  TTechnicGeneralFilter &
  TTechnicPriceFilter;

export type TDumpFilter = {
  amountFrom?: number;
  amountTo?: number;
  coefficientFrom?: number;
  coefficientTo?: number;
  priceFrom?: number;
  priceTo?: number;
  transports?: DumpAdvertDto['dumpTransport']
} & Partial<
  Pick<
    DumpAdvertDto,
    | "dangerClass"
    | "measureIn"
    | "paymentType"
    | "shiftType"
    | "transactionType"
    | "wasteType"
  >
>;

export type TMaterialFilter = {
  amountFrom?: number;
  amountTo?: number;
  coefficientFrom?: number;
  coefficientTo?: number;
  priceFrom?: number;
  priceTo?: number;
  transports?: MaterialAdvertDto['dumpTransport']
} & Partial<
  Pick<
    MaterialAdvertDto,
    | "measureIn"
    | "paymentType"
    | "shiftType"
    | "transactionType"
    | "deliveryType"
    | "fractions"
  >
>;

export type TFilterState = {
  technic?: TTechnicFilter;
  dump?: TDumpFilter;
  material?: TMaterialFilter;
};
