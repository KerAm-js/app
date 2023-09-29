import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BigButton } from "./src/UI/buttons/BigButton/BigButton";
import { GREEN, GREY_LIGHT } from "./src/consts/colors";
import { IconButton } from "./src/UI/buttons/IconButton/IconButton";
import { userSvg } from "./src/assets/svg/user";
import { excavatorSvg } from "./src/assets/svg/excavator";
import { TITLE_F_SIZE, TITLE_F_WEIGHT } from "./src/consts/texts";
import { useState } from "react";
import { pencilSvg } from "./src/assets/svg/pencil";
import Input from "./src/UI/inputs/Input/Input";
import Selection from "./src/UI/inputs/Selection/Selection";

export default function App() {
  const [isActive, setActive] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: TITLE_F_SIZE, fontWeight: TITLE_F_WEIGHT }}>
        UI Components
      </Text>
      {/* <View style={{ width: "100%", height: 50 }}></View>
      <Input value={input} valueSetter={setInput} label="Label"  /> */}
      <View style={{ width: "100%", height: 20 }}></View>
      <Selection
        placeholder="Например, самосвал"
        values={[""]}
        label="Вид техники"
        valuesSetter={(value: string) => console.log(value)}
      />
      {/* <View style={{ width: "100%", height: 50 }}></View>
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
        iconXmlFunc={pencilSvg}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GREY_LIGHT,
    paddingTop: 100,
    padding: 20,
  },
});
