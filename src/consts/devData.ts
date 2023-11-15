import { IUser } from "../types/User";

export const USERS_LIST: Array<IUser> = [
  {
    id: "2",
    description: "",
    phone: "+7 928 123-45-67",
    username: "User 1",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    adverts: [
      {
        id: "0",
        userId: "1",
        username: "ДунСтрой Групп",
        userRating: 4.7,
        type: "technic",
        updatedAt: Date.now() - 1000 * 3600,
        likes: ["2", "3", "7", "13"],
        views: ["1", "2", "3", "4", "5", "6", "7"],
        title: 'Сдаётся гусеничный экскаватор Hyundai',
        general: {
          address: "Москва, Химки",
          count: 3,
          workMode: "day",
          rentalPeriod: {
            from: new Date('21.11.2023').valueOf(),
            to: new Date('21.12.2023').valueOf(),
          },
          rentalDaysCount: new Date('21.11.2023').valueOf() - new Date('21.12.2023').valueOf() / (1000 * 3600 * 24)
        },
        price: {
          price: 10000,
          paymentFor: "смену",
          paymentType: "cash",
        },
        params: {
          'Вид техники': "Экскаватор гусеничный",
          photos: [
            "https://lonmadi.ru/content/catalog/bd82d9b3ff14ebe1fb1a360a070e27bd.jpg",
            "https://cdn.stpulscen.ru/system/ckeditor_assets/pictures/352723/content_kovshi-jcb-01.jpg",
            "https://avatars.mds.yandex.net/get-autoru-vos/11038141/883df25017df09a8cda4c1a43d9161e9/1200x900",
            "https://stkalmaz.ru/wp-content/uploads/2023/03/7086387da2a68ceebf759ef9b1eac6f3.jpeg",
            "https://www.prostanki.com/img/boardpics/2020_03/A1BynE6lzoSMcp9Qs3Jq.jpg",
            "http://static.gmstar.ru/boardImage/imageOriginal/4/115921/1536652020_gusenichnyy_ekskavat.jpg",
            "https://www.tornometal.com/wp-content/uploads/2015/04/JS205LC-Low2.jpg",
            "https://avatars.mds.yandex.net/get-ydo/3904573/2a000001874673c75e8aa2bbbceda3077e5b/diploma",
            "https://yard-imperial.ru/images/ekskavator/gusenich/Гусеничный%20экскаватор%20JCB%20JS%20260.jpg",
            "https://hyundai-tmu.ru/upload/iblock/021/021508837e89efecac6f380fc3f841c6.jpg",
            "https://vst-parts.ru/wa-data/public/shop/products/45/07/745/images/923/923.970.jpg",
            "https://stroy-plys.ru/uploads/posts/2014-01/1390641675_ekskavator-gusenichnyy-hyundai-380.jpg",
          ],
          otherParams: {
            'Вес': 32.2,
            'Объём': 1.44
          }
        },
      },
      {
        id: "2",
        userId: "1",
        username: "ДунСтрой Групп",
        userRating: 4.7,
        type: "technic",
        updatedAt: Date.now(),
        likes: ["1", "2", "3", "7", "13"],
        views: ["1", "2", "3", "4", "5", "6", "7"],
        title: 'Сдаётся гусеничный экскаватор Hyundai',
        general: {
          address: "Москва, Химки",
          count: 3,
          workMode: "day",
          rentalPeriod: {
            from: new Date('21.11.2023').valueOf(),
            to: new Date('21.12.2023').valueOf(),
          },
          rentalDaysCount: new Date('21.11.2023').valueOf() - new Date('21.12.2023').valueOf() / (1000 * 3600 * 24)
        },
        price: {
          price: 10000,
          paymentFor: "час",
          paymentType: "cash",
        },
        params: {
          'Вид техники': "Экскаватор гусеничный",
          photos: [
          ],
          otherParams: {
            'Вес': 32.2,
            'Объём': 1.44
          }
        },
      },
      {
        id: "3",
        userId: "1",
        username: "ДунСтрой Групп",
        userRating: 4.7,
        type: "technic",
        updatedAt: Date.now() - (1000 * 3600 * 24),
        likes: ["2", "3", "7", "13"],
        views: ["1", "2", "3", "4", "5", "6", "7"],
        title: 'Сдаётся гусеничный экскаватор Hyundai',
        general: {
          address: "Москва, Химки",
          count: 3,
          workMode: "day",
          rentalPeriod: {
            from: new Date('21.11.2023').valueOf(),
            to: new Date('21.12.2023').valueOf(),
          },
          rentalDaysCount: new Date('21.11.2023').valueOf() - new Date('21.12.2023').valueOf() / (1000 * 3600 * 24)
        },
        price: {
          price: 10000,
          paymentFor: "м3/км",
          paymentType: "cash",
        },
        params: {
          'Вид техники': "Экскаватор гусеничный",
          photos: [
            "https://lonmadi.ru/content/catalog/bd82d9b3ff14ebe1fb1a360a070e27bd.jpg",
            "https://cdn.stpulscen.ru/system/ckeditor_assets/pictures/352723/content_kovshi-jcb-01.jpg",
            "https://avatars.mds.yandex.net/get-autoru-vos/11038141/883df25017df09a8cda4c1a43d9161e9/1200x900",
          ],
          otherParams: {
            'Вес': 32.2,
            'Объём': 1.44
          }
        },
      },
      {
        id: "4",
        userId: "1",
        username: "ДунСтрой Групп",
        userRating: 4.7,
        type: "technic",
        updatedAt: Date.now() - (1000 * 3600 * 24 * 7),
        likes: ["2", "3", "7", "13"],
        views: ["1", "2", "3", "4", "5", "6", "7"],
        title: 'Сдаётся гусеничный экскаватор Hyundai',
        general: {
          address: "Москва, Химки",
          count: 3,
          workMode: "day",
          rentalPeriod: {
            from: new Date('21.11.2023').valueOf(),
            to: new Date('21.12.2023').valueOf(),
          },
          rentalDaysCount: new Date('21.11.2023').valueOf() - new Date('21.12.2023').valueOf() / (1000 * 3600 * 24)
        },
        price: {
          price: 10000,
          paymentFor: "смену",
          paymentType: "cash",
        },
        params: {
          'Вид техники': "Экскаватор гусеничный",
          photos: [
            "https://lonmadi.ru/content/catalog/bd82d9b3ff14ebe1fb1a360a070e27bd.jpg",
            "https://cdn.stpulscen.ru/system/ckeditor_assets/pictures/352723/content_kovshi-jcb-01.jpg",
            "https://avatars.mds.yandex.net/get-autoru-vos/11038141/883df25017df09a8cda4c1a43d9161e9/1200x900",
          ],
          otherParams: {
            'Вес': 32.2,
            'Объём': 1.44
          }
        },
      },
      {
        id: "5",
        userId: "1",
        username: "ДунСтрой Групп",
        userRating: 4.7,
        type: "technic",
        updatedAt: Date.now(),
        likes: ["2", "3", "7", "13"],
        views: ["1", "2", "3", "4", "5", "6", "7"],
        title: 'Сдаётся гусеничный экскаватор Hyundai',
        general: {
          address: "Москва, Химки",
          count: 3,
          workMode: "day",
          rentalPeriod: {
            from: new Date('21.11.2023').valueOf(),
            to: new Date('21.12.2023').valueOf(),
          },
          rentalDaysCount: new Date('21.11.2023').valueOf() - new Date('21.12.2023').valueOf() / (1000 * 3600 * 24)
        },
        price: {
          price: 10000,
          paymentFor: "смену",
          paymentType: "cash",
        },
        params: {
          'Вид техники': "Экскаватор гусеничный",
          photos: [
            "https://lonmadi.ru/content/catalog/bd82d9b3ff14ebe1fb1a360a070e27bd.jpg",
            "https://cdn.stpulscen.ru/system/ckeditor_assets/pictures/352723/content_kovshi-jcb-01.jpg",
            "https://avatars.mds.yandex.net/get-autoru-vos/11038141/883df25017df09a8cda4c1a43d9161e9/1200x900",
          ],
          otherParams: {
            'Вес': 32.2,
            'Объём': 1.44
          }
        },
      },
    ],
    comments: [
      {
        id: "1",
        authorId: "1",
        authorName: "ДунСтрой Групп",
        adresseeId: "2",
        rate: 5,
        text: "В данном блоке будет отображаться текст вашего отзыва",
      },
      {
        id: "2",
        authorId: "1",
        authorName: "ДунСтрой Групп",
        adresseeId: "2",
        rate: 5,
        text: "В данном блоке будет отображаться текст вашего отзыва",
      },
      {
        id: "6",
        authorId: "2",
        authorName: "ДунСтрой Групп",
        adresseeId: "3",
        rate: 5,
        text: "В данном блоке будет отображаться текст вашего отзыва",
      },
    ],
  },
  {
    id: "3",
    description: "",
    phone: "+7 928 123-45-68",
    username: "User 2",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    adverts: [],
    comments: [
      {
        id: "3",
        authorId: "1",
        authorName: "ДунСтрой Групп",
        adresseeId: "3",
        rate: 5,
        text: "В данном блоке будет отображаться текст вашего отзыва. В данном блоке будет отображаться текст вашего отзыва. В данном блоке будет отображаться текст вашего отзыва. В данном блоке будет отображаться текст вашего отзыва. В данном блоке будет отображаться текст вашего отзыва.",
      },
      {
        id: "6",
        authorId: "2",
        authorName: "ДунСтрой Групп",
        adresseeId: "3",
        rate: 5,
        text: "В данном блоке будет отображаться текст вашего отзыва",
      },
      {
        id: "7",
        authorId: "4",
        authorName: "ДунСтрой Групп",
        adresseeId: "3",
        rate: 5,
        text: "В данном блоке будет отображаться текст вашего отзыва",
      },
      {
        id: "8",
        authorId: "5",
        authorName: "ДунСтрой Групп",
        adresseeId: "3",
        rate: 5,
        text: "В данном блоке будет отображаться текст вашего отзыва",
      },
      {
        id: "9",
        authorId: "7",
        authorName: "ДунСтрой Групп",
        adresseeId: "3",
        rate: 5,
        text: "В данном блоке будет отображаться текст вашего отзыва",
      },
    ],
  },
  {
    id: "4",
    description: "",
    phone: "+7 928 223-45-69",
    username: "User 3",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    adverts: [],
    comments: [
      {
        id: "7",
        authorId: "4",
        authorName: "ДунСтрой Групп",
        adresseeId: "3",
        rate: 5,
        text: "В данном блоке будет отображаться текст вашего отзыва",
      },
    ],
  },
  {
    id: "5",
    description: "",
    phone: "+7 928 323-45-67",
    username: "User 4",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    adverts: [],
    comments: [
      {
        id: "8",
        authorId: "5",
        authorName: "ДунСтрой Групп",
        adresseeId: "3",
        rate: 5,
        text: "В данном блоке будет отображаться текст вашего отзыва",
      },
    ],
  },
  {
    id: "6",
    description: "",
    phone: "+7 963 123-45-67",
    username: "Usr 2",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    adverts: [],
    comments: [],
  },
  {
    id: "7",
    description: "",
    phone: "+7 933 123-45-67",
    username: "Usr 1",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    adverts: [],
    comments: [
      {
        id: "9",
        authorId: "7",
        authorName: "ДунСтрой Групп",
        adresseeId: "3",
        rate: 5,
        text: "В данном блоке будет отображаться текст вашего отзыва",
      },
    ],
  },
  {
    id: "8",
    description: "",
    phone: "+7 928 133-45-67",
    username: "Usr 1",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    adverts: [],
    comments: [],
  },
  {
    id: "9",
    description: "",
    phone: "+7 928 133-45-68",
    username: "User 2",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    adverts: [],
    comments: [],
  },
  {
    id: "10",
    description: "",
    phone: "+7 928 233-45-69",
    username: "Use 0",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    adverts: [],
    comments: [],
  },
  {
    id: "11",
    description: "",
    phone: "+7 928 333-45-67",
    username: "User 4",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    adverts: [],
    comments: [],
  },
  {
    id: "12",
    description: "",
    phone: "+7 963 133-45-67",
    username: "Usr 2",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    adverts: [],
    comments: [],
  },
  {
    id: "13",
    description: "",
    phone: "+7 933 133-45-67",
    username: "Usr 1",
    email: "test@mail.ru",
    rating: 3.7,
    ratesCount: 12,
    adverts: [],
    comments: [],
  },
];

