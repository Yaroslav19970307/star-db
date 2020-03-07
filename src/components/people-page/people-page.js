import React, { Component } from 'react';

import './people-page.css';

import ItemList from '../item-list/item-list';
import ItemDetails from '../item-details/item-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import ErrorBoundry from '../error-boundry/error-boundry';
import Row from '../row/row';

import SwapiService from '../../services/swapi-service';

export default class PeoplePage extends Component {

  constructor(){
    super();
    this.state = {
      selectedPerson: null,
      hasError: false
    }
    this.onPersonSelected = this.onPersonSelected.bind(this);
    this.swapiService = new SwapiService();
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = ( 
      <ItemList 
        onItemSelected={this.onPersonSelected} 
        getData = {this.swapiService.getAllPeople}>
        
        {(item) => `${item.name} (${item.gender})`} 
      </ItemList>
    );// child 
    
    const personDetails = (
      <ItemDetails itemId={this.state.selectedPerson} />
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
