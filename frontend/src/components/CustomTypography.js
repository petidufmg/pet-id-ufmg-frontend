import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/hooks/homeStyles.js";

function CustomTypography() {
  const classes = useStyles();

  return (
    <div className={classes.toolbar}>
      <Typography paragraph>
        Bem-vindo ao Pet ID! Aqui você tem um sistema completo para pesquisa e registro de animais.
        Para começar, você pode procurar um animal com base em seu número de microchip ou adicionar
        um totalmente novo.
      </Typography>
    </div>
  );
}

export default CustomTypography;
