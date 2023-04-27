// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";

// const RecipeInfoPage = () => {
//     const {recipeId} = useParams();
//     const [recipeInfo, setRecipeInfo] =useState();

//     const fetchRecipeInfo = async () => {
//         try {
//             let res = await axios.get(
//                 `https://www.themealdb.com/meal.php?c=${recipeId}`
//             )
//             setRecipeInfo(response.data);

//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (  );
// }
 
// export default RecipeInfoPage;