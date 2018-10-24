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
import Typography from '@material-ui/core/Typography';
import MyFeed from "./MyFeed";
import MyMakeOwnBowls from "./MyMakeOwnBowls";
import {Switch, Route, NavLink} from 'react-router-dom';
import MyMap from './MyMap';

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
        marginLeft: `30vw`,
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
    },
    content: {
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: '-30vw',
        marginTop: 100,
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
    }
});

class MyMain extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
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
                            Good Bowls
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
                        <NavLink to='/' className={classes.navlink}>
                            <ListItem button>
                                Map
                            </ListItem>
                        </NavLink>
                        <NavLink to='/feed' className={classes.navlink}><ListItem button>Feed</ListItem></NavLink>
                        <NavLink to='/makeyourownbowls' className={classes.navlink}><ListItem button>Make your own Bowls</ListItem></NavLink>
                    </List>
                </Drawer>
                <main className={classNames(classes.content, {[classes.contentShift]: open,})}>
                    <Switch>
                        <Route exact path = '/' component={MyMap}/>
                        <Route exact path = '/map' component={MyMap}/>
                        <Route exact path = '/feed' component={MyFeed}/>
                        <Route exact path = '/makeyourownbowls' component={MyMakeOwnBowls}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

MyMain.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MyMain);