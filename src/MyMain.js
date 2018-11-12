import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import MyFeed from "./MyFeed";
import Bowl1 from "./Bowl1";
import Bowl2 from "./Bowl2";
import Bowl3 from "./Bowl3";
import {Switch, Route, NavLink} from 'react-router-dom';
import MyPureMap from './MyPureMap';
import MyHome from './MyHome';
import MyMakeOwnBowls from './MyMakeOwnBowls'

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        backgroundColor: `#1dbe2b !important`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `70vw`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: `1vw`,
        marginRight: `1vw`,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: `30vw !important`,
        flexShrink: 0,
    },
    drawerPaper: {
        width: `30vw`,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
    },
    drawerHeaderText: {
        justifyContent: 'flex-start',
        fontSize: `2vw`,
    },
    content: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-30vw`,
        overflow: 'auto',
        height: `100vh`,
    },
    navlink: {
        color: 'black',
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    title: {
        marginLeft: 0,
    },
    toolBar: {
        paddingRight: `1vw`,
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        position: 'relative',
    },
    nested: {
    },
});

class MyMain extends React.Component {
    state = {
        open: false,
        tabOpen: false,
    };

    handleClick = () => {
        this.setState(state => ({ tabOpen: !state.tabOpen }));
    };

    handleClose = () => {
        this.setState(() => ({tabOpen: false}));
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <React.Fragment>
                <CssBaseline/>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        className={classNames(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                    >
                        <Toolbar disableGutters={!open} className={classes.toolBar}>
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                className={classNames(classes.menuButton, open && classes.hide)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                component="title"
                                variant="h6"
                                color="inherit"
                                noWrap
                                className={classes.title}
                            >
                                <NavLink to ='/' activeStyle={{color: "whitesmoke"}}>Good Bowls</NavLink>
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        className={classes.drawer}
                        variant="persistent"
                        anchor="left"
                        open={open}
                        classes={{
                            paper: classes.drawerPaper,
                        }}>
                        <div className={classes.drawerHeader}>
                            <Typography variant="h5" noWrap className={classes.drawerHeaderText}>Welcome!</Typography>
                            <IconButton onClick={this.handleDrawerClose}>
                                <ChevronLeftIcon/>
                            </IconButton>
                        </div>
                        <List>
                            <NavLink to='/map' className={classes.navlink}><ListItem button onClick={this.handleClose}>Map</ListItem></NavLink>
                            <NavLink to='/feed' className={classes.navlink}><ListItem button onClick={this.handleClose}>Feed</ListItem></NavLink>
                            {/*<NavLink to='/makeyourownbowls' className={classes.navlink}><ListItem button>Make your own Bowls</ListItem></NavLink>*/}
                            <NavLink to='/recipes' className={classes.navlink}><ListItem button onClick={this.handleClick}>Recipes</ListItem></NavLink>
                            <Collapse in={this.state.tabOpen} timeout="auto">
                                <List component="div" disablePadding>
                                    <NavLink to='/bowl1' className={classes.navlink}>
                                        <ListItem button className={classes.nested}>
                                            <ListItemText primary="Chicken Burrito"/>
                                        </ListItem>
                                    </NavLink>
                                    <NavLink to='/bowl2' className={classes.navlink}>
                                        <ListItem button className={classes.nested}>
                                            <ListItemText primary="Chicken Curry"/>
                                        </ListItem>
                                    </NavLink>
                                    <NavLink to='/bowl3' className={classes.navlink}>
                                        <ListItem button className={classes.nested}>
                                            <ListItemText primary="Sausage & Peppers Bowl"/>
                                        </ListItem>
                                    </NavLink>
                                </List>
                            </Collapse>
                        </List>
                    </Drawer>
                    <main className={classNames(classes.content, {[classes.contentShift]: open,})}>
                        <div className={classes.appBarSpacer} />
                        <div className={classes.container}>
                            <Switch>
                                <Route exact path = '/' component={MyHome}/>
                                <Route exact path = '/map' component={MyPureMap}/>
                                <Route exact path = '/feed' component={MyFeed}/>
                                <Route exact path = '/recipes' component={MyMakeOwnBowls}/>
                                <Route exact path = '/bowl1' component={Bowl1}/>
                                <Route exact path = '/bowl2' component={Bowl2}/>
                                <Route exact path = '/bowl3' component={Bowl3}/>
                                {/*<Route exact path = '/makeyourownbowls' component={MyMakeOwnBowls}/>*/}
                            </Switch>
                        </div>
                    </main>
                </div>
            </React.Fragment>
        );
    }
}

MyMain.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MyMain);