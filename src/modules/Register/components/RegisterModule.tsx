import { useState } from "react";
import { TFormInputType } from "../../../components/form/types";
import { registerModuleStyles } from "./styles";
import { View } from "react-native";
import Form from "../../../components/form/Form";

const RegisterModule = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const inputs: Array<TFormInputType> = [
    {
      id: "username",
      type: "input",
      value: username,
      onChangeText: setUsername,
      placeholder: "",
      label: "Имя пользователя",
    },
    {
      id: "phone",
      type: "input",
      value: phone,
      onChangeText: setPhone,
      placeholder: "",
      label: "Телефон",
      keyboardType: "numeric",
    },
    {
      id: "email",
      type: "input",
      value: email,
      onChangeText: setEmail,
      placeholder: "",
      label: "E-mail",
      keyboardType: "email-address",
    },
    {
      id: "password",
      type: "input",
      value: password,
      onChangeText: setPassword,
      placeholder: "",
      label: "Пароль",
      secureTextEntry: true,
      keyboardType: "numbers-and-punctuation",
    },
    {
      id: "confirmPassword",
      type: "input",
      value: confirmPassword,
      onChangeText: setConfirmPassword,
      placeholder: "",
      label: "Подтвердите пароль",
      secureTextEntry: true,
      keyboardType: "numbers-and-punctuation",
    },
  ];

  const onSubmit = () => {
    const userData = {
      username,
      phone,
      email,
      password,
    }
    console.log(userData);
  }

  return (
    <View style={registerModuleStyles.container}>
      <Form
        inputs={{ noTitle: inputs }}
        submitTitle="Зарегистрироваться"
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default RegisterModule;
