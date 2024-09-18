import { configureStore } from '@reduxjs/toolkit';
import { api } from './feature/apiSlice';
import { appSlice } from './feature/reducer';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
