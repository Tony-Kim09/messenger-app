export let token;

export const setToken = newToken => {
  token = `bearer ${newToken}`;
}
