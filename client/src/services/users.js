import axios from "axios";
import { token } from "../helper/token"

const baseUrl = "/users";

const getUsers = async username => {
  const response = await axios.post(baseUrl, username);

  return response.data;
}

const changeAvatar = async (fd, setProgress) => {

  const response = await axios.post(`${baseUrl}/avatar`, fd, {
    headers: { Authorization: `${token}` },
    onUploadProgress: (progressEvent) => {
      setProgress((progressEvent.loaded / progressEvent.total) * 100);
    }
  });
  return response.data;
}

const usersService = {
  getUsers,
  changeAvatar
};
export default usersService;