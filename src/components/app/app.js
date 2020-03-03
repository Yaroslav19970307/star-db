import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';

import './app.css';
import PeoplePage from '../people-page';

export default class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      hasError: false
    };
  }

  render () {
    return (
      <div className="app">
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected = {this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId = {this.state.selectedPerson} />
          </div>
        </div>
        < PeoplePage /> 
      </div>
    );
  }
}