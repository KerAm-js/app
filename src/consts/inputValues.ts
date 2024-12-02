export const INPUT_VALUES: {
  technicAdvertType: ["Сдать в аренду", "Взять в аренду"];
  workMode: ["День", "Ночь", "24 часа"];
  paymentForTechnic: ["Смена", "Час", "м3/км", "т/км"];
  paymentType: ["Наличные", "Безналичные", "Все"];
  dumpAdvertType: ["Отвал", "Нужен отвал", "Вывоз", "Нужен вывоз"];
  wasteTypes: [
    "Бетонный бой",
    "Глина",
    "Грунт",
    "Грунт жикдий",
    "Грунт замусоренный",
    "Суглинок"
  ];
  dangerClasses: ["1 класс", "2 класс", "3 класс", "4 класс", "5 класс"];
  dumpTransport: ["Самосвал 3-х осный", "Самосвал 4-х осный", "Тонар"];
  measure: ["Вес", "Объём"];
  materialAdvertType: ["Продать", "Купить"];
  materialTypes: [
    "Пескогрунт",
    "Песок карьерный",
    "Песок сеяный",
    "Песок мытый",
    "Щебень гравийный",
    "Щебень гранитный"
  ];
  delivery: ["С доставкой", "Самовывоз"];
  rollerType: ["Гладкие", "Комбинированные"];
  sizeType: ["Габаритный", "Негабаритный"];
  ossig: ["Подключён", "Не подключён"];
  trailerType: ["Прицеп", "Полуприцеп", "Корыто", "Прямая площадка"];
  loadingType: ["Задняя", "Передняя"];
  axesCount: ["3", "4"];
} = {
  technicAdvertType: ["Сдать в аренду", "Взять в аренду"],
  workMode: ["День", "Ночь", "24 часа"],
  paymentForTechnic: ["Смена", "Час", "м3/км", "т/км"],
  paymentType: ["Наличные", "Безналичные", "Все"],
  dumpAdvertType: ["Отвал", "Нужен отвал", "Вывоз", "Нужен вывоз"],
  wasteTypes: [
    "Бетонный бой",
    "Глина",
    "Грунт",
    "Грунт жикдий",
    "Грунт замусоренный",
    "Суглинок",
  ],
  dangerClasses: ["1 класс", "2 класс", "3 класс", "4 класс", "5 класс"],
  dumpTransport: ["Самосвал 3-х осный", "Самосвал 4-х осный", "Тонар"],
  measure: ["Вес", "Объём"],
  materialAdvertType: ["Продать", "Купить"],
  materialTypes: [
    "Пескогрунт",
    "Песок карьерный",
    "Песок сеяный",
    "Песок мытый",
    "Щебень гравийный",
    "Щебень гранитный",
  ],
  delivery: ["С доставкой", "Самовывоз"],
  rollerType: ["Гладкие", "Комбинированные"],
  sizeType: ["Габаритный", "Негабаритный"],
  ossig: ["Подключён", "Не подключён"],
  trailerType: ["Прицеп", "Полуприцеп", "Корыто", "Прямая площадка"],
  loadingType: ["Задняя", "Передняя"],
  axesCount: ["3", "4"],
};

export const INPUT_VALUES_WITH_ALL = {
  measure: [...INPUT_VALUES.measure, "Все"],
  delivery: [...INPUT_VALUES.delivery, "Все"],
  rollerType: [...INPUT_VALUES.rollerType, "Все"],
  sizeType: [...INPUT_VALUES.sizeType, "Все"],
  ossig: [...INPUT_VALUES.ossig, "Все"],
  trailerType: [...INPUT_VALUES.trailerType, "Все"],
  loadingType: [...INPUT_VALUES.loadingType, "Все"],
  axesCount: [...INPUT_VALUES.axesCount, "Все"],
  workMode: [...INPUT_VALUES.workMode, "Все"],
};
