/**
 * Created by mbassale on 17-01-17.
 */

import React, { Component } from 'react';
import {Button, ListGroup} from 'react-bootstrap';
import ShoppingListItem from './ShoppingListItem';

class ShoppingList extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleNew = this.handleNew.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleNew() {
        if (this.props.onNew) {
            this.props.onNew();
        }
    }

    handleRemove(grocery) {
        if (this.props.onRemove) {
            this.props.onRemove(grocery);
        }
    }

    render() {
        const listItems = this.props.groceries.map((grocery, index) => (<ShoppingListItem key={index} grocery={grocery} onRemove={this.handleRemove} />));
        const actionButtonStyle = {
            marginBottom: '10px'
        };
        return(
            <div className="row">
                <div className="clearfix" style={actionButtonStyle}>
                    <Button bsClass="btn btn-primary pull-right" onClick={this.handleNew}>Add New</Button>
                </div>
                <ListGroup>
                    {listItems}
                </ListGroup>
            </div>
        );
    }
}

export default ShoppingList;