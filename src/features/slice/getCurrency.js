import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: [],
  loading: true,
};

const GetCurrency = createSlice({
  name: "getCurrency",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setData, setLoading, setError } = GetCurrency.actions;
export const selectData = (state) => state.data?.data;
export const currencyStore = GetCurrency.state;
export default GetCurrency.reducer;
