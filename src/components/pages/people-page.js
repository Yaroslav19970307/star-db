import React, { Component } from 'react';
import Row from '../row/row';
import ErrorBoundry from "../error-boundry";
import ErrorIndicator from "../error-indicator";

import { PersonDetails, PersonList } from "../sw-components";

export default class PeoplePage extends Component {

    constructor(props){
        super(props);
        this.state = {
            selectedPerson: null,
            hasError: false
        };
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render() {
        const { selectedPerson } = this.state;

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        return (
            <ErrorBoundry>
                <Row left={<PersonList onItemSelected={this.onPersonSelected}/>}
                     right={<PersonDetails itemId={selectedPerson}/>}/>
            </ErrorBoundry>
        );
    }
}
