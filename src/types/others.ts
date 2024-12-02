export type TAdress = {
  lat: number;
  lon: number;
};

export type TGeneral = {
  workMode: "День" | "Ночь" | "24 часа";
  comment?: string;
  address: string;
};

export type TParams = {};

export type TPrice = {
  price: number;
  paymentType: "Наличные" | "Безналичные" | "Все";
};

export type NullablePartial<T> = { [P in keyof T]?: T[P] | null };
