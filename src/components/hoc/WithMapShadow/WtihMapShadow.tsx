import { ComponentType } from "react";
import { View } from "react-native";
import { withMapShadowStyles } from "./styles";

function WihtMapShadow<T>(Component: ComponentType<T>) {
  return (hocProps: T & React.JSX.IntrinsicAttributes) => {
    return <View style={withMapShadowStyles.container}>
      <Component {...hocProps} />
    </View>
  };
}

export default WihtMapShadow;