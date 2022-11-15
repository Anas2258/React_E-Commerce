import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  Tooltip,
  Avatar,
  Badge,
  Popper,
  Fade,
  Slide,
  AvatarGroup,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.any.isRequired,
//   value: PropTypes.any.isRequired,
// };

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState(0);

  const state = useSelector((state) => state.handleCart);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  return (
    <>
      <AppBar position="static">
        <Container
          maxWidth="xl"
          sx={{ backgroundColor: "#fff", color: "#000" }}
        >
          <Toolbar disableGutters>
            {/* <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> */}
            <LogoDevIcon
              fontSize="large"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              FreshCodes
            </Typography>
            {/* </NavLink> */}
            {/* <button
            className="navbar-toggler mx-2"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <ul className="navbar-nav m-auto my-2 text-center">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Home{" "}
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/product">
                        Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">
                        Contact
                      </NavLink>
                    </li>
                    {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/components">Components</NavLink>
                    </li> */}
                  </ul>
                </MenuItem>
              </Menu>
            </Box>
            <LogoDevIcon
              fontSize="large"
              sx={{ display: { xs: "flex", md: "none" }, m: "auto" }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 5,
                display: { xs: "none", md: "none" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              FreshCodes
            </Typography>
            <Box

              sx={{ flexGrow: 18, display: { xs: "none", md: "flex" } }}
            > 
          {/* <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} /> */}
              {/* <ul className="navbar-nav m-auto my-2 text-center"> */}
              <Button
                sx={{
                  color: "#000",
                  fontFamily: "monospace",
                  letterSpacing: ".1rem",
                }}
                component={Link}
                to="/"
                {...a11yProps(0)}
              >
                Home
              </Button>
              <Button
                sx={{
                  color: "#000",
                  fontFamily: "monospace",
                  letterSpacing: ".1rem",
                }}
                component={Link}
                to="/product"
                {...a11yProps(1)}
              >
                Products
              </Button>
              <Button
                sx={{
                  color: "#000",
                  fontFamily: "monospace",
                  letterSpacing: ".1rem",
                }}
                component={Link}
                to="/about"
                {...a11yProps(2)}
              >
                About
              </Button>
              <Button
                sx={{
                  color: "#000",
                  fontFamily: "monospace",
                  letterSpacing: ".1rem",
                }}
                component={Link}
                to="/contact"
                {...a11yProps(3)}
              >
                Contact
              </Button>
              {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/components">Components</NavLink>
                    </li> */}
              {/* </ul> */}
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
              <IconButton
                onClick={handleClick}
                aria-describedby={id}
                // component={Link}
                // to="/cart"
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={state.length} color="error">
                  <ShoppingCartIcon fontSize="normal" />
                </Badge>
              </IconButton>
              <Popper id={id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                    <Slide
                      {...TransitionProps}
                      direction="down"
                      timeout={350}
                      in={anchorEl}
                      mountOnEnter
                      unmountOnExit
                    >
                      <Box
                        sx={{ border: 1, p: 1, bgcolor: "background.paper" }}
                      >
                        <Cart />
                      </Box>
                    </Slide>
                  </Fade>
                )}
              </Popper>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <AccountCircleIcon fontSize="large" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>
                <NavLink
                to="/login"
                style={{ color: '#000', textDecoration: 'none' }}
              >
                    <i className="fa fa-sign-in-alt mr-1"></i> Login
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink to="/register" style={{ color: '#000', textDecoration: 'none' }}>
                    <i className="fa fa-user-plus mr-1"></i> Register
                  </NavLink>
                </MenuItem>
                {/* <MenuItem
                  sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                >
                  <NavLink to="/cart">
                    <i className="fa fa-cart-shopping mr-1"></i> Cart (
                    {state.length}){" "}
                  </NavLink>
                </MenuItem> */}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
