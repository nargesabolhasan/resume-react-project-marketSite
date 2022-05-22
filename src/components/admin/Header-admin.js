import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import image from "../../assets/images/avatar/avatar.webp";
import HttpService from "../../axios/HttpService";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {
    getData();
  }, []);
  //-----------
  const getData = async () => {
    const res=await HttpService.get("whoami")
    setData(res?.data);
    console.log(res?.data)
  };
  //----------
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("state");
    dispatch(logout());
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ p: 3 }}>
      <Container maxWidth="xl" sx={{ m: 0, mx: "auto", width: "100%" }}>
        <Toolbar
          disableGutters
          sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              variant="h6"
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
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ fontSize: 80, textAlign: "center" }}>پنل مدیریت </Box>
            <Grid
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <IconButton
                variant="h6"
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
          </Grid>
          <Box sx={{ flexGrow: 0, textAlign: "center" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{ width: 80, height: 80 }}
                  src={image}
                  alt="Alt Text!"
                />
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
                  to="/Profile"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "black",
                    textDecoration: "none",
                  })}
                >
                  <Typography
                    textAlign="center"
                    sx={{ fontSize: 20, fontFamily: "koodak" }}
                  >
                    پروفایل
                  </Typography>
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleLogOut}>
                <Typography
                  textAlign="center"
                  sx={{ fontSize: 20, fontFamily: "koodak" }}
                >
                  خروج
                </Typography>
              </MenuItem>
            </Menu>
            <Typography>{data.name}</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
