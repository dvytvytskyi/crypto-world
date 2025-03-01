import userReducer from "./slices/userSlice";
import alertReducer from "./slices/alertSlice";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userAPI } from "./query/userAPI";
import { transactionAPI } from "./query/transactionAPI";
import { companyAPI } from "./query/companyAPI";
import { analyticsCompanyStatisticAPI } from "./query/analyticsApi/analyticsCompanyStatisticAPI";
import { analyticsSpecificStatisticsAPI } from "./query/analyticsApi/analyticsSpecificStatisticsAPI";
import { analyticsWorldAPI } from "./query/analyticsApi/analyticsWorldAPI";
import { geographyContinentsAPI } from "./query/geographyAPI/geographyContinentsAPI";
import { geographyCountriesAPI } from "./query/geographyAPI/geographyCountriesAPI";
import { geographyWorldAPI } from "./query/geographyAPI/geographyWorldAPI";
import { analyticsMarketAPI } from "./query/analyticsApi/analyticsMarketAPI";

export const store = configureStore({
  reducer: {
    user: userReducer,
    alert: alertReducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [transactionAPI.reducerPath]: transactionAPI.reducer,
    [companyAPI.reducerPath]: companyAPI.reducer,
    [analyticsCompanyStatisticAPI.reducerPath]:
      analyticsCompanyStatisticAPI.reducer,
    [analyticsSpecificStatisticsAPI.reducerPath]:
      analyticsSpecificStatisticsAPI.reducer,
    [analyticsMarketAPI.reducerPath]: analyticsMarketAPI.reducer,
    [analyticsWorldAPI.reducerPath]: analyticsWorldAPI.reducer,
    [geographyContinentsAPI.reducerPath]: geographyContinentsAPI.reducer,
    [geographyCountriesAPI.reducerPath]: geographyCountriesAPI.reducer,
    [geographyWorldAPI.reducerPath]: geographyWorldAPI.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userAPI.middleware,
      transactionAPI.middleware,
      companyAPI.middleware,
      analyticsCompanyStatisticAPI.middleware,
      analyticsSpecificStatisticsAPI.middleware,
      analyticsMarketAPI.middleware,
      analyticsWorldAPI.middleware,
      geographyContinentsAPI.middleware,
      geographyCountriesAPI.middleware,
      geographyWorldAPI.middleware
    ),
});

setupListeners(store.dispatch);
