import React, { useEffect, useState } from 'react';

function Weather(props) {
    
    const base = 'https://api.openweathermap.org/data/2.5/weather?';
    const api_key = process.env.REACT_APP_WEATHER_API_KEY;

    const [query, setQuery] = useState('dallas');
    const [weather, setWeather] = useState('');
    const [unit, setUnit] = useState('metric');
    const [tempType, settempType] = useState('C');
    const [backgroundURL, setBackgroundURL] = useState('Clear.jpg');
    const [temp, setTemp] = useState(0);


    useEffect(() => {
        fetchAPI();
    }, []);


    const search = evt => {
        if(evt.key === "Enter") {
            fetchAPI();
        }
    }

    const fetchAPI = () => {
        fetch(`${base}q=${query}&units=${unit}&APPID=${api_key}`)
            .then(res => res.json())
            .then(data => {
                setWeather(data);
                setQuery('');
                setTemp(Math.round(data.main.temp));
                let weatherType = data['weather'][0]['main'];
                if(weatherType == 'Mist' || weatherType == 'Smoke' ||
                   weatherType == 'Haze' || weatherType == 'Dust' ||
                   weatherType == 'Fog' || weatherType == 'Sand' ||
                   weatherType == 'Ash' || weatherType == 'Squall' ||
                   weatherType == 'Tornado') {
                    setBackgroundURL('Poor.jpg');
                } else {
                    setBackgroundURL(`${data['weather'][0]['main']}.jpg`);
                }
                console.log(data);
        });       
    }

    const setTempType = () => {
        if(unit == 'metric') {
            setUnit('imperial');
            settempType('F');
            let temperature = (temp/5) * 9 + 32;
            setTemp(Math.round(temperature));
        } else {
            setUnit('metric');
            settempType('C');
            let temperature = (temp-32) * 5 / 9;
            setTemp(Math.round(temperature));
        }
    }

    const generateDate = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${month} ${date}, ${year}`;
    }

    return (
        <div id='weather-main' style={{backgroundImage: `url(${backgroundURL})`}}>
            <div className='search-box'>
                <input
                    placeholder='Search City'
                    type='text'
                    className='search-bar'
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
            </div>
            {(typeof weather.main != 'undefined') ? (
                <div>
                    <h1 className='weather-text'>{weather.name}, {weather.sys.country}</h1>
                    <h3 className='weather-date'>{generateDate(new Date())}</h3>
                    <span id='temp' className='weather-text'>
                        <span id='temp-value'>{temp}</span>
                        <span id='deg'>o</span>
                        <span id='temp-type'>{tempType}</span>
                    </span>                    
                    <h3 className='weather-text'>{weather.weather[0].main}</h3>
                </div>
            ) : (
                <div>
                    <h3 className='weather-date'>{generateDate(new Date())}</h3>
                </div>
            )}
            <div id='temp-slider' className='align-center'>
                <label className='switch'>
                    <input type='checkbox' onChange={setTempType}/>
                    <span className='slider round align-center'>
                        <div style={{
                            display: "flex",
                            gap: "20px",
                            color: "black",
                            zIndex: 2,
                            position: "relative",
                            fontSize: "12px",
                        }}>
                            <span>C</span>
                            <span>F</span>
                        </div>
                    </span>
                </label>
            </div>
        </div>
    );
}

export default Weather;