export type TAdress = {
  latitude: number;
  longitude: number;
};

export type TWorkMode = "День" | "Ночь" | "Круглосуточно";

export type TGeneral = {
  workMode: TWorkMode;
  comment?: string;
  address: string;
};

export type TParams = {
  type: string;
  photos: Array<string>;
};

export type TPrice = {
  price: number;
  paymentType: "Наличные" | "Безналичные" | "Любой";
  paymentFor: "смену" | "час" | "м3/км" | "т/км" | "м3" | "тонну";
};
