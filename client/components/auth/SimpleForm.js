import React from 'react';
import { LocalForm, Control } from 'react-redux-form';
import { login} from '../../redux/reducers/coffee-api';

export default class SimpleForm extends React.Component {
  handleChange(values) { console.log(values)  }
  handleUpdate(form) { console.log(form) }
  handleSubmit(values) { console.log(values) }
  render() {
    return (
      <LocalForm
        onUpdate={(form) => this.handleUpdate(form)}
        onChange={(values) => this.handleChange(values)}
        onSubmit={(values) => this.handleSubmit(values)}
      >
        <Control.text model=".username" />
        <Control.text model=".password" />
      </LocalForm>
    );
  }
}