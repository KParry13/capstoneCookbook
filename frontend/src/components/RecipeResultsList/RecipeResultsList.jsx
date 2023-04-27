import React from 'react';
import { Link } from 'react-router-dom';

const RecipeResultsList = ({results}) => {
console.log(results);

    return ( 
        <div>
            <h4>Find What You're Looking For</h4>
            {results.map((meal, index) => (
                <Link key={index} to={`/recipe/${meal.id}`}>
                    <div >
                        <img src={meal.strMealThumb}></img>
                        <h3> {meal.strMeal} </h3>
                    </div>
                </Link>
            ))}
        </div>
     );
}
 
export default RecipeResultsList;