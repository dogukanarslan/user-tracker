import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../models/User';

export const fetchUsers = createAsyncThunk('FETCH_USERS', () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => data);
});

const initialState: IUser[] = [];

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    addUser: (state, action) => {
      return [...state, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default usersSlice.reducer;
