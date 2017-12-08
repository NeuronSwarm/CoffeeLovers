import React, {Component} from 'react';
import {connect} from 'react-redux';
import Task from './Task';

class Panel extends Component {
  constructor(props) {
    super(props)
  }
// classes and title should be dynamic.  data should be recieved from server
  render() {
    return (
      <div className="panel1">
        <header className="major">
          <h2> {this.props.data.title}</h2>
        </header>
        <div className= {this.props.data.class}> 5 </div>
      </div>
    );
  }

}
;

const mapState = ({tasks}) => ({tasks});
export default connect(mapState)(Panel);