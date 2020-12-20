import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";
import "./random-planet.css";
import ErrorIndicator from '../error-indicator'
import PropTypes from 'prop-types'

export default class RandomPlanet extends Component {

  static defaultProps = {
    updateInterval: 6000
  }

  static propTypes = {
    // updateInterval: (props, propName, componentName) => {
    //   const value = props[propName]
    //   if (typeof(value) == 'number' && !isNaN(value)){
    //     return null
    //   }

    //   return new TypeError(`${componentName}: ${propName} must be a number`)
    // } - топорный метод без использования библиотек
    updateInterval: PropTypes.number

  }

  state = {
    planet: {},
    loading: true,
    error: false
  };
  // constructor() {
  //   super();
    
  // }
swapiService = new SwapiService();


componentDidMount(){
  this.updatePlanet()
    this.interval = setInterval(this.updatePlanet, this.props.updateInterval)

  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }

  

  onPlanetLoaded = (planet) => {
    this.setState({ planet, loading: false });
  };

  updatePlanet =() => {
    const id = Math.floor(Math.random() * 25) + 1;
   
    this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(err => this.setState({error: true}));
  }

  render() {
    const { planet, loading, error } = this.state;
    const dataLoaded = !error && planet;
    const spinner = (loading && !error)? <Spinner /> : null;
    const content = dataLoaded? <PlanetView planet={planet} />: null;
    const errorIndicator = error ? <ErrorIndicator /> : null;


    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
        {errorIndicator}
      </div>
    );
  }
}

const PlanetView = ( {planet} ) => {

  const { id, name, population, rotationPeriod, diameter } = planet;
  return (
    <React.Fragment>
      <img
        className="planet-image"
        alt={`planet # ${id}`}
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
