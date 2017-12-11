import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import Home from './Home';
import CupUpdater from './CupUpdater';
import { getAllTasks } from '../redux/reducers/reducer';



const m_routes = {
  path: '/',
  onEnter: getAllTasks
}
const Routes = ({getAllTasks}) => {
  return (
    <Router history={browserHistory} >
      <Route exact path= '/' component= {Home} onEnter={getAllTasks}/>
      <Route path= '/react-app' component= {Home} onEnter={getAllTasks}/>
      <Route path= '/coffee-update' component= {CupUpdater} />
    </Router>
  )
};

const mapState = ({tasks}) => ({tasks});
const mapDispatch = {getAllTasks};

export default connect(mapState, mapDispatch)(Routes);