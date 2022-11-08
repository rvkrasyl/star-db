import React, {Component} from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ItemPage from "../ItemPage";
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
    
    peoplePage() {
        return (
            <ItemPage 
                peopleData={this.swapiService.getAllPeople}
                peopleDetails={this.swapiService.getPerson}
                getImg={this.swapiService.getPersonImg}
            >
                <Record field="gender" label="Gender" />
                <Record field="birthYear" label="Birth Year" />
                <Record field="eyeColor" label="Eye Color" />
            </ItemPage>
        );
    }
    planetsPage() {
        return (
            <ItemPage 
                peopleData={this.swapiService.getAllPlanets}
                peopleDetails={this.swapiService.getPlanet}
                getImg={this.swapiService.getPlanetImg}
            >
                <Record field="diameter" label="Size" />
                <Record field="population" label="Population" />
                <Record field="rotationPeriod" label="Rotate per" />
            </ItemPage>
        );
    }
    starshipsPage() {
        return (
            <ItemPage 
                peopleData={this.swapiService.getAllStarships}
                peopleDetails={this.swapiService.getStarship}
                getImg={this.swapiService.getStarshipImg}
            >
                <Record field="model" label="Model" />
                <Record field="manufacturer" label="Manufacturer" />
                <Record field="length" label="Length" />
                <Record field="costInCredits" label="Cost" />
            </ItemPage>
        );
    }

    render() {
        return (
            <div className="app">
                <Header />
                <RandomPlanet 
                    getData={this.swapiService.getPlanet}
                    getDataImg={this.swapiService.getPlanetImg} />
                {this.peoplePage()}
                {this.planetsPage()}
                {this.starshipsPage()}
            </div>
        );
    }
}