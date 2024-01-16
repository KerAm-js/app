import { ITechnicOtherParams } from "../types/Technic";

export const EQUIPMENTS = {
  leveller: "3D нивелир",
  cuttingBlade: "Режущий отвал",
  pushingBlade: "Толкающий отвал",
  frontBlade: "Передний отвал",
  wateringCan: "Поливомойка",
  ripperFangs: "Клыки рыхлители",
  vibrationLoader: "Вибропогружатель",
  hydroDrill: "Гидробур",
  hydroHammer: "Гидромолот",
  hydroScissors: "Гидроножницы",
  crusher: "Крашер",
  millingCutter: "Фреза",
  pitchforks: "Вилы",
  brush: "Щётка",
  bucket: "Ковш",
  longBoom: "Длинная стрела",
  planningBucket: "Планеровочный ковш",
  waterDustSupression: "Водяное пылеподавление",
};

export const FRACTIONS = {
  fr5_20: "5-20",
  fr20_40: "20-40",
  fr40_70: "40-70",
  graniteScreening: "Отсев гранитный",
  gravelScreening: "Отсев гравийный",
  limestoneScreening: "Отсев известняковый",
  concreteScreening: "Отсев бетонный",
};

export const TECHNIC_PARAMS: {
  [key in keyof ITechnicOtherParams]: {
    title: string;
    measurement?: string;
  };
} = {
  weight: { title: "Вес", measurement: "тонн" },
  height: { title: "Высота", measurement: "м" },
  volume: { title: "Объём", measurement: "м3" },
  passengersCount: { title: "Количество пассажиров" },
  pipeLength: { title: "Длина труб", measurement: "м" },
  boomLength: { title: "Длина стрелы", measurement: "м" },
  liftingCapacity: { title: "Грузоподъёмность", measurement: "тонн" },
  performance: { title: "Производительность", measurement: "тонн/час" },
  cargoType: { title: "Вид груза" },
  rollerType: { title: "Тип вальцов" },
  rollersCount: { title: "Количество вальцов" },
  sizeType: { title: "Тип габаритности" },
  OSSIG: { title: "ОССИГ" },
  axesCount: { title: "Количество осей" },
  bodyLength: { title: "Длина кузова", measurement: "м" },
  trailerType: { title: "Тип прицепа" },
  loadingType: { title: "Тип погрузки" },
};

