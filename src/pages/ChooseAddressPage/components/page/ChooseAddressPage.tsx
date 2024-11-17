import { View } from "react-native";
import { ChooseAddressMap } from "../../../../modules/ChooseAddressMap";
import { CloseButton } from "../CloseButton";
import { AddressInfo } from "../AddressInfo";

export const ChooseAddressPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <CloseButton />
      <AddressInfo />
      <ChooseAddressMap />
    </View>
  );
};
