import { loginService } from "@/services/login";
import { LoginPayload } from "@/types";
import { setAuth } from "@/utils/cookieUtils";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  status: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  },
}

export const resolveLoginService = createAsyncThunk(
  'resolve/login/service',
  async (payload: LoginPayload, {rejectWithValue}) => {
    const response = await loginService(payload);

    if(response.status === 200) {
      return response.data;
    }

    return rejectWithValue(response.data)
  }
);

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = initialState.status;
    }
  },
  extraReducers(builder){
    builder.addCase(resolveLoginService.pending, (state) => {
      state.status.isLoading = true;
    })
    builder.addCase(resolveLoginService.fulfilled, (state, {payload}: any) => {
      state.status.isSuccess = true;
      state.status.isLoading = false;
      state.status.message = 'Register Successful';
      setAuth(payload.token)
    })
    builder.addCase(resolveLoginService.rejected, (state) => {
      state.status.isError = true;
      state.status.isLoading = false;
      state.status.message = 'Register Failed';
    })
  }
})

export const {
  resetStatus,
} = authSlice.actions;

export default authSlice.reducer;