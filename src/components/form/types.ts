import { TIntervalInputProps } from "../../UI/inputs/Interval/types";
import { IInputProps } from "../../UI/inputs/Input/types";
import { TSelectionProps } from "../../UI/inputs/Selection/types";
import { TTextAreaProps } from "../../UI/inputs/TextArea/types";
import { TWithLabelProps } from "../hoc/WithLabel/types";
import { SegmentedControlProps } from "@react-native-segmented-control/segmented-control";

export type TPhotoInputProps = {};

export type TAddressInputProps = {};

export type TFormInputType =
  | (IInputProps & TWithLabelProps & { type: "input"; id: string })
  | (TIntervalInputProps & TWithLabelProps & { type: "interval"; id: string })
  | (TSelectionProps & TWithLabelProps & { type: "selection"; id: string })
  | (SegmentedControlProps & TWithLabelProps & { type: "segment"; id: string })
  | (TTextAreaProps & TWithLabelProps & { type: "textArea"; id: string })
  | (TPhotoInputProps & TWithLabelProps & { type: "photo"; id: string })
  | (TAddressInputProps & TWithLabelProps & { type: "address"; id: string });

export type TFormProps = {
  onSubmit: () => void;
  submitTitle: string;
  inputs: {
    noTitle?: Array<TFormInputType>;
    characters?: Array<TFormInputType>;
    general?: Array<TFormInputType>;
    payment?: Array<TFormInputType>;
    user?: Array<TFormInputType>;
  };
};
