import React from 'react';


const Recipe = ({title, image}) => {
    return(
        <div>
            <div className="recipeContainer">
                <h2>{title}</h2>
                <img src={image}/>
            </div>
        </div>

    );
}

export default Recipe;