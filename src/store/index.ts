import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/favorites";
import usersReducer from "./slices/users";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  users: usersReducer,
  favorites: favoritesReducer,
});

const persisted = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persisted,
});

const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
