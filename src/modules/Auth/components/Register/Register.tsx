import { Alert, View } from "react-native";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { EMAIL_REGEX } from "../../../../consts/regex";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { usePhoneValidator } from "../../../../hooks/inputValidators/usePhoneValidator";
import { authModuleStyles } from "../styles";
import { useAuth } from "../../../../hooks/store/useAuth";
import { useActions } from "../../../../hooks/store/useActions";
import { useEffect } from "react";

const Register = () => {
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
      minLength: 3,
    });
  const [password2, onPassword2Change, isPassword2Valid, password2Error] =
    useInputValidator({
      initValue: "",
      minLength: 3,
      confirmedValue: password,
      confirmingErrorMessage: "Пароли не совпадают",
    });

  const { registerThunk } = useActions();
  const { isLoading, error } = useAuth();

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
      registerThunk({ username, phone, email, password, description: " " });
    }
  };

  useEffect(() => {
    if (error) Alert.alert(error?.title, error?.message);
  }, [error]);

  return (
    <View style={authModuleStyles.container}>
      <Form
        inputs={inputs}
        submitTitle="Зарегистрироваться"
        onSubmit={onSubmit}
        isFormValid={isFormValid}
        isLoading={isLoading}
      />
    </View>
  );
};

export default Register;
