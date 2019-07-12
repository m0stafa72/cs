import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };

        this.toggle = this.toggle.bind(this);

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <header className="padding-top-5 ">

                <Navbar className="container-fluid">
                    
                    <NavbarToggler onClick={this.toggle} >
                        <span className= "sr-only">Toggle navigation</span>
                        <span className= "fa fa-bars fa-2x"></span>
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <div className="pull-left">
                            <a href="" className="btn btn-icon bg-red margin-top-15"><i className="fa fa-phone"></i> با ما تماس بگیرید</a>
                        </div>

                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/">خانه</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/About">درباره ما</Link>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav >
                                    محصولات <b className="caret"></b>
                                </DropdownToggle>
                                <DropdownMenu tag="ul" right>
                                    <li><a href="#">محصول 1</a></li>
                                    <li><a href="#">محصول 2</a></li>
                                    <li><a href="#">محصول 3</a></li>
                                    <li><a href="#">محصول 4</a></li>
                                    <li><a href="#">محصول 5</a></li>
                                    <li><a href="#">محصول 6</a></li>
                                    <li><a href="#">محصول 7</a></li>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}

export default Header;