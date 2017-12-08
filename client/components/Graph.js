import React, {Component} from 'react';
import { connect } from 'react-redux';
import createCharts from '../coffee-data'

class Graph extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <div className="header">
          <h2>Coffee Report</h2></div>
        <div className="charts-container">
          <div className="status-history">
            <h2>November             </h2></div>
          <div className="last-measurements">
            <div className="first">
              <canvas id="myChartA"></canvas></div>
            <div className="second">
              <canvas id="myChartB"></canvas></div></div></div></div>
    )
  }

  componentDidMount() {
    console.log("Graph Mounting");
    console.log(Chart);
    window.addEventListener('load', createCharts);
  }
}

const mapState = ({tasks}) => ({tasks});
export default connect(mapState)(Graph);