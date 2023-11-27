import { IAnimatedHeaderComponentProps } from "../../types";

export interface IAnimatedHeaderRightProps extends IAnimatedHeaderComponentProps {
  iconXml?: string;
  onPress?: () => void;
  children?: JSX.Element;
}