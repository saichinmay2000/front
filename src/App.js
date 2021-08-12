import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Form from './components/form/form'
import View from './components/show/show'


function App() {
  return (
    <Router browserHistory>
     <Switch>
      <Route exact path="/" component={Form} />
      <Route exact path="/view" component={View} />
     </Switch>
   </Router>
  );
}

export default App;
