import { ActivityIndicator, FlatList, View } from "react-native";
import { useEffect, useState } from "react";
import { searchUsersStyles } from "./styles";
import UserCard from "../../../../components/UserCard/UserCard";
import SearchBar from "../../../../UI/inputs/SearchBar/SearchBar";
import { useGetUsersQuery } from "../../api/users.api";
import { BLACK_DARK } from "../../../../consts/colors";

const SearchUsersModuleComponent = () => {
  const [search, setSearch] = useState("");
  const [pagination, setPagination] = useState({ from: 0, to: 20 });

  const {
    isLoading,
    isFetching,
    data: users,
    error,
    status,
  } = useGetUsersQuery(
    {
      username: search,
      from: pagination.from,
      to: pagination.to,
    },
    { skip: !search }
  );

  const onEndReached = () => {
    setPagination((prev) => ({ from: prev.to + 1, to: prev.to + 3 }));
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPagination((prev) => ({ from: 0, to: prev.to + 2 }));
  //   }, 5000);
  // }, [])

  return (
    <View style={searchUsersStyles.container}>
      <SearchBar
        value={search}
        onChangeText={setSearch}
        placeholder="Имя пользователя"
      />
      {isFetching || isLoading ? (
        <ActivityIndicator
          style={searchUsersStyles.loader}
          size="small"
          color={BLACK_DARK}
        />
      ) : (
        <FlatList
          data={search ? users : []}
          style={searchUsersStyles.list}
          contentContainerStyle={searchUsersStyles.flatlistContent}
          renderItem={({ item }) => <UserCard key={item.email} {...item} />}
        />
      )}
    </View>
  );
};

export default SearchUsersModuleComponent;
