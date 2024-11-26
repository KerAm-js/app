import { FC } from "react";
import TechnicForm from "../TechnicForm/TechnicForm";
import DumpForm from "../DumpForm/DumpForm";
import MaterialForm from "../MaterialForm/MaterialForm";
import { IAdvert } from "../../../../types/Advert";

const EditAdvertModuleComponent = ({props}) => {

  switch (props.advertType) {
    case "TECHNIC":
      return <TechnicForm props={props}/>;
    case "DUMP":
      return <DumpForm props={props} />;
    case "NON_MATERIAL":
      return <MaterialForm  props={props}/>;
    default:
      return null;
  }
};

export default EditAdvertModuleComponent;
