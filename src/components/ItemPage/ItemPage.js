import React, { Component } from "react";
import ErrorBoundry from "../ErrorBoundry";
import ItemList from "../ItemList";
import ItemDetails from "../ItemDetails";
import BodyRow from "../BodyRow";

import './ItemPage.css'

export default class ItemPage extends Component {
    state = {
        selectedItem: 11,
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
                getData={this.props.itemData}
                renderItem={this.props.renderOutput}/>
        ); 
        const itemDetails = (
            <ErrorBoundry >
            <ItemDetails 
                itemId={this.state.selectedItem}
                getData={this.props.itemDetails}
                getImgUrl={this.props.getImg}
            >
                {this.props.children}
            </ItemDetails>  
            </ErrorBoundry >
        );

        return (
            <BodyRow 
                leftElement={itemList} 
                rightElement={itemDetails} />
        );
    }
}