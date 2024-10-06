import { FC } from "react";
import { View } from "react-native";
import PostAdvertModule from "../../../../modules/PostAdvert";
import { IAdvert } from "../../../../types/Advert";
import { advertImagesPageStyles } from "./styles";

const AdvertImagesPageComponent: FC<Pick<IAdvert, "id" | "advertType"> & {isPhotosRequired: boolean}> = ({
  id,
  advertType,
  isPhotosRequired,
}) => {

  return (
    <View style={advertImagesPageStyles.container}>
      <PostAdvertModule.ImageForm
        advertId={id}
        advertType={advertType}
        isPhotosRequired={isPhotosRequired}
      />
    </View>
  );
};

export default AdvertImagesPageComponent;
