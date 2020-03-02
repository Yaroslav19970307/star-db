import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

export default class ItemList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      peopleList: null
    };
    this.swapiService = new SwapiService();
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    this.swapiService
        .getAllPeople()
        .then((peopleList) => {
            this.setState({peopleList})
        })
        .catch((err) => console.log(err))
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
            {name}
        </li>
      );
    });
  }

  render() {
    const {peopleList} = this.state;

      if (!peopleList) {
        return <Spinner />
      }

      const item = this.renderItems(peopleList);

      return (
          <ul className="item-list list-group">
            {item}
          </ul>
      );
  }
}
