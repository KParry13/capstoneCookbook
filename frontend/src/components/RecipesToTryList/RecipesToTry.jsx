import React from 'react';


const RecipesToTry = ({user, toTry} ) => {


    return ( 
        <div>
            <h2>{user.username}'s Creations To Try</h2>
            {toTry && toTry.map((recipe) => (
                <p key={recipe.id}>
                    <img src={recipe.thumbnail_url}></img>
                    {recipe.name}
                </p>
            ))}
        </div>
     );
}
 
export default RecipesToTry;