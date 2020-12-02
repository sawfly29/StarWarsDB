import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";

import ErrorIndicator from "../error-indicator";

import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";

import "./app.css";
import ItemList from "../item-list/item-list";

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
      <div>
        <Header />
        <RandomPlanet />
        <Row leftColumn={personDetails} rightColumn={starshipDetails} />
    <ItemList getData={getAllPlanets} onItemSelected = {()=>{}}>{(i) => (`${i.name}`)}</ItemList>
      </div>
    );
  }
}

export default App;
