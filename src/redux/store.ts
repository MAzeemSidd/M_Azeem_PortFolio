import { configureStore } from '@reduxjs/toolkit';
import toggleDrawerReducer from './feature/nav_drawer/toggle_drawer'

export const store = configureStore({
  reducer: {
    drawer: toggleDrawerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;