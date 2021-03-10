import useStyles from '../styles/hooks/homeStyles.js';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';

function CustomDrawer() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.toolbar}/>
            <Divider/>
            <List>
                {['Home', 'Procurar'].map((text, index) => (
                    <ListItem
                        to={text === 'Home'
                        ? '/home'
                        : '/search'}
                        component={Link}
                        button
                        key={index}>
                        <ListItemIcon>
                            {text === 'Home'
                                ? <HomeIcon/>
                                : <SearchIcon/>}
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            <List>
                {['Configurações'].map((text, index) => (
                    <ListItem to="/settings" component={Link} button key={index}>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary={text}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
}
export default CustomDrawer;