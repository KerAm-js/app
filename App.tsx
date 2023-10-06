import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { GREY_LIGHT } from "./src/consts/colors";
import { TITLE_F_SIZE, TITLE_F_WEIGHT } from "./src/consts/texts";

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingTop: 30 }} keyboardShouldPersistTaps="handled">
        <Text
          style={{
            fontSize: TITLE_F_SIZE,
            fontWeight: TITLE_F_WEIGHT,
            marginLeft: 20,
          }}
        >
          Элементы интерфейса
        </Text>
        <View style={{ width: "100%", height: 30 }}></View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREY_LIGHT,
  },
});
