import React, { useContext } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Divider,
} from "@mui/material";
import { AppContext } from "../../context/userContext";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import { ROUTES } from "../../common/constants";
import Settings from "./components/Settings";

const settings = ["Profile", "Change Password", "Logout"];

const Navbar = () => {
  const {
    state: { authenticated, currentUser },
  } = useContext(AppContext);
  let navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    console.log(event);
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    console.log("test");
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ background: "#ffffff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box noWrap sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <img
              onClick={(event) => navigate(ROUTES.HOMEPAGE)}
              height={44}
              width={104}
              src={Logo}
              alt="logo"
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="default"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none", color: "black" },
              }}
            >
              <MenuItem onClick={() => navigate(ROUTES.FOOD_LISTING)}>
                <Typography textAlign="center">View Availabe Food</Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate(ROUTES.VIEW_SERVICES)}>
                <Typography textAlign="center">Your Reserved Food</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box noWrap sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <img height={40} width={80} src={Logo} alt="logo" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              //onClick={handleClick}
              onClick={() => navigate(ROUTES.FOOD_LISTING)}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              View Availabe Food
            </Button>
            <Button
              onClick={() => navigate(ROUTES.VIEW_SERVICES)}
              sx={{ my: 2, color: "black", display: "block" }}
            >
              Your Reserved Food
            </Button>
          </Box>
          <Box
            display="flex"
            justifyContent="space-evenly"
            alignItems="right"
            // width={225}
            sx={{ flexGrow: 0 }}
          >
            <Button
              variant="contained"
              sx={{
                marginRight: 2,
                backgroundColor: "primary.main",
                alignItems: "right",
                display: { xs: "none", md: "flex" },
              }}
              onClick={() => navigate(ROUTES.ADD_PROPERTY)}
            >
              Post Ad
            </Button>
            {authenticated ? (
              <Settings />
            ) : (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "primary.main",
                  display: { md: "flex" },
                }}
                onClick={() => navigate(ROUTES.LOGIN)}
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
