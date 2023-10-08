export type TAdvertType = "excavator" | "shovel" | "dump"

export interface IAdvert {
  id: string;
  type: TAdvertType;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}
