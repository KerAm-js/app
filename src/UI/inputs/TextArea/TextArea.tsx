import withLabelAndError from "../../../components/hoc/WithLabelAndError/WithLabelAndError";
import TextAreaField from "./TextAreaField";
import { TTextAreaProps } from "./types";

const TextArea = withLabelAndError<TTextAreaProps>((props) => (
  <TextAreaField {...props} />
));

export default TextArea;
