export type TSheetButtonProps = {
  id?: string;
  type: "default" | "accent";
  title: string;
  onPress: () => void;
} | {
  id?: string;
  type: "destructive",
  title: string;
  onPress: () => void;
  confirmMessage: string;
}

export interface IBottomSheetProps {
  actions: Array<TSheetButtonProps>;
  title: string;
}
