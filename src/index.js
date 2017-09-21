import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import registerServiceWorker from './registerServiceWorker';

// IMPORT REACT ROUTER
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// IMPORT COMPONENTS
import Explorer from './components/Explorer.js';
import People from './components/People.js';
import Starships from './components/Starships.js';
import Films from './components/Films.js';
import BaseLayout from './components/Layout.js';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <div>
        {/* <nav>
          <NavLink activeClassName="selected" className="nav-link" exact to="/">SWAPI Explorer</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/Characters">Characters</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/Starships">Starships</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/Films">Films</NavLink>
        </nav> */}

        <Switch>
          <Route exact path="/" component={Explorer} />
          <Route exact path="/Explorer" component={Explorer} />
          <Route path="/Starships" component={Starships}/>
          <Route path="/Films" component={Films}/>
          <Route path="/Characters" component={People}/>
        </Switch>
      </div>
    </BaseLayout>
  </BrowserRouter>

        /* >>>>>>>>>>>>>>>>>>>>>
          Add a router components with routes to:
          Explorer. Use an exact path to "/"
          Starships
          Films
          People
          <<<<<<<<<<<<<<<<<<<<<<
          */


,document.getElementById('root'));
registerServiceWorker();
