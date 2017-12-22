import React, {Component} from 'react';
import { connect } from 'react-redux';
import Panel from './Panel';
import Container from './Container';
import Container_Row from './Container_Row';
import store from '../redux/store';
import Absolute from './Absolute';
import Widget from '../lib/widget'

class Home extends Component {
  constructor(props){
    super(props);
    var widget  = this.widget = new Widget(coffeeConfig);
    this.m_data = widget.style()
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
    this.widget.fetchData()(store.dispatch)
  }
}

const mapState = ({coffee}) => ({coffee});
const mapDispatch = { fetchData: (new Widget(coffeeConfig)).fetchData };
export default connect(mapState, mapDispatch)(Home);