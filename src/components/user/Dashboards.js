import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { HeaderUserStore } from "..";
import useGetAxios from "../../axios/useGetAxios";
import { useNavigate, NavLink, useParams } from "react-router-dom";
import ApiIcon from "@mui/icons-material/Api";
import { styled } from "@mui/material/styles";

const drawerWidth = 240;

const Div = styled("div")(({ theme }) => ({
  color: "6c4eb8",
  textDecoration: "none",
  fontFamily: "koodak",
}));

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { data, loading, error } = useGetAxios(`/categories?_embed=products`);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ direction: "rtl" }}>لیست محصولات :</Toolbar>

      <Divider />

      {data?.data.map((record, index) => (
        <Box key={index} sx={{ direction: "rtl", p: 3 }}>
          <Box>
            <ListItemIcon>
                    <ApiIcon sx={{color: "#ba6b6c"}}/>
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
          <List>
            {record.products.map((text, index) => (
              <ListItem key={text.id} disablePadding>
                <ListItemButton sx={{textAlign: "start"}}>
                  
                  <NavLink
                    to={`/products/${text.id}`}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontFamily: "koodak",
                    }}
                  >
                    <ListItemText primary={text.name} />
                  </NavLink>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <HeaderUserStore />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
