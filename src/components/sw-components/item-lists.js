import React from 'react'
import SwapiService from '../../services/swapi-service'
import ItemList from '../item-list'
import { withData } from '../hoc-helpers'

const swapiService = new SwapiService

const {getAllPeople, getAllPlanets, getAllStarships} = swapiService

const PersonList = withData(ItemList, getAllPeople)
const StarshipList = withData(ItemList, getAllStarships)
const PlanetList = withData(ItemList, getAllPlanets)

export {
    PersonList,
    StarshipList,
    PlanetList
}