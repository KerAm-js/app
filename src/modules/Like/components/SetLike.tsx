import { useSelector } from "react-redux";
import LikeButton from "../../../UI/buttons/Like/LikeButton";
import { useActions } from "../../../hooks/store/useActions";
import { RootState } from "../../../store/store";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  useAddLikeMutation,
  useDeleteLikeMutation,
  useGetCurrentUserLikesQuery,
} from "../api/likesApi";
import { useAuth } from "../../../hooks/store/useAuth";

export const SetLike = ({ advertId, advertType, size = 26 }) => {
  const { token } = useAuth();
  const navigation = useNavigation();
  const [addLike] = useAddLikeMutation();
  const [deleteLike] = useDeleteLikeMutation();
  const {
    isLoading,
    isFetching,
    data: state,
    refetch,
  } = useGetCurrentUserLikesQuery({ token });

  // Находим текущий лайк, если он есть
  const array = state?.find(
    (item) => advertId === item.advertId && advertType === item.advertType
  );

  // Определяем начальное состояние лайка
  const isLiked = !!array;
  const [isLikedState, setIsLikedState] = useState(isLiked);

  const onSubmit = () => {
    setIsLikedState(!isLikedState); // Мгновенно меняем состояние кнопки
    if (isLiked) {
      // Отправляем запрос на удаление лайка
      deleteLike({ id: array.id, token });
    } else {
      // Отправляем запрос на добавление лайка
      addLike({ credentials: { advertType, advertId }, token });
    }
  };

  useEffect(() => {
    // Синхронизация состояния с серверными данными при перезагрузке
    setIsLikedState(isLiked);
  }, [isLiked]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refetch();
    });
    return unsubscribe;
  }, [navigation, refetch]);

  return (
    <LikeButton
      onPress={onSubmit}
      isLiked={isLikedState} // Локальное состояние кнопки
      size={size}
    />
  );
};