import React, { Component } from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import ErrorBoundry from '../error-boundry';
import SwapiService from "../../services/swapi-service";
import Row from '../row'

import "./people-page.css";



export default class PeopleList extends Component {
  swapiService = new SwapiService();
  onPersonSelected = (id) => {
    this.setState({ selectedPerson: id });
  };

  state = {
    selectedPerson: 2,
  };

  render() {
    const itemList = (
      <ErrorBoundry>
        <ItemList
          getData={this.swapiService.getAllPeople}
          onItemSelected={this.onPersonSelected}
        >
          {(i) => `${i.name}, ${i.birthYear}`}
        </ItemList>
      </ErrorBoundry>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails personId={this.state.selectedPerson}/>
      </ErrorBoundry>
    );

    return (
      <ErrorBoundry>
        <Row leftColumn={itemList} rightColumn={personDetails} />
      </ErrorBoundry>
    );
  }
}


