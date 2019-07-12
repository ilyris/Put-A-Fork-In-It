import React from 'react';


const SearchBox = ({submitUsersRecipe, searchChange}) => {
    return(
        <div>
            <input type="search" placeholder="search recipe" onChange={searchChange} />
            <input type="submit" onClick={submitUsersRecipe}/>
        </div>

    );
}

export default SearchBox;