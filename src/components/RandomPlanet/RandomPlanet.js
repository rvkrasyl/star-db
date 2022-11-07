import React, { Component } from "react";

import SwapiService from "../../services/SwapiService";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

import './RandomPlanet.css';

export default class RandomPlanet extends Component {
    
    _swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false});
    }

    onError = (err) => {
        this.setState({error: true, loading: false});
    }

    updatePlanet = () => {
        const id = parseInt(Math.random()*21 + 2);

        this._swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }
    
    render() {
        const {planet, loading, error} = this.state;

        const hasData = !(loading || error);
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;
        const errorMsg = error ? <ErrorIndicator/> : null;
        
        if(loading) {
            return <Spinner />
        }
        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {errorMsg}
                {content}
            </div>
        );
    }
}

const PlanetView = ({planet}) => {
    
    const { id, planetName, population, 
        rotationPeriod, diameter } = planet;
    
    return (
        <React.Fragment>
            <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Current planet"></img>
            <div>
                <h4>{planetName}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}