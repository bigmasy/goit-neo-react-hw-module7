import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const selectFilter = (state) => state.filter.name;
export const useFilter = () => useSelector(selectFilter);

const filterSlice = createSlice({
  name: "filter",
  initialState: { name: "" },
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
