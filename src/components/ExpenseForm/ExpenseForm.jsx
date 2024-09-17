// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addExpense } from "../../features/expenses/expensesSlice";
// import { TextField, Button, Box, Typography } from "@mui/material";

// const ExpenseForm = () => {
//   const [description, setDescription] = useState("");
//   const [amount, setAmount] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addExpense({ description, amount: parseFloat(amount) }));
//     setDescription("");
//     setAmount("");
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         gap: 2,
//         alignItems: "center",
//         padding: 3,
//         borderRadius: 3,
//         boxShadow: 3,
//         backgroundColor: "background.paper",
//         color: "text.primary",
//       }}
//     >
//       <Typography variant="h6" gutterBottom>
//         Add Expense
//       </Typography>
//       <form onSubmit={handleSubmit} style={{ width: "100%" }}>
//         <TextField
//           label="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           required
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Amount ($)"
//           type="number"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           required
//           fullWidth
//           margin="normal"
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           sx={{ mt: 2 }}
//         >
//           Add Expense
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default ExpenseForm;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../../features/expenses/expensesSlice";
import { TextField, Button, Box, Typography } from "@mui/material";

const ExpenseForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addExpense({ description, amount: parseFloat(amount) }));
    setDescription("");
    setAmount("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
        padding: { xs: 2, sm: 3 }, // Responsive padding
        borderRadius: 3,
        boxShadow: 3,
        backgroundColor: "background.paper",
        color: "text.primary",
        maxWidth: 500, // Limit maximum width
        margin: "0 auto", // Center horizontally
      }}
    >
      <Typography variant="h6" gutterBottom>
        Add Expense
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          label="Amount ($)"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ width: "100%", mt: 2 }}
        >
          Add Expense
        </Button>
      </form>
    </Box>
  );
};

export default ExpenseForm;
