import { createSlice } from '@reduxjs/toolkit';
// Function to retrieve data from local storage
export const getStoreLocal = (item: string) => {
  return localStorage.getItem(item);
};

// Function to store data in local storage
export const setStoreLocal = (item: string, value: string) => {
  localStorage.setItem(item, value);
};
// Function to clear local storage
export const clearStoreLocal = () => {
  localStorage.removeItem('token');
};
export const appSlice = createSlice({
  name: 'app',
  initialState: {
    token: getStoreLocal('token') || null,
    user: getStoreLocal('user') || null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});
export const { setUser, loginSuccess, logout } = appSlice.actions;
export default appSlice.reducer;
