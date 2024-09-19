import { configureStore } from '@reduxjs/toolkit';
import { api } from './feature/apiSlice';
import userReduer, { appSlice } from './feature/reducer';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    [api.reducerPath]: api.reducer,
    auth: userReduer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
