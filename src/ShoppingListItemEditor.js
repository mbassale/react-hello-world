/**
 * Created by mbassale on 19-01-17.
 */

import React, { Component } from 'react';
import {Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button} from 'react-bootstrap';

class ShoppingListItemEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstShown: true,
            grocery: ''
        };
        this.handleClick= this.handleClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        if (this.props.onSubmit) {
            this.props.onSubmit(this.state.grocery);
            this.setState({
                firstShown: true,
                grocery: ''
            });
        }
    }

    handleCancel(e) {
        e.preventDefault();
        if (this.props.onCancel) {
            this.props.onCancel();
        }
    }

    handleChange(e) {
        this.setState({
            firstShown: false,
            grocery: e.target.value
        });
    }

    getValidationState() {
        if (this.state.firstShown) {
            return null;
        }
        if (this.state.grocery.length < 3) {
            return 'error';
        }
        return 'success';
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form className="form-horizontal">
                        <FormGroup
                            controlId="formName"
                            validationState={this.getValidationState()}>
                            <ControlLabel className="col-md-4">Grocery Name</ControlLabel>
                            <div className="col-md-8">
                                <FormControl
                                    type="text"
                                    value={this.state.grocery}
                                    placeholder="Enter name..."
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback />
                                <HelpBlock>Please enter a grocery name (min: 3 characters).</HelpBlock>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <div className="col-md-offset-4 col-md-8">
                                <div className="pull-left">
                                    <Button className="btn btn-primary btn-sm" onClick={this.handleClick}>Add</Button>&nbsp;
                                    <Button className="btn btn-default btn-sm" onClick={this.handleCancel}>Cancel</Button>
                                </div>
                            </div>
                        </FormGroup>
                    </form>
                </div>
            </div>
        );
    }
}

export default ShoppingListItemEditor;