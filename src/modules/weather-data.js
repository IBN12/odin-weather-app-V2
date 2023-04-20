//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Program: weather-data.js
// Description: The weather data will be fetched in this module.
// Notes: N/A
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// FetchWeatherData(): Data will be fetched from the weather API. 
export async function FetchWeatherData(locationInput){
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3859976577fc42b6b9392348232703&q=${locationInput}&days=3`, {mode: "cors"});
    const promise = await response.json();
    return promise;
}