import React, {Component} from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../PeoplePage";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import SwapiService from "../../services/SwapiService";

import './App.css';
export default class App extends Component {   
    
    swapiService = new SwapiService();
    
    render() {
        return (
            <div className="app">
                <Header />
                <RandomPlanet />
                <PeoplePage peopleData={this.swapiService.getAllPeople}/>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList 
                            getData={this.swapiService.getAllPlanets}
                            renderItem={(item) => `${item.name} (${item.diameter}km²)`} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={4}/>
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList 
                            getData={this.swapiService.getAllStarships}
                            renderItem={(item) => `${item.name} (${item.costInCredits}Creds)` } />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={8}/>
                    </div>
                </div>
            </div>
        );
    }
}