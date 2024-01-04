import { FC } from "react";
import { TAdvert } from "../../../../types/Advert";
import TechnicForm from "../TechnicForm/TechnicForm";

const PostAdvertModuleComponent: FC<Pick<TAdvert, 'type'>> = ({ type }) => {
  if (type === 'technic') {
    return <TechnicForm />
  } else {
    return null;
  }
};

export default PostAdvertModuleComponent;
