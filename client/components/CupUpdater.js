import React, {Component} from 'react';
import { connect } from 'react-redux';
import Container from './Container';
import { postNewCoffeeCup} from '../redux/reducers/coffee-api';

class CupUpdater extends Component {
  constructor(props){
    super(props);
  }

  SetPageHeight(){
    return {height: window.innerHeight}
  }
  render() {
    return (
      <div className={'mobile-container'} style={ this.SetPageHeight() }>
        <div>
          <div>
            <h2>Add A Cup!</h2>
            <button className={'coffee-btn'} onClick= { postNewCoffeeCup } >
              <i className={'fa fa-plus' } ></i></button>
          </div>
        </div>
      </div>
    )
  }
}

const mapState = ({tasks}) => ({tasks});
const mapDispatch = {postNewCoffeeCup};
export default connect(mapState , mapDispatch)(CupUpdater);