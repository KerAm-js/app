import { ActivityIndicator, FlatList, View } from "react-native";
import { useState } from "react";
import { searchUsersStyles } from "./styles";
import UserCard from "../../../../components/UserCard/UserCard";
import SearchBar from "../../../../UI/inputs/SearchBar/SearchBar";
import { useGetUsersQuery } from "../../api/users.api";
import { BLACK_DARK } from "../../../../consts/colors";

const SearchUsersModuleComponent = () => {
  const [search, setSearch] = useState("");

  const {
    isLoading,
    isFetching,
    error,
    data: users,
  } = useGetUsersQuery(
    {
      username: search,
      from: 0,
      to: 20,
    },
    { skip: !search }
  );

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
          renderItem={({ item }) => <UserCard key={item.phone} {...item} />}
        />
      )}
    </View>
  );
};

export default SearchUsersModuleComponent;
