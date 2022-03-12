import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { InsertPhoto } from "@mui/icons-material";

const useStyles = makeStyles({
  component: {
    background: "#445A6F",
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.component} position="static">
      <Toolbar>
        <InsertPhoto />
        <Typography variant="h5" style={{ marginLeft: 10 }}>
          Pixabay Image Search
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
