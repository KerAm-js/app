import { FC } from "react";
import { TAdvert } from "../../../../types/Advert";
import TechnicForm from "../TechnicForm/TechnicForm";
import DumpForm from "../DumpForm/DumpForm";

const PostAdvertModuleComponent: FC<Pick<TAdvert, "type">> = ({ type }) => {
  switch (type) {
    case "technic":
      return <TechnicForm />;
    case "dump":
      return <DumpForm />;
    case "shovel":
      return null;
    default:
      return null;
  }
};

export default PostAdvertModuleComponent;
