import axios from "axios";
import { token } from "../helper/token"
const baseUrl = "/messages";

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

const messengerService = {
  createConversation,
  saveMessage,
};
export default messengerService;
