// import { useDispatch, useSelector } from "react-redux";
// import { setExpenses } from "../../features/expenses/expensesSlice";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   IconButton,
// } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

// const History = () => {
//   const dispatch = useDispatch();
//   const expenses = useSelector((state) => state.expenses);

//   const handleDeleteClick = (index) => {
//     const updatedExpenses = expenses.filter((_, i) => i !== index);
//     dispatch(setExpenses(updatedExpenses));
//     localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
//   };

//   return (
//     <TableContainer component={Paper} sx={{ backgroundColor: "#242424" }}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell sx={{ color: "#ffffff" }}>
//               <b>Expense</b>
//             </TableCell>
//             <TableCell sx={{ color: "#ffffff" }}>
//               <b>Amount $</b>
//             </TableCell>
//             <TableCell sx={{ color: "#ffffff" }}>
//               <b>Action</b>
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {expenses.map((expense, index) => (
//             <TableRow key={index}>
//               <TableCell sx={{ color: "#E0E0E0" }}>
//                 {expense.description}
//               </TableCell>
//               <TableCell sx={{ color: "#E0E0E0" }}>{expense.amount}</TableCell>
//               <TableCell>
//                 <IconButton
//                   onClick={() => handleDeleteClick(index)}
//                   sx={{ color: "#03DAC6" }}
//                 >
//                   <DeleteIcon />
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default History;

import { useDispatch, useSelector } from "react-redux";
import { setExpenses } from "../../features/expenses/expensesSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const History = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);

  const handleDeleteClick = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    dispatch(setExpenses(updatedExpenses));
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "#242424",
        overflowX: "auto", // Ensure horizontal scrolling on small screens
      }}
    >
      <Table
        sx={{ minWidth: 320, "@media (min-width:600px)": { minWidth: 650 } }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#ffffff", padding: { xs: 0.5, sm: 1 } }}>
              <Typography variant="subtitle2" component="div" color="inherit">
                Expense
              </Typography>
            </TableCell>
            <TableCell sx={{ color: "#ffffff", padding: { xs: 0.5, sm: 1 } }}>
              <Typography variant="subtitle2" component="div" color="inherit">
                Amount $
              </Typography>
            </TableCell>
            <TableCell sx={{ color: "#ffffff", padding: { xs: 0.5, sm: 1 } }}>
              <Typography variant="subtitle2" component="div" color="inherit">
                Action
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense, index) => (
            <TableRow key={index}>
              <TableCell sx={{ color: "#E0E0E0", padding: { xs: 0.5, sm: 1 } }}>
                {expense.description}
              </TableCell>
              <TableCell sx={{ color: "#E0E0E0", padding: { xs: 0.5, sm: 1 } }}>
                {expense.amount}
              </TableCell>
              <TableCell sx={{ padding: { xs: 0.5, sm: 1 } }}>
                <IconButton
                  onClick={() => handleDeleteClick(index)}
                  sx={{ color: "#03DAC6" }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default History;
