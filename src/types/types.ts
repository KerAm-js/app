// export interface Advert {
//   id: string;
//   type: string;
//   transactionType: string;
//   title: string;
//   updatedAt: number;
//   author: User;
//   views: Array<User>;
//   likes: Array<User>;
//   photos: Array<string>;
// }

// export interface TechnicAdvert {
//   type: "technic";
//   transactionType: "Сдать в аренду" | "Взять в аренду";
//   general: {
//     workMode: "День" | "Ночь" | "Круглосуточно";
//     comment?: string;
//     count: number;
//     rentalPeriod?: {
//       from: number; //date
//       to: number; //date
//     };
//     rentalDaysCount: number;
//     address: {
//       lat: number;
//       lon: number;
//     };
//     secondAdress?: {
//       lat: number;
//       lon: number;
//     };
//     distanceBetweenAddresses?: number;
//   };
//   params: {
//     technicType: string;
//     mark?: string;
//     model?: string;
//     productionYear?: string;
//     equipment?: string;
//     weight?: number;
//     height?: number;
//     volume?: number;
//     passengersCount?: number;
//     pipeLength?: number;
//     boomLength?: number;
//     liftingCapacity?: number;
//     performance?: number;
//     cargoType?: string;
//     rollerType?: "Гладкие" | "Комбинированные";
//     rollersCount?: number;
//     sizeType?: "Габаритный" | "Негабаритный";
//     OSSIG?: "Подключён" | "Не подключён";
//     axesCount?: number;
//     bodyLength?: number;
//     trailerType?: "Прицеп" | "Полуприцеп" | "Корыто" | "Прямая площадка";
//     loadingType?: "Задняя" | "Передняя";
//   };
//   price: {
//     price: number;
//     paymentType: "Наличные" | "Безналичные" | "Все";
//     paymentFor: "Смена" | "Час" | "м3/км" | "т/км";
//   };
// }

// export interface DumpAdvert {
//   type: "dump";
//   transactionType: "Отвал" | "Нужен отвал" | "Вывоз" | "Нужен вывоз";
//   general: {
//     workMode: "День" | "Ночь" | "Круглосуточно";
//     comment?: string;
//     address: {
//       lat: number;
//       lon: number;
//     };
//   };
//   params: {
//     wasteType: string;
//     dangerClass: "1 класс" | "2 класс" | "3 класс" | "4 класс" | "5 класс";
//     transport: "Самосвал 3-х осный" | "Самосвал 4-х осный" | "Тонар";
//     measureIn: "Тонны" | "м3";
//     amount: number;
//   };
//   price: {
//     price: number;
//     paymentType: "Наличные" | "Безналичные" | "Все";
//   };
// }
 
// export interface MaterialAdvert {
//   type: "material";
//   transactionType: "Купить" | "Продать";
//   general: {
//     workMode: "День" | "Ночь" | "Круглосуточно";
//     comment?: string;
//     delivery: "С доставкой" | "На самовывоз";
//     address: {
//       lat: number;
//       lon: number;
//     };
//   };
//   params: {
//     materialType: string;
//     transport: "Самосвал 3-х осный" | "Самосвал 4-х осный" | "Тонар";
//     measureIn: "Тонны" | "м3";
//     amount: number;
//     fractions:
//       | "5-20"
//       | "20-40"
//       | "40-70"
//       | "Отсев гранитный"
//       | "Отсев гравийный"
//       | "Отсев известняковый"
//       | "Отсев бетонный";
//   };
//   price: {
//     price: number;
//     paymentType: "Наличные" | "Безналичные" | "Все";
//   };
// }

// export interface User {
//   id: string;
//   phone: string;
//   username: string;
//   email: string;
//   description: string;
//   rating: number;
//   ratesCount: number;
//   comments: Array<string>;
//   adverts: Array<string>;
//   avatar?: string;
// }

// export interface Comment {
//   id: string;
//   authorId: string;
//   authorName: string;
//   adresseeId: string;
//   rate: number;
//   text: string;
// }
