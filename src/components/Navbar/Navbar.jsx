import SearchBar from "./SearchBar";
import { Grid } from "@mui/material";
import "./navbar.css";
import NavBarItems from "./navbaritems";

const listCat = ["1", "1", "1", "1", "1"];
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
        <Grid item>Allo</Grid>
        <Grid item>
          <SearchBar />
        </Grid>
        <Grid item>
          <Grid
            container
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <Grid item className='navbar-elements'>
              <NavBarItems />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>Profile</Grid>
      </Grid>
    </div>
  );
};
export default AppBar;
