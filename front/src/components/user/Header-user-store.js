import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate, Outlet } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import Authentication from "../admin/Authentication";
import "../../assets/Core-ui/palette.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const ResponsiveAppBar = (props) => {
  const products = useSelector((state) => state);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { children } = props;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        p: 1,
        backgroundColor: "PDark.main",
        width: "100%",
        position: { lg: "fixed", md: "fixed", xs: "static" },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          spacing={2}
        >
          <Grid
            container
            spacing={3}
            sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}
          >
            <Grid
              item
              xs={2}
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-aruond",
                alignItems: "center",
              }}
            >
              <IconButton
                variant="h6"
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex", lg: "flex" } }}
              >
                {children}
              </IconButton>
              <IconButton
                variant="h6"
                component="div"
                sx={{ mr: 5, display: { xs: "none", md: "flex", lg: "flex" } }}
              >
                <Badge badgeContent={products.products?.length} color="PLight">
                  <NavLink
                    to="/Basket"
                    style={({ isActive }) => ({
                      color: isActive ? "#fff8e1" : "black",
                      textDecoration: "none",
                    })}
                  >
                    <AddShoppingCartIcon />
                  </NavLink>
                </Badge>
              </IconButton>

              <IconButton
                variant="h6"
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex", lg: "flex" } }}
              >
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff8e1" : "black",
                    textDecoration: "none",
                  })}
                >
                  خانه
                </NavLink>
              </IconButton>
              <IconButton
                variant="h6"
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex", lg: "flex" } }}
              >
                <NavLink
                  to="/grouping"
                  style={({ isActive }) => ({
                    color: isActive ? "#fff8e1" : "black",
                    textDecoration: "none",
                  })}
                >
                  دسته بندی و محصولات
                </NavLink>
              </IconButton>

              <Authentication displayXs="none">مدیریت</Authentication>
            </Grid>
            <Grid
              item
              xs={4}
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            ></Grid>
            <Grid item xs={4} sx={{ align: "center", ml: 5 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "koodak",
                  color: "#fff8e1",
                  align: "center",
                  mr: 5,
                  display: { xs: "none", md: "flex", lg: "flex" },
                  fontSize: { lg: 40, md: 30, xs: 20 },
                  mt: { lg: 2, md: 2, xs: 3 },
                }}
              >
                فروشگاه آنلاین ایران سیب
              </Typography>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{ display: { xs: "none", md: "flex", lg: "flex" } }}
            >
              <Link to="/">
                <img src={logo} style={{ width: "100px", float: "right" }} />
              </Link>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: { xs: "flex", md: "none", lg: "none" },
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box>
              <Button
                sx={{ color: "amber.main", backgroundColor: "black" }}
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <FormatListBulletedIcon sx={{ fontSize: 40 }} />
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <ManageAccountsIcon />

                  <Authentication displayXs="flex">مدیریت</Authentication>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <CategoryIcon />
                  <NavLink
                    to="/grouping"
                    style={({ isActive }) => ({
                      color: isActive ? "#ba6b6c" : "black",
                      textDecoration: "none",
                    })}
                  >
                    محصولات
                  </NavLink>
                </MenuItem>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "#ba6b6c" : "black",
                    textDecoration: "none",
                  })}
                >
                  <MenuItem onClick={handleClose} sx={{ mx: "auto" }}>
                    <HomeIcon />
                    خانه
                  </MenuItem>
                </NavLink>
                {children}
                <MenuItem onClick={handleClose} sx={{backgroundColor:"#ba6b6c",pt:2}}>
                  <Badge
                    badgeContent={products.products?.length}
                    color="PLight"
                    sx={{ mx: "auto" }}
                  >
                    <NavLink
                      to="/Basket"
                      style={({ isActive }) => ({
                        color: isActive ? "#fff8e1" : "black",
                        textDecoration: "none",
                      })}
                    >
                      <AddShoppingCartIcon />
                    </NavLink>
                  </Badge>
                </MenuItem>
              </Menu>
            </Box>
            <Box>
              <Link to="/">
                <img src={logo} style={{ width: "100px", float: "right" }} />
              </Link>
            </Box>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
