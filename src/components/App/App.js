import React, {Component} from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../PeoplePage";
import SwapiService from "../../services/SwapiService";

import './App.css';
export default class App extends Component {   
    
    swapiService = new SwapiService();
    
    render() {
        return (
            <div className="app">
                <Header />
                <RandomPlanet 
                    getData={this.swapiService.getPlanet}
                    getDataImg={this.swapiService.getPlanetImg} />
                <PeoplePage 
                    peopleData={this.swapiService.getAllPeople}
                    peopleDetails={this.swapiService.getPerson}
                    getImg={this.swapiService.getPersonImg}/>

                <PeoplePage 
                    peopleData={this.swapiService.getAllPlanets}
                    peopleDetails={this.swapiService.getPlanet}
                    getImg={this.swapiService.getPlanetImg}/>

                <PeoplePage 
                    peopleData={this.swapiService.getAllStarships}
                    peopleDetails={this.swapiService.getStarship}
                    getImg={this.swapiService.getStarshipImg}/>
            </div>
        );
    }
}