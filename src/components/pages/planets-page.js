import React, { Component } from 'react';
import Row from '../row/row';
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";

import { PlanetDetails, PlanetList } from "../sw-components";

export default class PlanetPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedItem: null,
            hasError: false
        };
    }

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        const { selectedItem } = this.state;

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return (
            <ErrorBoundry>
                <Row left={<PlanetList onItemSelected={this.onItemSelected}/>}
                     right={<PlanetDetails itemId={selectedItem}/>}/>
            </ErrorBoundry>
        );
    }
}