import Paper from "@material-ui/core/Paper";
import { IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import searchStyles from "../styles/hooks/searchStyles.js";

function CustomSearchForm(props) {
  const classes = searchStyles();

  function handleChange(e) {
    props.setInput(e.target.value);
  }

  return (
    <div className={classes.paperDiv}>
      <Paper
        className={classes.searchForm}
        component="form"
        onSubmit={props.handleSubmit}
      >
        <InputBase
          className={classes.input}
          placeholder="Procurar animal..."
          variant="outlined"
          color="secondary"
          onChange={handleChange}
          value={props.input}
        ></InputBase>
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}

export default CustomSearchForm;
