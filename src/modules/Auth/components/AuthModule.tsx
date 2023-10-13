import { TFormInputType } from "../../../components/form/types";
import Form from "../../../components/form/Form";
import { View } from "react-native";
import { authModuleStyles } from "./styles";
import { usePhoneValidator } from "../../../hooks/inputValidator/usePhoneValidator";
import { useInputValidator } from "../../../hooks/inputValidator/useInputValidator";

const AuthModule = () => {
  const [phone, onPhoneChange, isPhoneValid, phoneError] = usePhoneValidator({
    initValue: "",
  });
  const [password, onPasswordChange, isPasswordValid, passwordError] = useInputValidator({
    initValue: "",
    minLength: 6,
  });

  const inputs: Array<TFormInputType> = [
    {
      id: "phone",
      type: "input",
      value: phone,
      onChangeText: onPhoneChange,
      placeholder: "",
      label: "Телефон",
      keyboardType: "phone-pad",
      maxLength: 16,
      error: phoneError,
    },
    {
      id: "password",
      type: "input",
      value: password,
      onChangeText: onPasswordChange,
      placeholder: "",
      label: "Пароль",
      secureTextEntry: true,
      keyboardType: "numbers-and-punctuation",
      error: passwordError,
    },
  ];

  const isFormValid = isPhoneValid && isPasswordValid;

  const onSubmit = () => {
    if (isFormValid) {
      const userData = {
        phone,
        password,
      };
      console.log(userData);
    }
  };

  return (
    <View style={authModuleStyles.container}>
      <Form
        inputs={{ noTitle: inputs }}
        submitTitle="Войти"
        onSubmit={onSubmit}
        isFormValid={isFormValid}
      />
    </View>
  );
};

export default AuthModule;