export const USER: IUser = {
  id: "1",
  phone: "+7 928 123-45-67",
  username: "ДунСтрой Групп",
  email: "email@mail.ru",
  description: "Описание к аккаунту",
  rating: 4.7,
  ratesCount: 12,
  comments: [
    {
      id: "1",
      authorId: "1",
      authorName: "ДунСтрой Групп",
      adresseeId: "2",
      rate: 5,
      text: "В данном блоке будет отображаться текст вашего отзыва",
    },
    {
      id: "2",
      authorId: "1",
      authorName: "ДунСтрой Групп",
      adresseeId: "2",
      rate: 5,
      text: "В данном блоке будет отображаться текст вашего отзыва",
    },
    {
      id: "3",
      authorId: "1",
      authorName: "ДунСтрой Групп",
      adresseeId: "3",
      rate: 5,
      text: "В данном блоке будет отображаться текст вашего отзыва. В данном блоке будет отображаться текст вашего отзыва. В данном блоке будет отображаться текст вашего отзыва. В данном блоке будет отображаться текст вашего отзыва. В данном блоке будет отображаться текст вашего отзыва.",
    },
    {
      id: "4",
      authorId: "1",
      authorName: "ДунСтрой Групп",
      adresseeId: "5",
      rate: 5,
      text: "В данном блоке будет отображаться текст вашего отзыва",
    },
    {
      id: "5",
      authorId: "2",
      authorName: "Илья Ильин",
      adresseeId: "1",
      rate: 5,
      text: "В данном блоке будет отображаться текст отзыва пользователя о вас",
    },
  ],
  adverts: [
    {
      id: "0",
      userId: "1",
      username: "ДунСтрой Групп",
      userRating: 4.7,
      type: "technic",
      updatedAt: Date.now(),
      likes: ["1", "2", "3", "7"],
      views: ["1", "2", "3", "4", "5", "6", "7"],
      title: 'Сдаётся гусеничный экскаватор Hyundai',
      general: {
        address: "Москва, Химки",
        count: 3,
        workMode: "day",
        rentalPeriod: {
          from: new Date('21.11.2023').valueOf(),
          to: new Date('21.12.2023').valueOf(),
        },
        rentalDaysCount: new Date('21.11.2023').valueOf() - new Date('21.12.2023').valueOf() / (1000 * 3600 * 24)
      },
      price: {
        price: 10000,
        paymentFor: "смену",
        paymentType: "cash",
      },
      params: {
        'Вид техники': "Экскаватор гусеничный",
        photos: [
          "https://lonmadi.ru/content/catalog/bd82d9b3ff14ebe1fb1a360a070e27bd.jpg",
          "https://cdn.stpulscen.ru/system/ckeditor_assets/pictures/352723/content_kovshi-jcb-01.jpg",
          "https://avatars.mds.yandex.net/get-autoru-vos/11038141/883df25017df09a8cda4c1a43d9161e9/1200x900",
        ],
      },
    },
  ],
};

