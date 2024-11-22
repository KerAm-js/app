import axios from "axios";
import { API_URL } from "../../../api/api";


const addLike = async (credentials: any, token: string) => {
  return axios.post(`${API_URL}/secured/likes/post`, credentials, { headers: { Authorization: `Bearer ${token}` } });
};
const deleteLike = async (id: any, token: string) => {
    return axios.post(`${API_URL}/secured/likes/delete/${id}`, '2', { headers: { Authorization: `Bearer ${token}` }});
  };
  

const currentUserLikes = async (token: string) => {
  return axios.get(
    `${API_URL}/secured/current-user/likes`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
};


export const likesApi = {
    addLike,
    deleteLike,
    currentUserLikes
};
