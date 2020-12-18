import axios from "axios"; 

const baseUrl = "/register";

const create = async credentials => {
  const response = await axios.post(baseUrl, credentials);
  
  return response.data;
}

const registerService = {
  create
};
export default registerService;