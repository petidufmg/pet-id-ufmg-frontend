import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TableRow } from "@material-ui/core";

const petInfoStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "400px",
    height: "400px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  table: {
    height: "400px",
  },
  actionButtonsContainer: {
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    }
  },
  editButtonContainer: {
    [theme.breakpoints.up("md")]: {
      textAlign: "right",
      paddingRight: theme.spacing(1)
    }
  },
  deleteButtonContainer: {
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      paddingLeft: theme.spacing(1)
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(1)
    }
  },
  deleteButton: {
    color: "#ffffff",
    background: "#ff1744",
    "&:hover": {
      background: "#b71c1c"
    }
  }
}));

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export { StyledTableRow, petInfoStyles };
