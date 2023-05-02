import React from 'react';
import { useState } from 'react';
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeResultsList from "../../components/RecipeResultsList/RecipeResultsList";
import RecipesToTry from "../../components/RecipesToTryList/RecipesToTry";

const SearchPage = ( ) => {
    const [searchByName, setSearchByName] = useState("");
    const [searchByFirstLetter, setSearchByFirstLetter] = useState("");
    const [searchByMainIngredient, setSearchByMainIngredient] = useState("");
    const [searchByFoodCategory, setSearchByFoodCategory] = useState("");
    const [searchByFoodEthnicity, setSearchByFoodEthnicity] = useState("");
    const [searchByRandom, setSearchByRandom] = useState("");
    const [results, setResults] = useState([]);


    const fetchRecipesByName = async () => {
        try {
            let res = await axios.get(
                // using the or || with the http links will work to fix the multiple search bars
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchByName}`
            )
            setResults(res.data.meals);
            console.log(res.data.meals);
        } catch (error) {
            console.log(error.res.data);
        }
    };
    const fetchRecipesByFirstLetter = async () => {
        try {
            let res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchByFirstLetter}`
            )
            setResults(res.data.meals);
            console.log(res.data.meals);
        } catch (error) {
            console.log(error.res.data);
        }
    };
    const fetchRecipesByMainIngredient = async () => {
        try {
            let res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchByMainIngredient}`
            )
            setResults(res.data.meals);
            console.log(res.data.meals);
        } catch (error) {
            console.log(error.res.data);
        }
    };
    const fetchRecipesByFoodCategory = async () => {
        try {
            let res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchByFoodCategory}`
            )
            setResults(res.data.meals);
            console.log(res.data.meals);
        } catch (error) {
            console.log(error.res.data);
        }
    };
    const fetchRecipesByFoodEthnicity = async () => {
        try {
            let res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchByFoodEthnicity}`
            )
            setResults(res.data.meals);
            console.log(res.data.meals);
        } catch (error) {
            console.log(error.res.data);
        }
    };
    const fetchRandom = async () => {
        try {
            let res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/random.php${searchByRandom}`
            )
            setResults(res.data.meals);
            console.log(res.data.meals);
        } catch (error) {
            console.log(error.res.data);
        }
    };

    const handleSubmitByName = (e) => {
        e.preventDefault();
        fetchRecipesByName();
    };
    const handleSubmitByFirstLetter = (e) => {
        e.preventDefault();
        fetchRecipesByFirstLetter();
    };
    const handleSubmitByMainIngredient = (e) => {
        e.preventDefault();
        fetchRecipesByMainIngredient();
    };
    const handleSubmitByFoodCategory = (e) => {
        e.preventDefault();
        fetchRecipesByFoodCategory();
    };
    const handleSubmitByFoodEthnicity = (e) => {
        e.preventDefault();
        fetchRecipesByFoodEthnicity();
    };
    const handleSubmitRandom = (e) => {
        e.preventDefault();
        fetchRandom();
    };
    

    return ( 
        <div>
            <h2>Search for a Recipe</h2>
            <SearchBar 
                searchByName={searchByName} setSearchByName={setSearchByName}  
                searchByFirstLetter={searchByFirstLetter} setSearchByFirstLetter={setSearchByFirstLetter}
                searchByMainIngredient={searchByMainIngredient} setSearchByMainIngredient={setSearchByMainIngredient} 
                searchByFoodCategory={searchByFoodCategory} setSearchByFoodCategory={setSearchByFoodCategory} 
                searchByFoodEthnicity={searchByFoodEthnicity} setSearchByFoodEthnicity={setSearchByFoodEthnicity} 
                searchByRandom={searchByRandom} setSearchByRandom={setSearchByRandom} 
                handleSubmitByName={handleSubmitByName} handleSubmitByFirstLetter={handleSubmitByFirstLetter}
                handleSubmitByMainIngredient={handleSubmitByMainIngredient} handleSubmitByFoodCategory={handleSubmitByFoodCategory}
                handleSubmitByFoodEthnicity={handleSubmitByFoodEthnicity} handleSubmitRandom={handleSubmitRandom}
                 />
            <RecipesToTry results={results} />
            <RecipeResultsList results={results}  />
        </div>
     );
}
 
export default SearchPage;