import React, {Component} from 'react';
import { connect } from 'react-redux';
import Container from './Container';
import SimpleButton from './SimpleButton';
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
          <SimpleButton />
        </div>
      </div>
    )
  }
}

const mapState = ({tasks}) => ({tasks});
const mapDispatch = {postNewCoffeeCup};
export default connect(mapState , mapDispatch)(CupUpdater);