import axios from "axios"; 

const baseUrl = "/messages";

let token = null

const createConversation = async usernames => {
  const response = await axios.post(baseUrl, usernames);
  
  return response.data;
}

const setToken = newToken => {
  token = `bearer ${newToken}`;
}

const messengerService = {
  createConversation,
  setToken
};
export default messengerService;
