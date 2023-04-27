import React from 'react';
import { useState } from 'react';
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import RecipeResultsList from "../../components/RecipeResultsList/RecipeResultsList";


const SearchPage = ( ) => {
    const [searchByName, setSearchByName] = useState("");
    const [results, setResults] = useState([]);

    const fetchRecipesByName = async () => {
        try {
            let res = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchByName}`
            )
            setResults(res.data.meals);
            console.log(res.data.meals);
        } catch (error) {
            console.log(error.res.data);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchRecipesByName();
    };

    return ( 
        <div>
            <h2>Search for a Recipe</h2>
            <SearchBar searchByName={searchByName} setSearchByName={setSearchByName} handleSubmit={handleSubmit} />

            <RecipeResultsList results={results} />
        </div>
     );
}
 
export default SearchPage;