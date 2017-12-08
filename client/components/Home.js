import React, {Component} from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import Section from './Section';
import Graph from './Graph';
import Panel from './Panel';

class Home extends Component {
  constructor(props){
    super(props);
    this.m_data= { title: "Today's Cups", data: { class: 'cups-today' }}
  }

  render() {
    return (
      <div>
        <Header />
        <Panel data = { this.m_data } />
        <Section />
        <Graph />
      </div>
    )
  }
  componentDidMount() {
    console.log("Home mounted");
  }
}

const mapState = ({tasks}) => ({tasks});
export default connect(mapState)(Home);