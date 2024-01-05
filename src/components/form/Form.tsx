import { FC, useCallback } from "react";
import { View } from "react-native";
import { TFormProps } from "./types";
import Input from "../../UI/inputs/Input/Input";
import IntervalInput from "../../UI/inputs/Interval/Interval";
import TextArea from "../../UI/inputs/TextArea/TextArea";
import Selection from "../../UI/inputs/Selection/Selection";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import BigButton from "../../UI/buttons/Big/BigButton";
import { formStyles } from "./styles";
import SegmentedControlWithLabel from "../../UI/inputs/SegmentedControl/SegmentedControl";
import Title from "../../UI/Title/Title";
import PhotoInput from "../../UI/inputs/Photo/PhotoInput";

const Form: FC<TFormProps> = ({
  inputs,
  onSubmit,
  submitTitle,
  isFormValid,
}) => {
  return (
    <View>
      {inputs.map((item, index) => (
        <View key={item.title || index} style={formStyles.inputsContainer}>
          {item.title && <Title text={item.title} />}
          <View>
            {item.inputs.map((input) => {
              if (!input.hidden) {
                switch (input.type) {
                  case "input":
                    return <Input key={input.id} {...input} />;
                  case "interval":
                    return <IntervalInput key={input.id} {...input} />;
                  case "textArea":
                    return <TextArea key={input.id} {...input} />;
                  case "selection":
                    return <Selection key={input.id} {...input} />;
                  case "photo":
                    return <PhotoInput key={input.id} {...input} />;
                  case "segment":
                    return !!input.label.length ? (
                      <SegmentedControlWithLabel key={input.id} {...input} />
                    ) : (
                      <View
                        key={input.id}
                        style={formStyles.segmentedControlContainer}
                      >
                        <SegmentedControl {...input} />
                      </View>
                    );
                  // case "address":
                  // case "photo":
                }
              }
            })}
          </View>
        </View>
      ))}
      <BigButton
        title={submitTitle}
        onPress={onSubmit}
        disabled={!isFormValid}
      />
    </View>
  );
};

export default Form;
