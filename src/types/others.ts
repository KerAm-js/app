export type TAdress = {
  lat: number;
  lon: number;
};

export type TWorkMode = "День" | "Ночь" | "Круглосуточно";

export type TGeneral = {
  workMode: TWorkMode;
  comment?: string;
  address: string;
};

export type TParams = {
};

export type TPrice = {
  price: number;
  paymentType: "Наличные" | "Безналичные" | "Все";
  paymentFor: "Cмена" | "Час" | "м3/км" | "т/км" | "м3" | "Тонна";
};
