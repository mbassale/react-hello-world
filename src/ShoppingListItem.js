/**
 * Created by mbassale on 19-01-17.
 */

import React, { Component } from 'react';
import {ListGroupItem, Button} from 'react-bootstrap';

class ShoppingListItem extends Component {

    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(e) {
        e.preventDefault();
        if (this.props.onRemove) {
            this.props.onRemove(this.props.grocery);
        }
    }

    render() {
        return (
            <ListGroupItem>
                <span className="text-left">{ this.props.grocery }</span>
                <Button bsClass="btn btn-default btn-xs pull-right" onClick={this.handleRemove}>Remove</Button>
            </ListGroupItem>
        );
    }
}

export default ShoppingListItem;