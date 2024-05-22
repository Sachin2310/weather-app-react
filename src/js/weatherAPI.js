
const apiCall = async (apiKey, place) => {
    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}`+
            `&q=${place}&aqi=yes`;
    let data = await fetch(url);
    return data.json();
}

export { apiCall };