export const TECHS_LIST = [
  "Автовышка",
  "Автовоз",
  "Автобус пассажирский",
  "Автобетононасос",
  "Автогрейдер",
  "Автогудронатор",
  "Автокран",
  "Бетоновоз",
  "Бензовоз",
  "Бульдозер",
  "Буровая",
  "Водовоз",
  "Газель",
  "Грохот",
  "Дробильно-сортировочный комплекс",
  "Дробилка мобильная",
  "Земснаряд",
  "Зерновоз",
  "Каток грунтовой",
  "Каток дорожный",
  "Контейнеровоз",
  "Кран башенный",
  "Кран гусеничный",
  "Лесовоз",
  "Ломовоз",
  "Мусоровоз (ПУХТО)",
  "Мультилифт",
  "Манипулятор",
  "Мини погрузчик",
  "Поливомоечная машина",
  "Погрузчик вилочны",
  "Погрузчик телескопический",
  "Погрузчик Фронтальный",
  "Рефрежиратор",
  "Ресайклер-стабилизатор грунта",
  "Самосвал",
  "Самосвал вездеход",
  "Сочлененный Самосвал",
  "Снегоуборочная машина",
  "Тонар",
  "Трактор",
  "Трал",
  "Тромель",
  "Трубоукладчик",
  "Фура",
  "Фреза дорожная",
  "Фреза Мини",
  "Фургон",
  "Шаланда (длинномер)",
  "Эвакуатор легковой",
  "Эвакуатор грузовой",
  "Экскаватор гусеничный",
  "Экскаватор разрушитель",
  "Экскаватор амфибия",
  "Экскаватор колёсный",
  "Экскаватор погрузчик",
  "Экскаватор-Мини",
  "Гидробур ",
];
