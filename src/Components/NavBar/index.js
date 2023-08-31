import  React from 'react';
import {AppBar ,Box,Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';
import logo from '../../Components/Utilis/images/logo.png'; 
import './style.css';


const settings = ['Profile', 'Signin', 'Logout'];

function NavBar() {
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
    <AppBar position="static" className='ew'   >
     
      <Container maxWidth="xl" className='baceground'>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={logo} className='logo'/>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <img src={logo} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',
           justifyContent: 'center' , 
           alignItems: 'center' ,
           marginLeft: '50px',
           color:'#000839'
           } }}>
            <Button >
                <Link className='nav-links' to ="/">Home</Link>
              </Button>
              <Button >
              <Link  className='nav-links' to ="/aboutus">About us</Link>
              </Button>
              <Button >
              <Link  className='nav-links' to ="/Cart">Cart</Link>
              </Button>
              <Button >
              <Link  className='nav-links' to ="/AddHome">Add Home</Link>
              </Button>
              <Button >
              <Link  className='nav-links' to ="/MyHouses">MyHouses</Link>
              </Button>
              <Button >
              <Link  className='nav-links' to ="/MyFavarute">MyFavarute</Link>
              </Button>
              <Button >
              <Link  className='nav-links' to ="/Profile">Profile</Link>
              </Button>
              {/* </Button> */}
           
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Button className='btn1'
                            style={{
                                color: '#000',
                                backgroundColor:'#FF664B',
                                marginRight: '20px',
                                width: '90px',
                                fontWeight: 'bold',
                                textDecoration:'none',
                            }}>
                             <Link to='/SignUp'> Register</Link>
                             
                        </Button>
            
                        
              </IconButton>
             
            </Tooltip>
         
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
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
}
export default NavBar;


