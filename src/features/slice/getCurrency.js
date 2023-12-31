import { createSlice } from "@reduxjs/toolkit";
// import { getData } from "./ApiSlice"

const initialState = {
  data: [],
};

const GetCurrency = createSlice({
  name: "getCurrency",
  initialState,
  reducers: {
    // increase: (state, action) => {
    //   state.count += action.payload;
    // },
    // decrese: (state, action) => {
    //   state.count -= action.payload;
    // },
    // reset: (state) => {
    //   state.count = 0;
    // },
  },

  extraReducers: (builder) => {
    //it check other reducer actions
    // and based on those action
    // it can also change value of other reducers
    // builder.addCase(getData.fulfilled, (state, action) => {
    //     state.count += 5
    // })
  },
});

export default GetCurrency.reducer;
// export const { increase, decrese, reset } = CountSlice.actions;
export const currencyStore = GetCurrency.state;
