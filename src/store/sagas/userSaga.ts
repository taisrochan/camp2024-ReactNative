import { call, put, takeLatest, all } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import qs from 'qs';
import api from '../../config/api.ts';
import {
  login as LOGIN,
  loginFailure,
  loginSuccess,
  type LoginRequestPayload,
  type LoginResponse,
} from '../slices/userSlice.ts';

function* login({ payload }: PayloadAction<LoginRequestPayload>) {
  try {
    const data = {
      password: payload.password,
      username: payload.username,
      grant_type: 'password',
      client_secret: 'BiKzHxr9ZoZRDlLjx6qG7QfnDhIoQdIf',
      client_id: 'camp-ioasys-2024',
    };

    const response: AxiosResponse<LoginResponse> = yield call(
      api.post,
      'realms/camp-ioasys-2024/protocol/openid-connect/token',
      qs.stringify(data),
    );
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure());
  }
}

export default function* watchUserSaga() {
  yield all([takeLatest(LOGIN, login)]);
}
