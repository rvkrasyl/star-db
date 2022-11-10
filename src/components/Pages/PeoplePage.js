import React, { Component } from "react";
import Record from "./Record";
import ItemPage from "../ItemPage";
import { RenderOutputConsumer } from "../RenderOutputs";

export default class PeoplePage extends Component {
    render() {
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
}