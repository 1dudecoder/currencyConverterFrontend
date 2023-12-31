import { configureStore } from "@reduxjs/toolkit";
import getCurrency from "../slice/getCurrency";

export const store = configureStore({
  reducer: {
    getCurrency: getCurrency,
  },
});
