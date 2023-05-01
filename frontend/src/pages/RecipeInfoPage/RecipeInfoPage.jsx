import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import RecipeInfo from "../../components/RecipeInfo/RecipeInfo";
import RecipeCommentForm from "../../components/RecipeCommentForm/RecipeCommentForm";

const RecipeInfoPage = () => {
    const {recipeIdMeal} = useParams();
    const [recipeInfo, setRecipeInfo] =useState(
        {
            "idMeal": "52772",
            "strMeal": "Teriyaki Chicken Casserole",
            "strDrinkAlternate": null,
            "strCategory": "Chicken",
            "strArea": "Japanese",
            "strInstructions": "Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!",
            "strMealThumb": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg",
            "strTags": "Meat,Casserole",
            "strYoutube": "https://www.youtube.com/watch?v=4aZr5hZXP_s",
            "strIngredient1": "soy sauce",
            "strIngredient2": "water",
            "strIngredient3": "brown sugar",
            "strIngredient4": "ground ginger",
            "strIngredient5": "minced garlic",
            "strIngredient6": "cornstarch",
            "strIngredient7": "chicken breasts",
            "strIngredient8": "stir-fry vegetables",
            "strIngredient9": "brown rice",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strIngredient16": null,
            "strIngredient17": null,
            "strIngredient18": null,
            "strIngredient19": null,
            "strIngredient20": null,
            "strMeasure1": "3/4 cup",
            "strMeasure2": "1/2 cup",
            "strMeasure3": "1/4 cup",
            "strMeasure4": "1/2 teaspoon",
            "strMeasure5": "1/2 teaspoon",
            "strMeasure6": "4 Tablespoons",
            "strMeasure7": "2",
            "strMeasure8": "1 (12 oz.)",
            "strMeasure9": "3 cups",
            "strMeasure10": "",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "strMeasure16": null,
            "strMeasure17": null,
            "strMeasure18": null,
            "strMeasure19": null,
            "strMeasure20": null,
            "strSource": null,
            "strImageSource": null,
            "strCreativeCommonsConfirmed": null,
            "dateModified": null
        }
    );
    const [comments, setComments] = useState({})
    const[user, token] = useAuth()

    const fetchRecipeInfo = async () => {
        try {
            let res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeIdMeal}`
            )
            setRecipeInfo(res.data.meals[0]);
            console.log(res.data)
        } catch (error) {
            console.log(error);
        }
    };
    const fetchComments = async () => {
        try {
            let res = await axios.get(
                `https://http://127.0.0.1:5000//api/recipes/${recipeIdMeal}`, {
                    headers: {
                        Authorization: "Bearer " + token,
                      }})
            setComments(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(() =>{
        fetchComments()
    }, [recipeIdMeal]);
    useEffect(() => {
        fetchRecipeInfo();
    }, [recipeIdMeal]);
    return ( 
        <div>
            <RecipeInfo recipeInfo={recipeInfo}  />
            <RecipeCommentForm recipeIdMeal={recipeIdMeal} fetchComments={fetchComments} />
        </div>
        

     );
}
 
export default RecipeInfoPage;