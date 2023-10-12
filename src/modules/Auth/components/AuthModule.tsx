import { useState } from "react";
import { TFormInputType } from "../../../components/form/types";
import Form from "../../../components/form/Form";
import { View } from "react-native";
import { authModuleStyles } from "./styles";

const AuthModule = () => {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const inputs: Array<TFormInputType> = [
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
      id: "password",
      type: "input",
      value: password,
      onChangeText: setPassword,
      placeholder: "",
      label: "Пароль",
      secureTextEntry: true,
      keyboardType: "numbers-and-punctuation",
    },
  ];

  const onSubmit = () => {
    const userData = {
      phone,
      password,
    };
    console.log(userData);
  };

  return (
    <View style={authModuleStyles.container}>
      <Form
        inputs={{ noTitle: inputs }}
        submitTitle="Войти"
        onSubmit={onSubmit}
      />
    </View>
  );
};

export default AuthModule;
