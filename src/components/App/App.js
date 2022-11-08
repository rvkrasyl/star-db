import React, {Component} from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import PeoplePage from "../PeoplePage";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import SwapiService from "../../services/SwapiService";
import BodyRow from "../BodyRow";

import './App.css';
export default class App extends Component {   
    
    swapiService = new SwapiService();
    
    render() {
        return (
            <div className="app">
                <Header />
                <RandomPlanet />
                <PeoplePage peopleData={this.swapiService.getAllPeople}/>

                <BodyRow 
                    leftElement={
                        <ItemList 
                            getData={this.swapiService.getAllPlanets}
                            renderItem={(item) => `${item.name} (${item.diameter}km²)`}/>
                    } 
                    rightElement= {
                        <PersonDetails personId={4}/>
                    } 
                />

                <BodyRow 
                    leftElement={
                        <ItemList 
                            getData={this.swapiService.getAllStarships}
                            renderItem={(item) => `${item.name} (${item.costInCredits}Creds)`}/>
                    } 
                    rightElement= {
                        <PersonDetails personId={8}/>
                    } 
                />
            </div>
        );
    }
}