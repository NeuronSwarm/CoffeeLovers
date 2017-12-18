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
    this.labelStyle = { position: 'absolute', 
                        top: '30%',
                        left: '110%',
                        textTransform: 'uppercase',
                        fontSize: '28px',
                        fontWeight: 'bold',
                        textAlign: 'center'}
  }
// classes and title should be dynamic.  data should be recieved from server
  render() {
    return (
      <div className="panel1" style={ this.coffeeBackground }>
        <Today coffee={this.props.coffee} data= {this.props.data} type= {this.props.data.type} />
        <div style={ this.labelStyle }> {this.props.data.title}</div>
      </div>
    );
  }

}
;

const mapState = ({coffee}) => ({coffee});
export default connect(mapState)(Panel);