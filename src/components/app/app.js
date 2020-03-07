import React from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';

import SwapiService from '../../services/swapi-service';
import Row from '../row/row';
import ItemDetails, {Record} from '../item-details/item-details';

export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      hasError: false
    };
    this.swapiService = new SwapiService();
  }

  render () {
    const personDetails = (
      <ItemDetails 
        itemId = {3} 
        getData = {this.swapiService.getPerson}
        getImageUrl={this.swapiService.getPersonImage}>

        <Record field ="gender" label="Gender"/>
        <Record field ="eyeColor" label="EyeColor"/>

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails 
        itemId = {5} 
        getData = {this.swapiService.getStarship}
        getImageUrl={this.swapiService.getStarshipImage}>
      
        <Record field ="model" label="Model"/>
        <Record field ="lenght" label="Length"/>
        <Record field ="costInCredits" label="Cost"/>

      </ItemDetails>
    );

    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <Row left={personDetails} right={starshipDetails}/>
      </div>
    );
  }
}