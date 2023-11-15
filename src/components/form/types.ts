import { IIntervalInputProps } from "../../UI/inputs/Interval/types";
import { IInputProps } from "../../UI/inputs/Input/types";
import { TSelectionProps } from "../../UI/inputs/Selection/types";
import { TTextAreaProps } from "../../UI/inputs/TextArea/types";
import { TWithLabelAndErrorProps } from "../HOC/WithLabelAndError/types";
import { SegmentedControlProps } from "@react-native-segmented-control/segmented-control";

export type TPhotoInputProps = {};

export type TAddressInputProps = {};

export type TFormInputType =
  | (IInputProps & TWithLabelAndErrorProps & { type: "input"; id: string })
  | (IIntervalInputProps & TWithLabelAndErrorProps & { type: "interval"; id: string })
  | (TSelectionProps & TWithLabelAndErrorProps & { type: "selection"; id: string })
  | (SegmentedControlProps & TWithLabelAndErrorProps & { type: "segment"; id: string })
  | (TTextAreaProps & TWithLabelAndErrorProps & { type: "textArea"; id: string })
  | (TPhotoInputProps & TWithLabelAndErrorProps & { type: "photo"; id: string })
  | (TAddressInputProps & TWithLabelAndErrorProps & { type: "address"; id: string });

export type TFormProps = {
  onSubmit: () => void;
  submitTitle: string;
  isFormValid: boolean;
  inputs: {
    noTitle?: Array<TFormInputType>;
    params?: Array<TFormInputType>;
    general?: Array<TFormInputType>;
    price?: Array<TFormInputType>;
    user?: Array<TFormInputType>;
  };
};
