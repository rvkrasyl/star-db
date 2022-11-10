import React from "react";
import Record from "./Record";
import ItemPage from "../ItemPage";
import { RenderOutputConsumer } from "../RenderOutputs";

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

export default PlanetsPage;