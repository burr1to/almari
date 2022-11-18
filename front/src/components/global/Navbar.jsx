import { Grid } from "@mui/material";
import { useRef, useState } from "react";
import "../statics/navbar.css";
import IconButton from "@mui/material/IconButton";
import { AccountCircle } from "@mui/icons-material";
import { ShoppingCart, Menu, Favorite } from "@mui/icons-material";
import { Badge } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import MenuList from "@mui/material/Menu";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ProfilePic from "./../../assets/photo.jpg";

const settings = ["Profile", "Favorites", "Setup Your Shop", "Logout"];
const AppBar = () => {
  const [log, setLog] = useState(true);

  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
        justifyContent='space-between'
      >
        <Menu className='icons nav-button' onClick={showCategories} />

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
            <Link className='nav-links' to='/home'>
              Buy
            </Link>
            <Link className='nav-links' to='/home'>
              Sell
            </Link>
            <Link className='nav-links' to='/home'>
              Support
            </Link>
          </nav>
        </Grid>
        <Grid item className='searching'>
          <SearchBar />
        </Grid>

        <Grid item className='notif-icons'>
          {/* <Link className='logo-link' to='/liked'>
            <IconButton
              aria-label='Show favorite items'
              className='icons heart'
            >
              <Favorite />
            </IconButton>
          </Link> */}
          <Link className='logo-link' to='/checkout'>
            <IconButton aria-label='Show cart items' className='icons cart'>
              <Badge badgeContent={3} color='success'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>

          <IconButton
            onClick={handleOpenUserMenu}
            size='small'
            className='icons avatar'
          >
            {log ? (
              <Avatar src={ProfilePic} />
            ) : (
              <AccountCircle fontSize='large' />
            )}
          </IconButton>
          <MenuList
            sx={{ mt: "55px" }}
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
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Favorite />
                <Typography textAlign='center'>{setting}</Typography>
              </MenuItem>
            ))}
          </MenuList>
        </Grid>
      </Grid>
    </div>
  );
};
export default AppBar;
