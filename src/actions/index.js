// export const GET_USER_LS_DATA = 'GET_LS_DATA';
export const SAVE_USER_LS_DATA = 'SAVE_USER_LS_DATA';
const userLsKeys = ['user', 'mealsToken', 'cocktailsToken'];

export const getUserLsData = () => {
  const data = userLsKeys.reduce((acc, key) => ({
    ...acc, [key]: JSON.parse(localStorage.getItem(key)),
  }), {});
  return {
    type: SAVE_USER_LS_DATA,
    data,
  };
};

export const saveUserLsData = (data) => {
  userLsKeys.forEach((key) => {
    localStorage.setItem(key, JSON.stringify(data[key]));
  });
  return {
    type: SAVE_USER_LS_DATA,
    data,
  };
};
