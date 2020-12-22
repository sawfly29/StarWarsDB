import React from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";
import {SwapiServiceProvider} from '../swapi-service-context'
import ItemDetails, { Record } from "../item-details/item-details";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from '../../services/dummy-swapi-service'
import { PeoplePage, PlanetsPage, StarshipPage} from '../pages'
import "./app.css";
//import ItemList from "../item-list/item-list";
import {PersonDetails, StarshipDetails} from "../sw-components";

class App extends React.Component {
 // swapiService = new SwapiService();
 // dummySwapiService = new DummySwapiService();


  state = {
    applicationError: false,
    swapiService: new SwapiService()
  };

 onServiceChange = () =>{
  this.setState(({swapiService}) => {
    const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
   // console.log('swserv ', Service.name)
    return {swapiService: new Service()}
  })
}

  componentDidCatch() {
    console.log("app catched error");
    this.setState({ applicationError: true });
  }

  render() {
    if (this.state.applicationError) {
      return <ErrorIndicator />;
    }


    return (
      <ErrorBoundry>
        <SwapiServiceProvider value = {this.state.swapiService}>
        <div>
          <Header onServiceChange = {this.onServiceChange}/>
          <StarshipDetails itemId = {5} />
          <RandomPlanet />
          <PlanetsPage/>
          <StarshipPage />
          <PeoplePage />
        </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
