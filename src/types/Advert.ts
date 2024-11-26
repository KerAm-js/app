import { TechnicParams, NOT_SPECIFIED } from "./Technic";

export type TAdvertType = "TECHNIC" | "DUMP" | "NON_MATERIAL" | "OTHER";

type AdvertDto = {
  advertType: TAdvertType;
  addressLat: number;
  addressLon: number;
  transactionType: string;
  shiftType: "DAY" | "FULL" | "NIGHT";
  title: string;
  price: number;
  paymentType: "ANY" | "CASH" | "NON_CASH";
  description?: string;
};

interface BaseAdvert {
  id: number;
  advertStatus: "DELETED" | "STOPPER" | "PUBLISHED";
  ownerId: number;
  updatedAt: string;
  views: Array<number>;
  likes: Array<number>;
  photos?: Array<string>;
}

export interface TechnicAdvertDto extends AdvertDto, TechnicParams {
  advertType: "TECHNIC";
  transactionType: "GIVE_A_RENT" | "TAKE_A_RENT";
  unitAmount: number;
  isTransport: boolean;
  rentalFrom: string;
  rentalTo: string;
  rentalDaysCount: number;
  equipment: Array<{ id: number; name: string }>;
  secondAddressLat?: number;
  secondAddressLon?: number;
  distance?: number;
  paymentUnit: "HOUR" | "SHIFT" | "М3_KM" | "Т_КМ";
}

export interface DumpAdvertDto extends AdvertDto {
  advertType: "DUMP";
  advertStatus: BaseAdvert['advertStatus'];
  transactionType:
    | "NEED_SOIL_DUMP"
    | "NEED_SOIL_REMOVAL"
    | "SOIL_DUMP"
    | "SOIL_REMOVAL";
  wasteType: string;
  coefficient: number;
  dumpTransport: Array<{ id: number; name: string }>;
  measureIn: "VOLUME" | "WEIGHT";
  amount: number;
  dangerClass: "CLASS_1" | "CLASS_2" | "CLASS_3" | "CLASS_4" | "CLASS_5";
}

export interface MaterialAdvertDto extends AdvertDto {
  advertType: "NON_MATERIAL";
  advertStatus: BaseAdvert['advertStatus'];
  transactionType: "BUY" | "SELL";
  deliveryType: "DELIVERY" | "SELF_PICKUP";
  materialType: string;
  coefficient: number;
  dumpTransport: Array<{ id: number; name: string }>;
  measureIn: "VOLUME" | "WEIGHT";
  amount: number;
  fractions: Array<{ id: number; name: string }>;
}

export interface ITechnicAdvert extends BaseAdvert, TechnicAdvertDto {
  secondAddressLat: number;
  secondAddressLon: number;
  distance: number;
  weight: number;
  height: number;
  volume: number;
  passengersCount: number;
  pipeLength: number;
  boomLength: number;
  liftingCapacity: number;
  performance: number;
  cargoType: string;
  rollerType: "SMOOTH" | "MIXED" | NOT_SPECIFIED;
  rollersCount: number;
  sizeType: "OVERSIZE" | "OVERALL" | NOT_SPECIFIED;
  OSSIG: boolean;
  axesCount: number;
  bodyLength: number;
  trailerType:
    | "FLAT_TRAILER"
    | "LOWBOY"
    | "SEMI_TRAILER"
    | "TRAILER"
    | NOT_SPECIFIED;
  loadingType: "FRONT" | "REAR" | NOT_SPECIFIED;
}

export interface IDumpAdvert extends BaseAdvert, DumpAdvertDto {}

export interface IMaterialAdvert extends BaseAdvert, MaterialAdvertDto {}

export type IAdvert = IMaterialAdvert | ITechnicAdvert | IDumpAdvert;

export type IMiniAdvert = Pick<IAdvert, "id" | "addressLat" | "addressLon" | "advertType">
