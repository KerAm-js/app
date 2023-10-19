import { View } from "react-native";
import { usePhoneValidator } from "../../../hooks/inputValidators/usePhoneValidator";
import { useInputValidator } from "../../../hooks/inputValidators/useInputValidator";
import { TFormInputType } from "../../../components/Form/types";
import { EMAIL_REGEX } from "../../../consts/regex";
import Form from "../../../components/Form/Form";
import { editProfileModuleStyles } from "./styles";

const EditProfileModuleComponent = () => {
  const [username, onChangeUsername, isUsernameValid, usernameError] =
    useInputValidator({ initValue: "", minLength: 2 });
  const [phone, onPhoneChange, isPhoneValid, phoneError] = usePhoneValidator({
    initValue: "",
  });
  const [email, onEmailChange, isEmailValid, emailError] = useInputValidator({
    initValue: "",
    pattern: EMAIL_REGEX,
  });

  const inputs: Array<TFormInputType> = [
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
  ];

  const isFormValid = isPhoneValid;

  const onSubmit = () => {
    if (isFormValid) {
      const userData = {
        username,
        phone,
        email,
      };
      console.log(userData);
    }
  };

  return (
    <View style={editProfileModuleStyles.container}>
      <Form
        inputs={{ noTitle: inputs }}
        submitTitle="Сохранить"
        onSubmit={onSubmit}
        isFormValid={isFormValid}
      />
    </View>
  );
};

export default EditProfileModuleComponent;
