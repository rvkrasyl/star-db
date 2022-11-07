import React, { Component } from "react";

import SwapiService from "../../services/SwapiService";
import Spinner from "../Spinner";

import './RandomPlanet.css';

export default class RandomPlanet extends Component {
    
    _swapiService = new SwapiService();

    state = {
        planet: {}
    }

    constructor() {
        super();
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet});
    }

    updatePlanet() {
        const id = parseInt(Math.random()*60 + 2);

        this._swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded);
    }
    
    render() {

        const { planet: {id, planetName, population, 
            rotationPeriod, diameter} } = this.state;
            

        return (
            <div className="random-planet jumbotron rounded">
                <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}></img>
                <div>
                    <h4>{planetName}</h4>
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
            </div>
        );
    }
}