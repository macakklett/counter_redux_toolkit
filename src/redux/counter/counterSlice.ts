import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },

    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },

    decrement: state => {
      state.value -= 1;
    },

    reset: state => {
      state.value = 0;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log('increment async pending');
      })
      .addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, () => {
        console.log('increment async rejected');
      });
  },
});

export const incrementAsync = createAsyncThunk('counter/incrementAsync', async (amount: number) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return amount;
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
