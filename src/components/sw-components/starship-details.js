import React from "react";
import ItemDetails, { Record } from "../item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";
import {withSwapiService} from "../hoc-helpers";


const StarshipDetails = ({itemId}) => {
    return ( 
      <SwapiServiceConsumer>
        {(props) => {<ItemDetails
       {...props}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="passengers" label="Passengers" />
      </ItemDetails>}}
      </SwapiServiceConsumer>
      )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage
  }
}

export default withSwapiService(StarshipDetails, mapMethodsToProps) ;
