import React from 'react'

const SearchBar = ({searchByName = "", setSearchByName, 
            searchByFirstLetter = "", setSearchByFirstLetter,
            searchByMainIngredient = "", setSearchByMainIngredient,
            searchByFoodCategory = "", setSearchByFoodCategory,
            searchByFoodEthnicity = "", setSearchByFoodEthnicity,
            handleSubmitByName, handleSubmitByFirstLetter, handleSubmitByMainIngredient,
            handleSubmitByFoodCategory, handleSubmitByFoodEthnicity,
            handleSubmitRandom, searchByRandom ="", setSearchByRandom}) => {


    return ( 
        <div className='container-1'>
            <h2>Search for a Recipe</h2>
            <form onSubmit={(e) => handleSubmitByName(e)} className="searchForm">
                <input type="text" placeholder="By Name" value={searchByName} onChange={(e) => setSearchByName(e.target.value)} />
                <button type="submit">Go</button>
            </form> 
            <form onSubmit={(e) => handleSubmitByFirstLetter(e)} className="searchForm">
                <input type="text" placeholder="By First Letter" value={searchByFirstLetter} onChange={(e) => setSearchByFirstLetter(e.target.value)} />
                <button type="submit">Go</button>
            </form>
            <form onSubmit={(e) => handleSubmitByMainIngredient(e)} className="searchForm">
                <input type="text" placeholder="By Main Ingredient" value={searchByMainIngredient} onChange={(e) => setSearchByMainIngredient(e.target.value)} />
                <button type="submit">Go</button>
            </form>
            <form onSubmit={(e) => handleSubmitByFoodCategory(e)} className="searchForm">
                <input type="text" placeholder="By Food Category" value={searchByFoodCategory} onChange={(e) => setSearchByFoodCategory(e.target.value)} />
                <button type="submit">Go</button>
            </form>
            <form onSubmit={(e) => handleSubmitByFoodEthnicity(e)} className="searchForm">
                <input type="text" placeholder="By Food Ethnicity" value={searchByFoodEthnicity} onChange={(e) => setSearchByFoodEthnicity(e.target.value)} />
                <button type="submit">Go</button>
            </form>
            <h4>Don't Know What You're Looking for?</h4>
            <form onSubmit={(e) => handleSubmitRandom(e)} className="searchForm">
            <button type="submit" value={searchByRandom} onChange={(e) => setSearchByRandom(e.target.value)}>Click Me!</button>
            </form>
        </div>
     );
}
 
export default SearchBar;