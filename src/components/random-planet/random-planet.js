import React, { Component } from 'react';

import './random-planet.css';

import SwapiService from '../../services/swapi-service.js';

import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            planet: {},
            loading: true,
            error: false
        };
        this.swapiService = new SwapiService();
        this.onPlanetLoaded = this.onPlanetLoaded.bind(this);
        this.onError = this.onError.bind(this);
        this.updatePlanet = this.updatePlanet.bind(this);
    }


    onPlanetLoaded(planet) {
        this.setState({ 
          planet, 
          loading: false
        });
    }

    onError() {
        this.setState({ 
          loading: false,
          error: true
        });
    }

    updatePlanet() {
        const id = Math.floor(Math.random() * 25) + 2;
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {

        const { planet, loading, error } = this.state;
        
        const errorMessage = error ? <ErrorIndicator /> : null;
        const spinner = loading ? <Spinner /> : null;
        
        
        return (
              <div className="random-planet jumbotron rounded">
                    {errorMessage}
                    {spinner}
              </div>
      );
    }
}

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={`OOpss`} />
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
