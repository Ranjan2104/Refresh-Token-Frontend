import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { RegisterAPI } from "./middleware/registerAPI";
import { LoginAPI } from "./middleware/loginAPI";
import { GetDashboardAPi } from "./middleware/dashboardAPI";
import { TokenAPI } from "./middleware/tokenAPI";

export const store = configureStore({
  reducer: {
    [RegisterAPI.reducerPath]: RegisterAPI.reducer,
    [LoginAPI.reducerPath]: LoginAPI.reducer,
    [GetDashboardAPi.reducerPath]: GetDashboardAPi.reducer,
    [TokenAPI.reducerPath]: TokenAPI.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      RegisterAPI.middleware,
      LoginAPI.middleware,
      GetDashboardAPi.middleware,
      TokenAPI.middleware
    ),
});

setupListeners(store.dispatch);
