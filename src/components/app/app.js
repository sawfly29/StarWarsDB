import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import {SwapiServiceProvider, SwapiServiceContext} from '../swapi-service-context'
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";

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
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    applicationError: false,
  };

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
      getAllPlanets,
      getPlanet
    } = this.swapiService;

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
        <SwapiServiceProvider value = {this.swapiService}>
        <div>
          <Header />
          <PersonDetails itemId = {5} />
          <StarshipDetails itemId = {29} />
          <PlanetDetails itemId = {7} />
          <RandomPlanet />
          <Row leftColumn={personDetails} rightColumn={starshipDetails} />
          <PersonList onItemSelected={() => {}}>
            {(i) => `${i.name}`}
          </PersonList>
          <PlanetList onItemSelected={() => {}}>
            {(i) => `${i.name}`}
          </PlanetList>
          <StarshipList onItemSelected={() => {}}>
            {(i) => `${i.name}`}
          </StarshipList>
        </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
