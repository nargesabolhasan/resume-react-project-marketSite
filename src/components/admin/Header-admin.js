import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ mr: 2, ml: 2, mx: "auto", width: "100%" }}>
        <Toolbar
          disableGutters
          sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "black",
                  textDecoration: "none",
                })}
              >
                بازگشت به سایت
              </NavLink>
            </IconButton>
          </Box>
          <Grid
            item
            xs={6}
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <IconButton
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <NavLink
                to="/PanelOrder"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "black",
                  textDecoration: "none",
                })}
              >
                سفارش ها
              </NavLink>
            </IconButton>

            <IconButton
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <NavLink
                to="/PanelQuantity"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "black",
                  textDecoration: "none",
                })}
              >
                موجودی و قیمت ها
              </NavLink>
            </IconButton>
            <IconButton
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <NavLink
                to="/PanelProducts"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "black",
                  textDecoration: "none",
                })}
              >
                کالا ها
              </NavLink>
            </IconButton>
          </Grid>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
