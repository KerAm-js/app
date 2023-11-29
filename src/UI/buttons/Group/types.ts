export type TGroupButtonProps = {
  showBorder?: boolean;
  onPress: () => void;
  title: string;
  circleNumber?: number;
};

export type TButtonsGroupProps = {
  data: Array<TGroupButtonProps>;
};
