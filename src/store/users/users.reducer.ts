import { postUserService } from "@/services/regsiter";
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

export const resolvePostUserService = createAsyncThunk(
  'resolve/users/add',
  async (payload: RegisterPayload, {rejectWithValue}) => {
    const response = await postUserService(payload);

    if(response.status === 201) {
      return response.data;
    }

    return rejectWithValue(response.data);
  }
);

const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = initialState.status;
    }
  },
  extraReducers(builder) {
    builder.addCase(resolvePostUserService.pending, (state) => {
      state.status.isLoading = true;
    })
    builder.addCase(resolvePostUserService.fulfilled, (state) => {
      state.status.isSuccess = true;
      state.status.isLoading = false;
      state.status.message = 'Register Successful';
    })
    builder.addCase(resolvePostUserService.rejected, (state) => {
      state.status.isError = true;
      state.status.isLoading = false;
      state.status.message = 'Register Failed';
    })
  },
});

export const {
  resetStatus,
} = usersSlice.actions;

export default usersSlice.reducer;