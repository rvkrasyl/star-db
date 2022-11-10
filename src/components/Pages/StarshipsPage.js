import React, { Component } from "react";
import Record from "./Record";
import ItemPage from "../ItemPage";
import { RenderOutputConsumer } from "../RenderOutputs";

export default class StarshipsPage extends Component {
    render() {
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
}