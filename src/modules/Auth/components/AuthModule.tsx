import { TFormInputsArray } from "../../../components/Form/types";
import Form from "../../../components/Form/Form";
import { View } from "react-native";
import { authModuleStyles } from "./styles";
import { usePhoneValidator } from "../../../hooks/inputValidators/usePhoneValidator";
import { useInputValidator } from "../../../hooks/inputValidators/useInputValidator";

const AuthModuleComponent = () => {
  const [phone, onPhoneChange, isPhoneValid, phoneError] = usePhoneValidator({
    initValue: "",
  });
  const [password, onPasswordChange, isPasswordValid, passwordError] =
    useInputValidator({
      initValue: "",
      minLength: 6,
    });

  const inputs: TFormInputsArray = [
    {
      inputs: [
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
      ],
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
        inputs={inputs}
        submitTitle="Войти"
        onSubmit={onSubmit}
        isFormValid={isFormValid}
      />
    </View>
  );
};

export default AuthModuleComponent;
