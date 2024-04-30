import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialState = {
  isLoading: boolean;
  error: boolean;
  accessToken: string | null;
};

export type LoginRequestPayload = {
  username: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
};

const initialState: InitialState = {
  isLoading: false,
  error: false,
  accessToken: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, _: PayloadAction<LoginRequestPayload>) => {
      state.isLoading = true;
      state.error = false;
    },
    loginSuccess: (state, action: PayloadAction<LoginResponse>) => {
      state.isLoading = false;
      state.accessToken = action.payload.access_token;
    },
    loginFailure: state => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const {login, loginSuccess, loginFailure} = userSlice.actions;
export default userSlice.reducer;
