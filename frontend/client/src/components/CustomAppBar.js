import Typography from "@material-ui/core/Typography";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "../styles/hooks/homeStyles.js";

function CustomAppBar(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <IconButton
          onClick={props.setDrawer}
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Pet ID
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
