import { createSlice } from '@reduxjs/toolkit';
import { IEmployee } from '../../models/Employee';

const initialState: IEmployee[] = [];

export const employeesSlice = createSlice({
  name: 'employeeSlice',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export default employeesSlice.reducer;
