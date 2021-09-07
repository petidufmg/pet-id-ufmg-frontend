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
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import { useCookies } from "react-cookie";

function getPathname(text) {
  switch (text) {
    case "Home":
      return "/home";
    case "Procurar":
      return "/search";
    case "Adicionar Animal":
      return "/pet-add";
    default:
      return "/";
  }
}

function getPathnameIcon(text) {
  switch (text) {
    case "Home":
      return <HomeIcon />;
    case "Procurar":
      return <SearchIcon />;
    case "Adicionar Animal":
      return <AddCircleOutlineIcon />;
    default:
      return <HomeIcon />;
  }
}

function CustomDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [cookies] = useCookies([]);
  const drawerList =
    cookies["user-type"] !== "0"
      ? ["Home", "Procurar", "Adicionar Animal"]
      : ["Home", "Procurar"];
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {drawerList.map((text, index) => (
          <ListItem to={getPathname(text)} component={Link} button key={index}>
            <ListItemIcon>{getPathnameIcon(text)}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Sair"].map((text, index) => (
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
