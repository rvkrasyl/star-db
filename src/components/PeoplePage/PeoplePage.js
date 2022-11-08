import React, { Component } from "react";
import ErrorBoundry from "../ErrorBoundry";
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";
import BodyRow from "../BodyRow";

import './PeoplePage.css'

export default class PeoplePage extends Component {
    state = {
        selectedItem: 10,
    }

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id,
        });
    }

    render () {
        console.log(this.props.getImg);
        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.props.peopleData}
                renderItem={({ name, gender }) => `${name} (${gender})`}/>
        ); 
        const itemDetails = (
            <ErrorBoundry >
            <ItemDetails 
                itemId={this.state.selectedItem}
                getData={this.props.peopleDetails}
                getImgUrl={this.props.getImg}/>
            </ErrorBoundry >
        );

        return (
            <BodyRow 
                leftElement={itemList} 
                rightElement={itemDetails} />
        );
    }
}