import SearchBar from "./SearchBar";
import { Grid } from "@mui/material";
import "../statics/navbar.css";
import NavBarItems from "./navbaritems";

const AppBar = () => {
  return (
    <div className='navbar-root'>
      <Grid
        container
        className='grid-nav'
        direction='row'
        alignItems='center'
        justifyContent='space-around'
      >
        <Grid xs={1} item className='logo-almari'>
          ALMARI
        </Grid>
        <Grid xs={3} item>
          <SearchBar />
        </Grid>
        <Grid xs={4} item className='elements'>
          <NavBarItems />
        </Grid>
        <Grid xs={1} item>
          Profile
        </Grid>
      </Grid>
    </div>
  );
};
export default AppBar;