export const TECHNICS: {
  [key: string]: {
    params: { [key in keyof ITechnicOtherParams]: boolean | undefined };
    equipments: Array<string>;
    isTransport?: boolean;
  };
} = {
  Автовышка: {
    equipments: [],
    params: { boomLength: true, liftingCapacity: true },
  },
  Автовоз: {
    params: {},
    equipments: [],
    isTransport: true,
  },
  "Автобус пассажирский": {
    params: { passengersCount: true },
    equipments: [],
    isTransport: true,
  },
  Автобетононасос: {
    params: { pipeLength: true },
    equipments: [],
  },
  Автогрейдер: {
    params: { weight: true },
    equipments: [],
  },
  Автогудронатор: {
    params: {},
    equipments: [],
  },
  Автокран: {
    params: { boomLength: true, liftingCapacity: true },
    equipments: [],
  },
  Бетоновоз: {
    params: { volume: true },
    equipments: [],
    isTransport: true,
  },
  Бензовоз: {
    params: { volume: true },
    equipments: [],
    isTransport: true,
  },
  Бульдозер: {
    equipments: [
      EQUIPMENTS.leveller,
      EQUIPMENTS.cuttingBlade,
      EQUIPMENTS.pushingBlade,
      EQUIPMENTS.ripperFangs,
    ],
    params: { weight: true },
  },
  "Буровая установка": {
    params: {},
    equipments: [],
  },
  Водовоз: {
    params: { volume: true },
    equipments: [],
    isTransport: true,
  },
  Газель: {
    params: { liftingCapacity: true },
    equipments: [],
  },
  Гидробур: {
    params: {},
    equipments: [],
  },
  Грохот: {
    params: { performance: true },
    equipments: [],
  },
  "Дробильно-сортировочный комплекс": {
    params: { performance: true },
    equipments: [],
  },
  "Дробилка мобильная": {
    params: { performance: true },
    equipments: [],
  },
  Земснаряд: {
    params: {},
    equipments: [],
  },
  Зерновоз: {
    params: { volume: true, liftingCapacity: true, cargoType: true },
    equipments: [],
    isTransport: true,
  },
  "Каток грунтовой": {
    params: { weight: true },
    equipments: [],
  },
  "Каток дорожный": {
    params: { weight: true, rollerType: true, rollersCount: true },
    equipments: [],
  },
  Контейнеровоз: {
    params: {},
    equipments: [],
    isTransport: true,
  },
  "Кран башенный": {
    params: { liftingCapacity: true, height: true },
    equipments: [],
  },
  "Кран гусеничный": {
    equipments: [EQUIPMENTS.vibrationLoader],
    params: { liftingCapacity: true, height: true, sizeType: true },
  },
  Лесовоз: {
    params: { liftingCapacity: true, volume: true },
    equipments: [],
    isTransport: true,
  },
  Ломовоз: {
    params: { liftingCapacity: true, volume: true },
    equipments: [],
    isTransport: true,
  },
  "Мусоровоз (ПУХТО)": {
    params: { liftingCapacity: true, volume: true },
    equipments: [],
    isTransport: true,
  },
  Мультилифт: {
    params: { liftingCapacity: true, volume: true },
    equipments: [],
    isTransport: true,
  },
  Манипулятор: {
    equipments: [EQUIPMENTS.hydroDrill],
    params: { liftingCapacity: true, cargoType: true },
    isTransport: true,
  },
  "Погрузчик мини": {
    equipments: [
      EQUIPMENTS.hydroDrill,
      EQUIPMENTS.millingCutter,
      EQUIPMENTS.pitchforks,
      EQUIPMENTS.brush,
      EQUIPMENTS.hydroHammer,
      EQUIPMENTS.bucket,
    ],
    params: {},
  },
  "Поливомоечная машина": {
    params: { volume: true },
    equipments: [],
    isTransport: true,
  },
  "Погрузчик вилочный": {
    params: { liftingCapacity: true },
    equipments: [],
  },
  "Погрузчик телескопический": {
    params: { liftingCapacity: true, boomLength: true },
    equipments: [],
  },
  "Погрузчик фронтальный": {
    params: { volume: true, sizeType: true },
    equipments: [],
  },
  Рефрежиратор: {
    params: { volume: true, liftingCapacity: true, cargoType: true },
    equipments: [],
    isTransport: true,
  },
  "Ресайклер-стабилизатор грунта": {
    params: { sizeType: true },
    equipments: [],
  },
  Самосвал: {
    params: { volume: true, OSSIG: true, axesCount: true },
    equipments: [],
    isTransport: true,
  },
  "Самосвал вездеход": {
    params: { volume: true },
    equipments: [],
  },
  "Самосвал сочленённый": {
    params: { volume: true },
    equipments: [],
  },
  "Снегоуборочная машина": {
    params: {},
    equipments: [],
    isTransport: true,
  },
  Тонар: {
    params: { volume: true, cargoType: true },
    equipments: [],
    isTransport: true,
  },
  Трактор: {
    equipments: [
      EQUIPMENTS.frontBlade,
      EQUIPMENTS.wateringCan,
      EQUIPMENTS.brush,
      EQUIPMENTS.hydroDrill,
    ],
    params: { liftingCapacity: true },
  },
  Трал: {
    params: { cargoType: true, trailerType: true, loadingType: true },
    equipments: [],
    isTransport: true,
  },
  Тромель: {
    params: { performance: true },
    equipments: [],
  },
  Трубоукладчик: {
    params: { volume: true },
    equipments: [],
  },
  Фура: {
    params: { liftingCapacity: true, cargoType: true },
    equipments: [],
    isTransport: true,
  },
  "Фреза дорожная": {
    params: { sizeType: true },
    equipments: [],
  },
  "Фреза мини": {
    params: { sizeType: true },
    equipments: [],
  },
  Фургон: {
    params: { volume: true, liftingCapacity: true, cargoType: true },
    equipments: [],
    isTransport: true,
  },
  "Шаланда (длинномер)": {
    params: { liftingCapacity: true, cargoType: true, bodyLength: true },
    equipments: [],
    isTransport: true,
  },
  "Эвакуатор легковой": {
    params: { liftingCapacity: true },
    equipments: [],
    isTransport: true,
  },
  "Эвакуатор грузовой": {
    params: { liftingCapacity: true },
    equipments: [],
    isTransport: true,
  },
  "Экскаватор гусеничный": {
    equipments: [
      EQUIPMENTS.hydroHammer,
      EQUIPMENTS.vibrationLoader,
      EQUIPMENTS.hydroDrill,
      EQUIPMENTS.crusher,
      EQUIPMENTS.hydroScissors,
      EQUIPMENTS.longBoom,
      EQUIPMENTS.planningBucket,
      EQUIPMENTS.waterDustSupression,
    ],
    params: { weight: true, volume: true, boomLength: true },
  },
  "Экскаватор разрушитель": {
    equipments: [
      EQUIPMENTS.hydroHammer,
      EQUIPMENTS.vibrationLoader,
      EQUIPMENTS.hydroDrill,
      EQUIPMENTS.crusher,
      EQUIPMENTS.hydroScissors,
      EQUIPMENTS.longBoom,
      EQUIPMENTS.planningBucket,
      EQUIPMENTS.waterDustSupression,
    ],
    params: { weight: true },
  },
  "Экскаватор амфибия": {
    equipments: [
      EQUIPMENTS.hydroHammer,
      EQUIPMENTS.vibrationLoader,
      EQUIPMENTS.hydroDrill,
      EQUIPMENTS.crusher,
      EQUIPMENTS.hydroScissors,
      EQUIPMENTS.longBoom,
      EQUIPMENTS.planningBucket,
      EQUIPMENTS.waterDustSupression,
    ],
    params: {},
  },
  "Экскаватор колёсный": {
    equipments: [
      EQUIPMENTS.hydroHammer,
      EQUIPMENTS.vibrationLoader,
      EQUIPMENTS.hydroDrill,
      EQUIPMENTS.crusher,
      EQUIPMENTS.hydroScissors,
      EQUIPMENTS.longBoom,
      EQUIPMENTS.planningBucket,
      EQUIPMENTS.waterDustSupression,
    ],
    params: { weight: true, volume: true },
  },
  "Экскаватор погрузчик": {
    equipments: [
      EQUIPMENTS.hydroHammer,
      EQUIPMENTS.vibrationLoader,
      EQUIPMENTS.hydroDrill,
      EQUIPMENTS.crusher,
      EQUIPMENTS.hydroScissors,
      EQUIPMENTS.longBoom,
      EQUIPMENTS.planningBucket,
      EQUIPMENTS.waterDustSupression,
    ],
    params: {},
  },
  "Экскаватор мини": {
    equipments: [
      EQUIPMENTS.hydroHammer,
      EQUIPMENTS.vibrationLoader,
      EQUIPMENTS.hydroDrill,
      EQUIPMENTS.crusher,
      EQUIPMENTS.hydroScissors,
      EQUIPMENTS.longBoom,
      EQUIPMENTS.planningBucket,
      EQUIPMENTS.waterDustSupression,
    ],
    params: {},
  },
};

