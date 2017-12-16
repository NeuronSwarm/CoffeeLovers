import React, {Component} from 'react';
import { connect } from 'react-redux';
import { postNewCoffeeCup} from '../redux/reducers/coffee-api';

class CupUpdater extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Add A Cup!</h2>
        <button className={'coffee-btn'} onClick= { postNewCoffeeCup } >
          <i className={'fa fa-plus' } ></i></button>
      </div>
    )
  }
}

export default CupUpdater;