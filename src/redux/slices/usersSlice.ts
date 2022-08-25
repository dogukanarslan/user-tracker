import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/User';

export const fetchUsers = createAsyncThunk('FETCH_USERS', () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => data);
});

const initialState: { users: IUser[] } = { users: [] };

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export default usersSlice.reducer;
