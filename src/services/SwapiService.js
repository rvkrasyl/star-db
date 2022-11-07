export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';
    
    async getResource(url) {
        const resp = await fetch(`${this._apiBase}${url}`);

        if(!resp.ok) {
            throw new Error(`${url}, received ${resp.status}`);
        }
        const body = await resp.json();
        return body;
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person);
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

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    _extractId(item) {
        const idRegExp = /\/(\d*)\/$/;
        return item.url.match(idRegExp)[1];
    }    

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            planetName: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    }

    async getStarship(id) {
        const starship = await this.getResource(`/starships/${id}/`);
        return this._transformStarship(starship);
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passangers: starship.passangers,
            cargoCapcity: starship.cargoCapcity,
        }
    }
}