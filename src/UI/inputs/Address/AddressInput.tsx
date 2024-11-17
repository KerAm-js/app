import { Pressable, Text } from "react-native";
import { addressInputStyles } from "./styles";
import { useActions } from "../../../hooks/store/useActions";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/types";
import { TAddressInputProps } from "./types";
import WithLabelAndError from "../../../components/HOC/WithLabelAndError/WithLabelAndError";
import { RED } from "../../../consts/colors";

export const AddressInput = WithLabelAndError<TAddressInputProps>(
  ({
    errorShown,
    setErrorShown,
    isSecondPointRequired,
    isSecondInput,
    address,
  }) => {
    const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { setIsSecondPointRequired } = useActions();

    const navigateToMap = () => {
      setIsSecondPointRequired(!!isSecondPointRequired);
      setTimeout(() => {
        if (setErrorShown) setErrorShown(true);
      }, 300);
      navigation.navigate("ChooseAddress");
    };

    return (
      <Pressable
        onPress={navigateToMap}
        style={[
          addressInputStyles.container,
          errorShown && { borderColor: RED },
        ]}
      >
        <Text style={addressInputStyles.title}>{address}</Text>
      </Pressable>
    );
  }
);
