import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";

const RecipeInfoPage = () => {
    const {recipeIdMeal} = useParams();
    const [recipeInfo, setRecipeInfo] =useState();

    const fetchRecipeInfo = async () => {
        try {
            let res = await axios.get(
                `https://www.themealdb.com/meal.php?c=${recipeIdMeal}`
            )
            setRecipeInfo(res.data);
            console.log(res.data)

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchRecipeInfo();
    }, [recipeIdMeal])
    return ( 
        <div>
            <RecipeInfo recipeInfo={recipeInfo}  />
            
        </div>
        

     );
}
 
export default RecipeInfoPage;