import React, { Component } from "react";
import Spinner from '../Spinner';

import './ItemList.css';

export default class ItemList extends Component {

    state = {
        itemsList: null
    }

    componentDidMount() {

        const { getData } = this.props;
        getData()
            .then((itemsList) => {
                this.setState({
                    itemsList
                });
            });
    }

    renderItems(arr) {
        return arr.map(({ id, name }) => {
            return (
                <li className={`list-group-item`}
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            );
        });
    }
    
    render() {

        const { itemsList } = this.state;
        if(!itemsList) {
            return <Spinner />
        }

        const items = this.renderItems(itemsList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}