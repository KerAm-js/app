import { TFormInput, TFormInputsArray } from "../../../components/Form/types";
import { registerModuleStyles } from "./styles";
import { View } from "react-native";
import Form from "../../../components/Form/Form";
import { useInputValidator } from "../../../hooks/inputValidators/useInputValidator";
import { usePhoneValidator } from "../../../hooks/inputValidators/usePhoneValidator";
import { EMAIL_REGEX } from "../../../consts/regex";

const RegisterModuleComponent = () => {
  const [username, onChangeUsername, isUsernameValid, usernameError] =
    useInputValidator({ initValue: "", minLength: 2 });
  const [phone, onPhoneChange, isPhoneValid, phoneError] = usePhoneValidator({
    initValue: "",
  });
  const [email, onEmailChange, isEmailValid, emailError] = useInputValidator({
    initValue: "",
    pattern: EMAIL_REGEX,
  });
  const [password, onPasswordChange, isPasswordValid, passwordError] =
    useInputValidator({
      initValue: "",
      minLength: 6,
    });
  const [password2, onPassword2Change, isPassword2Valid, password2Error] =
    useInputValidator({
      initValue: "",
      minLength: 6,
      confirmedValue: password,
      confirmingErrorMessage: "Пароли не совпадают",
    });

  const inputs: TFormInputsArray = [
    {
      inputs: [
        {
          id: "username",
          type: "input",
          value: username,
          error: usernameError,
          onChangeText: onChangeUsername,
          placeholder: "",
          label: "Имя пользователя",
        },
        {
          id: "phone",
          type: "input",
          value: phone,
          onChangeText: onPhoneChange,
          error: phoneError,
          placeholder: "",
          label: "Телефон",
          keyboardType: "phone-pad",
        },
        {
          id: "email",
          type: "input",
          value: email,
          onChangeText: onEmailChange,
          error: emailError,
          placeholder: "",
          label: "E-mail",
          keyboardType: "email-address",
        },
        {
          id: "password",
          type: "input",
          value: password,
          onChangeText: onPasswordChange,
          error: passwordError,
          placeholder: "",
          label: "Пароль",
          secureTextEntry: true,
          keyboardType: "numbers-and-punctuation",
        },
        {
          id: "confirmPassword",
          type: "input",
          value: password2,
          onChangeText: onPassword2Change,
          error: password2Error,
          placeholder: "",
          label: "Подтвердите пароль",
          secureTextEntry: true,
          keyboardType: "numbers-and-punctuation",
        },
      ],
    },
  ];

  const isFormValid =
    isUsernameValid &&
    isEmailValid &&
    isPhoneValid &&
    isPasswordValid &&
    isPassword2Valid;

  const onSubmit = () => {
    if (isFormValid) {
      const userData = {
        username,
        phone,
        email,
        password,
      };
      console.log(userData);
    }
  };

  return (
    <View style={registerModuleStyles.container}>
      <Form
        inputs={inputs}
        submitTitle="Зарегистрироваться"
        onSubmit={onSubmit}
        isFormValid={isFormValid}
      />
    </View>
  );
};

export default RegisterModuleComponent;
