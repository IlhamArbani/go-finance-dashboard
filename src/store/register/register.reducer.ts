import { registerService } from "@/services/regsiter";
import { RegisterPayload } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  status: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
  },
}

export const resolveRegisterService = createAsyncThunk(
  'resolve/register/service',
  async (payload: RegisterPayload, {rejectWithValue}) => {
    const response = await registerService(payload);

    if(response.status === 201) {
      return response.data;
    }

    return rejectWithValue(response.data);
  }
);

const registerSlice = createSlice({
  name: 'registerSlice',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = initialState.status;
    }
  },
  extraReducers(builder) {
    builder.addCase(resolveRegisterService.pending, (state) => {
      state.status.isLoading = true;
    })
    builder.addCase(resolveRegisterService.fulfilled, (state) => {
      state.status.isSuccess = true;
      state.status.isLoading = false;
      state.status.message = 'Register Successful';
    })
    builder.addCase(resolveRegisterService.rejected, (state) => {
      state.status.isError = true;
      state.status.isLoading = false;
      state.status.message = 'Register Failed';
    })
  },
});

export const {
  resetStatus,
} = registerSlice.actions;

export default registerSlice.reducer;