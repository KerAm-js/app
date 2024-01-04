import { IIntervalInputProps } from "../../UI/inputs/Interval/types";
import { IInputProps } from "../../UI/inputs/Input/types";
import { TSelectionProps } from "../../UI/inputs/Selection/types";
import { TTextAreaProps } from "../../UI/inputs/TextArea/types";
import { TWithLabelAndErrorProps } from "../HOC/WithLabelAndError/types";
import { SegmentedControlProps } from "@react-native-segmented-control/segmented-control";
import { IPhotoInputProps } from "../../UI/inputs/Photo/types";

export type TAddressInputProps = {};

export type TFormInput =
  | (IInputProps &
      TWithLabelAndErrorProps & { type: "input"; id: string; hidden?: boolean })
  | (IIntervalInputProps &
      TWithLabelAndErrorProps & {
        type: "interval";
        id: string;
        hidden?: boolean;
      })
  | (TSelectionProps &
      TWithLabelAndErrorProps & {
        type: "selection";
        id: string;
        hidden?: boolean;
      })
  | (SegmentedControlProps &
      TWithLabelAndErrorProps & {
        type: "segment";
        id: string;
        hidden?: boolean;
      })
  | (TTextAreaProps &
      TWithLabelAndErrorProps & {
        type: "textArea";
        id: string;
        hidden?: boolean;
      })
  | (IPhotoInputProps & { type: "photo"; id: string; hidden?: boolean })
  | (TAddressInputProps &
      TWithLabelAndErrorProps & {
        type: "address";
        id: string;
        hidden?: boolean;
      });

export type TFormInputsArray = {title?: string, inputs: TFormInput[]}[]

export type TFormProps = {
  onSubmit: () => void;
  submitTitle: string;
  isFormValid: boolean;
  inputs: TFormInputsArray;
};
