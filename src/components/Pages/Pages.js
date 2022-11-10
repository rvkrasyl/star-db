import React from "react";
import ItemPage from "../ItemPage";
import { RenderOutputConsumer } from "../RenderOutputs";

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}:</span>
            <span>{item[field]}</span>
        </li>
    );
}

const PeoplePage = () => {
    return (
        <RenderOutputConsumer>
            {
                ({ peopleOutput, swapi }) => {
                    return (
                        <ItemPage 
                            itemData={swapi.getAllPeople}
                            itemDetails={swapi.getPerson}
                            getImg={swapi.getPersonImg}
                            renderOutput={peopleOutput}
                        >
                            <Record field="gender" label="Gender" />
                            <Record field="birthYear" label="Birth Year" />
                            <Record field="eyeColor" label="Eye Color" />
                        </ItemPage>
                    );
                }
            }
        </RenderOutputConsumer>
    );
}

const PlanetsPage = () => {
    return (
        <RenderOutputConsumer>
            {
                ({ planetsOutput, swapi }) => {
                    return (
                        <ItemPage 
                            itemData={swapi.getAllPlanets}
                            itemDetails={swapi.getPlanet}
                            getImg={swapi.getPlanetImg}
                            renderOutput={planetsOutput}
                        >
                            <Record field="diameter" label="Size" />
                            <Record field="population" label="Population" />
                            <Record field="rotationPeriod" label="Rotate per" />
                        </ItemPage>
                    )
                }
            }
        </RenderOutputConsumer>
    )
}

const StarshipsPage = () => {
    return (
        <RenderOutputConsumer>
            {
                ({ starshipsOutput, swapi }) => {
                    return (
                        <ItemPage 
                            itemData={swapi.getAllStarships}
                            itemDetails={swapi.getStarship}
                            getImg={swapi.getStarshipImg}
                            renderOutput={starshipsOutput}
                        >
                            <Record field="model" label="Model" />
                            <Record field="manufacturer" label="Manufacturer" />
                            <Record field="length" label="Length" />
                            <Record field="costInCredits" label="Cost" />
                        </ItemPage>
                    );
                }
            }
        </RenderOutputConsumer>        
    )
}

export {
    PeoplePage,
    PlanetsPage,
    StarshipsPage
}