import { Alert, View } from "react-native";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { authModuleStyles } from "../styles";
import { EMAIL_REGEX } from "../../../../consts/regex";
import { useActions } from "../../../../hooks/store/useActions";
import { useAuth } from "../../../../hooks/store/useAuth";
import { useEffect, useLayoutEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

const LogIn = () => {
  const [email, onEmailChange, isEmailValid, emailError] = useInputValidator({
    initValue: "user@gmail.com",
    pattern: EMAIL_REGEX,
    required: true,
  });
  const [password, onPasswordChange, isPasswordValid, passwordError] =
    useInputValidator({
      initValue: "100",
      minLength: 3,
      required: true,
    });

  const { logInThunk, clearError } = useActions();
  const { isLoading, error, autoAuthPending } = useAuth();

  const inputs: TFormInputsArray = [
    {
      inputs: [
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
          placeholder: "",
          label: "Пароль",
          secureTextEntry: true,
          keyboardType: "numbers-and-punctuation",
          error: passwordError,
        },
      ],
    },
  ];

  const isFormValid = isEmailValid && isPasswordValid;

  const onSubmit = async () => {
    if (isFormValid) {
      logInThunk({ email, password });
    }
  };

  useLayoutEffect(() => {
    if (!autoAuthPending) {
      SplashScreen.hideAsync();
    }
    if (error) {
      clearError();
    }
  }, []);

  useEffect(() => {
    if (error) Alert.alert(error);
  }, [error]);

  return (
    <View style={authModuleStyles.container}>
      <Form
        inputs={inputs}
        submitTitle="Войти"
        onSubmit={onSubmit}
        isFormValid={isFormValid}
        isLoading={isLoading}
      />
    </View>
  );
};

export default LogIn;
