import React, {Component} from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../PeoplePage";
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";
import SwapiService from "../../services/SwapiService";
import BodyRow from "../BodyRow";
import ErrorBoundry from "../ErrorBoundry";

import './App.css';
export default class App extends Component {   
    
    swapiService = new SwapiService();
    
    render() {
        return (
            <div className="app">
                <Header />
                <RandomPlanet />
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