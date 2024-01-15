import { TECHNIC_PARAMS } from './../../../../consts/data';
import { TAdvert } from "../../../../types/Advert";
import { ITechnicOtherParams } from '../../../../types/Technic';

export interface IAdvertSliderProps
  extends Pick<TAdvert, "type" | "params"> {}

export interface IParamProps {
  param: string;
  content: string;
}
