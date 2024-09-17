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

// -------    --------------------  ----------      ----------------------------------------------------

// import React from "react";
// import { useSelector } from "react-redux";
// import { selectExpenses } from "../../features/expenses/expensesSelectors";
// import { Bar, Line } from "react-chartjs-2";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";
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
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

//   const commonOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         position: "top",
//         labels: {
//           color: theme.palette.text.primary,
//           font: {
//             size: isMobile ? 10 : 12,
//           },
//         },
//       },
//       title: {
//         display: true,
//         color: theme.palette.text.primary,
//         font: {
//           size: isMobile ? 14 : 16,
//         },
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
//           autoSkip: true,
//           maxRotation: 90,
//           minRotation: 0,
//           color: theme.palette.text.primary,
//           font: {
//             size: isMobile ? 8 : 10,
//           },
//         },
//       },
//       y: {
//         beginAtZero: true,
//         ticks: {
//           color: theme.palette.text.primary,
//           font: {
//             size: isMobile ? 8 : 10,
//           },
//         },
//       },
//     },
//   };

//   const barOptions = {
//     ...commonOptions,
//     plugins: {
//       ...commonOptions.plugins,
//       title: {
//         ...commonOptions.plugins.title,
//         text: "Expenses Bar Chart",
//       },
//     },
//   };

//   const lineOptions = {
//     ...commonOptions,
//     plugins: {
//       ...commonOptions.plugins,
//       title: {
//         ...commonOptions.plugins.title,
//         text: "Expenses Line Chart",
//       },
//     },
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} md={6}>
//         <Card
//           sx={{
//             backgroundColor: theme.palette.background.paper,
//             color: theme.palette.text.primary,
//             height: "100%",
//           }}
//         >
//           <CardContent>
//             <Typography variant="h6" component="div" gutterBottom>
//               Bar Chart
//             </Typography>
//             <div style={{ height: isMobile ? "300px" : "400px" }}>
//               <Bar data={data} options={barOptions} />
//             </div>
//           </CardContent>
//         </Card>
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <Card
//           sx={{
//             backgroundColor: theme.palette.background.paper,
//             color: theme.palette.text.primary,
//             height: "100%",
//           }}
//         >
//           <CardContent>
//             <Typography variant="h6" component="div" gutterBottom>
//               Line Chart
//             </Typography>
//             <div style={{ height: isMobile ? "300px" : "400px" }}>
//               <Line data={data} options={lineOptions} />
//             </div>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// export default DashboardPage;

import React from "react";
import { useSelector } from "react-redux";
import { selectExpenses } from "../../features/expenses/expensesSelectors";
import { Bar, Line } from "react-chartjs-2";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const data = {
    labels: expenses.map((expense) => expense.description),
    datasets: [
      {
        label: "Expenses $",
        data: expenses.map((expense) => expense.amount),
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.dark,
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
          color: theme.palette.text.primary,
          font: {
            size: isMobile ? 10 : 12,
            family: theme.typography.fontFamily,
          },
        },
      },
      title: {
        display: true,
        color: theme.palette.text.primary,
        font: {
          size: isMobile ? 16 : 20,
          family: theme.typography.fontFamily,
          weight: "bold",
        },
      },
      tooltip: {
        backgroundColor: theme.palette.background.paper,
        titleColor: theme.palette.text.primary,
        bodyColor: theme.palette.text.secondary,
        borderColor: theme.palette.divider,
        borderWidth: 1,
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            const value = context.raw;
            return `${label}: $${value.toFixed(2)}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: theme.palette.divider,
        },
        ticks: {
          color: theme.palette.text.secondary,
          font: {
            size: isMobile ? 8 : 10,
            family: theme.typography.fontFamily,
          },
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        grid: {
          color: theme.palette.divider,
        },
        ticks: {
          color: theme.palette.text.secondary,
          font: {
            size: isMobile ? 8 : 10,
            family: theme.typography.fontFamily,
          },
          callback: (value) => `$${value}`,
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
    <Box sx={{ p: 2, bgcolor: theme.palette.background.default }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card
            elevation={3}
            sx={{ height: "100%", bgcolor: theme.palette.background.paper }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ fontWeight: "bold", color: theme.palette.text.primary }}
              >
                Bar Chart
              </Typography>
              <Box
                sx={{
                  height: isMobile ? "300px" : isTablet ? "400px" : "500px",
                  mt: 2,
                }}
              >
                <Bar data={data} options={barOptions} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            elevation={3}
            sx={{ height: "100%", bgcolor: theme.palette.background.paper }}
          >
            <CardContent>
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{ fontWeight: "bold", color: theme.palette.text.primary }}
              >
                Line Chart
              </Typography>
              <Box
                sx={{
                  height: isMobile ? "300px" : isTablet ? "400px" : "500px",
                  mt: 2,
                }}
              >
                <Line data={data} options={lineOptions} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
