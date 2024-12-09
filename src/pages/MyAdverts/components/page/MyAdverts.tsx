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
  const { token } = useAuth();

    const { data: technicAdverts, isLoading: isTechnicAdvertsLoading, refetch: refetchTechnicAdverts } =
    useGetTechnicAdvertsByUserQuery({token: token || 0, status: 'active'});
  const { data: materialAdverts, isLoading: isMaterialAdvertsLoading, refetch: refetchMaterialAdverts } =
    useGetMaterialAdvertsByUserQuery({token: token || 0, status: 'active'});
  const { data: dumpAdverts, isLoading: isDumpAdvertsLoading, refetch: refetchDumpAdverts } =
    useGetDumpAdvertsByUserQuery({token: token || 0, status: 'active'});


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
