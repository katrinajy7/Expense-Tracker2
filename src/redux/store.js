import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from  "redux-persist/lib/storage";
import {authReducer} from "../redux/auth/authSlice";
import { userReducer } from "../redux/user/userSlice";
import { transactionReducer } from "../redux/transactions/transactionsSlice";
import { categoriesReducer } from "../../src/redux/category/categorySlice";
import { filterReducer } from "./filter/filterSlice"

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['accessToken', 'sid', 'refreshToken'],
  };
  
  export const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      user: userReducer,
      transaction: transactionReducer,
      categories: categoriesReducer,
      filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);
  