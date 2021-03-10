import Typography from '@material-ui/core/Typography';
import useStyles from '../styles/hooks/homeStyles.js';

function MainContent() {

    const classes = useStyles();

    return (
        <main className={classes.mainContent}>
            <div className={classes.toolbar}>
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra dolor
                    et sem euismod pretium. Pellentesque sit amet mollis nibh. Morbi nec varius
                    risus. Proin sit amet odio elit. In urna lorem, condimentum nec fringilla id,
                    maximus vel ligula. Aliquam odio justo, bibendum eu nisi eu, hendrerit interdum
                    augue. In sit amet velit velit. Nam nisi urna, tempus non facilisis a, mollis
                    eget felis.
                </Typography>
                <Typography paragraph>
                    Curabitur placerat risus elit, vitae ultrices enim cursus id. Suspendisse vitae
                    felis est. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Maecenas eu tempor erat. In maximus libero facilisis
                    lacus aliquam, a sodales urna scelerisque. Interdum et malesuada fames ac ante
                    ipsum primis in faucibus. Sed vitae placerat est.
                </Typography>
            </div>
        </main>
    );
}

export default MainContent;