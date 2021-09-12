import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function CustomSnackBar(props) {
  function closeSnack(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    props.setState({ state: false , type: props.type });
  }

  function showMessage(type) {
    switch (type) {
      case "success":
        return "Animal adicionado com sucesso!";
      case "error":
        return "Ocorreu um erro! Tente entrar novamente.";
      case "info":
        return "Os detalhes do seu pet foram carregados com sucesso!"
      case "warning":
        return "Dados não encontrados."
      default:
        return "Erro não identificado.";
    }
  }

  return (
    <Snackbar
      open={props.state}
      autoHideDuration={6000}
      onClose={closeSnack}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert onClose={closeSnack} severity={props.type}>
        {showMessage(props.type)}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackBar;
