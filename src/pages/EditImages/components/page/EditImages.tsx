import { FC } from "react";
import { View } from "react-native";
import { IAdvert } from "../../../../types/Advert";
import { editImagesPageStyles } from "./styles";
import EditAdvertModule from "../../../../modules/EditAdvert";

const EditImagesPageComponent = ({
  id,
  advertType,
  isPhotosRequired,
}) => {

  return (
    <View style={editImagesPageStyles.container}>
      <EditAdvertModule.ImageForm
        advertId={id}
        advertType={advertType}
        isPhotosRequired={isPhotosRequired}
      />
    </View>
  );
};

export default EditImagesPageComponent;
