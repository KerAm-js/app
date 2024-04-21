import { userSvg } from "../../../assets/svg/user";
import { BLACK_LIGHT, BLUE, GREEN, RED, WHITE } from "../../../consts/colors";

export type TBigButtonProps = {
  onPress: () => void;
  title: string;
  disabled?: boolean;
  iconXmlFunc?: typeof userSvg;
  noShadow?: boolean;
  backgroundColor?:
    | typeof BLACK_LIGHT
    | typeof GREEN
    | typeof WHITE
    | typeof BLUE
    | typeof RED;
};
