import React from "react";
//import SwapiService from "../../services/swapi-service";
import ItemDetails, { Record } from "../item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";


const PersonDetails = ({itemId}) => {
    return (     
      <SwapiServiceConsumer>
        {({getPerson, getPersonImage}) => { return (
              <ItemDetails
              itemId={itemId}
              getData={getPerson}
              getImageUrl={getPersonImage}
            >
              <Record field="name" label="name" />
              <Record field="gender" label="Gender" />
              <Record field="eyeColor" label="eyeColor" />
            </ItemDetails>
        )}}
      </SwapiServiceConsumer>
  )
};
const StarshipDetails = ({itemId}) => {
    return ( 
      <SwapiServiceConsumer>
        {({getStarship, getStarshipImage}) => {<ItemDetails
        itemId={itemId}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="passengers" label="Passengers" />
      </ItemDetails>}}
      </SwapiServiceConsumer>
      )
};
const PlanetDetails = ({itemId}) => {
    return (
      <SwapiServiceConsumer>
        {(getPlanet, getPlanetImage) => {<ItemDetails
        itemId={itemId}
        getData={getPlanet}
        getImageUrl={getPlanetImage}
      >
        <Record field="population" label="Population" />
        <Record field="rotationPeriod" label="Rotation period" />
        <Record field="diameter" label="Diameter" />
      </ItemDetails>}}
      </SwapiServiceConsumer>
      )
};


export { PersonDetails, StarshipDetails, PlanetDetails };
