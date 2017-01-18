/**
 * Created by mbassale on 17-01-17.
 */

import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

class ShoppingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }

    handleSelect(grocery) {
        this.setState({ selected: grocery });
        this.props.onSelect(grocery);
    }

    render() {
        const listItems = this.props.groceries.map((grocery) => (<ListGroupItem onClick={() => this.handleSelect(grocery)}>{ grocery }</ListGroupItem>));

        return(
            <ListGroup>
                {listItems}
            </ListGroup>
        );
    }
}

export default ShoppingList;