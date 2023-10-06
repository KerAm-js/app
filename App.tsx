import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { GREY_LIGHT } from "./src/consts/colors";
import { TITLE_F_SIZE, TITLE_F_WEIGHT } from "./src/consts/texts";
import { useRef, useState } from "react";
import Input from "./src/UI/inputs/Input/Input";
import Selection from "./src/UI/inputs/Selection/Selection";
import IntervalInput from "./src/UI/inputs/Interval/Interval";
import { TIntervalInputValue } from "./src/UI/inputs/Interval/types";
import { TECHS_LIST } from "./src/consts/data";
import Avatar from "./src/UI/Avatar/Avatar";
import SearchBar from "./src/UI/inputs/SearchBar/SearchBar";
import CardButton from "./src/UI/buttons/CardButton/CardButton";
import { shovelSvg } from "./src/assets/svg/shovel";
import { SCREEN_PADDING } from "./src/consts/views";
import { excavatorSvg } from "./src/assets/svg/excavator";
import { dumpSvg } from "./src/assets/svg/dump";

export default function App() {
  const [input, setInput] = useState<string>("");
  const [intervalInput, setIntervalInput] = useState<TIntervalInputValue>({
    from: "",
    to: "",
  });
  const onIntervalInputChangeHandlers = {
    from: (text: string) =>
      setIntervalInput({ from: text, to: intervalInput.to }),
    to: (text: string) =>
      setIntervalInput({ from: intervalInput.from, to: text }),
  };

  const selectedItemsSet = useRef<Set<string>>(new Set());

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
        <Input
          value={input}
          onChangeText={setInput}
          label="Имя пользователя"
          placeholder="Иванов Иван"
        />
        <Selection
          placeholder="Самосвал"
          itemsList={TECHS_LIST}
          selectedItemsSet={selectedItemsSet.current}
          label="Вид техники"
          multySelection
        />
        <IntervalInput
          label="Цена"
          values={intervalInput}
          onChangeTextHandlers={onIntervalInputChangeHandlers}
          keyboardType="numeric"
        />
        <View style={{ gap: 14, flexDirection: 'row', padding: SCREEN_PADDING, flexWrap: 'wrap' }}>
          <CardButton title="Техника" onPress={() => console.log('ok')} iconXml={excavatorSvg()} />
          <CardButton title="Нерудные материалы" onPress={() => console.log('ok')} iconXml={shovelSvg()} />
          <CardButton title="Свалки" onPress={() => console.log('ok')} iconXml={dumpSvg()} />
        </View>
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
