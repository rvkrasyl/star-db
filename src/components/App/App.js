import React, {Component} from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../Pages";
import SwapiService from "../../services";
import DummySwapiService from "../../services/DummySwapiService";
import { RenderOutputProvider } from "../RenderOutputs";
import  { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

export default class App extends Component {   
    
    state = {
        swapiService: new SwapiService()
    }

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            }
        });
    }

    render() {

        const peopleOutput = (item) => `${item.name} (${item.gender})`;
        const planetsOutput = (item) => `${item.name} (${item.diameter}km²)`;
        const starshipsOutput = (item) => `${item.name} (${item.length}m)`;
        const swapi = this.state.swapiService;

        return (
            
            <RenderOutputProvider value={
                { peopleOutput, planetsOutput, starshipsOutput, swapi }}
            >
                <Router>
                    <div className="app">
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet 
                            getData={swapi.getPlanet}
                            getDataImg={swapi.getPlanetImg} />
                        <Routes>
                            <Route path = "/" element = {<h2>Welcome to StarDB</h2>} />
                            
                            <Route path = "/people" element = {<PeoplePage />} />
                            <Route path = "/planets" element = {<PlanetsPage />} />
                            <Route path = "/starships" element = {<StarshipsPage />} />
                        </Routes>
                    </div>
                </Router>
            </RenderOutputProvider>
        );
    }
}