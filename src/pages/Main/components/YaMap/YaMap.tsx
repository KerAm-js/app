import { View } from "react-native";
import MenuBar from "../MenuBar/MenuBar";
import NavBar from "../NavBar/NavBar";
import { WebView } from "react-native-webview";
import { mainMapStyles } from "../MainMap/styles";
import { YA_MAP_JS_API_KEY } from "../../../../api/yamap";
import { useEffect, useState } from "react";
import { TAdvertType } from "../../../../types/Advert";
import * as SplashScreen from "expo-splash-screen";

const YaMap2 = () => {
  const [advertType, setAdvertType] = useState<TAdvertType>("TECHNIC");
  const onChangeAdvertType = (type: TAdvertType) => {
    setAdvertType(type);
  };

  const html = `
      <html>
      <head>
      <script src="https://api-maps.yandex.ru/2.1/?apikey=${YA_MAP_JS_API_KEY}&lang=ru_RU" type="text/javascript">
      </script>
      <script>
      ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 12,
  });
  var multiRoute = new ymaps.multiRouter.MultiRoute(
    {
      referencePoints: ["метро Смоленская", "метро Арбатская"],
      params: {
        // Тип маршрута: на автомобиле.
        routingMode: "default",
      },
    },
    {
      // Автоматически устанавливать границы карты так,
      // чтобы маршрут был виден целиком.
      boundsAutoApply: true,
    }
  );
  multiRoute.editor.start({
    // При включении опции addWayPoints пользователи смогут создавать
    // путевые точки по клику на карте.
    addWayPoints: true,
    // При включении опции removeWayPoints пользователи смогут удалять
    // путевые точки.
    // Для удаления точки нужно дважды кликнуть по ней.
    removeWayPoints: true,
  });
  myMap.geoObjects.add(multiRoute);
}

      </script>
      </head>
      <body>
      <div id="map" style="width: 100%; height: 100%"></div>
      </body>
      </html>
    `;

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <WebView style={mainMapStyles.map} source={{ html }} />
      <MenuBar advertType={advertType} setAdvertType={onChangeAdvertType} />
    </View>
  );
};

export default YaMap2;
