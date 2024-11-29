import {
  DumpAdvertDto,
  MaterialAdvertDto,
  TechnicAdvertDto,
} from "../../../types/Advert";

export type TTechnicFilter = {
  axesCountFrom?: number;
  axesCountTo?: number;
  bodyLengthFrom?: number;
  bodyLengthTo?: number;
  boomLengthFrom?: number;
  boomLengthTo?: number;
  distanceFrom?: number;
  distanceTo?: number;
  heightFrom?: number;
  heightTo?: number;
  liftingCapacityFrom?: number;
  liftingCapacityTo?: number;
  passengersCountFrom?: number;
  passengersCountTo?: number;
  performanceFrom?: number;
  performanceTo?: number;
  pipeLengthFrom?: number;
  pipeLengthTo?: number;
  priceFrom?: number;
  priceTo?: number;
  productionYearFrom?: number;
  productionYearTo?: number;
  rentalDaysCountFrom?: number;
  rentalDaysCountTo?: number;
  rollersCountFrom?: number;
  rollersCountTo?: number;
  unitAmountFrom?: number;
  unitAmountTo?: number;
  volumeFrom?: number;
  volumeTo?: number;
  weightFrom?: number;
  weightTo?: number;
} & Partial<
  Pick<
    TechnicAdvertDto,
    | "equipment"
    | "loadingType"
    | "OSSIG"
    | "paymentType"
    | "paymentUnit"
    | "rollerType"
    | "technicType"
    | "trailerType"
    | "transactionType"
    | "shiftType"
    | "sizeType"
  >
>;

export type TDumpFilter = {
  amountFrom?: number;
  amountTo?: number;
  coefficientFrom?: number;
  coefficientTo?: number;
  priceFrom?: number;
  priceTo?: number;
  transports?: DumpAdvertDto["dumpTransport"];
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
  transports?: MaterialAdvertDto["dumpTransport"];
} & Partial<
  Pick<
    MaterialAdvertDto,
    | "materialType"
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
