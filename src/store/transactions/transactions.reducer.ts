import { deleteTransaction, getTransactionService, getTransactionsService, postTransactionService, putTransactionService } from "@/services/transactions";
import { TransactionsPayload } from "@/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
  status: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: '',
    service: ''
  },
  data: [],
  detailTransaction: {},
  selectedId: null,
}

export const resolveGetTransactionsService = createAsyncThunk(
  'resolve/transactions/list',
  async (_, {rejectWithValue}) => {
    const response = await getTransactionsService();

    if(response.status === 200) {
      return response.data;
    }

    return rejectWithValue(response.data);
  }
);

export const resolvePostTransactionService = createAsyncThunk(
  'resolve/transactions/add',
  async (payload: TransactionsPayload, {rejectWithValue}) => {
    const response = await postTransactionService(payload);

    if(response.status === 201) {
      return response.data;
    }

    return rejectWithValue(response.data);
  }
);

export const resolvePutTransactionService = createAsyncThunk(
  'resolve/transactions/update',
  async ({payload, id}: {payload: TransactionsPayload, id: string}, {rejectWithValue}) => {
    const response = await putTransactionService(payload, id);

    if(response.status === 200) {
      return response.data;
    }

    return rejectWithValue(response.data);
  }
);

export const resolveDeleteTransactionService = createAsyncThunk(
  'resolve/transactions/delete',
  async (id: string, {rejectWithValue}) => {
    const response = await deleteTransaction(id);

    if(response.status === 204) {
      return response.data;
    }

    return rejectWithValue(response.data);
  }
);

export const resolveGetTransactionService = createAsyncThunk(
  'resolve/transactions/detail',
  async (id: string, {rejectWithValue}) => {
    const response = await getTransactionService(id);

    if(response.status === 200) {
      return response.data;
    }

    return rejectWithValue(response.data);
  }
);

const transactionsSlice = createSlice({
  name: 'registerSlice',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = initialState.status;
    },
    resetDetailTransaction: (state) => {
      state.detailTransaction = initialState.detailTransaction;
    },
    setSelectedId: (state, {payload}: any) => {
      state.selectedId = payload
    }
  },
  extraReducers(builder) {
    // get list transactions
    builder.addCase(resolveGetTransactionsService.pending, (state) => {
      state.status.service = 'get';
      state.status.isLoading = true;
    })
    builder.addCase(resolveGetTransactionsService.fulfilled, (state, {payload}: any) => {
      state.status.isSuccess = true;
      state.status.isLoading = false;
      state.data = payload.data ?? [];
    })
    builder.addCase(resolveGetTransactionsService.rejected, (state) => {
      state.status.isError = true;
      state.status.isLoading = false;
      state.status.message = 'Data not found';
    })
    // post transaction
    builder.addCase(resolvePostTransactionService.pending, (state) => {
      state.status.service = 'post';
      state.status.isLoading = true;
      state.status.isSuccess = false;
      state.status.isError = false;
    })
    builder.addCase(resolvePostTransactionService.fulfilled, (state) => {
      state.status.isSuccess = true;
      state.status.isLoading = false;
      state.status.message = 'Transactions has added';
    })
    builder.addCase(resolvePostTransactionService.rejected, (state) => {
      state.status.isError = true;
      state.status.isLoading = false;
      state.status.message = 'Failed add transactions';
    })
    // delete transaction
    builder.addCase(resolveDeleteTransactionService.pending, (state) => {
      state.status.service = 'delete';
      state.status.isLoading = true;
      state.status.isSuccess = false;
      state.status.isError = false;
    })
    builder.addCase(resolveDeleteTransactionService.fulfilled, (state) => {
      state.status.isSuccess = true;
      state.status.isLoading = false;
      state.status.message = 'Transactions has deleted';
    })
    builder.addCase(resolveDeleteTransactionService.rejected, (state) => {
      state.status.isError = true;
      state.status.isLoading = false;
      state.status.message = 'Failed delete transactions';
    })
    // get detail transaction
    builder.addCase(resolveGetTransactionService.pending, (state) => {
      state.status.service = 'detail';
      state.status.isLoading = true;
    })
    builder.addCase(resolveGetTransactionService.fulfilled, (state, {payload}: any) => {
      state.status.isSuccess = true;
      state.status.isLoading = false;
      state.detailTransaction = payload.data ?? {};
    })
    builder.addCase(resolveGetTransactionService.rejected, (state) => {
      state.status.isError = true;
      state.status.isLoading = false;
      state.status.message = 'Data not found';
    })
    // post transaction
    builder.addCase(resolvePutTransactionService.pending, (state) => {
      state.status.service = 'put';
      state.status.isLoading = true;
      state.status.isSuccess = false;
      state.status.isError = false;
    })
    builder.addCase(resolvePutTransactionService.fulfilled, (state) => {
      state.status.isSuccess = true;
      state.status.isLoading = false;
      state.status.message = 'Transactions has updated';
    })
    builder.addCase(resolvePutTransactionService.rejected, (state) => {
      state.status.isError = true;
      state.status.isLoading = false;
      state.status.message = 'Failed update transactions';
    })
  },
});

export const {
  resetStatus,
  resetDetailTransaction,
  setSelectedId,
} = transactionsSlice.actions;

export default transactionsSlice.reducer; 