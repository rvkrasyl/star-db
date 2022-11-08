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
                <PeoplePage peopleData={this.swapiService.getAllPeople}/>

                <BodyRow 
                    leftElement={
                        <ItemList 
                            getData={this.swapiService.getAllPlanets}
                            renderItem={(item) => `${item.name} (${item.diameter}km²)`}/>
                    } 
                    rightElement= {
                        <ErrorBoundry>
                            <ItemDetails itemId={4}/>
                        </ErrorBoundry>
                    } 
                />

                <BodyRow 
                    leftElement={
                        <ItemList 
                            getData={this.swapiService.getAllStarships}
                            renderItem={(item) => `${item.name} (${item.costInCredits}Creds)`}/>
                    } 
                    rightElement= {
                        <ErrorBoundry>
                            <ItemDetails itemId={8}/>
                        </ErrorBoundry>
                    } 
                />
            </div>
        );
    }
}