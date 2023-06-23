import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Logo from "./Logo";

const LinkButton = styled(NavLink)`
  text-decoration: none;
  color: #fff !important;
  padding: 5px;
  &.active {
    /* Kiểu cho NavLink khi nó được kích hoạt */
    background-color: rgb(2, 0, 36);
  }
`;
interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Drivers",
    to: "/drivers",
  },
  {
    title: "Constructors",
    to: "/constructors",
  },
  {
    title: "Results",
    to: "/results",
  },
];

function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <Logo />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <LinkButton to={item.to}>
                {" "}
                <ListItemText primary={item.title} />
              </LinkButton>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} color="secondary">
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              height: 50,
              width: 40,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Logo />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.to} sx={{ padding: 0, mx: 2 }}>
                <LinkButton to={item.to}>{item.title}</LinkButton>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
export default NavBar;
