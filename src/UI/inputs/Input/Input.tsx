import { IInputProps } from "./types";
import InputField from "./InputField";
import withLabel from "../../../components/hoc/WithLabel/WithLabel";

const Input = withLabel<IInputProps>((props) => <InputField {...props} />);

export default Input;
