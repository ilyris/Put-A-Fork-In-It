import React from "react";
import "./App.css";
import Details from './componets/Details';
import Home from './componets/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Switch>

      </Switch>
      <Route exact path ="/" component={Home} />
      <Route path="/recipes/:id" component={Details} />
    </Router>
  );
};


export default App;
