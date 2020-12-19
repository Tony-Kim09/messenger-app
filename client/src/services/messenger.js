//This page will be used in the future for the messenger aspect

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`;
}

const messengerService = {
  setToken
};
export default messengerService;
