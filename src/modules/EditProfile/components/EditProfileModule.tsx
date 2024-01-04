import { View } from "react-native";
import { usePhoneValidator } from "../../../hooks/inputValidators/usePhoneValidator";
import { useInputValidator } from "../../../hooks/inputValidators/useInputValidator";
import { TFormInput, TFormInputsArray } from "../../../components/Form/types";
import { EMAIL_REGEX } from "../../../consts/regex";
import Form from "../../../components/Form/Form";
import { editProfileModuleStyles } from "./styles";
import { useState } from "react";
import { USER } from "../../../consts/devData";

const EditProfileModuleComponent = () => {
  const [username, onChangeUsername, isUsernameValid, usernameError] =
    useInputValidator({ initValue: USER.username, minLength: 2 });
  const [phone, onPhoneChange, isPhoneValid, phoneError] = usePhoneValidator({
    initValue: USER.phone,
  });
  const [email, onEmailChange, isEmailValid, emailError] = useInputValidator({
    initValue: USER.email,
    pattern: EMAIL_REGEX,
  });
  const [description, setDescription] = useState(USER.description);

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
          id: "description",
          type: "textArea",
          value: description,
          onChangeText: (text: string) => setDescription(text),
          placeholder: "",
          label: "Описание",
        },
      ],
    },
  ];

  const isFormValid =
    isPhoneValid &&
    isUsernameValid &&
    isEmailValid &&
    (username !== USER.username ||
      phone !== USER.phone ||
      email !== USER.email ||
      description !== USER.description);

  const onSubmit = () => {
    if (isFormValid) {
      const userData = {
        username,
        phone,
        email,
        description,
      };
      console.log(userData);
    }
  };

  return (
    <View style={editProfileModuleStyles.container}>
      <Form
        inputs={inputs}
        submitTitle="Сохранить"
        onSubmit={onSubmit}
        isFormValid={isFormValid}
      />
    </View>
  );
};

export default EditProfileModuleComponent;
