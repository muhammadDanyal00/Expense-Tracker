import { createSlice } from "@reduxjs/toolkit";
const expensesSlice = createSlice({
  name: "expenses",
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("expenses", JSON.stringify(state));
    },
    setExpenses: (state, action) => action.payload,
  },
  deleteExpense: (state, action) => {
    const id = action.payload;
    const index = state.findIndex((exp) => exp.id === id);
    if (index !== -1) {
      state.splice(index, 1);
      localStorage.setItem("expenses", JSON.stringify(state));
    }
  },
  setTotalIncome: (state, action) => {
    localStorage.setItem("totalIncome", JSON.stringify(action.payload));
  },
});

export const {
  addExpense,
  setExpenses,
  editExpense,
  deleteExpense,
  setTotalIncome,
} = expensesSlice.actions;
export default expensesSlice.reducer;
