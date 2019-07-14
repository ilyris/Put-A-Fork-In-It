import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import SearchBox from "./componets/SearchBox";
import Recipe from "./componets/Recipe";
import Details from './componets/Details';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';


const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchfield, setSearchField] = useState("");

  const fetchApiCall = async () => {
    const getResponse = await fetch(
      `https://api.edamam.com/search?q=${searchfield}&app_id=4298945d&app_key=ad5979247966b4cff1201bbc13ff7be6`
    );
    const data = await getResponse.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const searchChange = event => {
    setSearchField(event.target.value);
  };

  const submitUsersRecipe = event => {
    event.preventDefault();
    fetchApiCall();
  };

  return (
    <Router>
      <AppWrapper>
        <Title id="companyName">Put A Fork In It</Title>
        <SearchBox
          searchChange={searchChange}
          submitUsersRecipe={submitUsersRecipe}
        />
        <RecipeWrapper>
          {recipes.map(recipe => {
            return (
              <Recipe
                key={recipe.recipe.label}
                title={recipe.recipe.label}
                image={recipe.recipe.image}
              />
            );
          })}
        </RecipeWrapper>
      </AppWrapper>

      {/* <Route exact path ="/" component={App} /> */}
      <Route path="/recipes/details" component={Details} />

    </Router>

  );
};

const AppWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
  letter-spacing: 1px;
`;

const RecipeWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 50px;
`;
export default App;
