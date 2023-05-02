import React from 'react';

const RecipesToTry = ({ toTry, fetchDeleteRecipe} ) => {

    return ( 
        <div>
            <div>
                <h2>Creations To Try</h2>
                {toTry && toTry.map((recipe) => (
                    <p key={recipe.id}>
                        <img src={recipe.thumbnail_url}></img>
                        {recipe.name}
                
                    <button onClick={() => fetchDeleteRecipe(recipe.id)}>Delete</button>
                    </p>
                ))}

            </div>
            <div>


            </div>
        </div>
     );
}
 
export default RecipesToTry;
