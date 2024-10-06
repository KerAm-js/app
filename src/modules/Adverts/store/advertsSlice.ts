import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdvert } from "../../../types/Advert";

const initialState: Array<IAdvert> = [
  {
    id: 0,
    ownerId: 1,
    advertStatus: "PUBLISHED",
    advertType: "TECHNIC",
    updatedAt: Date.now(),
    likes: [1, 2, 3, 7],
    views: [1, 2, 3, 4, 5, 6, 7],
    title: "Сдаётся гусеничный экскаватор Hyundai",
    transactionType: "GIVE_A_RENT",
    photos: [
      "https://stroy-plys.ru/uploads/posts/2014-01/1390641675_ekskavator-gusenichnyy-hyundai-380.jpg",
      "https://cdn.stpulscen.ru/system/ckeditor_assets/pictures/352723/content_kovshi-jcb-01.jpg",
      "https://avatars.mds.yandex.net/get-autoru-vos/11038141/883df25017df09a8cda4c1a43d9161e9/1200x900",
    ],
    addressLat: 56,
    addressLon: 56,
    unitAmount: 3,
    shiftType: "DAY",
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

    price: 10000,
    paymentFor: "Cмена",
    paymentType: "ANY",
    technicType: "Экскаватор разрушитель",
    mark: "Hyundai",
    model: "JCB",
    productionYear: 2021,
    weight: 32.2,
    volume: 1.44,
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
      { payload }: PayloadAction<Pick<IAdvert, "id" | "photos">>
    ) => {
      const advert = state.find((advert) => advert.id === payload.id);
      if (advert) advert.photos = payload.photos;
    },
    stopAdvert: (state, action) => {
      const advert = state.find((advert) => advert.id === action.payload);
      if (advert) advert.advertStatus = "STOPPER";
    },
    deleteAdvert: (state, action) => {
      const advert = state.find((advert) => advert.id === action.payload);
      if (advert) advert.advertStatus = "DELETED";
    },
    republishAdvert: (state, action) => {
      const advert = state.find((advert) => advert.id === action.payload);
      if (advert) {
        advert.advertStatus = "PUBLISHED";
        advert.updatedAt = Date.now();
      }
    },
  },
});
