import React, { Component } from 'react'
import {connect} from 'react-redux'; 
import PropTypes from 'prop-types';
import { fetchRecipes } from '../actions/recipeAction';

class Menu extends Component {

    // constructor(props) {
    //     super(props);
    //     this.props.fetchRecipes();
    // }

    UNSAFE_componentWillMount(){
        this.props.fetchRecipes();
        console.log(typeof this.props.recipes)
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if (nextProps.newRecipe) {
            this.props.recipes.unshift(nextProps.newRecipe);
        }
    }

    render() {
        const menuItems = this.props.recipes.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.ingredients}</p>
                </div>
            )
        );
        return (
            <div>
                <h1>Menu</h1>
                {menuItems}
            </div>
        )
    }
}

Menu.propTypes = {
    fetchRecipes: PropTypes.func.isRequired,
    recipes: PropTypes.array.isRequired,
    newRecipe: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    recipes: state.recipes.items,
    newRecipe: state.recipes.item
})

export default connect(mapStateToProps, {fetchRecipes})(Menu);
