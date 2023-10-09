import withLabel from "../../../hoc/WithLabel/WithLabel";
import TextAreaField from "./TextAreaField";
import { TTextAreaProps } from "./types";

const TextArea = withLabel<TTextAreaProps>((props) => (
  <TextAreaField {...props} />
));

export default TextArea;