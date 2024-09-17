import React from "react";
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
  useMediaQuery,
  useTheme,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const History = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDeleteClick = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    dispatch(setExpenses(updatedExpenses));
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  if (isMobile) {
    return (
      <Box sx={{ p: 2, bgcolor: theme.palette.background.default }}>
        {expenses.map((expense, index) => (
          <Card
            key={index}
            sx={{ mb: 2, bgcolor: theme.palette.background.paper }}
          >
            <CardContent>
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.text.primary, mb: 1 }}
              >
                {expense.description}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary, mb: 1 }}
              >
                Amount: ${expense.amount}
              </Typography>
              <IconButton
                onClick={() => handleDeleteClick(index)}
                sx={{ color: theme.palette.primary.main }}
              >
                <DeleteIcon />
              </IconButton>
            </CardContent>
          </Card>
        ))}
      </Box>
    );
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        bgcolor: theme.palette.background.paper,
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <Table sx={{ minWidth: 300 }}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
            >
              Expense
            </TableCell>
            <TableCell
              sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
            >
              Amount $
            </TableCell>
            <TableCell
              sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
            >
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense, index) => (
            <TableRow key={index} hover>
              <TableCell sx={{ color: theme.palette.text.secondary }}>
                {expense.description}
              </TableCell>
              <TableCell sx={{ color: theme.palette.text.secondary }}>
                {expense.amount}
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={() => handleDeleteClick(index)}
                  sx={{ color: theme.palette.primary.main }}
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
