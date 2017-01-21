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
        this.onClearAllGroceries = this.onClearAllGroceries.bind(this);
        this.onGroceryNew = this.onGroceryNew.bind(this);
        this.onCreateGrocery = this.onCreateGrocery.bind(this);
        this.onRemoveGrocery = this.onRemoveGrocery.bind(this);
    }

    onClearAllGroceries() {
        this.setState({
            groceries: []
        });
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
                        <NavDropdown eventKey={3} title="Groceries List" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} onClick={this.onClearAllGroceries}>Clear All Groceries</MenuItem>
                            <MenuItem eventKey={3.2} onClick={this.onGroceryNew}>Add Grocery</MenuItem>
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
