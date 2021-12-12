import axios from "axios";

const baseUrl = "/messages";

let token = null

const createConversation = async usernames => {
  const response = await axios.post(baseUrl, usernames);

  return response.data;
}

const saveMessage = async (conversationID, message) => {
  const config = {
    headers: { Authorization: `${token}` }
  };

  const response = await axios.post(
    `${baseUrl}/${conversationID}`,
    { message },
    config
  );
  return response.data;
}

const setToken = newToken => {
  token = `bearer ${newToken}`;
}

const messengerService = {
  createConversation,
  saveMessage,
  setToken
};
export default messengerService;
