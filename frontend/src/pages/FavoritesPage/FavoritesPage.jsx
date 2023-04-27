import React from 'react'
import useAuth from "../../hooks/useAuth";

const FavoritesPage = () => {
    const [user, token] = useAuth();

    return ( 
        <h2>{user.username}'s Favorites</h2>
     );
}
 
export default FavoritesPage;