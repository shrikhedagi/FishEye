class Api {
    constructor(url) {
        this.url = url
    }

    async get() {
        return fetch(this.url)
            .then(response => response.json())
            .then(response => response)
            .catch(error => console.log('an error occured', error))
    }
}

export default Api;