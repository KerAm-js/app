export type TMenuButtonProps = {
  iconXmlFunc: (xml?: string) => string;
  onPress: () => void;
  isActive?: boolean
}