import React from "react";
import ItemList from "../item-list";
import { withData } from "../hoc-helpers";
import { withSwapiService, withChildFunction, compose } from "../hoc-helpers";



const mapPersonMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPeople };
};
const mapPlanetMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllPlanets };
};
const mapStarshipsMethodsToProps = (swapiService) => {
  return { getData: swapiService.getAllStarships };
};
const ListWithPeople = withChildFunction(({ name }) => <span>{name}</span>);
const ListWithStarships = withChildFunction(({ model, length }) => (
  <span>
    {model} - {length}
  </span>
))(ItemList);
const ListWithPlanets = withChildFunction(({ name, diameter }) => (
  <span>
    {name} - {diameter}
  </span>
))(ItemList);

const PersonList = compose(withSwapiService(mapPersonMethodsToProps), withData, ListWithPeople)(ItemList);
// const PersonList = withSwapiService(mapPersonMethodsToProps)(
//   withData(ListWithChildren)
// );
const StarshipList = withSwapiService(mapStarshipsMethodsToProps)(
  withData(ListWithStarships)
);
const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
  withData(ListWithPlanets)
);
//результат рвботы функции передается выше
export { PersonList, StarshipList, PlanetList };
