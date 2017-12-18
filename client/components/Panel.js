import React, {Component} from 'react';
import {connect} from 'react-redux';
import Task from './Task';
import Today from './Today';
import config from '../config'

class Panel extends Component {
  constructor(props) {
    super(props)
    this.coffeeBackground = { background: `url(${config.site.url}/img/CoffeeCup_Plain.png)`,
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: '100% 100%',
                              height: '100%',
                              color: 'white',
                              }
    this.textStyle = { textTransform: 'uppercase',
                       fontSize: '14px'}
  }
// classes and title should be dynamic.  data should be recieved from server
  render() {
    //<div className='statistic-label'> {this.props.data.title}</div>
    return (
      <div className="panel1" style={ this.coffeeBackground }>
        <Today coffee={this.props.coffee} data= {this.props.data} type= {this.props.data.type} />
      </div>
    );
  }

}
;

const mapState = ({tasks}) => ({tasks});
export default connect(mapState)(Panel);