import React from "react";
import ItemDetails, { Record } from "../item-details";
import {withSwapiService} from "../hoc-helpers";

const PersonDetails = ({ itemId, swapiService }) => {
  const { getPersonImage, getPerson } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="name" label="name" />
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="eyeColor" />
    </ItemDetails>
  );
};
export default withSwapiService(PersonDetails)