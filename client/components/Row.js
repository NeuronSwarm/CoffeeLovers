import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Section from './Section';
import Graph from './Graph';
import Panel from './Panel';
import Container from './Container';
import Container_Row from './Container_Row';
import Row from './Row';
import { getAllTasks } from '../redux/reducers/reducer';

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
        <Container_Row>
          <Container>
            <Panel data = { this.m_data } />
            <Panel data = { this.drink_data } />
          </Container>
          <Container chart = {true}>
            <Graph id = {this.props.graph.id}/>
          </Container>
        </Container_Row>
      </div>
    )
  }
  componentDidMount() {
    console.log("Home mounted");
    getAllTasks();
  }
}

const mapState = ({tasks}) => ({tasks});
const mapDispatch = {getAllTasks};
export default connect(mapState, mapDispatch)(Home);