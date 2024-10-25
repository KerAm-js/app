import { ActivityIndicator, View } from "react-native";
import AdvertsModule from "../../../../modules/Adverts";
import { myAdvertsPageStyles } from "./styles";
import {
  useGetDumpAdvertsByUserQuery,
  useGetMaterialAdvertsByUserQuery,
  useGetTechnicAdvertsByUserQuery,
} from "../../../../modules/Adverts/api/adverts.api";
import { useAuth } from "../../../../hooks/store/useAuth";

const MyAdvertsPageComponent = () => {
  const { user } = useAuth();
  const { data: technicAdverts, isLoading: isTechnicAdvertsLoading } =
    useGetTechnicAdvertsByUserQuery(user?.id || 0);
  const { data: materialAdverts, isLoading: isMaterialAdvertsLoading } =
    useGetMaterialAdvertsByUserQuery(user?.id || 0);
  const { data: dumpAdverts, isLoading: isDumpAdvertsLoading } =
    useGetDumpAdvertsByUserQuery(user?.id || 0);

  return (
    <View style={myAdvertsPageStyles.container}>
      {isTechnicAdvertsLoading ||
      isMaterialAdvertsLoading ||
      isDumpAdvertsLoading ? (
        <ActivityIndicator />
      ) : (
        !!technicAdverts &&
        !!materialAdverts &&
        !!dumpAdverts && (
          <AdvertsModule.Component
            data={[...technicAdverts, ...materialAdverts, ...dumpAdverts]}
          />
        )
      )}
    </View>
  );
};

export default MyAdvertsPageComponent;
