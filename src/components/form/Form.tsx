import { FC, useCallback } from "react";
import { ScrollView, View } from "react-native";
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
  const renderInputs = useCallback((inputsToRender: typeof inputs.noTitle) => {
    return (
      <>
        {inputsToRender?.map((input) => {
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
                    <SegmentedControl key={input.id} {...input} />
                  </View>
                );
              // case "address":
              // case "photo":
            }
          }
        })}
      </>
    );
  }, []);

  return (
    <View>
      <View style={formStyles.inputsContainer}>
        {renderInputs(inputs.noTitle)}
      </View>
      {inputs.params && (
        <View style={formStyles.inputsContainer}>
          <Title text="Характеристики" />
          {renderInputs(inputs.params)}
        </View>
      )}
      <BigButton
        title={submitTitle}
        onPress={onSubmit}
        disabled={!isFormValid}
      />
    </View>
  );
};

export default Form;
