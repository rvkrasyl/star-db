export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';
    _imgApiBase = 'https://starwars-visualguide.com/assets/img';
    
    getResource = async (url) => {
        const resp = await fetch(`${this._apiBase}${url}`);

        if(!resp.ok) {
            throw new Error(`${url}, received ${resp.status}`);
        }
        const body = await resp.json();
        return body;
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    getPerson = async (id) => {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
    }

    getPersonImg = ({id}) => {
        return `${this._imgApiBase}/characters/${id}.jpg`;
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    getPlanetImg = ({id}) => {
        return `${this._imgApiBase}/planets/${id}.jpg`;
    }

    _extractId = (item) => {
        const idRegExp = /\/(\d*)\/$/;
        return item.url.match(idRegExp)[1];
    }    

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    getStarshipImg = ({id}) => {
        return `${this._imgApiBase}/starships/${id}.jpg`;
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passangers: starship.passangers,
            cargoCapcity: starship.cargo_capacity,
        }
    }
}