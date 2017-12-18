import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import Home from './Home';
import Singularity from './Singularity';
import Login from './auth/Login';
import CupUpdater from './CupUpdater';
import NodeManager from '../lib/node-manager'
import { getCoffeeIndex } from '../redux/reducers/coffee-api';



const m_routes = {
  path: '/'
}
var routeLoader;
if(NodeManager.loggedIn())
  console.log('true')//routeLoader = <Route exact path= '*' component= {Home} onEnter={getCoffeeIndex}/> ;
else
  console.log('false')//routeLoader = <Route exact path= '*' component= {Login} /> ;
routeLoader = <Route exact path= '*' component= {Login} /> ;

const Routes = ({getCoffeeIndex}) => {

  console.log(routeLoader)

  return (
    <Router history={browserHistory} >
      <Route path= '*' component= {Home} />
    </Router>
  )
};

const mapState = ({coffee}) => ({coffee});
const mapDispatch = {getCoffeeIndex};

export default connect(mapState, mapDispatch)(Routes);