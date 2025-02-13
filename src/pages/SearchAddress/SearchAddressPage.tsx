import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SearchBar from "../../UI/inputs/SearchBar/SearchBar";
import {
  Geocoder,
  Point,
  Search,
  Suggest,
  YamapSuggestWithCoords,
} from "react-native-yamap";
import { FC, useEffect, useMemo, useRef, useState } from "react";
import { LABEL_F_SIZE, TEXT_F_SIZE } from "../../consts/texts";
import { GREY_DARK, RED, WHITE } from "../../consts/colors";
import { SCREEN_PADDING } from "../../consts/views";
import BigButton from "../../UI/buttons/Big/BigButton";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useActions } from "../../hooks/store/useActions";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function debounce<T>(callBack: (argument: T) => void, delayInMs: number) {
  let timeout: any;
  return (arg: T) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => callBack(arg), delayInMs);
  };
}

export type SearchAddressPagePropTypes = {
  isSecondPoint: boolean;
};

export const SearchAddressPage: FC<SearchAddressPagePropTypes> = ({
  isSecondPoint,
}) => {
  const [search, setSearch] = useState("Москва, ");
  const [suggestResult, setSuggestResult] = useState<
    Array<YamapSuggestWithCoords>
  >([]);
  const [loading, setLoading] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const isUnmounted = useRef(false);
  const { setSuggestedPoint } = useActions();
  const { bottom } = useSafeAreaInsets();

  const suggest = (query: string) => {
    if (!query || isUnmounted.current) return;
    setLoading(true);
    Suggest.suggestWithCoords(query)
      .then((res) => {
        if (res.length === 0 || (res.length === 1 && !res[0].title)) {
          setError("По вашему запросу ничего не найдено");
        } else {
          setError(undefined);
        }
        setSuggestResult(res);
      })
      .catch((err) => {
        console.log(err);
        setError("Что-то пошло не так");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const debouncedSuggest = useMemo(() => debounce<string>(suggest, 500), []);

  const onChangeSearchText = (text: string) => {
    setSearch(text);
    debouncedSuggest(text);
  };

  const chooseSuggest = (item: YamapSuggestWithCoords) => {
    setSearch(item.subtitle + ", " + item.title);
    suggest(item.title);
  };

  const submit = () => {
    if (search) {
      setBtnLoading(true);
      Geocoder.addressToGeo(search)
        .then((res) => {
          if (res) {
            setSuggestedPoint({
              point: { lat: res.lat, lon: res.lon },
              isSecondPoint,
            });
            navigation.goBack();
          } else {
            throw new Error("Coordinates are not found");
          }
        })
        .catch((err) => {
          Alert.alert("Возникла ошибка", "Попробуйте другой адрес");
        })
        .finally(() => {
          setBtnLoading(true);
        });
    } else {
      navigation.goBack();
    }
    Suggest.reset();
  };

  useEffect(() => {
    return () => {
      isUnmounted.current = true;
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SearchBar
        onChangeText={onChangeSearchText}
        value={search}
        placeholder="Город, улица, дом"
      />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
      >
        {loading ? (
          <ActivityIndicator />
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          suggestResult.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.suggestion}
                onPress={() => {
                  chooseSuggest(item);
                }}
              >
                <Text style={styles.title}>{item.title}</Text>
                {item.subtitle && (
                  <Text style={styles.subTitle}>{item.subtitle}</Text>
                )}
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>
      <View style={[styles.submitButtonContainer, { bottom }]}>
        <BigButton isLoading={btnLoading} title="Готово" onPress={submit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scroll: {
    marginTop: 10,
    flex: 1,
  },
  suggestion: {
    padding: 12,
    gap: 5,
    backgroundColor: WHITE,
    borderRadius: 12,
    borderCurve: "continuous",
    marginHorizontal: SCREEN_PADDING,
  },
  scrollContent: {
    gap: 10,
    paddingTop: 15,
    paddingBottom: 100,
  },
  title: {
    fontSize: TEXT_F_SIZE,
    fontFamily: "Gilroy-Medium",
  },
  subTitle: {
    fontSize: LABEL_F_SIZE,
    color: GREY_DARK,
    fontFamily: "Gilroy-Medium",
  },
  error: {
    fontSize: TEXT_F_SIZE,
    color: RED,
    fontFamily: "Gilroy-Semibold",
    marginTop: 30,
    textAlign: "center",
  },
  submitButtonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
  },
});
