import React, { Component } from 'react';
import Row from '../row/row';
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";

import { StarshipDetails, StarshipList } from "../sw-components";

export default class StarshipPage extends Component {

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
                <Row left={<StarshipList onItemSelected={this.onItemSelected}/>}
                     right={<StarshipDetails itemId={selectedItem}/>}/>
            </ErrorBoundry>
        );
    }
}
