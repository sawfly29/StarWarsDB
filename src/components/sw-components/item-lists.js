import React from 'react'
import SwapiService from '../../services/swapi-service'
import ItemList from '../item-list'
import { withData } from '../hoc-helpers'

const swapiService = new SwapiService()

const {getAllPeople, getAllPlanets, getAllStarships} = swapiService

const WithChildFunction = (Wrapped, fn) => {
    return (props) => {
        return <Wrapped {...props}>{fn}</Wrapped>
    }
}
const ListWithChildren = WithChildFunction(ItemList, ({name}) => <span>{name}</span>)
const ListWithStarships = WithChildFunction(ItemList, ({model, length}) => <span>{model} - {length}</span>)

const PersonList = withData(ListWithChildren, getAllPeople)
const StarshipList = withData(ListWithStarships, getAllStarships)
const PlanetList = withData(ItemList, getAllPlanets)

export {
    PersonList,
    StarshipList,
    PlanetList
}