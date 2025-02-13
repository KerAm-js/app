import { View } from "react-native";
import {
  AddressInfo,
  ChooseAddressMap,
  SubmitAddressButton,
  useAddressByMapIsSecondPointRequired,
} from "../../../../modules/ChooseAddressMap";
import { useEffect, useState } from "react";
import { Point } from "react-native-yamap";
import { FooterContainer } from "../FooterContainer";
import { useNavigation } from "@react-navigation/native";
import { CloseMapButton } from "../../../../UI/buttons/CloseMapButton/CloseMapButton";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useActions } from "../../../../hooks/store/useActions";

const MOSCOW_CENTER_POINT = { lat: 55.753215, lon: 37.622504 };

export const ChooseAddressPage = () => {
  const {
    suggestedPoint,
    point: point1,
    secondPoint: secondPoint1,
    distance: distance1,
  } = useSelector((state: RootState) => state.addressByMap);
  const { setSuggestedPoint } = useActions();
  const navigation = useNavigation();
  const isSecondPointRequired = useAddressByMapIsSecondPointRequired();
  const [point, setPoint] = useState<Point | undefined>(point1);
  const [secondPoint, setSecondPoint] = useState<Point | undefined>(
    secondPoint1
  );
  const [pointAddress, setPointAddress] = useState("");
  const [secondPointAddress, setSecondPointAddress] = useState("");
  const [distance, setDistance] = useState<number | undefined>(distance1);
  const [initialPoint, setInitialPoint] = useState(
    point || MOSCOW_CENTER_POINT
  );

  useEffect(() => {
    if (suggestedPoint) {
      if (suggestedPoint.isSecondPoint) {
        setSecondPoint(suggestedPoint.point);
        setInitialPoint(suggestedPoint.point);
      } else {
        setPoint(suggestedPoint.point);
        setInitialPoint(suggestedPoint.point);
      }
      setSuggestedPoint(undefined);
    }
  }, [suggestedPoint]);

  return (
    <View style={{ flex: 1 }}>
      <CloseMapButton />
      <ChooseAddressMap
        point={point}
        initialPoint={initialPoint}
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
          setPoint={setPoint}
          secondPoint={secondPoint}
          setSecondPoint={setSecondPoint}
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
