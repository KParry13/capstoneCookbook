import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeResultsList.css'

const RecipeResultsList = ({results }) => {
console.log(results);

    return ( 
        <div>
            <h4>Find Results Here</h4>
            {results.map((recipe, index) => (
                <Link key={index} to={`/recipe/${recipe.idMeal}`}>
                    <div >
                        <img src={recipe.strMealThumb}></img>
                        <h3> {recipe.strMeal} </h3>
                    </div>


                    
                </Link>
            ))}
        </div>
     );
}
 
export default RecipeResultsList;