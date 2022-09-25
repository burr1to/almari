import SearchBar from "./SearchBar";
import { Grid } from "@mui/material";
import "../statics/navbar.css";
import IconButton from "@mui/material/IconButton";
import { AccountCircle } from "@mui/icons-material";
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
        <Grid item className='search' xs={4}>
          <SearchBar />
        </Grid>
        <Grid item className='categories' xs={4}>
          <ul>
            {pages.map((page) => (
              <li className='list'>{page}</li>
            ))}
          </ul>
        </Grid>

        <Grid item className='profile'>
          <IconButton size='small'>
            <AccountCircle fontSize='large' />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};
export default AppBar;
