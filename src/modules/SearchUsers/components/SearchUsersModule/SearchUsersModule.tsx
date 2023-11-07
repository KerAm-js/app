import { FlatList, View } from "react-native";
import { useState } from "react";
import { searchUsersStyles } from "./styles";
import UserCard from "../UserCard/UserCard";
import SearchBar from "../../../../UI/inputs/SearchBar/SearchBar";
import { USERS_LIST } from "../../../../consts/devData";
import { filterUsers } from "../../helpers/filterUsers";

const SearchUsersModuleComponent = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = filterUsers(USERS_LIST, search);

  console.log(filteredUsers.length)
  
  return (
    <View style={searchUsersStyles.container}>
      <View style={searchUsersStyles.searchBarContainer}>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Телефон или имя пользователя"
        />
      </View>
      <FlatList
        data={filteredUsers}
        contentContainerStyle={searchUsersStyles.flatlistContent}
        renderItem={({ item }) => <UserCard key={item.phone} {...item} />}
      />
    </View>
  );
};

export default SearchUsersModuleComponent;
