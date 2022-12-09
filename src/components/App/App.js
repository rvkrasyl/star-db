import React, {Component} from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from "../Pages";
import SwapiService from "../../services";
import DummySwapiService from "../../services/DummySwapiService";
import { RenderOutputProvider } from "../RenderOutputs";
import  { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetails from "../ItemDetails";
import Record from "../Pages/Record";

import './App.css';

export default class App extends Component {   
    
    state = {
        swapiService: new SwapiService(),
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    };

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
        const { isLoggedIn } = this.state;

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
                            <Route path = "/people/:id" element = {<PeoplePage />} />
                            <Route path = "/people" element = {<PeoplePage />} />
                            <Route path = "/planets" element = {<PlanetsPage />} />
                            <Route path = "/planets" element = {<PlanetsPage />} />
                            <Route path = "/starships" exact element = {<StarshipsPage />} />
                            <Route path = "/starships/:id" exact element = {
                                <ItemDetails 
                                    itemId={window.location.href.match(/\d+$/)}
                                    getData={swapi.getStarship}
                                    getImgUrl={swapi.getStarshipImg}
                                >
                                    <Record field="model" label="Model" />
                                    <Record field="manufacturer" label="Manufacturer" />
                                    <Record field="length" label="Length" />
                                    <Record field="costInCredits" label="Cost" />
                                </ItemDetails>
                            }/>
                            <Route path = "/login" exact element = {<LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />} />
                            <Route path = "/secret" exact element = {<SecretPage isLoggedIn={isLoggedIn} />} />
                        </Routes>
                    </div>
                </Router>
            </RenderOutputProvider>
        );
    }
}