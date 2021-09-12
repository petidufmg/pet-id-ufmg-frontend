import { makeStyles } from "@material-ui/core/styles";

const searchStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      width: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "400px",
    },
    padding: theme.spacing(2),
  },
  searchForm: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      marginLeft: "240px",
      width: "600px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "500px",
    }
  },
}));

export default searchStyles;
