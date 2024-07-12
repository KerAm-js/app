import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TAdvert } from "../../../types/Advert";
import { MATERIALS_LIST } from "../../../consts/data";

const initialState: Array<TAdvert> = [
  {
    id: 0,
    userId: 1,
    username: "ДунСтрой Групп",
    status: "published",
    userRating: 4.7,
    type: "technic",
    updatedAt: Date.now(),
    likes: [1, 2, 3, 7],
    views: [1, 2, 3, 4, 5, 6, 7],
    title: "Сдаётся гусеничный экскаватор Hyundai",
    transactionType: "Сдать в аренду",
    photos: [
      "https://stroy-plys.ru/uploads/posts/2014-01/1390641675_ekskavator-gusenichnyy-hyundai-380.jpg",
      "https://cdn.stpulscen.ru/system/ckeditor_assets/pictures/352723/content_kovshi-jcb-01.jpg",
      "https://avatars.mds.yandex.net/get-autoru-vos/11038141/883df25017df09a8cda4c1a43d9161e9/1200x900",
    ],
    general: {
      address: "Москва, Химки",
      count: 3,
      workMode: "День",
      distance: 22,
      comment:
        "В данном блоке будет отображаться комментарий пользователя. Комментарий может содержать до 400 символов.",
      rentalPeriod: {
        from: new Date("2023-11-23").valueOf(),
        to: new Date("2023-12-23").valueOf(),
      },
      rentalDaysCount:
        new Date("2023-11-23").valueOf() -
        new Date("2023-12-23").valueOf() / (1000 * 3600 * 24),
    },
    price: {
      price: 10000,
      paymentFor: "Cмена",
      paymentType: "Все",
    },
    params: {
      technicType: "Экскаватор разрушитель",
      mark: "Hyundai",
      model: "JCB",
      productionYear: "2021",
      weight: 32.2,
      volume: 1.44,
    },
  },
  {
    id: 1,
    userId: 2,
    username: "User 1",
    status: "published",
    userRating: 3.7,
    type: "technic",
    updatedAt: Date.now() - 1000 * 3600,
    likes: [2, 3, 7, 13],
    views: [1, 2, 3, 4, 5, 6, 7],
    title: "Сдаётся гусеничный экскаватор Hyundai",
    transactionType: "Сдать в аренду",
    photos: [
      "https://cdn.stpulscen.ru/system/ckeditor_assets/pictures/352723/content_kovshi-jcb-01.jpg",
      "https://avatars.mds.yandex.net/get-autoru-vos/11038141/883df25017df09a8cda4c1a43d9161e9/1200x900",
      "https://stkalmaz.ru/wp-content/uploads/2023/03/7086387da2a68ceebf759ef9b1eac6f3.jpeg",
      "https://www.prostanki.com/img/boardpics/2020_03/A1BynE6lzoSMcp9Qs3Jq.jpg",
      "http://static.gmstar.ru/boardImage/imageOriginal/4/115921/1536652020_gusenichnyy_ekskavat.jpg",
      "https://www.tornometal.com/wp-content/uploads/2015/04/JS205LC-Low2.jpg",
      "https://avatars.mds.yandex.net/get-ydo/3904573/2a000001874673c75e8aa2bbbceda3077e5b/diploma",
      "https://vst-parts.ru/wa-data/public/shop/products/45/07/745/images/923/923.970.jpg",
      "https://stroy-plys.ru/uploads/posts/2014-01/1390641675_ekskavator-gusenichnyy-hyundai-380.jpg",
    ],
    general: {
      address: "Москва, Химки",
      count: 3,
      workMode: "День",
      rentalPeriod: {
        from: new Date("2023-11-23").valueOf(),
        to: new Date("2023-12-23").valueOf(),
      },
      rentalDaysCount:
        new Date("2023-11-23").valueOf() -
        new Date("2023-12-23").valueOf() / (1000 * 3600 * 24),
    },
    price: {
      price: 10000,
      paymentFor: "Час",
      paymentType: "Наличные",
    },
    params: {
      technicType: "Экскаватор гусеничный",
      mark: "Hyundai",
      productionYear: "2021",
      weight: 32.2,
      volume: 1.44,
    },
  },
  {
    id: 2,
    userId: 2,
    username: "User 1",
    status: "published",
    userRating: 3.7,
    type: "dump",
    updatedAt: Date.now() - 1000 * 3600,
    likes: [2, 3, 7, 13],
    views: [1, 2, 3, 4, 5, 6, 7],
    title: "Сдаётся гусеничный экскаватор Hyundai",
    transactionType: "Нужен вывоз",
    photos: [],
    general: {
      address: "Москва, Химки",
      workMode: "День",
    },
    price: {
      price: 10000,
      paymentType: "Наличные",
    },
    params: {
      wasteType: MATERIALS_LIST[0],
      dangerClass: "1 класс",
      transport: ["Самосвал 3-х осный"],
      measure: "weight",
      amount: 2,
      coefficient: 1.6,
    },
  },
];

export const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    addAdvert: (state, action) => {
      state.push(action.payload);
    },
    addPhotosToAdvert: (
      state,
      { payload }: PayloadAction<Pick<TAdvert, "id" | "photos">>
    ) => {
      const advert = state.find((advert) => advert.id === payload.id);
      if (advert) advert.photos = payload.photos;
    },
    stopAdvert: (state, action) => {
      const advert = state.find((advert) => advert.id === action.payload);
      if (advert) advert.status = "stopped";
    },
    deleteAdvert: (state, action) => {
      const advert = state.find((advert) => advert.id === action.payload);
      if (advert) advert.status = "deleted";
    },
    republishAdvert: (state, action) => {
      const advert = state.find((advert) => advert.id === action.payload);
      if (advert) {
        advert.status = "published";
        advert.updatedAt = Date.now();
      }
    },
  },
});
