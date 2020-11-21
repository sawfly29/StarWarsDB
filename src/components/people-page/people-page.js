import React, { Component } from 'react';
import ItemList from '../item-list'
import PersonDetails from '../person-details'
import ErrorIndicator from '../error-indicator'
import './people-page.css';


export default class PeopleList extends Component {
  onPersonSelected = (id)=>{
    this.setState({selectedPerson: id})
  }

  state = {
    selectedPerson: 2,
    applicationError: false
  }

  componentDidCatch(){
    console.log('erroooor')
    this.setState({applicationError: true})
  }

  render(){  
    if (this.ErrorIndeicator){return <ErrorIndicator />}
    return(
    <div className="row mb2">
    <div className="col-md-6">
      <ItemList onItemSelected={this.onPersonSelected}/>
    </div>
    <div className="col-md-6">
      <PersonDetails personId = {this.state.selectedPerson}/>
    </div>
  </div>
  )}

  
}
