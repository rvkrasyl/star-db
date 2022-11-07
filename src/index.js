class SwapiService {
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
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`);
    }

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`);
    }

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarship(id) {
        return this.getResource(`/starships/${id}/`);
    }
}

const swapi = new SwapiService();
swapi.getPerson(3)
    .then((person) => {
        console.log(person.name);
    })
    .catch((err) => {
        console.log('Could not fetch ',err);
    });