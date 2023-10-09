import { TInputProps } from "./types";
import InputField from "./InputField";
import withLabel from "../../../hoc/WithLabel/WithLabel";

const Input = withLabel<TInputProps>((props) => <InputField {...props} />);

export default Input;
