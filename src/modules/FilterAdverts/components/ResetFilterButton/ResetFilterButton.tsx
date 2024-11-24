import { Pressable, StyleSheet, Text } from "react-native";
import { RED } from "../../../../consts/colors";
import { TEXT_F_SIZE } from "../../../../consts/texts";
import { FC } from "react";
import { IAdvert } from "../../../../types/Advert";
import { useActions } from "../../../../hooks/store/useActions";
import { useNavigation } from "@react-navigation/native";

export const ResetFilterButton: FC<Pick<IAdvert, "advertType">> = ({
  advertType,
}) => {
  const navigation = useNavigation();
  const { resetDumpFilter, resetMaterialFilter, resetTechnicFilter } =
    useActions();

  const onPress = () => {
    if (advertType === "DUMP") {
      resetDumpFilter();
    } else if (advertType === "NON_MATERIAL") {
      resetMaterialFilter();
    } else if (advertType === "TECHNIC") {
      resetTechnicFilter();
    }
    navigation.goBack()
  };

  return (
    <Pressable onPress={onPress} style={styles.resetButton}>
      <Text style={styles.resetButtonTitle}>Сбросить фильтр</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  resetButton: {
    marginTop: 20,
  },
  resetButtonTitle: {
    color: RED,
    fontSize: TEXT_F_SIZE,
    fontFamily: "Gilroy-Semibold",
    textAlign: "center",
  },
});
