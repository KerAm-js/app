import { ActivityIndicator, View } from "react-native";
import AdvertsModule from "../../../../modules/Adverts";
import { myAdvertsPageStyles } from "./styles";
import {
  useGetDumpAdvertsByUserQuery,
  useGetMaterialAdvertsByUserQuery,
  useGetTechnicAdvertsByUserQuery,
} from "../../../../modules/Adverts/api/adverts.api";
import { useAuth } from "../../../../hooks/store/useAuth";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const MyAdvertsPageComponent = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
    const { data: technicAdverts, isLoading: isTechnicAdvertsLoading, refetch: refetchTechnicAdverts } =
    useGetTechnicAdvertsByUserQuery(user?.id || 0);
  const { data: materialAdverts, isLoading: isMaterialAdvertsLoading, refetch: refetchMaterialAdverts } =
    useGetMaterialAdvertsByUserQuery(user?.id || 0);
  const { data: dumpAdverts, isLoading: isDumpAdvertsLoading, refetch: refetchDumpAdverts } =
    useGetDumpAdvertsByUserQuery(user?.id || 0);

    useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
        refetchTechnicAdverts();
        refetchMaterialAdverts();
        refetchDumpAdverts();
      });
  
      return unsubscribe; // Отписываемся, чтобы не утекала память
    }, [navigation, refetchTechnicAdverts, refetchMaterialAdverts, refetchDumpAdverts]);




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
