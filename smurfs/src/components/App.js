import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import { connect } from 'react-redux';

import { loadSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../actions';


class App extends Component {
  constructor() {
    super();
    this.state = {
      newSmurf: {
        name: '',
        age: '',
        height: '',
      }
    }
  }

  componentDidMount(){
    this.props.loadSmurfs();
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      newSmurf:{
        ...this.state.newSmurf,
        [e.target.name]: e.target.value
      }
    });
  };

  clearForm = () => {
    this.setState({
      newSmurf: {
        name: '',
        age: '',
        height: '',
      }
    })
  }

  addSmurf = () => {
    this.props.addSmurf(this.state.newSmurf);
    this.setState({
      newSmurf: {
        name: '',
        age: '',
        height: ''
      }
    })
  }

  deleteSmurf = id => {
    this.props.deleteSmurf(id)
  }

  updateSmurf = (smurf, id) => {
    if(!this.state.newSmurf.name || !this.state.newSmurf.age || !this.state.newSmurf.height){
      this.setState({
        newSmurf:{
          ...smurf
        }
      })
    } else {
      this.props.updateSmurf(this.state.newSmurf, id);
    }
  }


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => {
          return(
            <div className='smurf-card'>
              <h2>{smurf.name}</h2>
              <h4>{smurf.age}</h4>
              <h6>{smurf.height}cm  short</h6>
              <button onClick={() => this.deleteSmurf(smurf.id)}>Smite {smurf.name}</button>
              <button onClick={() => this.updateSmurf(smurf, smurf.id)}>Update {smurf.name}'s information</button>
            </div>
          )
        })}
        <form>
          <input placeholder='smurf name'
          onChange={this.handleChange}
          value={this.state.newSmurf.name}
          name="name"
          required="fill me out"
          />
          <input placeholder='age'
          onChange={this.handleChange}
          value={this.state.newSmurf.age}
          name="age"
          required="fill me out"
          />
          <input placeholder='height'
          onChange={this.handleChange}
          value={this.state.newSmurf.height}
          name="height"
          required="fill me out"
          />
        </form>
        <button onClick={this.addSmurf}>Add a New Smurf!</button>
        <button onClick={this.clearForm}>Clear Form</button>
      </div>
    );
  }
}

App.defaultProps = {
  smurfs: []
};

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
};

export default connect(
  mapStateToProps,
  {loadSmurfs, addSmurf, deleteSmurf, updateSmurf }
)(App);
