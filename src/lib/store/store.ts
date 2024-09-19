import { configureStore } from '@reduxjs/toolkit';
import { api } from './feature/apiSlice';
import { persistStore, persistReducer } from 'redux-persist';
import userReduer, { appSlice } from './feature/reducer';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


const persistConfig = {
  key: 'auth',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, userReduer);

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    [api.reducerPath]: api.reducer,
    auth: persistedAuthReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export const persistor = persistStore(store);
