import { Grid } from "@mui/material";
import "../statics/navbar.css";
import IconButton from "@mui/material/IconButton";
import { AccountCircle } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const AppBar = () => {
  const pages = ["Home", "Categories", "Deals", "Sell", "Support"];

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
          ALMARI
        </Grid>

        <Grid item className='categories'>
          <ul>
            {pages.map((page) => (
              <li className='list'>{page}</li>
            ))}
          </ul>
        </Grid>

        <Grid item className='profile-icons'>
          <IconButton size='small' className='icons avatar'>
            <AccountCircle fontSize='large' />
          </IconButton>
          <IconButton size='small' className='icons cart'>
            <FontAwesomeIcon icon={faCartShopping} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};
export default AppBar;
