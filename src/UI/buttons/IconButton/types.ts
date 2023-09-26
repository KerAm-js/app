import { userSvg } from "../../../assets/svg/user";

export type TIconButtonProps = {
  iconXmlFunc: typeof userSvg;
  onPress: () => void;
  bigSize?: boolean;
  isActive?: boolean;
};
