import { useMemo } from "react";
import { RootState } from "./../../store/store";
import { useSelector } from "react-redux";

export const useUserComments = ({
  role,
  id,
  textOnly,
}: {
  role?: "addressee" | "author";
  id?: number;
  textOnly?: boolean;
}) => {
  const comments = useSelector((state: RootState) => state.comments);
  const filtered = useMemo(
    () =>
      comments.filter((comment) => {
        if (textOnly && !comment.text) return false;
        return role === "addressee"
          ? comment.addresseeId === id
          : comment.authorId === id;
      }),
    [comments]
  );
  return filtered;
};
