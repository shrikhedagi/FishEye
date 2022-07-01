// Anonym class
let data = null;

export default 
{
    async get(url) // Call the get function
    {
        if (!data) // Is data null
        {
            data = fetch(url) // If data is null, so we fetch
                .then(response => response.json())
                .then(response => response)
                .catch(error => console.log('en error has occured', error))
        }
        return data;
    }
}