export const MATERIALS: {
  [key: string]: {
    fractions: Array<string>;
  };
} = {
  "Асфальтная крошка": {
    fractions: [],
  },
  "Асфальтный скол": {
    fractions: [],
  },
  Керамзит: {
    fractions: [FRACTIONS.fr5_20, FRACTIONS.fr20_40, FRACTIONS.fr40_70],
  },
  "Кирпичный бой": {
    fractions: [],
  },
  Пескогрунт: {
    fractions: [],
  },
  "Песок карьерный": {
    fractions: [],
  },
  "Песок мытый": {
    fractions: [],
  },
  "Песок сеяный": {
    fractions: [],
  },
  "Плодородный грунт": {
    fractions: [],
  },
  Торф: {
    fractions: [],
  },
  "Щебень вторичный (рецикл бетонный)": {
    fractions: [
      FRACTIONS.fr5_20,
      FRACTIONS.fr20_40,
      FRACTIONS.fr40_70,
      FRACTIONS.concreteScreening,
    ],
  },
  "Щебень гравийный": {
    fractions: [
      FRACTIONS.fr5_20,
      FRACTIONS.fr20_40,
      FRACTIONS.fr40_70,
      FRACTIONS.gravelScreening,
    ],
  },
  "Щебень гранитный": {
    fractions: [
      FRACTIONS.fr5_20,
      FRACTIONS.fr20_40,
      FRACTIONS.fr40_70,
      FRACTIONS.graniteScreening,
    ],
  },
  "Щебень известняковый": {
    fractions: [
      FRACTIONS.fr5_20,
      FRACTIONS.fr20_40,
      FRACTIONS.fr40_70,
      FRACTIONS.limestoneScreening,
    ],
  },
};

const materialsList = (
  Object.keys(MATERIALS) as Array<keyof typeof MATERIALS>
).reduce((accumulator, current) => {
  accumulator.push(current);
  return accumulator;
}, [] as Array<keyof typeof MATERIALS>);

const technicsList = (
  Object.keys(TECHNICS) as Array<keyof typeof TECHNICS>
).reduce((accumulator, current) => {
  accumulator.push(current);
  return accumulator;
}, [] as Array<keyof typeof TECHNICS>);

export const TECHS_LIST = technicsList.map((item) => item.toString());
export const MATERIALS_LIST = materialsList.map((item) => item.toString());
