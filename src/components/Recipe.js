import React from "react";
import PropTypes from "prop-types";
import RecipeInfo from "./RecipeInfo";


const Recipe = ({ recipe }) => {
    
    const {name, time, servings, calories, difficulty, image} = recipe;

    return (
        <div>
            <img src={image} alt={name}/>
            <h3>{name}</h3>
            <RecipeInfo text={`Time: ${time} min`}/>
            <RecipeInfo text={`servings: ${servings}`}/>
            <RecipeInfo text={`calories: ${calories}`}/>
            <RecipeInfo text={`difficulty: ${difficulty}`}/>
        </div>
    );

};

Recipe.propTypes = {
    recipe: PropTypes.shape({
        name: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        servings: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        difficulty: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default Recipe;