import React from 'react';
import { LocalForm, Control } from 'react-redux-form';
import { login} from '../../redux/reducers/coffee-api';

export default class SimpleForm extends React.Component {
  constructor(props){
    super(props)
    console.log(props.history)
  }
  handleChange(values) {  }
  handleUpdate(form) {  }
  handleSubmit(values) { login(values,
                         this.success,
                         () => {console.log('login failed')} )
                        }
  success(){
    location.replace('/')
  }
  render() {
    return (
      <LocalForm
        onUpdate={(form) => this.handleUpdate(form)}
        onChange={(values) => this.handleChange(values)}
        onSubmit={(values) => this.handleSubmit(values)}
      >
        <Control.text model=".username" />
        <Control.text model=".password" />
        {this.props.children}
      </LocalForm>
    );
  }
}