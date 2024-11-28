export type TEquipment = { id: number; name: string };
export type TParameter = { id: number; name: string };
export type TFraction = { id: number; name: string };

export interface ITechnicType {
  id: number;
  name: string;
  equipments: Array<TEquipment>;
  parameters: Array<TParameter>;
}

export interface IDumpTransportType {
  id: number;
  name: string;
}

export interface IMaterialType {
  id: number;
  name: string;
  fractions: Array<TFraction>;
}