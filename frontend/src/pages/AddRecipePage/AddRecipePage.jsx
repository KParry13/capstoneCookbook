import React from 'react'
import useAuth from "../../hooks/useAuth";

const AddRecipePage = () => {
    const [user, token] = useAuth();

    return ( 
        <h2>{user.username}'s Creations</h2>
     );
}
 
export default AddRecipePage;