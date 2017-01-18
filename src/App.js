import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button} from 'react-bootstrap';
import ShoppingList from './ShoppingList';

class App extends Component {

    selectMenuItem(itemNumber) {
        alert('Selected: ' + itemNumber);
    }

    render() {
        return (
            <div className="App">
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">React Hello World!</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1} href="#" onClick={() => this.selectMenuItem(1)}>Menu 1</NavItem>
                        <NavItem eventKey={2} href="#" onClick={() => this.selectMenuItem(2)}>Menu 2</NavItem>
                        <NavDropdown eventKey={3} title="Menu 3" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} onClick={() => this.selectMenuItem(3.1)}>Menu Item 3.1</MenuItem>
                            <MenuItem eventKey={3.2} onClick={() => this.selectMenuItem(3.2)}>Menu Item 3.2</MenuItem>
                            <MenuItem eventKey={3.3} onClick={() => this.selectMenuItem(3.3)}>Menu Item 3.3</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.4} onClick={() => this.selectMenuItem(3.4)}>Menu Item 3.4</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ShoppingList groceries={['Fish', 'Milk', 'Eggs', 'Soap']} onSelect={(grocery) => alert(grocery)}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
