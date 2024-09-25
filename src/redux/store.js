import {userReducer} from '../redux/user/userSlice';
import { transactionReducer } from '../redux/transactions/transactionsSlice';
import { categoriesReducer } from './category/categorySlice';
import { filterReducer } from './filter/fiterSlice';

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
  