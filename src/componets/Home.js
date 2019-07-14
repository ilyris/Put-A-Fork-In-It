
import styled from "styled-components";
import SearchBox from "./SearchBox";
import Recipe from "./Recipe";
import React, { useState} from "react";

const Home = () => {
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

  return(
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
  )
}
export default Home;



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