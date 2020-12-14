import React from 'react'
import ItemList from '../item-list'
import { withData } from '../hoc-helpers'
import {withSwapiService} from '../hoc-helpers'


const WithChildFunction = (Wrapped, fn) => {
    return (props) => {
        return <Wrapped {...props}>{fn}</Wrapped>
    }
}
const mapPersonMethodsToProps = (swapiService) => {return {getData: swapiService.getAllPeople}}
const mapPlanetMethodsToProps = (swapiService) => {return {getData: swapiService.getAllPlanets}}
const mapStarshipsMethodsToProps = (swapiService) => {return {getData: swapiService.getAllStarships}}
const ListWithChildren = WithChildFunction(ItemList, ({name}) => <span>{name}</span>)
const ListWithStarships = WithChildFunction(ItemList, ({model, length}) => <span>{model} - {length}</span>)
const ListWithPlanets = WithChildFunction(ItemList, ({name, diameter}) => <span>{name} - {diameter}</span>)

const PersonList = withSwapiService(withData(ListWithChildren), mapPersonMethodsToProps) 
const StarshipList = withSwapiService(withData(ListWithStarships), mapStarshipsMethodsToProps) 
const PlanetList = withSwapiService(withData(ListWithPlanets), mapPlanetMethodsToProps) 

export {
    PersonList,
    StarshipList,
    PlanetList
}