import { FC } from "react";
import TechnicForm from "../TechnicForm/TechnicForm";
import DumpForm from "../DumpForm/DumpForm";
import MaterialForm from "../MaterialForm/MaterialForm";
import { IAdvert } from "../../../../types/Advert";

const PostAdvertModuleComponent: FC<Pick<IAdvert, "advertType">> = ({ advertType }) => {

  switch (advertType) {
    case "TECHNIC":
      return <TechnicForm />;
    case "DUMP":
      return <DumpForm />;
    case "NON_MATERIAL":
      return <MaterialForm />;
    default:
      return null;
  }
};

export default PostAdvertModuleComponent;
