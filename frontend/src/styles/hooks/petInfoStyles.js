import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TableRow } from "@material-ui/core";

const petInfoStyles = makeStyles((theme) => ({
  img: {
    width: "400px",
    height: "400px",
    borderRadius: "8px",
    objectFit: "cover",
  },
  table: {
    height: "400px",
  },
  actionButtonsContainer: {
    paddingTop: theme.spacing(2)
  },
  editButtonContainer: {
    textAlign: "right",
    paddingRight: theme.spacing(1)
  },
  deleteButtonContainer: {
    textAlign: "left",
    paddingLeft: theme.spacing(1)
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
