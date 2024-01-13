import { FC } from "react";
import { TAdvert } from "../../../../types/Advert";
import TechnicForm from "../TechnicForm/TechnicForm";
import DumpForm from "../DumpForm/DumpForm";
import ShovelForm from "../ShovelForm/ShovelForm";

const FilterAdvertsModuleComponent: FC<Pick<TAdvert, "type">> = ({ type }) => {
  switch (type) {
    case "technic":
      return <TechnicForm />;
    case "dump":
      return <DumpForm />;
    case "shovel":
      return <ShovelForm />;
    default:
      return null;
  }
};

export default FilterAdvertsModuleComponent;
