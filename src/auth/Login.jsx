import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        backgroundColor: "background.paper",
        textAlign: "center",
        padding: 2,
        borderRadius: 2, // Add slight border radius for aesthetics
        boxShadow: 3, // Add subtle shadow for depth
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Under Construction
      </Typography>
      <Typography variant="body1" gutterBottom>
        Coming Soon...
      </Typography>
      <Button
        component={NavLink}
        to={"/"}
        variant="contained"
        color="primary"
        sx={{
          mt: 2, // Add some margin on top for spacing
          backgroundColor: "primary.main",
          "&:hover": {
            backgroundColor: "primary.dark", // Use hover color from theme
          },
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default Login;
