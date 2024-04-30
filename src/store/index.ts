import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import userReducer from './slices/userSlice.ts';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, ...(__DEV__ ? [] : [])];

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(sagas);

export default store;
