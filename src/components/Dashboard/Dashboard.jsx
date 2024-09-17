// import { useSelector } from "react-redux";
// import { selectExpenses } from "../../features/expenses/expensesSelectors";
// import { Bar, Line } from "react-chartjs-2";
// import { Card, CardContent, Typography, Grid } from "@mui/material";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const DashboardPage = () => {
//   const expenses = useSelector(selectExpenses);

//   const data = {
//     labels: expenses.map((expense) => expense.description),
//     datasets: [
//       {
//         label: "Expenses $",
//         data: expenses.map((expense) => expense.amount),
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//         fill: false,
//       },
//     ],
//   };

//   const barOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           color: "#E0E0E0",
//         },
//       },
//       title: {
//         display: true,
//         text: "Expenses Bar Chart",
//         color: "#E0E0E0",
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             const label = context.dataset.label || "";
//             const value = context.raw;
//             return `${label}: ${value}`;
//           },
//         },
//         intersect: false,
//         mode: "index",
//       },
//     },
//     scales: {
//       x: {
//         type: "category",
//         ticks: {
//           autoSkip: false,
//           color: "#E0E0E0",
//         },
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {
//           color: "#E0E0E0",
//         },
//       },
//     },
//   };

//   const lineOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           color: "#E0E0E0",
//         },
//       },
//       title: {
//         display: true,
//         text: "Expenses Line Chart",
//         color: "#E0E0E0",
//       },
//       tooltip: {
//         callbacks: {
//           label: function (context) {
//             const label = context.dataset.label || "";
//             const value = context.raw;
//             return `${label}: ${value}`;
//           },
//         },
//         intersect: false,
//         mode: "index",
//       },
//     },
//     scales: {
//       x: {
//         type: "category",
//         ticks: {
//           autoSkip: false,
//           color: "#E0E0E0",
//         },
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {
//           color: "#E0E0E0",
//         },
//       },
//     },
//   };

//   return (
//     <Grid container spacing={2} direction="column">
//       <Grid item xs={12} sm={6} md={4}>
//         <Card
//           sx={{ backgroundColor: "background.paper", color: "text.primary" }}
//         >
//           <CardContent>
//             <Typography variant="h6" component="div" gutterBottom>
//               Bar Chart
//             </Typography>
//             <Bar data={data} options={barOptions} />
//           </CardContent>
//         </Card>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//         <Card
//           sx={{ backgroundColor: "background.paper", color: "text.primary" }}
//         >
//           <CardContent>
//             <Typography variant="h6" component="div" gutterBottom>
//               Line Chart
//             </Typography>
//             <Line data={data} options={lineOptions} />
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// export default DashboardPage;

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
  PointElement,
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
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        fill: false,
      },
    ],
  };

  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#E0E0E0",
        },
      },
      title: {
        display: true,
        color: "#E0E0E0",
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
          autoSkip: true,
          maxRotation: 45,
          minRotation: 30,
          color: "#E0E0E0",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#E0E0E0",
        },
      },
    },
  };

  const barOptions = {
    ...commonOptions,
    plugins: {
      ...commonOptions.plugins,
      title: {
        ...commonOptions.plugins.title,
        text: "Expenses Bar Chart",
      },
    },
  };

  const lineOptions = {
    ...commonOptions,
    plugins: {
      ...commonOptions.plugins,
      title: {
        ...commonOptions.plugins.title,
        text: "Expenses Line Chart",
      },
    },
  };

  return (
    <Grid container spacing={2} direction="column">
      <Grid item xs={12} sm={12} md={6}>
        <Card
          sx={{ backgroundColor: "background.paper", color: "text.primary" }}
        >
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Bar Chart
            </Typography>
            <div style={{ height: 300 }}>
              <Bar data={data} options={barOptions} />
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Card
          sx={{ backgroundColor: "background.paper", color: "text.primary" }}
        >
          <CardContent>
            <Typography variant="h6" component="div" gutterBottom>
              Line Chart
            </Typography>
            <div style={{ height: 300 }}>
              <Line data={data} options={lineOptions} />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
