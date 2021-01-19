import axios from "axios"; 

const baseUrl = "/users";

const getUsers = async username => {
  const response = await axios.post(baseUrl, username);
  
  return response.data;
}

const usersService = {
  getUsers
};
export default usersService;