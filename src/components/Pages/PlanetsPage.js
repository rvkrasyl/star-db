import React, { Component } from "react";
import Record from "./Record";
import ItemPage from "../ItemPage";
import { RenderOutputConsumer } from "../RenderOutputs";

export default class PlanetsPage extends Component {
    render() {
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
}