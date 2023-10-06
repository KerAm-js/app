import { userSvg } from "../../../assets/svg/user";

export type TIconButtonProps = {
  iconXmlFunc: typeof userSvg;
  onPress: () => void;
  isBig?: boolean;
  isActive?: boolean;
};
