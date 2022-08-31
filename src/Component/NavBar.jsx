import { AppBar, Toolbar, styled } from "@mui/material";

import { NavLink } from "react-router-dom";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`;

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NN NODE CRUD APPLICATION
          </Typography>
          <Tabs to="/" exact>
            HOME
          </Tabs>
          <Tabs to="add" exact>
            Add User
          </Tabs>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
