import React, { Component } from 'react';

import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundry";
import Header from '../header';
import PeoplePage  from "../pages";

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
        this.swapiService = new SwapiService();
    }

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="app">
                        <Header />
                        <RandomPlanet />

                        <PeoplePage />
                        <PeoplePage />

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}