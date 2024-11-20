import { View } from "react-native";
import {
  AddressInfo,
  ChooseAddressMap,
  SubmitAddressButton,
  useAddressByMapIsSecondPointRequired,
} from "../../../../modules/ChooseAddressMap";
import { useState } from "react";
import { Point } from "react-native-yamap";
import { FooterContainer } from "../FooterContainer";
import { useNavigation } from "@react-navigation/native";
import { CloseMapButton } from "../../../../UI/buttons/CloseMapButton/CloseMapButton";

export const ChooseAddressPage = () => {
  const navigation = useNavigation();
  const isSecondPointRequired = useAddressByMapIsSecondPointRequired();

  const [point, setPoint] = useState<Point | undefined>();
  const [secondPoint, setSecondPoint] = useState<Point | undefined>();
  const [pointAddress, setPointAddress] = useState("");
  const [secondPointAddress, setSecondPointAddress] = useState("");
  const [distance, setDistance] = useState<number | undefined>();

  return (
    <View style={{ flex: 1 }}>
      <CloseMapButton />
      <ChooseAddressMap
        point={point}
        secondPoint={secondPoint}
        isSecondPointRequired={isSecondPointRequired}
        setPoint={setPoint}
        setSecondPoint={setSecondPoint}
        setDistance={setDistance}
        distance={distance}
      />
      <FooterContainer>
        <AddressInfo
          point={point}
          secondPoint={secondPoint}
          setPointAddress={setPointAddress}
          pointAddress={pointAddress}
          setSecondPointAddress={setSecondPointAddress}
          secondPointAddress={secondPointAddress}
          isSecondPointRequired={isSecondPointRequired}
        />
        <SubmitAddressButton
          point={point}
          secondPoint={secondPoint}
          pointAddress={pointAddress}
          secondPointAddress={secondPointAddress}
          distance={distance}
          isSecondPointRequired={isSecondPointRequired}
          onPress={navigation.goBack}
        />
      </FooterContainer>
    </View>
  );
};
