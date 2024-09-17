// selectExpenses simplifies access to the expenses state in the redux-store
// Hence in any component we will use useSelector to extract the state from the store using this varaible ( selectExpences )

export const selectExpenses = (state) => state.expenses;
