import { Grid } from "@mui/material";
import { useRef, useState, useContext } from "react";
import "../statics/navbar.css";
import IconButton from "@mui/material/IconButton";
import {
  ShoppingCart,
  Menu,
  AccountCircle,
  LogoutOutlined,
  Settings,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import { Avatar } from "@mui/material";
import MenuList from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import UserDefault from "./../../assets/user2.png";
import { UserContext } from "../../utils/UserContext";

const AppBar = () => {
  const logStatus = localStorage.getItem("is_logged");

  const userData = useContext(UserContext);

  const userID = userData[0].data.id;
  const userPath = `/profile/${userID}`;

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (e) => {
    setAnchorElUser(null);
  };

  const handleLogout = (e) => {
    if (logStatus === "true") {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("auth_token_type");
      localStorage.removeItem("user");
      localStorage.setItem("is_logged", false);
    }
  };

  const navRef = useRef();

  const showCategories = () => {
    navRef.current.classList.toggle("responsive");
  };

  return (
    <div className='navbar-root'>
      <Grid
        container
        className='grid-nav'
        direction='row'
        alignItems='center'
        justifyContent='space-around'
      >
        <Grid item className='logo'>
          <Link className='logo-link' to='/'>
            ALMARI
          </Link>
        </Grid>

        <Grid item className='categories'>
          <nav ref={navRef}>
            <Link className='nav-links' to='/'>
              Home
            </Link>
            <Link className='nav-links' to='/catalog'>
              Buy
            </Link>

            <Link className='nav-links' to='/post'>
              Sell
            </Link>

            <Link className='nav-links' to='/support'>
              Support
            </Link>
          </nav>
        </Grid>

        <Grid item className='notif-icons'>
          <Grid
            container
            direction='row'
            alignItems='center'
            justifyContent='center'
          >
            <Grid item>
              <Menu className='icons nav-button' onClick={showCategories} />
            </Grid>
            <Grid item>
              <Link className='logo-link' to='/checkout'>
                <IconButton className='icons cart'>
                  <Badge badgeContent={5} color='success'>
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </Link>
            </Grid>
          </Grid>

          <IconButton
            onClick={handleOpenUserMenu}
            size='small'
            className='icons avatar'
          >
            <Avatar src={UserDefault} fontSize='large' />
          </IconButton>
          <MenuList
            sx={{ mt: "55px", textAlign: "center" }}
            id='menu-appbar'
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
            <div className='list'>
              <AccountCircle />
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to={userPath}
              >
                <MenuItem>Profile</MenuItem>
              </Link>
            </div>
            <div className='list'>
              <Settings />
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                to='/market'
              >
                <MenuItem>Setup</MenuItem>
              </Link>
            </div>
            {logStatus === "true" ? (
              <div className='list'>
                <LogoutOutlined />
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to='/login'
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Link>
              </div>
            ) : (
              <div className='list'>
                <LogoutOutlined />
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  to='/login'
                >
                  <MenuItem onClick={handleLogout}>Log In</MenuItem>
                </Link>
              </div>
            )}
          </MenuList>
        </Grid>
      </Grid>
    </div>
  );
};
export default AppBar;
