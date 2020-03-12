import React from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import Row from '../row/row';

import SwapiService from '../../services/swapi-service';

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList, 
  PlanetList, 
  StarshipList
} from '../sw-components';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
    this.swapiService = new SwapiService();
  }

  render () {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <Row left={<StarshipDetails itemId={9}/>} right={<PersonDetails itemId={4}/>}/>

        <PlanetDetails itemId={6} />

        <PersonList />
        <PlanetList />
        <StarshipList />

      </div>
    );
  }
}