import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddRecipe from '../../components/AddRecipe/AddRecipe';
import useAuth from "../../hooks/useAuth";
import MyRecipesList from '../../components/MyRecipesList/MyRecipesList';

const AddRecipePage = () => {
    const [user, token] = useAuth();
    const [userRecipe, setUserRecipe] = useState([])

    const fetchUserRecipes = async () => {
        try {
            let res = await axios.get(
                'http://127.0.0.1:5000/api/user_recipe', {
                    headers: {
                        Authorization: "Bearer " + token,
                      },
                })
                setUserRecipe(res.data)
                console.log(res.data)
        } catch (error) {
            console.log(error.res.data)
        }
    };

    // async function putEditRecipe() {
    //     try {
    //         let res = await axios.put(`http://127.0.0.1:5000/api/recipes/${id}`, {
    //             headers: {
    //                 Authorization: "Bearer " + token,
    //               },
    //         })
    //         setUserRecipe(res.data)
    //         console.log(res.data)
    //     } catch (error) {
    //         console.log(error.res.data)
    //     }
    // };

    useEffect(() => {
    fetchUserRecipes()
    }, []);

    return (
        <div>
            <h2>Your Creations</h2>
            <AddRecipe  userRecipe={userRecipe} fetchUserRecipes={fetchUserRecipes} />
            <MyRecipesList userRecipe={userRecipe}  />
        </div>
     );
}
 
export default AddRecipePage;