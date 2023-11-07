import { TTextAreaProps } from "../../../../UI/inputs/TextArea/types";

export interface ICommentInputProps
  extends Pick<TTextAreaProps, "value" | "onChangeText"> {}
