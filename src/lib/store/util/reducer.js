/**
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const setKeyValue = (state, action) => {
  const { key, value } = action.payload;
  state.data[key] = value;
};
