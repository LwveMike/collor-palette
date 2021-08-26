// node_modules imports
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// my imports
import Home from './views/Home';
import NewPallete from './views/NewPallete';
import SpecificPallete from './views/SpecificPallete';
import Pallete from './views/Pallete';

function App() {
  return (<>
  <Router>

    <Switch>
        <Route exact path='/'>
            <Home />
        </Route>

        <Route exact path='/pallete/new'>
            <NewPallete />
        </Route>
        
        <Route path='/pallete/:id'>
            <Pallete />
        </Route>

        <Route path='/specificcolor/:id'>
            <SpecificPallete />
        </Route>
    </Switch>
    </Router>
  </>
  );
}

export default App;
