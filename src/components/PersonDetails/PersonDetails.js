import React, { Component } from "react";
import SwapiService from "./../../services/SwapiService";

import './PersonDetails.css';

export default class PersonDetails extends Component {
    
    state = {
        person: null,
    }

    swapiService = new SwapiService();

    componentDidMount() {
        this.updatePerson();
        console.log('updated Mount');
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson = () => {
        const { personId } = this.props;
        if(personId)
        {
            this.swapiService
            .getPerson(personId)
            .then((person) => {
                this.setState({ person })
            })
            .catch(this.onError);
        }
    }
    render() {

        if(!this.state.person) {
            return <span>Select a person from a list</span>
        }

        const { id, name, gender, 
            birthYear, eyeColor } = this.state.person;

        return (
            <div className="person-details card">
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
            </div>
        );
    }
}