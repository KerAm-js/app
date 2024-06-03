export const RENT_OUT = "rentOut";
export const RENT = "rent";
export const SELL = "sell";
export const BUY = "buy";
export const DUMP = "dump";
export const NEED_DUMP = "needDump";
export const EXPORT = "export";
export const NEED_EXPORT = "needExport";

export const propTitles: {
  [key: string]: {
    title: string;
    getter?: (flag: boolean) => [title: string, measurement: string];
    measurement?: string;
  };
} = {
  technicType: { title: "Вид техники", measurement: undefined },
  mark: { title: "Марка", measurement: undefined },
  model: { title: "Модель", measurement: undefined },
  productionYear: { title: "Год производства", measurement: undefined },
  equipment: { title: "Доп. оборудование", measurement: undefined },
  weight: { title: "Вес", measurement: "т" },
  height: { title: "Высота", measurement: "м" },
  volume: { title: "Объём", measurement: "м3" },
  passengersCount: { title: "Количество пассажиров" },
  pipeLength: { title: "Длина труб", measurement: "м" },
  boomLength: { title: "Длина стрелы", measurement: "м" },
  liftingCapacity: { title: "Грузоподъёмность", measurement: "т" },
  performance: { title: "Производительность", measurement: "т/час" },
  cargoType: { title: "Вид груза" },
  rollerType: { title: "Тип вальцов" },
  rollersCount: { title: "Количество вальцов" },
  sizeType: { title: "Тип габаритности" },
  OSSIG: { title: "ОССИГ" },
  axesCount: { title: "Количество осей" },
  bodyLength: { title: "Длина кузова", measurement: "м" },
  trailerType: { title: "Тип прицепа" },
  loadingType: { title: "Тип погрузки" },
  materialType: { title: "Вид материала", measurement: undefined },
  transport: { title: "Транспорт", measurement: undefined },
  amount: { title: "Количество", measurement: undefined },
  fractions: { title: "Фракции", measurement: undefined },
  wasteType: { title: "Вид отходов", measurement: undefined },
  dangerClass: { title: "Класс опасности", measurement: undefined },
  coefficient: {title: "Коэффициент"}
};
