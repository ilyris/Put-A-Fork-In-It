import React, { useState } from 'react';
import './App.css';
import SearchBox from "./componets/SearchBox";

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [searchfield, setSearchField] = useState('');

  const searchChange = event => {
    setSearchField({searchfield: event.target.value});
  } 

  const submitUsersRecipe = (event) =>  {
    event.preventDefault();
    fetchApiCall();
  }
  const fetchApiCall = ()  => {
    fetch(`https://api.edamam.com/search?q=${searchfield}&app_id=4298945d&app_key=ad5979247966b4cff1201bbc13ff7be6`)
    .then( response =>  {
      return response.json();

    })
    .then( recipes =>  {
      console.log(recipes);
      setRecipes({recipes: recipes});
    }
      );
  }
    return (
      <div>
        <h1 id="companyName">Put A Fork In It</h1>
        <SearchBox searchChange={searchChange} submitUsersRecipe={submitUsersRecipe}/>
      </div>
    );
    }

export default App;
