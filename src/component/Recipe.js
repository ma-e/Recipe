import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipes } from '../actions/recipeAction';
import PropTypes from 'prop-types';

class Recipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ingredients: '',
        }
    }

    onChange = e => { 
        this.setState(
            { [e.target.name]: e.target.value }
        ); 
    }

    onSubmit = e => {
        e.preventDefault();
        const item = {
            name: this.state.name,
            ingredients: this.state.ingredients
        };
        this.props.createRecipes(item);
    }

    render() {
        return (
            <div>
                <h1>Add Item</h1>
                <hr />
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Name:</label><br />
                        <input 
                            type="text" 
                            name='name' 
                            value={this.state.name} 
                            onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label>Ingredients:</label><br />
                        <textarea 
                            name="ingredients" 
                            value={this.state.ingredients}
                            onChange={this.onChange}
                        />
                    </div>
                    <br />
                    <button type='submit'>Submit</button>
                    <br />
                </form>
                <hr />
            </div>
        )
    }
}

Recipe.propTypes = {
    createRecipes: PropTypes.func.isRequired
}

export default connect(null, { createRecipes })(Recipe);