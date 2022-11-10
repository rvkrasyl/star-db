import React, { Component } from "react";
import Spinner from '../Spinner';
import PropTypes from 'prop-types';

import './ItemList.css';

export default class ItemList extends Component {

    state = {
        itemsList: null
    }

    componentDidMount() {
        this.update();
    }

    componentDidUpdate(prevProps) {
        if (this.props.getData !== prevProps.getData) {
            this.update();
        }
    }

    update() {
        const { getData } = this.props;
        getData()
            .then((itemsList) => {
                this.setState({
                    itemsList
                });
            });
    }

    renderItems(arr) {
        return arr.map((item) => {

            const label = this.props.renderItem(item);
            return (
                <li className={`list-group-item`}
                    key={item.id}
                    onClick={() => this.props.onItemSelected(item.id)}>
                    {label}
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

ItemList.defaultProps = {
    renderItem: () => { return "blah-blah-blah" }
}

ItemList.propTypes = {
    renderItem: PropTypes.func,
    getData: PropTypes.func.isRequired,
    onItemSelected: PropTypes.func
}