// class Api {
    // constructor(url) {
        // this.url = url
    // }

    // async get() {
        // return fetch(this.url)
            // .then(response => response.json())
            // .then(response => response)
            // .catch(error => console.log('an error occured', error))
    // }
// }

// export default Api;

// Class anonym
let data = null; // global class

export default 
{
    async get(url) // Call the get function
    {
        if (!data) // Is data null
        {
            data = fetch(url) // If data is null, so we fetch
                .then(response => response.json())
                .then(response => response)
                .catch(error => console.log('en erro occured', erro))
        }
        return data;
    }
}
