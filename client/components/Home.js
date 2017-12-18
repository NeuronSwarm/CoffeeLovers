import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Section from './Section';
import Graph from './Graph';
import Panel from './Panel';
import Container from './Container';
import Row from './Row';
import { getCoffeeIndex } from '../redux/reducers/coffee-api';

class Home extends Component {
  constructor(props){
    super(props);
    this.style = { fontSize: '36px',
                   margin: "10px 0",
                   marginLeft: "5%",
                   textTransform: 'capitalize' }
    var config = { lastDays: [] }; 
    this.graph1 = { id: "chart1", config}
    this.graph2 = { id: "chart2", config}
  }


  render() {
    return (
      <div>
        <Row graph = {this.graph1}/>
      </div>
    )
  }
  componentDidMount() {
    console.log("Home mounted");
  }
}

const mapState = ({coffee}) => ({coffee});
const mapDispatch = { getCoffeeIndex };
export default connect(mapState, mapDispatch)(Home);