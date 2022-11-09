import React, {Component} from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../Pages";
import SwapiService from "../../services/SwapiService";

import './App.css';

export const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}:</span>
            <span>{item[field]}</span>
        </li>
    );
}

export default class App extends Component {   
    
    swapiService = new SwapiService();

    render() {
        return (
            <div className="app">
                <Header />
                <RandomPlanet 
                    getData={this.swapiService.getPlanet}
                    getDataImg={this.swapiService.getPlanetImg} />
                <PeoplePage swapi={this.swapiService}/>
                <PlanetsPage swapi={this.swapiService}/>
                <StarshipsPage swapi={this.swapiService}/>
            </div>
        );
    }
}