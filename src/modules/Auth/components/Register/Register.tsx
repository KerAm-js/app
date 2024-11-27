import { Alert, View } from "react-native";
import Form from "../../../../components/Form/Form";
import { TFormInputsArray } from "../../../../components/Form/types";
import { EMAIL_REGEX, USERNAME_REGEX } from "../../../../consts/regex";
import { useInputValidator } from "../../../../hooks/inputValidators/useInputValidator";
import { usePhoneValidator } from "../../../../hooks/inputValidators/usePhoneValidator";
import { authModuleStyles } from "../styles";
import { useAuth } from "../../../../hooks/store/useAuth";
import { useActions } from "../../../../hooks/store/useActions";
import { useEffect, useLayoutEffect } from "react";
import {
  useIsEmailAvailableQuery,
  useIsUsernameAvailableQuery,
} from "../../../../api/api";

const Register = () => {
  const [username, onChangeUsername, isUsernameValid, usernameError] =
    useInputValidator({
      initValue: "",
      minLength: 2,
      pattern: USERNAME_REGEX,
      patternErrorMessage:
        "Данное поле может содержать только латинские буквы, цифры и нижние подчёркивания",
    });
  const [phoneText, onPhoneChange, isPhoneValid, phoneError, _, phone] =
    usePhoneValidator({
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

  const { data: isUsernameAvailable } = useIsUsernameAvailableQuery(username, {
    skip: username?.length < 2,
  });
  const { data: isEmailAvailable } = useIsEmailAvailableQuery(email, {
    skip: email?.length < 5,
  });
  const { registerThunk, clearError } = useActions();
  const { isLoading, error } = useAuth();

  const inputs: TFormInputsArray = [
    {
      inputs: [
        {
          id: "username",
          type: "input",
          value: username,
          errorShown: isUsernameAvailable === false,
          error: usernameError
            ? usernameError
            : isUsernameAvailable === false && username.length > 1
            ? "Это имя пользователя занято"
            : "",
          onChangeText: onChangeUsername,
          placeholder: "",
          label: "Имя пользователя",
        },
        {
          id: "phone",
          type: "input",
          value: phoneText,
          onChangeText: onPhoneChange,
          error: phoneError,
          placeholder: "",
          label: "Телефон",
          keyboardType: "phone-pad",
          textContentType: "telephoneNumber",
          maxLength: 16,
        },
        {
          id: "email",
          type: "input",
          value: email,
          onChangeText: onEmailChange,
          errorShown: isEmailAvailable === false,
          error: emailError
            ? emailError
            : isEmailAvailable === false && email.length > 4
            ? "Этот e-mail занят"
            : "",
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
    isUsernameAvailable !== false &&
    isEmailValid &&
    isEmailAvailable !== false &&
    isPhoneValid &&
    isPasswordValid &&
    isPassword2Valid;

  const onSubmit = () => {
    if (isFormValid) {
      registerThunk({ username, phone, email, password, description: " " });
    }
  };

  useLayoutEffect(() => {
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
        submitTitle="Зарегистрироваться"
        onSubmit={onSubmit}
        isFormValid={isFormValid}
        isLoading={isLoading}
      />
    </View>
  );
};

export default Register;
