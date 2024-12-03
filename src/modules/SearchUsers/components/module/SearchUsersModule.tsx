import { ActivityIndicator, FlatList, View } from "react-native";
import { useEffect, useState, useMemo, useCallback } from "react";
import { searchUsersStyles } from "./styles";
import UserCard from "../../../../components/UserCard/UserCard";
import SearchBar from "../../../../UI/inputs/SearchBar/SearchBar";
import { useGetUsersQuery } from "../../api/users.api";
import { BLACK_DARK } from "../../../../consts/colors";
import { PAGINATION_SIZE } from "../../api/consts";

const SearchUsersModuleComponent = () => {
  const [params, setParams] = useState({ from: 0, search: '' });

  const {
    isLoading,
    isFetching,
    data,
  } = useGetUsersQuery(
    {
      username: params.search,
      from: params.from,
    },
    { skip: !params.search }
  );

  // Реализация функции debounce
  const debounce = (func, delay) => {
    let timeout;

    return function (...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  };

  // Обернем setParams через debounce
  const debouncedSetParams = useMemo(() => debounce((newParams) => setParams(newParams), 1000), []);

  const handleSearchChange = useCallback(
    (text) => {
      debouncedSetParams({ from: 0, search: text });
    },
    [debouncedSetParams]
  );

  const incrementPage = useCallback(() => {
    if (data && data.length > 0) {
      setParams((prev) => ({
        from: Math.floor(data?.length / PAGINATION_SIZE),
        search: prev.search,
      }));
    }
  }, [data]);

  return (
    <View style={searchUsersStyles.container}>
      <SearchBar
        onChangeText={handleSearchChange}
        placeholder="Имя пользователя"
      />

      <FlatList
        onEndReached={incrementPage}
        data={data}
        style={searchUsersStyles.list}
        contentContainerStyle={searchUsersStyles.flatlistContent}
        ListFooterComponent={(isFetching || isLoading) && (
          <ActivityIndicator
            style={searchUsersStyles.loader}
            size="small"
            color={BLACK_DARK}
          />
        )}
        ListFooterComponentStyle={{top: -40}}
        renderItem={({ item }) => <UserCard key={item.email} {...item} />}
      />
      
    </View>
  );
};

export default SearchUsersModuleComponent;