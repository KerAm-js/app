export type NOT_SPECIFIED = "NOT_SPECIFIED";

export type TechnicParams = {
  technicType: string;
  technicMark: string;
  technicModel: string;
  productionYear: number;
  weight?: number;
  height?: number;
  volume?: number;
  passengersCount?: number;
  pipeLength?: number;
  boomLength?: number;
  liftingCapacity?: number;
  performance?: number;
  cargoType?: string;
  rollerType?: "SMOOTH" | "MIXED" | NOT_SPECIFIED;
  rollersCount?: number;
  sizeType?: "OVERSIZE" | "OVERALL" | NOT_SPECIFIED;
  ossig?: boolean;
  axesCount?: number;
  bodyLength?: number;
  trailerType?:
    | "FLAT_TRAILER"
    | "LOWBOY"
    | "SEMI_TRAILER"
    | "TRAILER"
    | NOT_SPECIFIED;
  loadingType?: "FRONT" | "REAR" | NOT_SPECIFIED;
}
