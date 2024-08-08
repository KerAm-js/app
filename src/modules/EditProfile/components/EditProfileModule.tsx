import { Alert, View } from "react-native";
import { usePhoneValidator } from "../../../hooks/inputValidators/usePhoneValidator";
import { useInputValidator } from "../../../hooks/inputValidators/useInputValidator";
import { TFormInputsArray } from "../../../components/Form/types";
import Form from "../../../components/Form/Form";
import { editProfileModuleStyles } from "./styles";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/store/useAuth";
import { useUpdateProfileMutation } from "../api/profile.api";
import { useActions } from "../../../hooks/store/useActions";
import { useIsUsernameAvailableQuery } from "../../../api/api";
import { USERNAME_REGEX } from "../../../consts/regex";

const EditProfileModuleComponent = () => {
  const { user, token, isLoading } = useAuth();
  const { getCurrentUserThunk } = useActions();
  const [updateProfile, result] = useUpdateProfileMutation();

  const [username, onChangeUsername, isUsernameValid, usernameError] =
    useInputValidator({
      initValue: user?.username,
      minLength: 2,
      pattern: USERNAME_REGEX,
      patternErrorMessage:
        "Данное поле может содержать только латинские буквы, цифры и нижние подчёркивания",
    });
  const [phoneText, onPhoneChange, isPhoneValid, phoneError, _, phone] =
    usePhoneValidator({
      initValue: user?.phone,
    });
  const [description, setDescription] = useState(user?.description || "");
  const [password, onPasswordChange, isPasswordValid, passwordError] =
    useInputValidator({
      initValue: "",
      minLength: 3,
      required: true,
    });

  const { data: isUsernameAvailable } = useIsUsernameAvailableQuery(username, {
    skip:
      username.length < 2 ||
      username.toLowerCase() === user?.username.toLowerCase(),
  });

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
          id: "description",
          type: "textArea",
          value: description,
          onChangeText: (text: string) => setDescription(text),
          placeholder: "",
          label: "Описание",
        },
        {
          id: "password",
          type: "input",
          value: password,
          onChangeText: onPasswordChange,
          placeholder: "Ваш пароль",
          label: "Пароль",
          secureTextEntry: true,
          keyboardType: "numbers-and-punctuation",
          error: passwordError,
        },
      ],
    },
  ];

  const isFormValid =
    isPhoneValid &&
    isUsernameValid &&
    isPasswordValid &&
    isUsernameAvailable !== false &&
    (username !== user?.username ||
      phone !== user?.phone ||
      description !== user?.description);

  const onSubmit = () => {
    if (isFormValid) {
      const userData = {
        username,
        phone,
        password,
        description,
      };
      updateProfile({ userData, token: token || "" });
    }
  };

  useEffect(() => {
    if (result.isSuccess && token) {
      getCurrentUserThunk(token);
      Alert.alert("Ваши данные успешно обновлены!");
    }
    if (result.isError) {
      Alert.alert(
        "Что-то пошло не так",
        "Убедитесь, что данные введены корректно и вы подключены к сети"
      );
    }
  }, [result]);

  return (
    <View style={editProfileModuleStyles.container}>
      <Form
        inputs={inputs}
        submitTitle="Сохранить"
        onSubmit={onSubmit}
        isFormValid={isFormValid}
        isLoading={result.isLoading || isLoading}
      />
    </View>
  );
};

export default EditProfileModuleComponent;
