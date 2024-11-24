import { FC } from "react";
import { IAdvert } from "../../../../types/Advert";
import TechnicForm from "../TechnicForm/TechnicForm";
import DumpForm from "../DumpForm/DumpForm";
import MaterialForm from "../MaterialForm/MaterialForm";
import { useAdvertFilters } from "../../store/hooks";

export const FilterAdvertsModule: FC<Pick<IAdvert, "advertType">> = ({ advertType }) => {
  const { dump, technic, material } = useAdvertFilters();
  switch (advertType) {
    case "TECHNIC":
      return <TechnicForm />;
    case "DUMP":
      return <DumpForm {...dump} />;
    case "NON_MATERIAL":
      return <MaterialForm />;
    default:
      return null;
  }
};
