import React, { Component } from 'react';
import Auth from '../Auth/Auth'
const auth = new Auth();


class CreateTrip extends Component {
  constructor(){
    super();

    this.state = {
      title: '',
      description: '',
      userGivenName: auth.getProfile().given_name
    }
  }
  updateTrip = (e) => {

    this.setState({[e.currentTarget.name]: e.currentTarget.value});

  }

  render(){
    console.log(this.props, ' this is props')
  return (
    <form onSubmit={this.props.addTrip.bind(this, this.state)}>
      <label>
        Trip:
        <input type="text" name="title" onChange={this.updateTrip}/>
      </label>



      
      <label>
        Description:
        <input type="text" name="description" onChange={this.updateTrip}/>
      </label>
      <input type='Submit'/>
    </form>

    )
  }
}

export default CreateTrip;