import React from "react";
import ItemDetails, { Record } from "../item-details";
import { SwapiServiceConsumer } from "../swapi-service-context";
import {withSwapiService} from "../hoc-helpers";



const PlanetDetails = ({itemId}) => {
  return (
    <SwapiServiceConsumer>
      {props => {<ItemDetails
            {...props}
    >
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>}}
    </SwapiServiceConsumer>
    )
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}

export default withSwapiService (PlanetDetails, mapMethodsToProps)
