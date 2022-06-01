import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { NavLink, Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import { useNavigate, Outlet } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import Authentication from "../admin/Authentication";
import "../../assets/Core-ui/palette.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";


const ResponsiveAppBar = () => {
  const products = useSelector((state) => state);
  return (
    <AppBar
      position="fixed"
      sx={{ p: 1, backgroundColor: "PDark.main", width: "100%" }}
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
          <Grid container spacing={3}>
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
            sx={{ mr: 5, display: {xs: "none", md: "flex", lg: "flex"}}}
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

              <Authentication />
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
                }}
              >
                فروشگاه آنلاین ایران سیب
              </Typography>
            </Grid>
            <Grid item xs={1}>
              <Link to="/">
                <img src={logo} style={{ width: "100px", float: "right" }} />
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
