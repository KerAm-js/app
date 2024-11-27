import { useSelector } from "react-redux";
import LikeButton from "../../../UI/buttons/Like/LikeButton"
import { useActions } from "../../../hooks/store/useActions";
import { RootState } from "../../../store/store";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const SetLike = ({advertId, advertType, size=26}) => {
    const navigation = useNavigation();
    const { addLikeThunk, deleteLikeThunk, currentUserLikesThunk } = useActions();
    
    const state = useSelector((state: RootState) => state.likes);
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
        currentUserLikesThunk()
        })
    }, [navigation])
    const array = state?.likes?.filter((item) => {
        return advertId === item.advertId && advertType === item.advertType ? item : null
    })
    const isLiked = array?.length > 0 ? true : false
    const [isLikedState, setIsLikedState] = useState(isLiked)

    console.log(state.likes)



    const onSubmit = () => {
        if(isLiked){

            deleteLikeThunk({advertId, id: array[0].id, advertType})

        }else{
            addLikeThunk({advertType, advertId})
            currentUserLikesThunk()
        }
        setIsLikedState(!isLikedState)
        
    }
    return <LikeButton onPress={onSubmit} isLiked={isLikedState ? true : false} size={size} />
}

