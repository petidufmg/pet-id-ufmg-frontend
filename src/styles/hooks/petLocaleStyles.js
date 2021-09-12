import { makeStyles } from "@material-ui/core/styles";

const petLocaleStyles = makeStyles((theme) => ({
  leftButton: {
    marginBottom: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  centerButton: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  rightButton: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  customMapDiv: {
    textAlign: "center",
  },
}));

export default petLocaleStyles;
