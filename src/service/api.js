const KEY = '0ae9ec1584764e7bb47224718220808';

const fetchData = async (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

    const fetchResponse = await fetch(url);

    const data = await fetchResponse.json();

    return data;
};

export default fetchData;
