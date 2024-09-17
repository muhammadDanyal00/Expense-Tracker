import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#181818", // Dark grey background
      paper: "#242424", // Slightly lighter grey for paper elements
    },
    text: {
      primary: "#E0E0E0", // Light grey text for better contrast
      secondary: "#B0B0B0", // Slightly darker grey for secondary text
    },
    primary: {
      main: "#8e24aa", // Softer purple accent color
    },
    secondary: {
      main: "#03DAC6", // Teal accent color
    },
    divider: "#333333", // Dark grey divider
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#181818",
          color: "#E0E0E0", // Ensures text is light grey
          fontFamily: "'Roboto', sans-serif", // Clean, professional font
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#8e24aa",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#7b1fa2", // Slightly darker purple on hover
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            backgroundColor: "#242424", // Background color for input fields
            color: "#E0E0E0", // Text color for input fields
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8e24aa", // Border color for input fields
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#7b1fa2", // Border color on hover
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8e24aa", // Border color when focused
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          backgroundColor: "#242424",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: "#333333", // Border color for table cells
          color: "#E0E0E0", // Text color for table cells
        },
        head: {
          color: "#FFFFFF", // Text color for table header
          backgroundColor: "#8e24aa", // Background color for table header
        },
        body: {
          color: "#E0E0E0", // Text color for table body
        },
      },
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 500,
    },
  },
});

export default theme;
