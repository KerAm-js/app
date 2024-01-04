import { View } from "react-native";
import { userSearchPageStyles } from "./styles";
import SearhUsersModule from "../../../../modules/SearchUsers";

const UserSearchPageComponent = () => {
  return (
    <View style={userSearchPageStyles.container}>
      <SearhUsersModule.Component />
    </View>
  );
};

export default UserSearchPageComponent;
