import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddRecipe from '../../components/AddRecipe/AddRecipe';
import useAuth from "../../hooks/useAuth";
import UserSubmittedList from "../../components/UserSubmittedList/UserSubmittedList";

const AddRecipePage = () => {
    const [user, token] = useAuth();
    const [userSubmitted, setUserSubmitted] = useState({})

    const fetchUserRecipes = async () => {
        try {
            let res = await axios.get(
                'http://127.0.0.1:5000/api/recipes' )
                setUserSubmitted(res.data)
                console.log(res.data)
        } catch (error) {
            console.log(error.res.data)
        }
    };

    useEffect(() => {
    fetchUserRecipes()
    }, []);

    return (
        <div>
            <h2>Your Creations</h2>
            <AddRecipe  fetchUserRecipes={fetchUserRecipes} />
            <UserSubmittedList userSubmitted={userSubmitted}  />
        </div>
     );
}
 
export default AddRecipePage;