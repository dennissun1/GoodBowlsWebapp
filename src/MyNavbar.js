import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class My_Navbar extends React.Component {
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
                    <div>
                        <NavbarBrand href="/" className="class1">Good Bowls</NavbarBrand>
                    </div>
                    {/*<div>*/}
                        {/*<span className="navbar-text">*/}
                            {/*WE LOVE GOOD BOWLS!*/}
                        {/*</span>*/}
                    {/*</div>*/}
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
            </div>
        );
    }
}

export default My_Navbar;