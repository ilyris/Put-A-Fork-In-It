import React from "react";
import "./App.css";
import Details from './componets/Details';
import Home from './componets/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Route exact path ="/" component={Home} />
      <Route path="/recipes/details" component={Details} />
    </Router>
  );
};


export default App;
