import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";

import './PeoplePage.css'

export default class PeoplePage extends Component {
    state = {
        selectedItem: 1,
        hasError: false,
    }

    componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id,
        });
    }

    render () {

        if(this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <div className="row mb2">
                <div className="col-md-6">
                    <ItemList 
                        onItemSelected={this.onItemSelected}
                        getData={this.props.peopleData}
                        renderItem={({ name, gender }) => `${name} (${gender})`}/>
                </div>
                <div className="col-md-6">
                    <PersonDetails personId={this.state.selectedItem}/>
                </div>
            </div>
        );
    }
}