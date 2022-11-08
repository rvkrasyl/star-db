import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

import './PeoplePage.css'

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 1,
        hasError: false,
    }

    componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id,
        });
    }

    render () {

        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList onItemSelected={this.onPersonSelected}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        );
    }
}