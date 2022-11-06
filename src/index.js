class SwapiService {
    async getResource(url) {
        const resp = await fetch(url);

        if(!resp.ok) {
            throw new Error(`${url}, received ${resp.status}`);
        }
        const body = await resp.json();
        return body;
    }
}

getResponseBody('https://swapi.dev/api/people/146465/')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.log('Could not fetch ',err);
    });