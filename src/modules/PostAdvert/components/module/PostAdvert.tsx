import { FC } from "react";
import { TAdvert } from "../../../../types/Advert";
import TechnicForm from "../TechnicForm/TechnicForm";
import DumpForm from "../DumpForm/DumpForm";
import MaterialForm from "../MaterialForm/MaterialForm";
import { useActions } from "../../../../hooks/store/useActions";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { USER } from "../../../../consts/devData";

const PostAdvertModuleComponent: FC<Pick<TAdvert, "type">> = ({ type }) => {
  const { addAdvert } = useActions();
  const adverts = useSelector((state: RootState) => state.adverts);
  
  const onSubmit = (ad: object) => {
    addAdvert({
      ...ad,
      type,
      id: adverts.length.toString(),
      likes: [],
      views: [],
      userId: USER.id,
      userRating: USER.rating,
      username: USER.username,
      updatedAt: Date.now(),
    });
  };
  switch (type) {
    case "technic":
      return <TechnicForm submit={onSubmit} />;
    case "dump":
      return <DumpForm submit={onSubmit} />;
    case "material":
      return <MaterialForm submit={onSubmit} />;
    default:
      return null;
  }
};

export default PostAdvertModuleComponent;
