import { Alert, View } from "react-native";
import { usePhoneValidator } from "../../../hooks/inputValidators/usePhoneValidator";
import { useInputValidator } from "../../../hooks/inputValidators/useInputValidator";
import { TFormInputsArray } from "../../../components/Form/types";
import Form from "../../../components/Form/Form";
import { editProfileModuleStyles } from "./styles";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/store/useAuth";
import { useUpdateProfileMutation } from "../api/profile.api";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useActions } from "../../../hooks/store/useActions";

const isFetchBaseQueryError = (error: any): error is FetchBaseQueryError =>
  "status" in error;

const EditProfileModuleComponent = () => {
  const { user, token, isLoading } = useAuth();
  const { getCurrentUserThunk } = useActions();
  const [updateProfile, result] = useUpdateProfileMutation();

  const [username, onChangeUsername, isUsernameValid, usernameError] =
    useInputValidator({ initValue: user?.username, minLength: 2 });
  const [phone, onPhoneChange, isPhoneValid, phoneError] = usePhoneValidator({
    initValue: user?.phone,
  });
  const [description, setDescription] = useState(user?.description || "");
  const [password, onPasswordChange, isPasswordValid, passwordError] =
    useInputValidator({
      initValue: "",
      minLength: 3,
      required: true,
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
          textContentType: "telephoneNumber",
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
