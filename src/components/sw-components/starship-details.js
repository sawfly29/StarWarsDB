import React from "react";
import ItemDetails, { Record } from "../item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";

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



export default StarshipDetails;
