import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import {SwapiServiceProvider} from '../swapi-service-context'
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import DummySwapiService from '../../services/dummy-swapi-service'
import {PeoplePage, PlanetsPage, StarshipPage} from '../pages'

import "./app.css";
//import ItemList from "../item-list/item-list";
import {
  PersonList,
  StarshipList,
  PlanetList,
  PersonDetails,
  StarshipDetails,
  PlanetDetails,
} from "../sw-components";

class App extends React.Component {
 // swapiService = new SwapiService();
 // dummySwapiService = new DummySwapiService();


  state = {
    showRandomPlanet: true,
    applicationError: false,
    swapiService: new SwapiService()
  };

 onServiceChange = () =>{
  this.setState(({swapiService}) => {
    const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
   // console.log('swserv ', Service.name)
    return {swapiService: new Service()}
  })
}

  componentDidCatch() {
    console.log("app catched error");
    this.setState({ applicationError: true });
  }

  render() {
    if (this.state.applicationError) {
      return <ErrorIndicator />;
    }


    const {
      getPersonImage,
      getStarshipImage,
      getPerson,
      getStarship,
    } = this.state.swapiService;

    const personDetails = (
      <ItemDetails itemId={6} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="gender" />
        <Record field="eyeColor" label="eye color" />
      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="passengers" label="Passengers" />
      </ItemDetails>
    );
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value = {this.state.swapiService}>
        <div>
          <Header onServiceChange = {this.onServiceChange}/>
          <PersonDetails itemId = {5} />
          <RandomPlanet />
        <PlanetsPage/>
 
         <StarshipPage />
        </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
