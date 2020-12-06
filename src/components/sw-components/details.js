import React from "react";
import SwapiService from "../../services/swapi-service";
import ItemDetails, { Record } from "../item-details";

const swapiService = new SwapiService();
const {
  getPerson,
  getStarship,
  getPlanet,
  getPersonImage,
  getStarshipImage,
  getPlanetImage
} = swapiService;

const PersonDetails = ({itemId}) => {
    return (      <ItemDetails
        itemId={itemId}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field="name" label="name" />
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="eyeColor" />
      </ItemDetails>)
};
const StarshipDetails = ({itemId}) => {
    return (      <ItemDetails
        itemId={itemId}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="passengers" label="Passengers" />
      </ItemDetails>)
};
const PlanetDetails = ({itemId}) => {
    return (      <ItemDetails
        itemId={itemId}
        getData={getPlanet}
        getImageUrl={getPlanetImage}
      >
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation period" />
        <Record field="diameter" label="Diameter" />
      </ItemDetails>)
};

export { PersonDetails, StarshipDetails, PlanetDetails };
