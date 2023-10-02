import { TInputProps } from "./types";
import withLabel from "../WithLabel/WithLabel";
import InputField from "./InputField";

const Input = withLabel<TInputProps>((props) => <InputField {...props} />);

export default Input;
