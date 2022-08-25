import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/User';

export const fetchUsers = createAsyncThunk('FETCH_USERS', () => {
  return fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
    response.json()
  );
});

export const createUser = createAsyncThunk('CREATE_USER', (user: IUser) => {
  return fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
      name: user.name,
      username: user.username,
      email: user.email,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((response) => response.json());
});

const initialState: { users: IUser[] } = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users = [action.payload, ...state.users];
      });
  },
});

export default usersSlice.reducer;
