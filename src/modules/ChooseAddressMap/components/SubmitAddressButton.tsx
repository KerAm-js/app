import { FC } from "react";
import { Point } from "react-native-yamap";
import BigButton from "../../../UI/buttons/Big/BigButton";
import { useActions } from "../../../hooks/store/useActions";
import { TAddressByMapState } from "../store/types";

export const SubmitAddressButton: FC<
  TAddressByMapState & { onPress?: () => void }
> = ({
  pointAddress,
  point,
  secondPointAddress,
  secondPoint,
  distance,
  isSecondPointRequired,
  onPress,
}) => {
  const { submitAddressByMapData } = useActions();

  const submitAddress = () => {
    submitAddressByMapData({
      point,
      pointAddress,
      secondPoint,
      secondPointAddress,
      distance,
    });
    if (onPress) onPress();
  };

  return (
    <BigButton
      disabled={!(point && (secondPoint || !isSecondPointRequired))}
      title="Сохранить"
      onPress={submitAddress}
    />
  );
};
