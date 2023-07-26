import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../http";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (apiUrl: string, { rejectWithValue }) => {
    try {
      const response = await get(apiUrl);
      const data = await response.data;
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
