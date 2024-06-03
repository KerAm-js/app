import AdvertsListHeader from "./components/AdvertsListHeader/AdvertsListHeader";
import AdvertsModuleComponent from "./components/module/AdvertsModuleComponent";
import { getPriceString } from "./helpers/getPaymentFor";

const AdvertsModule = {
  Component: AdvertsModuleComponent,
  Header: AdvertsListHeader,
  getPriceString,
};

export default AdvertsModule;
