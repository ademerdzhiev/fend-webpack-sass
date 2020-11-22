import {api_key} from './open_weather_map_api.js';
const apiKey = api_key;
const baseURL = 'https:/api.openweathermap.org/data/2.5/weather?q=';
const city = 'Sofia';
const country = 'Bulgaria';
const location = 'Sofia,Bulgaria';
function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch(baseURL+location+'&units=metric'+apiKey)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = 'Captain, ' + formText + ' your destination is ' + location + ' and the temperature there is ' +  res.main.temp + ' C.';
    })
}

export { handleSubmit }
