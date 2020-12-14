import React from "react";
import ItemDetails, { Record } from "../item-details";
import {withSwapiService} from "../hoc-helpers";

//const PersonDetails = ({ itemId, getPerson, getImageUrl }) => { - деструктурировали в коде ниже
const PersonDetails = (props) => {
 
  return (
    <ItemDetails
      {...props}
      //раньше тут было определения а-ля itemId: {itemId} и так далее
    >
      <Record field="name" label="name" />
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="eyeColor" />
    </ItemDetails>
  );
};
const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}
export default withSwapiService(PersonDetails, mapMethodsToProps)