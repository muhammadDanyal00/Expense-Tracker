import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Typography, TextField, Button, Paper } from "@mui/material";

const Total = () => {
  const expenses = useSelector((state) => state.expenses);

  const [totalIncome, setTotalIncome] = useState(() => {
    return JSON.parse(localStorage.getItem("totalIncome")) || 0;
  });

  const [newIncome, setNewIncome] = useState("");

  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  useEffect(() => {
    localStorage.setItem("totalIncome", JSON.stringify(totalIncome));
  }, [totalIncome]);

  const handleSetIncome = () => {
    setTotalIncome(newIncome);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Total Income and Expenses
      </Typography>
      <Typography variant="h5">Total Income: ${totalIncome}</Typography>
      <Typography variant="h5">Total Expenses: ${totalExpenses}</Typography>
      <TextField
        label="Set Total Income"
        type="number"
        value={newIncome}
        onChange={(e) => setNewIncome(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <Button
        onClick={handleSetIncome}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Update Income
      </Button>
    </Paper>
  );
};

export default Total;
