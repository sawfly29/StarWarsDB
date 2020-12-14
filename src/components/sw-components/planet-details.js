import React from "react";
import ItemDetails, { Record } from "../item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";


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



export default PlanetDetails;
