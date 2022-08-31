
import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';

// mui nave bar 

import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const Header = styled(AppBar)`
    background: #111111;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
  
`;

const NavBar = () => {
    return (

        // mui nave bar 
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              NN NODE CRUD APPLICATION
            </Typography>
            <Button color="inherit">HOME</Button>
            <Button color="inherit">Add User</Button>
          </Toolbar>
        </AppBar>
      </Box>
        // mui nave bar 


        // <Header position="static">
        //     <Toolbar >
        //         {/* <Tabs to="./" exact>Code for Interview</Tabs> */}
        //         <Tabs to="/" exact>All Users</Tabs>
        //         <Tabs to="add" exact>Add User</Tabs>
        //     </Toolbar>
        // </Header>
    )
}

export default NavBar;