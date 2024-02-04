import { configureStore , combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import darkReducer from './user/darkSlice';
import dashReducer from './user/dashSlice';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({
  user:userReducer,
  dark:darkReducer,
  dash:dashReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1
};

const persistedReducer = persistReducer(persistConfig , rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store)