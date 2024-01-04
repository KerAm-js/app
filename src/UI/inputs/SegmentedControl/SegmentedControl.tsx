import SegmentedControl, {
  SegmentedControlProps,
} from "@react-native-segmented-control/segmented-control";
import WithLabelAndError from "../../../components/HOC/WithLabelAndError/WithLabelAndError";

const SegmentedControlWithLabel = WithLabelAndError<SegmentedControlProps>(
  (props) => <SegmentedControl {...props} />
);

export default SegmentedControlWithLabel;
