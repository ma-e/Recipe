import { FETCH_RECIPES, NEW_RECIPES } from './types';

export const fetchRecipes = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(recipes => dispatch({
        type:FETCH_RECIPES,
        payload: recipes
        })       
    );
};

export const createRecipes = (recipeData) => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method:'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(recipeData)
    })
    .then(res => res.json())
    .then(recipe =>
        dispatch({
            type: NEW_RECIPES,
            payload: recipe
        })
    );
};


