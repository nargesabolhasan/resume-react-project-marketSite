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
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import image from "../../assets/images/avatar/avatar.webp";
import HttpService from "../../axios/HttpService";
import { useNavigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
    const res = await HttpService.get("whoami");
    setData(res?.data);
  };
  //----------
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("state");
    dispatch(logout());
    navigate("/");
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{ m: 0, mx: "auto", width: "100%" }}>
        <Toolbar
          disableGutters
          sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}
        >
          <Box
            sx={{
              flexGrow: 0,
              display: { lg: "flex", md: "flex", xs: "none" },
            }}
          >
            <Button
              sx={{
                mt: 5,
                mx: "auto",
                fontFamily: "koodak",
                fontSize: 20,
                border: 3,
                borderColor: "white",
                color: "white",
                borderRadius: "11px",
              }}
              variant="outlined"
              onClick={handleBack}
            >
              <KeyboardBackspaceIcon />
              بازگشت به سایت
            </Button>
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
            <Box
              sx={{
                fontSize: 80,
                textAlign: "center",
                display: { lg: "flex", md: "flex", xs: "none" },
              }}
            >
              پنل مدیریت
            </Box>
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

          <Box
            sx={{
              float:"left",
              display: { xs: "block", md: "none", lg: "none" },
              flexGrow:1,
              width:"100%"
            }}
          >
            <Button
              sx={{ color: "amber.main",}}
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
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontSize: 20,
                  fontFamily: "koodak",
                  textAlign: "center",
                  color: "black",
                }}
              >
                <Button
                  sx={{
                    mx: "auto",
                    fontFamily: "koodak",
                    fontSize: 20,
                    color: "black",
                    borderRadius: "11px",
                  }}
                  onClick={handleBack}
                >
                  <KeyboardBackspaceIcon />
                  بازگشت به سایت
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontSize: 20,
                  fontFamily: "koodak",
                  textAlign: "center",
                }}
              >
                <NavLink
                  to="/PanelProducts"
                  style={({ isActive }) => ({
                    color: isActive ? "#ba6b6c" : "black",
                    textDecoration: "none",
                    textAlign: "center",
                    width: "100%",
                  })}
                >
                  کالا ها
                </NavLink>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontSize: 20,
                  fontFamily: "koodak",
                  textAlign: "center",
                }}
              >
                <NavLink
                  to="/PanelQuantity"
                  style={({ isActive }) => ({
                    color: isActive ? "#ba6b6c" : "black",
                    textDecoration: "none",
                    textAlign: "center",
                    width: "100%",
                  })}
                >
                  موجودی و قیمت ها
                </NavLink>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{
                  fontSize: 20,
                  fontFamily: "koodak",
                }}
              >
                <NavLink
                  to="/PanelOrder"
                  style={({ isActive }) => ({
                    color: isActive ? "#ba6b6c" : "black",
                    textDecoration: "none",
                    textAlign: "center",
                    width: "100%",
                  })}
                >
                  سفارش ها
                </NavLink>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0, textAlign: "center" }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    width: { lg: 80, md: 80, xs: 50 },
                    height: { lg: 80, md: 80, xs: 50 },
                  }}
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
            <Typography
              sx={{
                textAlign: "center",
                display: { lg: "flex", md: "flex", xs: "none" },
              }}
            >
              {data.name}
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
