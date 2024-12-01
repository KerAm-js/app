import { Alert, Platform, View } from "react-native";
import { usePhoneValidator } from "../../../hooks/inputValidators/usePhoneValidator";
import { useInputValidator } from "../../../hooks/inputValidators/useInputValidator";
import { TFormInputsArray } from "../../../components/Form/types";
import Form from "../../../components/Form/Form";
import { supportModuleStyles } from "./styles";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/store/useAuth";
import { useSendMessageMutation,} from "../api/support.api";
import { useActions } from "../../../hooks/store/useActions";
import { useIsUsernameAvailableQuery } from "../../../api/api";
import { USERNAME_REGEX } from "../../../consts/regex";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/types";

const SupportComponent = () => {
  const { user, token, isLoading } = useAuth();
  const [sendMessage, sendMessageResult] = useSendMessageMutation()
  const navigation =
  useNavigation();
  const [message, onChangeMessage, isMessageValid, messageError] =
  useInputValidator({
    minLength: 2,
    required: true
  });

  const platformOs = Platform.OS
  const {phone, email, username} = user

  
  const inputs: TFormInputsArray = [
    {
      inputs: [
        {
          id: "comment",
          type: "textArea",
          onChangeText: onChangeMessage,
          value: message,
          label: "Комментарий",
          placeholder: "Напишите своё сообщение сюда",
        },
        
      ],
    },
  ];



  

  const onSubmit = () => {
    if (isMessageValid) {
      sendMessage({phone, email, username, platformOs, message})
    }
  };

  useEffect(() => {
    if(sendMessageResult.isSuccess){
      Alert.alert('Успешно', "Ваше сообщение отправлено, ожидайте пока с вами свяжутся", [
        {
          text: "Продолжить",
          onPress: () => {
            navigation.goBack()
          },
        },
      ])
    }else if(sendMessageResult.error){
      Alert.alert('Ошибка', "Что-то пошло не так")

    }
  }, [sendMessageResult])



  return (
    <View style={supportModuleStyles.container}>
      <Form
        inputs={inputs}
        submitTitle="Отправить"
        onSubmit={onSubmit}
        isFormValid={isMessageValid}
        isLoading={sendMessageResult.isLoading}
      />
    </View>
  );
};

export default SupportComponent;
