import React from "react";



const FavoritesList = ({user, favorites}) => {
    
    
    
    return ( 
        <div>
            <div>{user.username}'s Favorites!</div>
            {favorites &&
            favorites.map((recipe) => (
            <p key={recipe.id}>
            <img src={recipe.thumbnail_url}></img> {recipe.name}
            </p>
        ))}
        </div>
     );
}
 
export default FavoritesList;