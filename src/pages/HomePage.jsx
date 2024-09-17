import { Container, Grid, Paper } from "@mui/material";
import ExpenseForm from "../components/ExpenseForm/ExpenseForm";
import Total from "../components/TotalIncomeAndExpenses/Total";

const HomePage = () => (
  <Container maxWidth="md" sx={{ p: 5 }}>
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
          <ExpenseForm />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
          <Total />
        </Paper>
      </Grid>
    </Grid>
  </Container>
);

export default HomePage;
