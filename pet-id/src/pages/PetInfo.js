import Grid from '@material-ui/core/Grid';
import dog from '../images/dog.jpg';
import {petInfoStyles} from '../styles/hooks/petInfoStyles.js';
import CustomTable from '../components/CustomTable.js';
import CustomTableExtension from '../components/CustomTableExtension';
import {useReducer} from 'react';
import {Box} from '@material-ui/core';

function reducer(buttonState, action) {
    if (action.type === 'toggleVaccineButton') {
        return buttonState.vaccineButton.status
            ? {
                ...buttonState,
                vaccineButton: {
                    status: false,
                    name: 'Ver mais'
                }
            }
            : {
                vermifugeButton: {
                    status: false,
                    name: 'Ver mais'
                },
                vaccineButton: {
                    status: true,
                    name: 'Fechar'
                }
            };
    } else if (action.type === 'toggleVermifugeButton') {
        return buttonState.vermifugeButton.status
            ? {
                ...buttonState,
                vermifugeButton: {
                    status: false,
                    name: 'Ver mais'
                }
            }
            : {
                vaccineButton: {
                    status: false,
                    name: 'Ver mais'
                },
                vermifugeButton: {
                    status: true,
                    name: 'Fechar'
                }
            };
    } else {
        return {};
    }
}

function PetInfo() {

    const [buttonState,
        dispatch] = useReducer(reducer, {
        vaccineButton: {
            status: false,
            name: 'Ver mais'
        },
        vermifugeButton: {
            status: false,
            name: 'Ver mais'
        }
    });

    function handleButtonClick(e) {
        if (e.currentTarget.value === 'Data das vacinações') {
            dispatch({type: 'toggleVaccineButton', payload: 0});
        } else {
            dispatch({type: 'toggleVermifugeButton', payload: 0});
        }
    }

    const classes = petInfoStyles();

    return (
        <div>
            <Grid justify="center" container direction='row'>
                <Grid item>
                    <img className={classes.img} src={dog} alt='dog'/>
                </Grid>

                <Grid justify="center" item xs container>
                    <Grid item>
                        <CustomTable buttonState={buttonState} onClick={handleButtonClick}/>
                    </Grid>
                    <Grid
                        component={Box}
                        item
                        display={buttonState.vaccineButton.status || buttonState.vermifugeButton.status
                        ? 'block'
                        : 'none'}>
                        <CustomTableExtension buttonState={buttonState}/>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}

export default PetInfo;