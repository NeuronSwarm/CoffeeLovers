import React, {Component} from 'react';
import {connect} from 'react-redux';
import Task from './Task';
import { getAllTasks } from '../redux/reducers/reducer';

class Section extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
  }
  render() {
    return (
      <section id="one" className="special flow">
        <header className="major">
          <h2>Let's get some work done!</h2>
        </header>
        {
          this.props.tasks && this.props.tasks.map((task) => {
            if (!task)
              return <div></div>
            return (
              <Task key={task._id} Obj={task} isComplete={task.metafields[0].value} Name={task.title}/>
            )
          })
        }
      </section>
    );
  }

}
;

const mapState = ({tasks}) => ({tasks});
export default connect(mapState)(Section);