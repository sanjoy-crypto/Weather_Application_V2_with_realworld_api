import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development';

const Left = ({ tempInfo }) => {
    const [weatherState, setWeatherState] = useState("")

    const { weathermood, temp, name, country } = tempInfo;

    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "Clouds": setWeatherState("wi-day-cloudy")
                    break;
                case "Haze": setWeatherState("wi-fog")
                    break;
                case "Clear": setWeatherState("wi-day-sunny")
                    break;
                case "Mist": setWeatherState("wi-dust")
                    break;
                case "Rain": setWeatherState("wi-rain")
                    break;

                default:
                    setWeatherState("wi-day-sunny")
                    break;
            }
        }
    }, [weathermood])
    return (
        <>
            <div className="left_side">
                <div className="date_time">
                    <div className="time">{new Date().toLocaleTimeString()}</div>
                    <div className="date">{new Date().toLocaleDateString()}</div>
                </div>
                <div className="situation">
                    <i className={`wi ${weatherState}`}></i>
                    <p>{weathermood}</p>
                </div>
                <div className="bottom_option">
                    <div className="deg">{temp}&deg;</div>
                    <div className="location">{name}, {country}.</div>
                </div>
            </div>
        </>
    )
}

export default Left
