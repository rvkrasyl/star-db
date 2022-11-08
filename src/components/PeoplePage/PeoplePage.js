import React, { Component } from "react";
import ErrorBoundry from "../ErrorBoundry";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import BodyRow from "../BodyRow";

import './PeoplePage.css'

export default class PeoplePage extends Component {
    state = {
        selectedItem: 1,
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id,
        });
    }

    render () {

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.props.peopleData}
                renderItem={({ name, gender }) => `${name} (${gender})`}/>
        ); 
        const personDetails = (
            <ErrorBoundry >
            <PersonDetails 
                personId={this.state.selectedItem}/>
            </ErrorBoundry >
        );

        return (
                <BodyRow 
                leftElement={itemList} 
                rightElement={personDetails} />
        );
    }
}