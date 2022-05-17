import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fetchLogin } from './loginAPI';

export interface LoginState {
  username: string;
  password: string;
  auth: boolean;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: LoginState = {
  username: '',
  password: '',
  auth: false,
  status: 'idle'
};

export const loginAsync = createAsyncThunk(
  'login/fetchLogin',
  async () => {
    const response = await fetchLogin();
    return response;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.auth = action.payload;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setUsername, setPassword } = loginSlice.actions;
export const selectUsername = (state: RootState) => state.login.username;
export const selectPassword = (state: RootState) => state.login.password;

export default loginSlice.reducer;
