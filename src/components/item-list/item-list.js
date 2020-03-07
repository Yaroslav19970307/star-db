import React, { Component } from 'react';

import './item-list.css';

import Spinner from '../spinner/spinner';

export default class ItemList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemList: null
    };
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    const { getData } = this.props;

    getData()
        .then((itemList) => {
            this.setState({itemList})
        })
        .catch((err) => console.log(err))
  }

  renderItems(arr) {
    return arr.map(item => {
      const {id} = item;
      const label = this.props.children(item);

      return (
        <li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
            {label}
        </li>
      );
    });
  }

  render() {
    const {itemList} = this.state;

      if (!itemList) {
        return <Spinner />
      }

      const item = this.renderItems(itemList);

      return (
          <ul className="item-list list-group">
            {item}
          </ul>
      );
  }
}
