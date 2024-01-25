import { loginService, logoutSErvice } from "@/services/auth";
import { LoginPayload } from "@/types";
import { resetCookie, setAuth, setUser } from "@/utils/cookieUtils";
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

export const resolveLogoutService = createAsyncThunk(
  'resolve/logout/service',
  async (_, {rejectWithValue}) => {
    const response = await logoutSErvice();

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
    // login service
    builder.addCase(resolveLoginService.pending, (state) => {
      state.status.isLoading = true;
    })
    builder.addCase(resolveLoginService.fulfilled, (state, {payload}: any) => {
      state.status.isSuccess = true;
      state.status.isLoading = false;
      setAuth(payload.token);
      setUser(payload.id.toString()); 
    })
    builder.addCase(resolveLoginService.rejected, (state) => {
      state.status.isError = true;
      state.status.isLoading = false;
      state.status.message = 'Login Failed';
    })
    // logout service
    builder.addCase(resolveLogoutService.pending, (state) => {
      state.status.isLoading = true;
    })
    builder.addCase(resolveLogoutService.fulfilled, (state) => {
      state.status.isSuccess = true;
      state.status.isLoading = false;
      resetCookie();
    })
    builder.addCase(resolveLogoutService.rejected, (state) => {
      state.status.isError = true;
      state.status.isLoading = false;
      state.status.message = 'Logout Failed';
    })
  }
})

export const {
  resetStatus,
} = authSlice.actions;

export default authSlice.reducer;