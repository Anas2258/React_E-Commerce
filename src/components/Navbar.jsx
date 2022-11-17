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
  Badge,
  Popper,
  Fade,
  Slide,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [tabValue, setValue] = React.useState(0);

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

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? "transition-popper" : undefined;
  return (
    <>
      <AppBar position="static" elevation={0}>
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
            <Box sx={{ flexGrow: 18, display: { xs: "none", md: "flex" } }}>
              {/* <Tabs
                onChange={handleChange}
                // value={tabValue}
                aria-label="Navigation"
                indicatorColor="primary"
                textColor="primary"
                variant='scrollable'
                // scrollButtons='on'
              > */}
                <Button
                  sx={{
                    color: "#000",
                    fontFamily: "monospace",
                    letterSpacing: ".1rem",
                  }}
                  label="Home"
                  // tabValue={0}
                  component={Link}
                  to="/"
                >
                Home
              </Button>
                <Button
                  sx={{
                    color: "#000",
                    fontFamily: "monospace",
                    letterSpacing: ".1rem",
                  }}
                  label="Products"
                  // tabValue={1}
                  component={Link}
                  to="/product"
                >
                Products
              </Button>
                <Button
                  sx={{
                    color: "#000",
                    fontFamily: "monospace",
                    letterSpacing: ".1rem",
                  }}
                  label="About"
                  // tabValue={2}
                  component={Link}
                  to="/about"
                >
                About
              </Button>
                <Button
                  sx={{
                    color: "#000",
                    fontFamily: "monospace",
                    letterSpacing: ".1rem",
                  }}
                  label="Contact"
                  // tabValue={3}
                  component={Link}
                  to="/contact"
                >
                Contact
              </Button>
                {/* </TabList> */}
              {/* </Button> */}
            </Box>
            {/* </TabContext> */}
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
                        sx={{
                          borderRadius: 5,
                          p: 1,
                          bgcolor: "background.paper",
                          border: "1px solid #000",
                        }}
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
                    style={{ color: "#000", textDecoration: "none" }}
                  >
                    <i className="fa fa-sign-in-alt mr-1"></i> Login
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink
                    to="/register"
                    style={{ color: "#000", textDecoration: "none" }}>
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
