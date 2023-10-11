import { useState } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { TFormInputType } from "../../../components/form/types";
import Form from "../../../components/form/Form";

const AuthModule = () => {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const headerHeight = useHeaderHeight();

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
  return (
    <Form
      inputs={{ noTitle: inputs }}
      submitTitle="Войти"
      onSubmit={() => console.log("Вход")}
    />
  );
};

export default AuthModule;
