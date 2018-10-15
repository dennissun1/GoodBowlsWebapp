import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import {Switch, Route, Link} from 'react-router-dom'
import My_Map from './My_Map';
import My_Feed from './My_Feed';
import My_MakeOwnBowls from './My_MakeOwnBowls';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar color = 'light' inverse>
                    <NavbarBrand href="/" className="class1">Good Bowls</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="class2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link to='/'>Map</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/feed'>Feed</Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/makeyourownbowls'>Make your own Bowls</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Switch>
                    <Route exact path = '/' component={My_Map}/>
                    <Route exact path = '/feed' component={My_Feed}/>
                    <Route exact path = '/makeyourownbowls' component={My_MakeOwnBowls}/>
                </Switch>
            </div>
        );
    }
}

export default App;