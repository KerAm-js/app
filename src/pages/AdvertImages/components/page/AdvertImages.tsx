import { FC } from "react";
import { View } from "react-native";
import PostAdvertModule from "../../../../modules/PostAdvert";
import { TAdvert } from "../../../../types/Advert";
import { advertImagesPageStyles } from "./styles";

const AdvertImagesPageComponent: FC<Pick<TAdvert, "id"> & {isPhotosRequired: boolean}> = ({
  id,
  isPhotosRequired,
}) => {

  return (
    <View style={advertImagesPageStyles.container}>
      <PostAdvertModule.ImageForm
        advertId={id}
        isPhotosRequired={isPhotosRequired}
      />
    </View>
  );
};

export default AdvertImagesPageComponent;
