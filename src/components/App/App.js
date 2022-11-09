import React, {Component} from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../Pages";
import SwapiService from "../../services/SwapiService";
import { RenderOutputProvider } from "../RenderOutputs";

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

        const peopleOutput = (item) => `${item.name} (${item.gender})`;
        const planetsOutput = (item) => `${item.name} (${item.diameter}km²)`;
        const starshipsOutput = (item) => `${item.name} (${item.length}m)`;
        const swapi = this.swapiService;

        return (
            <RenderOutputProvider value={
                { peopleOutput, planetsOutput, starshipsOutput, swapi }
            }>
                <div className="app">
                    <Header />
                    <RandomPlanet 
                        getData={this.swapiService.getPlanet}
                        getDataImg={this.swapiService.getPlanetImg} />
                    <PeoplePage />
                    <PlanetsPage />
                    <StarshipsPage />
                </div>
            </RenderOutputProvider>
        );
    }
}