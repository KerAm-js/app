import { IAnimatedHeaderComponentProps } from "../../../../navigation/types";

export interface IAnimatedHeaderRightProps extends IAnimatedHeaderComponentProps {
  iconXml?: string;
  onPress?: () => void;
  children?: JSX.Element;
}