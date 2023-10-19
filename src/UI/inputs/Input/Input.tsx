import { IInputProps } from "./types";
import InputField from "./InputField";
import withLabelAndError from "../../../components/HOC/WithLabelAndError/WithLabelAndError";

const Input = withLabelAndError<IInputProps>((props) => <InputField {...props} />);

export default Input;
