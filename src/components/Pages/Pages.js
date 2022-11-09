import React from "react";
import ItemPage from "../ItemPage";

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}:</span>
            <span>{item[field]}</span>
        </li>
    );
}

const PeoplePage = ({ swapi }) => {
    return (
        <ItemPage 
            peopleData={swapi.getAllPeople}
            peopleDetails={swapi.getPerson}
            getImg={swapi.getPersonImg}
        >
            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth Year" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemPage>
    );
}

const PlanetsPage = ({ swapi }) => {
    return (
        <ItemPage 
            peopleData={swapi.getAllPlanets}
            peopleDetails={swapi.getPlanet}
            getImg={swapi.getPlanetImg}
        >
            <Record field="diameter" label="Size" />
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotate per" />
        </ItemPage>
    )
}

const StarshipsPage = ({ swapi }) => {
    return (
        <ItemPage 
            peopleData={swapi.getAllStarships}
            peopleDetails={swapi.getStarship}
            getImg={swapi.getStarshipImg}
        >
            <Record field="model" label="Model" />
            <Record field="manufacturer" label="Manufacturer" />
            <Record field="length" label="Length" />
            <Record field="costInCredits" label="Cost" />
        </ItemPage>
    )
}

export {
    PeoplePage,
    PlanetsPage,
    StarshipsPage
}