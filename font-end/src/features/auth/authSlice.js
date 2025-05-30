import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register new user
export const register = createAsyncThunk("auth/register", async (user, thuckAPI) => {
     console.log(user)
});

// Login user
export const login = createAsyncThunk("auth/register", async (user, thuckAPI) => {
     console.log(user)
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
