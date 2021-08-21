import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/hooks/homeStyles.js";

function CustomTypography() {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        pharetra dolor et sem euismod pretium. Pellentesque sit amet mollis
        nibh. Morbi nec varius risus. Proin sit amet odio elit. In urna lorem,
        condimentum nec fringilla id, maximus vel ligula. Aliquam odio justo,
        bibendum eu nisi eu, hendrerit interdum augue. In sit amet velit velit.
        Nam nisi urna, tempus non facilisis a, mollis eget felis.
      </Typography>
    </div>
  );
}

export default CustomTypography;
