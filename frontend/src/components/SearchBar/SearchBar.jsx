import React from 'react'

const SearchBar = ({searchByName = "", setSearchByName, handleSubmit}) => {


    return ( 
        <form onSubmit={(e) => handleSubmit(e)} className="searchForm">
            <input type="text" value={searchByName} onChange={(e) => setSearchByName(e.target.value)} />
            <button type="submit">Go</button>
        </form> 
     );
}
 
export default SearchBar;