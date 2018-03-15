import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import UserDetails from './UserDetails';
import validator from 'validator';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};


class Form extends Component{
  constructor(){
    super();

    this.state = {
      data : {
         fname : '',
         lname : '',
         email : '',
         password : '',
         gender : 'Female'

    },
    value : 1,
    errors : {},
    success : false
  };
    // this.baseState = this.state.data;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const data = {...this.state.data};
    data[name] = value;
    this.setState(
      {data});
      console.log(data);
  }

  handleValueChange = (event, index, value) => this.setState({value});



  handleSubmit(e){
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length === 0){
    e.preventDefault();
    this.setState({success : true});
  }
}

  validate(data){
    const errors = {};
    if(!data.fname){
      errors.fname = "First name can't be blank";
    }
    else if(!validator.isAlpha(data.fname)){
      errors.fname = "First Name should only contain letters";
    }
    if(!data.lname) {
      errors.lname = "Last name can't be blank";
    }
    else if(!validator.isAlpha(data.fname)){
      errors.lname = "Last Name should only contain letters";
    }

    if(!data.email) {
      errors.email = "Email can't be left blank";
    }
    else if(!validator.isEmail(data.email)){
      errors.email = "Invalid Email";
    }

    if(!data.password) {
      errors.password = "Password can't be blank";
    }
    else if(data.password.length < 6) {
      errors.password = "Password must contain more than 6 characters";
    }

    return errors;
  }
  render(){
    const {errors,data,success,value} = this.state;
    return(
      <div className = "container">
      <div className = "row">
      <div className = "col-sm-6 offset-sm-3">
      <MuiThemeProvider>

    {(!success)?  (<React.Fragment>
       <TextField
        name = "fname"
        floatingLabelText = "Enter your First Name"
        floatingLabelFixed={true}
        value = {data.fname}
        onChange = {this.handleChange}
        errorText = {errors.fname} />
        <br/> <br />

        <TextField
        name = "lname"
        floatingLabelText = "Enter your Last Name"
        floatingLabelFixed={true}
        value = {data.lname}
        onChange = {this.handleChange}
        errorText = {errors.lname}/>

        <br/> <br/>

        <TextField
        name = "email"
        type = "email"
        floatingLabelText = "Enter your Email"
        floatingLabelFixed={true}
        value = {data.email}
        onChange = {this.handleChange}
        errorText = {errors.email}/>

        <br/><br/>

        <TextField
        name = "password"
        type = "password"
        floatingLabelText = "Enter your Password"
        floatingLabelFixed = {true}
        value = {data.password}
        onChange = {this.handleChange}
        errorText = {errors.password}
        />

        <RadioButtonGroup name = "gender" defaultSelected = "Female"
        onChange ={this.handleChange}>
          <RadioButton
            value = "Female"
            label = "Female"
            style = {styles.radioButton}
            />
          <RadioButton
            value = "Male"
            label = "Male"
            style = {styles.radioButton}
            />
        </RadioButtonGroup>
        <br/>

        <SelectField
        floatingLabelText = "Profession"
        floatingLabelFixed = {true}
        value = {value}
        onChange = {this.handleValueChange}>

            <MenuItem value = {1} primaryText = "Student" />
            <MenuItem value = {2} primaryText = "Govt. Official" />
            <MenuItem value = {3} primaryText = "Self Employed" />
            <MenuItem value = {4} primaryText = "Private" />
            <MenuItem value = {5} primaryText = "Others" />

        </SelectField>
        <br/>

        <FlatButton label = "Submit" primary = {true} onClick = {this.handleSubmit}/>
        </React.Fragment>
      )

        :(<UserDetails data = {data} profession = {value}/> ) }

      </MuiThemeProvider>
      </div>
      </div>
      </div>
    );
  }

}
export default Form;
