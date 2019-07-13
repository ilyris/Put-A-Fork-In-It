// import React, { Component } from 'react';
// import './App.css';
// import SearchBox from "./componets/SearchBox";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       searchfield: '',
//       recipes: []
//     }
//   }

// searchChange = event => {
//     this.setState({searchfield: event.target.value});
//   } 

// submitUsersRecipe = (event) =>  {
//     event.preventDefault();
//     return this.fetchApiCall();
//   }
// fetchApiCall = ()  => {
//     fetch(`https://api.edamam.com/search?q=${this.state.searchfield}&app_id=4298945d&app_key=ad5979247966b4cff1201bbc13ff7be6`)
//     .then( response =>  {
//       return response.json();

//     })
//     .then( recipes =>  {
//       console.log(recipes);
//       this.setState({recipes: recipes});
//     }
//       );
//   }
//   render() {
//     return (
//       <div>
//         <h1 id="companyName">Put A Fork In It</h1>
//         <SearchBox searchChange={this.searchChange} submitUsersRecipe={this.submitUsersRecipe}/>
//       </div>
//     );
//   }

//     }

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBox from "./componets/SearchBox";

const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [searchfield, setSearchField] = useState('');

  

  const fetchApiCall = async () => {
    const getResponse = await fetch(`https://api.edamam.com/search?q=${searchfield}&app_id=4298945d&app_key=ad5979247966b4cff1201bbc13ff7be6`);
    const data = await getResponse.json();
    setRecipes(data.hits);
  }

  const searchChange = event => {
    setSearchField(event.target.value);
  } 

  const submitUsersRecipe = (event) =>  {
    event.preventDefault();
    fetchApiCall();
  }

    return (
      <div>
        <h1 id="companyName">Put A Fork In It</h1>
        <SearchBox searchChange={searchChange} submitUsersRecipe={submitUsersRecipe}/>
      </div>
    );
    }

export default App;
