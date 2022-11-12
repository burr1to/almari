import { Grid } from "@mui/material";
import { useRef } from "react";
import "../statics/navbar.css";
import IconButton from "@mui/material/IconButton";
import { AccountCircle } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { faHeart, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
const AppBar = () => {
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
        <FontAwesomeIcon
          className='icons nav-button'
          onClick={showCategories}
          icon={faBars}
        />

        <Grid item className='logo'>
          <Link className='logo-link' to='/'>
            ALMARI
          </Link>
        </Grid>

        <Grid item className='categories'>
          <nav ref={navRef}>
            <Link className='nav-links' to='/home'>
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
          <FontAwesomeIcon className='icons heart' icon={faHeart} />

          <Link className='logo-link' to='/checkout'>
            <IconButton aria-label='Show cart items' className='icons cart'>
              <Badge badgeContent={3} color='success'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>

          <IconButton size='small' className='icons avatar'>
            <AccountCircle fontSize='large' />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};
export default AppBar;
