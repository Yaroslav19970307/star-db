import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import RandomPlanet from '../random-planet';
import ErrorBoundry from "../error-boundry";
import Header from '../header';
import { PeoplePage, PlanetPage, StarshipPage }  from "../pages";

import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.swapiService = new SwapiService();
    }

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <Router>
                        <div className="app">
                            <Header />
                            <RandomPlanet />
                            <Switch>
                                <Route exact path="/" render={() => <h2>Welcome to StarDB</h2><div className="formEsputnik"> text</div>} />
                                <Route path="/people" component={PeoplePage} />
                                <Route path="/planets" component={PlanetPage} />
                                <Route path="/starships" component={StarshipPage} />

                                <Route render={() => <h2>Page not found</h2>} />
                            </Switch >
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}
