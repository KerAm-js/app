import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BigButton } from "./src/UI/buttons/BigButton/BigButton";
import { GREEN } from "./src/consts/colors";
import { IconButton } from "./src/UI/buttons/IconButton/IconButton";
import { userSvg } from "./src/assets/svg/user";
import { excavatorSvg } from "./src/assets/svg/excavator";
import { TITLE_F_SIZE, TITLE_F_WEIGHT } from "./src/consts/texts";
import { useState } from "react";

export default function App() {
  const [isActive, setActive] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: TITLE_F_SIZE, fontWeight: TITLE_F_WEIGHT }}>
        UI Components
      </Text>
      <View style={{ width: "100%", height: 50 }}></View>
      <IconButton
        iconXmlFunc={userSvg}
        onPress={() => console.log("icon-button has been pressed")}
      />
      <View style={{ width: "100%", height: 30 }}></View>
      <IconButton
        bigSize
        iconXmlFunc={excavatorSvg}
        onPress={() => {
          console.log("icon-button has been pressed");
          setActive((prev) => !prev);
        }}
        isActive={isActive}
      />
      <View style={{ width: "100%", height: 30 }}></View>
      <BigButton
        title="Button"
        onPress={() => console.log("big-button has been pressed")}
        backgroundColor={GREEN}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
