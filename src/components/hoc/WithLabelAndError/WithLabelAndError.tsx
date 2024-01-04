import { Text, View } from "react-native";
import React, { ComponentType, FC, useState } from "react";
import { BLUE } from "../../../consts/colors";
import { TWithLabelAndErrorChildrenProps, TWithLabelAndErrorProps } from "./types";
import { withLabelAndErrorStyles } from "./styles";

function WithLabelAndError<T>(
  Input: ComponentType<T & TWithLabelAndErrorChildrenProps>
) {
  return (hocProps: T & TWithLabelAndErrorProps) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [errorShown, setErrorShown] = useState(false);
    return (
      <View style={withLabelAndErrorStyles.container}>
        <Text style={[withLabelAndErrorStyles.label, isFocused && { color: BLUE }]}>
          {hocProps.label}
        </Text>
        <Input
          {...hocProps}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          setErrorShown={setErrorShown}
          errorShown={!!(hocProps.error && errorShown)}
        />
        {errorShown && !!hocProps.error && (
          <Text style={withLabelAndErrorStyles.error}>{hocProps.error}</Text>
        )}
      </View>
    );
  };
}

export default WithLabelAndError;
