// /features/countries/countriesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCountries = createAsyncThunk("countries/fetch", async () => {
  const res = await fetch(
    "https://restcountries.com/v2/all?fields=name,region,flag"
  );
  return res.json();
});

const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    all: [],
    filtered: [],
    loading: false,
    error: null,
  },
  reducers: {
    filterByContinent: (state, action) => {
      state.filtered = state.all.filter(
        (country) => country.region === action.payload
      );
    },
    resetFilter: (state) => {
      state.filtered = state.all;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.all = action.payload;
        state.filtered = action.payload;
        state.loading = false;
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load countries";
      });
  },
});

export const { filterByContinent, resetFilter } = countriesSlice.actions;
export default countriesSlice.reducer;
