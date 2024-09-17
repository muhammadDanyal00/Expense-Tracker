import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleRefresh = () => {
    window.location.reload();
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "primary.main" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Button onClick={handleRefresh}>
          <Typography
            variant="h8"
            sx={{ color: "text.primary", flexGrow: { xs: 0.5, md: 0 } }}
          >
            Expense Tracker
          </Typography>
        </Button>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
          <Button
            component={NavLink}
            to="/"
            color="inherit"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              "&.active": {
                borderBottom: "2px solid",
                borderColor: "text.primary",
                fontWeight: "bold",
              },
              "&:hover": {
                color: "secondary.main",
              },
            }}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            to="/charts"
            color="inherit"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              "&.active": {
                borderBottom: "2px solid",
                borderColor: "text.primary",
                fontWeight: "bold",
              },
              "&:hover": {
                color: "secondary.main",
              },
            }}
          >
            Charts
          </Button>
          <Button
            component={NavLink}
            to="/history"
            color="inherit"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              "&.active": {
                borderBottom: "2px solid",
                borderColor: "text.primary",
                fontWeight: "bold",
              },
              "&:hover": {
                color: "secondary.main",
              },
            }}
          >
            History
          </Button>
        </Box>

        {/* Login Button (Visible on larger screens) */}
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Button
            component={NavLink}
            to="/login"
            color="inherit"
            sx={{
              color: "text.primary",
              textDecoration: "none",
              "&:hover": {
                color: "secondary.main",
              },
            }}
          >
            LOGIN
          </Button>
        </Box>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={isMenuOpen}
          onClose={handleMenuClose}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuItem onClick={handleMenuClose} component={NavLink} to="/">
            Home
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={NavLink} to="/charts">
            Charts
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={NavLink} to="/history">
            History
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={NavLink} to="/login">
            Login
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
