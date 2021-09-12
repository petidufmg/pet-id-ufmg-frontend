import { makeStyles } from "@material-ui/core/styles";

const buttonWidth = 200;

const petAddStyles = makeStyles((theme) => ({
  root: {
    "& h2": {
      color: theme.palette.text.secondary
    }
  },
  clearButtonContainer: {
    [theme.breakpoints.up("md")]: {
      textAlign: "right"
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  saveButtonContainer: {
    [theme.breakpoints.up("md")]: {
      textAlign: "left"
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center"
    }
  },
  cancelButtonContainer: {
    textAlign: "center"
  },
  actionButton: {
    width: buttonWidth
  },
  formControl: {
    minWidth: 251.95
  }
}));

export default petAddStyles;
