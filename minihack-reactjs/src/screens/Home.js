import React, { Component } from 'react';
import Form from '../components/Form';


class Home extends Component {
    
  render() {
    return (
        <Form startPlaying={this.props.startPlaying} name = {this.props.name} updateName = {this.props.updateName}/>
    );
  }
}

export default Home;