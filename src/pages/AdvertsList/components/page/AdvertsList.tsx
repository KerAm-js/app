import { USERS_LIST } from "../../../../consts/devData";
import { FC, useLayoutEffect } from "react";
import { TAdvert } from "../../../../types/Advert";
import { View } from "react-native";
import AdvertsModule from "../../../../modules/Adverts";

const AdvertsListPageComponent: FC<Pick<TAdvert, "type">> = ({ type }) => {
  const data: Array<TAdvert> = [];

  useLayoutEffect(() => {
    USERS_LIST.forEach((user) => {
      user.adverts.forEach((advert) => {
        if (advert.type === type) data.push(advert);
      });
    });
  }, [type]);

  return (
    <View>
      <AdvertsModule.Component data={data} />
    </View>
  );
};

export default AdvertsListPageComponent;
