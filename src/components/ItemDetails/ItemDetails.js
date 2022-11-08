import React, { Component } from "react";
import Spinner from "../Spinner";
import ErrorBtn from "../ErrorBtn";

import './ItemDetails.css';

export default class ItemDetails extends Component {
    
    state = {
        item: null,
        image: null,
        loaded: false,
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.itemId !== prevProps.itemId) {
            this.stateToLoad();
            this.updateItem();
        }
    }

    stateToLoad = () => {
        this.setState({
            loaded: false
        });
    }

    updateItem = () => {
        const { itemId, getData, getImgUrl } = this.props;
        if(itemId)
        {
            getData(itemId)
            .then((item) => {
                this.setState({ item, loaded: true, image: getImgUrl(item) })
            })
            .catch(this.onError);
        }
    }
    render() {

        if(!this.state.item) {
            return <Spinner />
        }

        const { item, loaded } = this.state;
        const content = loaded ? <ItemView item={item} img={this.state.image} /> : <Spinner />;

        return (
            <div className="item-details card">
                {content}
            </div>
        );
    }
}

const ItemView = ({item, img}) => {

    const { name, gender,
            birthYear, eyeColor } = item;

    return (
        <React.Fragment>
            <img className="item-image" src={img} alt="current item"></img>
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender:</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year:</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye color:</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                    <ErrorBtn />
                </div>
        </React.Fragment>
    );
}