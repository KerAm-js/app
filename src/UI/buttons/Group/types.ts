export type TGroupButtonProps = {
  showBorder?: boolean;
  onPress: () => void;
  title: string;
};

export type TButtonsGroupProps = {
  data: Array<TGroupButtonProps>;
};
