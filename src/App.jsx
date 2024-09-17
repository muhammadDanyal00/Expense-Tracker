import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import { setExpenses } from "./features/expenses/expensesSlice";
import HistoryPage from "./pages/HistoryPage";
import Login from "./auth/Login";
import { CssBaseline } from "@mui/material";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    dispatch(setExpenses(savedExpenses));
  }, [dispatch]);

  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/charts" element={<DashboardPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
