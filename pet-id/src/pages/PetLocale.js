import {Button} from "@material-ui/core";
import CustomMap from "../components/CustomMap";
import petLocaleStyles from '../styles/hooks/petLocaleStyles.js';
import {useHistory} from 'react-router-dom';

function PetLocale() {
    const history = useHistory();
    const classes = petLocaleStyles();

    function handleBackClick() {
        history.goBack();
    }

    return (
        <div className={classes.customMapDiv}>
            <Button
                onClick={handleBackClick}
                className={classes.button}
                color="primary"
                variant="contained">Voltar</Button>
            <CustomMap/>
        </div>
    )
}

export default PetLocale;