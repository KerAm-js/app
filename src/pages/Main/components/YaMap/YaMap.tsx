import { View } from "react-native";
import MenuBar from "../MenuBar/MenuBar";
import NavBar from "../NavBar/NavBar";
import { WebView } from "react-native-webview";
import { mainMapStyles } from "../MainMap/styles";
import { YA_MAP_JS_API_KEY } from "../../../../api/yamap";

const YaMap2 = () => {
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
  return (
    <View style={{ flex: 1 }}>
      <NavBar />
      <WebView style={mainMapStyles.map} source={{ html }} />
      <MenuBar />
    </View>
  );
};

export default YaMap2;
