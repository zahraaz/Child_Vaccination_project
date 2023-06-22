import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import SupervisorAccountSharpIcon from '@mui/icons-material/SupervisorAccountSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import logo from '../Assets/logo.png';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { AuthContext } from "../Context/authContext";
import { useContext } from "react";
import IconButton from '@mui/material/IconButton';

const Header = () => {
  const { isAuth, user } = useContext(AuthContext);

  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{ backgroundColor: '#f5fbff' }}>
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img src={logo} alt="logo" />
              </IconButton>
              
              <div style={{ flexGrow: 1 }} />
              
              <Button
                variant="contained"
                sx={{
                  color: '#fff',
                  backgroundColor: 'rgb(114, 159, 173)',
                  margin: '10px'
                }}
                component={RouterLink}
                to="/home"
              >
                الرئيسية
              </Button>

              <Button
                variant="contained"
                sx={{
                  color: '#fff',
                  backgroundColor: 'rgb(114, 159, 173)',
                  margin: '10px'
                }}
                component={RouterLink}
                to="/login"
              >
                تسجيل
              </Button>

              {!isAuth && (
                <Button
                  variant="contained"
                  sx={{
                    color: '#fff',
                    backgroundColor: 'rgb(114, 159, 173)',
                    margin: '10px'
                  }}
                  component={RouterLink}
                  to="/signup"
                >
                  سجل الدخول
                </Button>
              )}
              
              {isAuth && (
                <Button
                  variant="contained"
                  sx={{
                    color: '#fff',
                    backgroundColor: 'rgb(114, 159, 173)',
                    margin: '10px'
                  }}
                  component={RouterLink}
                  to="/logout"
                >
                  تسجيل الخروج
                </Button>
              )}

              {!user.role === 1 && (
                <Button>
                  <Link
                    component={RouterLink}
                    to="/userprofile"
                    style={{ textDecoration: "none", color: '#fff' }}
                  >
                    <AccountCircleSharpIcon />
                  </Link>
                </Button>
              )}

              {user.role === 1 && (
                <Button>
                  <Link
                    component={RouterLink}
                    to="/admin/dashboard"
                    style={{ textDecoration: "none", color: '#fff' }}
                  >
                    <SupervisorAccountSharpIcon />
                  </Link>
                </Button>
              )}
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
}

export default Header;
