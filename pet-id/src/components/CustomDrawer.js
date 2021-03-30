import useStyles from "../styles/hooks/homeStyles.js";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";

function CustomDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {["Home", "Procurar"].map((text, index) => (
          <ListItem
            to={text === "Home" ? "/home" : "/search"}
            component={Link}
            button
            key={index}
          >
            <ListItemIcon>
              {text === "Home" ? <HomeIcon /> : <SearchIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Configurações", "Sair"].map((text, index) => (
          <ListItem
            to={text === "Sair" ? "/" : "/settings"}
            component={Link}
            button
            key={index}
          >
            <ListItemIcon>
              {text === "Configurações" ? <SettingsIcon /> : <ExitToAppIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer
      classes={{
        paper: classes.drawer,
      }}
      variant={props.variant}
      open={props.isOpen}
      onClose={props.handleDrawer}
      anchor={theme.direction === "rtl" ? "right" : "left"}
      ModalProps={{
        keepMounted: props.variant === "temporary" ? true : false,
      }}
    >
      {drawer}
    </Drawer>
  );
}

export default CustomDrawer;
