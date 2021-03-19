import Grid from '@material-ui/core/Grid';
import dog from '../images/dog.jpg';
import {petInfoStyles} from '../styles/hooks/petInfoStyles.js';
import CustomTable from '../components/CustomTable.js';

function PetInfo() {

    const classes = petInfoStyles();

    return (
        <div>
            <Grid container direction='row'>
                <Grid item>
                    <img className={classes.img} src={dog} alt='dog'/>
                </Grid>

                <Grid item xs container direction='column'>
                    <Grid item>
                        <CustomTable/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default PetInfo;