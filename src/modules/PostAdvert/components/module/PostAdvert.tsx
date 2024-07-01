import { FC } from "react";
import { TAdvert } from "../../../../types/Advert";
import TechnicForm from "../TechnicForm/TechnicForm";
import DumpForm from "../DumpForm/DumpForm";
import MaterialForm from "../MaterialForm/MaterialForm";
import { useActions } from "../../../../hooks/store/useActions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../navigation/types";
import { useAuth } from "../../../../hooks/store/useAuth";

const PostAdvertModuleComponent: FC<Pick<TAdvert, "type">> = ({ type }) => {
  const { addAdvert } = useActions();
  const {user} = useAuth();
  const adverts = useSelector((state: RootState) => state.adverts);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onSubmit = (ad: object, isPhotosAllowed: boolean) => {
    const id = adverts.length.toString();
    addAdvert({
      ...ad,
      type,
      id,
      likes: [],
      views: [],
      userId: user?.id,
      userRating: user?.rating,
      username: user?.username,
      updatedAt: Date.now(),
    });
    if (isPhotosAllowed) {
      navigation.navigate("AdvertImages", {
        id,
        isPhotosRequired: type === "technic",
      });
    } else {
      navigation.navigate("Profile");
    }
  };
  switch (type) {
    case "technic":
      return <TechnicForm submit={onSubmit} />;
    case "dump":
      return <DumpForm submit={onSubmit} />;
    case "material":
      return <MaterialForm submit={onSubmit} />;
    default:
      return null;
  }
};

export default PostAdvertModuleComponent;
