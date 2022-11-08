import React, { Component } from "react";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

import './RandomPlanet.css';

export default class RandomPlanet extends Component {

    state = {
        planet: {},
        loading: true,
        error: false,
        image: null,
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false, image: this.props.getDataImg(planet)});
    }

    onError = (err) => {
        this.setState({error: true, loading: false});
    }

    updatePlanet = () => {
        const id = parseInt(Math.random()*21 + 2);

        this.props.getData(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }
    
    render() {
        const {planet, loading, error, image} = this.state;

        const hasData = !(loading || error);
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <PlanetView planet={planet} image={image}/> : null;
        const errorMsg = error ? <ErrorIndicator/> : null;
        
        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {errorMsg}
                {content}
            </div>
        );
    }
}

const PlanetView = ({planet, image}) => {
    
    const { name, population, 
        rotationPeriod, diameter } = planet;
    
    return (
        <React.Fragment>
            <img className="planet-image" src={image} alt="Current planet"></img>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population:</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period:</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter:</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}