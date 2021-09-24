import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReduser from "./reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredCheck: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const contactsPersistConfig = {
  key: "phonebook",
  storage,
  blacklist: ["filter"],
};

const rootReducer = combineReducers({ reducer: contactsReduser });

const persistedReducer = persistReducer(contactsPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

const persistor = persistStore(store);

export { store, persistor };
