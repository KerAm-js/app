import { FlatList, View } from "react-native";
import { useState } from "react";
import { searchUsersStyles } from "./styles";
import UserCard from "../../../../components/UserCard/UserCard";
import SearchBar from "../../../../UI/inputs/SearchBar/SearchBar";
import { filterUsers } from "../../helpers/filterUsers";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

const SearchUsersModuleComponent = () => {
  const [search, setSearch] = useState("");

  const users = useSelector((state: RootState) => state.users);

  const filteredUsers = filterUsers(users, search);

  return (
    <View style={searchUsersStyles.container}>
      <SearchBar
        value={search}
        onChangeText={setSearch}
        placeholder="Телефон или имя пользователя"
      />
      <FlatList
        data={filteredUsers}
        style={searchUsersStyles.list}
        contentContainerStyle={searchUsersStyles.flatlistContent}
        renderItem={({ item }) => <UserCard key={item.phone} {...item} />}
      />
    </View>
  );
};

export default SearchUsersModuleComponent;
