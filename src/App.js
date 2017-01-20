import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button} from 'react-bootstrap';
import ShoppingList from './ShoppingList';
import ShoppingListItemEditor from './ShoppingListItemEditor';

class App extends Component {

    constructor(props) {
        super(props);
        const initialGroceries = ['Fish', 'Milk', 'Soap', 'Soda'];
        this.state = {
            showAddGroceryForm: false,
            groceries: initialGroceries
        };
        this.onGroceryNew = this.onGroceryNew.bind(this);
        this.onCreateGrocery = this.onCreateGrocery.bind(this);
        this.onRemoveGrocery = this.onRemoveGrocery.bind(this);
    }

    static selectMenuItem(itemNumber) {
        alert('Selected: ' + itemNumber);
    }

    onGroceryNew() {
        this.setState({
            showAddGroceryForm: true
        });
    }

    onCreateGrocery(newGrocery) {
        this.setState(function (prevState, props){
            let newGroceries = Array.from(prevState.groceries);
            newGroceries.push(newGrocery);
            return {
                groceries: newGroceries
            };
        });
    }

    onRemoveGrocery(grocery) {
        this.setState(function (prevState, props){
            let newGroceries = Array.from(prevState.groceries).filter((current) => {
                return !(current == grocery)
            });
            return {
                groceries: newGroceries
            };
        });
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
                        <NavItem eventKey={1} href="#" onClick={() => App.selectMenuItem(1)}>Menu 1</NavItem>
                        <NavItem eventKey={2} href="#" onClick={() => App.selectMenuItem(2)}>Menu 2</NavItem>
                        <NavDropdown eventKey={3} title="Menu 3" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} onClick={() => App.selectMenuItem(3.1)}>Menu Item 3.1</MenuItem>
                            <MenuItem eventKey={3.2} onClick={() => App.selectMenuItem(3.2)}>Menu Item 3.2</MenuItem>
                            <MenuItem eventKey={3.3} onClick={() => App.selectMenuItem(3.3)}>Menu Item 3.3</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.4} onClick={() => App.selectMenuItem(3.4)}>Menu Item 3.4</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ShoppingList groceries={this.state.groceries} onNew={this.onGroceryNew} onRemove={this.onRemoveGrocery} />
                        </div>
                    </div>
                    <div className={this.state.showAddGroceryForm ? 'row' : 'row hidden'}>
                        <div className="col-md-offset-2 col-md-4">
                            <h2>Add new grocery</h2>
                            <ShoppingListItemEditor onSubmit={this.onCreateGrocery} onCancel={() => this.setState({ showAddGroceryForm: false })} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
