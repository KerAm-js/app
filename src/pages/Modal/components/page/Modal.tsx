import { FC, useEffect } from "react";
import { View } from "react-native";
import { modalStyles } from "./styles";
import BottomSheet from "../../../../components/BottomSheet/BottomSheet";
import { TSheetButtonProps } from "../../../../components/BottomSheet/types";
import { IAdvert } from "../../../../types/Advert";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { useChangeDumpAdvertStatusMutation, useChangeMaterialAdvertStatusMutation, useChangeTechnicAdvertStatusMutation } from "../../../../modules/EditAdvert/api/editAdvert.api";
import { useAuth } from "../../../../hooks/store/useAuth";

const MyModal: FC<IAdvert> = (props) => {
  const {token} = useAuth()
  const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [changeTechnicAdvertStatus, changeTechnicAdvertStatusResult] = useChangeTechnicAdvertStatusMutation()
  const [changeMaterialAdvertStatus, changeMaterialAdvertStatusResult] = useChangeMaterialAdvertStatusMutation()
  const [changeDumpAdvertStatus, changeDumpAdvertStatusResult] = useChangeDumpAdvertStatusMutation()


  const updateRelevance = (status: string) => {
    if(props.advertType === 'TECHNIC'){
      changeTechnicAdvertStatus({advertStatus: status, advertId: props.id, token})
    }else if( props.advertType === 'DUMP'){
      changeDumpAdvertStatus({advertStatus: status, advertId: props.id, token})
    }else{
      changeMaterialAdvertStatus({advertStatus: status, advertId: props.id, token})
    }
  }


  const actions: Array<TSheetButtonProps> = [
    {
      id: "1",
      title: "Редактировать",
      onPress: () => {
        navigation.goBack()
        navigation.navigate('EditAdvert', props)
      },
      type: "default",
    },
    {
      id: "2",
      title: "Обновить актуальность",
      onPress: () => {updateRelevance('PUBLISHED')},
      type: "default",
    },
    {
      id: "3",
      title:
        props.advertStatus === "PUBLISHED" ? "Снять с публикации" : "Опубликовать",
      onPress: () => {updateRelevance(props.advertStatus === "PUBLISHED" ? 'STOPPER' : 'PUBLISHED')},
      type: "default",
    },
    {
      id: "4",
      title: "Удалить объявление",
      onPress: () => {updateRelevance('DELETED')},
      type: "destructive",
      confirmMessage: "Вы уверены, что хотите удалить объявление?",
    },
  ];



  const actionsForDeletedAdvert: Array<TSheetButtonProps> = [
    {
      id: "1",
      title: "Восстановить объявление",
      onPress: () => {updateRelevance('PUBLISHED')},
      type: "default",
    },
    {
      id: "2",
      title: "Редактировать",
      onPress: () => {
        navigation.goBack()
        navigation.navigate('EditAdvert', props)
      },
      type: "default",
    },
  ];

  return (
    <View style={modalStyles.container}>
      <BottomSheet
        title="Выберите действие"
        actions={props.advertStatus === "DELETED" ? actionsForDeletedAdvert : actions}
      />
    </View>
  );
};

export default MyModal;
