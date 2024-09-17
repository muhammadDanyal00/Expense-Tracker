import { useSelector } from "react-redux";
import { selectExpenses } from "../../features/expenses/expensesSelectors";
import { Bar, Line } from "react-chartjs-2";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement, // Register the point element for line charts
  Title,
  Tooltip,
  Legend
);

const DashboardPage = () => {
  const expenses = useSelector(selectExpenses);

  const data = {
    labels: expenses.map((expense) => expense.description),
    datasets: [
      {
        label: "Expenses $",
        data: expenses.map((expense) => expense.amount),
        backgroundColor: "rgba(75, 192, 192, 0.6)", // For Bar chart
        borderColor: "rgba(75, 192, 192, 1)", // For Line chart
        borderWidth: 1, // For Line chart
        fill: false, // For Line chart
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#E0E0E0", // Match your text color
        },
      },
      title: {
        display: true,
        text: "Expenses Bar Chart",
        color: "#E0E0E0", // Match your text color
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            const value = context.raw;
            return `${label}: ${value}`;
          },
        },
        intersect: false,
        mode: "index",
      },
    },
    scales: {
      x: {
        type: "category",
        ticks: {
          autoSkip: false,
          color: "#E0E0E0", // Match your text color
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#E0E0E0", // Match your text color
        },
      },
    },
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#E0E0E0", // Match your text color
        },
      },
      title: {
        display: true,
        text: "Expenses Line Chart",
        color: "#E0E0E0", // Match your text color
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            const value = context.raw;
            return `${label}: ${value}`;
          },
        },
        intersect: false,
        mode: "index",
      },
    },
    scales: {
      x: {
        type: "category",
        ticks: {
          autoSkip: false,
          color: "#E0E0E0", // Match your text color
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#E0E0E0", // Match your text color
        },
      },
    },
  };

  return (
    <Grid container spacing={2} direction="column">
      <Grid item xs={12}>
        <Card
          sx={{ backgroundColor: "background.paper", color: "text.primary" }}
        >
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Bar Chart
            </Typography>
            <Bar data={data} options={barOptions} />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card
          sx={{ backgroundColor: "background.paper", color: "text.primary" }}
        >
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Line Chart
            </Typography>
            <Line data={data} options={lineOptions} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
