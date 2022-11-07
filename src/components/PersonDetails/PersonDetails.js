import React, { Component } from "react";
import SwapiService from "./../../services/SwapiService";
import Spinner from "./../Spinner";

import './PersonDetails.css';

export default class PersonDetails extends Component {
    
    state = {
        person: null,
        loaded: false,
    }

    swapiService = new SwapiService();

    componentDidMount() {
        this.updatePerson();
        console.log('updated Mount');
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.personId !== prevProps.personId) {
            this.stateToLoad();
            this.updatePerson();
        }
    }

    stateToLoad = () => {
        this.setState({
            loaded: false
        });
    }

    updatePerson = () => {
        const { personId } = this.props;
        if(personId)
        {
            this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person, loaded: true })
            })
            .catch(this.onError);
        }
    }
    render() {

        if(!this.state.person) {
            return <Spinner />
        }

        const { person, loaded } = this.state;
        const content = loaded ? <PersonView person={person} /> : <Spinner />;

        return (
            <div className="person-details card">
                {content}
            </div>
        );
    }
}

const PersonView = ({person}) => {

    const { id, name, gender,
            birthYear, eyeColor } = person;

    return (
        <React.Fragment>
            <img className="person-image" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="current person"></img>
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
                </div>
        </React.Fragment>
    );
}