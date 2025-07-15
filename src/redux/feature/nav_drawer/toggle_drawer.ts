import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface toggleDrawerState {
  value: boolean;
}

const initialState: toggleDrawerState = {
  value: false,
};

export const toggleDrawerSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.value = !state.value;
    },
    setToggle: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { toggleDrawer, setToggle } = toggleDrawerSlice.actions;
export default toggleDrawerSlice.reducer;