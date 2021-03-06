import React from 'react';

import ItemList from '../item-list';
import { withData, withSwapiService } from '../hoc-helpers';

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    }
};

const mapPersonMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapPlanetMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};

const mapStarshipMethodToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => <span>{name} ({model})</span>;

const PersonList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPersonMethodToProps);

const PlanetList = withSwapiService(withData(withChildFunction(ItemList, renderName)), mapPlanetMethodToProps);

const StarshipList = withSwapiService(withData( withChildFunction(ItemList, renderModelAndName)), mapStarshipMethodToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};