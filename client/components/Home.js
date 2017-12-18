import React, {Component} from 'react';
import { connect } from 'react-redux';
import Panel from './Panel';
import Container from './Container';
import Container_Row from './Container_Row';
import { getCoffeeIndex, getLastDays } from '../redux/reducers/coffee-api';
import store from '../redux/store';
import Absolute from './Absolute';

class Home extends Component {
  constructor(props){
    super(props);
    this.m_data= { title: "Today's Cups",
                   type: "TODAY",
                   cups: 'cups-today',
                   container: 'title-container',
                   cupCount: 5}
    this.drink_data= { title: "Last Cup",
                   type: "LAST_CUP",
                   cups: 'cups-today',
                   container: 'title-container',
                   time: '6:02pm'}
  }

  render() {
    return (
      <div>
        <Absolute>
          <Container_Row>
            <Panel data = { this.m_data } coffee = { this.props.coffee } />
          </Container_Row>
        </Absolute>
      </div>
    )
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }
  componentDidMount() {
    console.log("Home mounted");
    getCoffeeIndex()(store.dispatch)
  }
}

const mapState = ({coffee}) => ({coffee});
const mapDispatch = { getCoffeeIndex };
export default connect(mapState, mapDispatch)(Home);