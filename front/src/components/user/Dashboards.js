import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useGetAxios from "../../axios/useGetAxios";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import ApiIcon from "@mui/icons-material/Api";
import { HeaderUserStore } from "..";

const drawerWidth = 300;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
  
}));

export default function PersistentDrawerRight(props) {
  const { children } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const { data, loading, error } = useGetAxios(`/categories?_embed=products`);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
          <HeaderUserStore>
          <MenuItem  sx={{ mx: "auto"}}>
              <MenuIcon/> 
               {""}منو
          
            </MenuItem></HeaderUserStore>
      </AppBar>
      {children}
      <Drawer
        sx={{
          width: drawerWidth,
          position: "absolute",
          backgroundColor: "Shadow.main",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? ( 
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
          <Toolbar sx={{ fontSize:20}}>لیست محصولات </Toolbar>
        </DrawerHeader>
        <Box sx={{fontSize:25,backgroundColor: "Shadow.main"}} >
         

          <Divider />

          {data?.data.map((record, index) => (
            <Box key={index} sx={{ direction: "rtl", p: 3,height:125}}>
              <Box>
                <ListItemIcon>
                  <ApiIcon sx={{ color: "#ba6b6c" }} />
                </ListItemIcon>
                <NavLink
                  to={`/categories/${record.id}`}
                  style={{
                    color: "#ba6b6c",
                    textDecoration: "none",
                    fontFamily: "koodak",
                  }}
                >
                  {record.name}
                </NavLink>
              </Box>
              <Divider />
            </Box>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
}
