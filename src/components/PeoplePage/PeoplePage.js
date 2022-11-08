import React, { Component } from "react";
import ErrorIndicator from "../ErrorIndicator";
import ItemList from "../ItemList";
import PersonDetails from "../PersonDetails";
import BodyRow from "../BodyRow";

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

        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.props.peopleData}
                renderItem={({ name, gender }) => `${name} (${gender})`}/>
        ); 
        const personDetails = (
            <PersonDetails 
                personId={this.state.selectedItem}/>
        );

        return (
            <BodyRow 
                leftElement={itemList} 
                rightElement={personDetails} />
        );
    }
}