import React, { useEffect, useState } from 'react'
import Left from './Left'

const Card = () => {

    const [searchValue, setSearchValu] = useState('Dhaka')
    const [tempInfo, setTempInfo] = useState({})

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=bb34ec2ee57a278ce3457b0b34eafc73`
            const res = await fetch(url)
            const data = await res.json()

            const { temp, humidity, pressure } = data.main
            const { sunrise, sunset, country } = data.sys
            const { speed } = data.wind
            const { main: weathermood } = data.weather[0]
            const { name } = data

            console.log(data);
            const myWeatherInfo = {
                temp, humidity, pressure, sunrise, sunset, country, speed, weathermood, name
            };
            setTempInfo(myWeatherInfo)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getWeatherInfo()
    }, [])


    const { sunrise, sunset, humidity, pressure, speed } = tempInfo;


    // converting secon into time 

    let sec1 = sunset;
    let sec2 = sunrise;
    let today1 = new Date(sec1 * 1000)
    let today2 = new Date(sec2 * 1000)

    let timeStr1 = `${today1.getHours()} : ${today1.getMinutes()}`
    let timeStr2 = `${today2.getHours()} : ${today2.getMinutes()}`

    return (
        <>
            <Left tempInfo={tempInfo} />

            <div className="right_side">
                <div className="search">
                    <input type="search"
                        placeholder="Input Location..."
                        onChange={(e) => setSearchValu(e.target.value)}
                        value={searchValue}
                    />
                    <button onClick={getWeatherInfo}>Search</button>
                </div>
                <div className="details">
                    <p className="title">Weather Details :</p>
                    <div className="other_info">
                        <span><i className={'wi wi-sunset'}></i>Sunset : </span>
                        <span>{timeStr1} PM</span>
                    </div>
                    <div className="other_info">
                        <span><i className={'wi wi-day-sunny'}></i>Sunrise : </span>
                        <span>{timeStr2} AM</span>
                    </div>
                    <div className="other_info">
                        <span><i className={'wi wi-humidity'}></i>Humidity : </span>
                        <span>{humidity}</span>
                    </div>
                    <div className="other_info">
                        <span><i className={'wi wi-rain'}></i>Pressure : </span>
                        <span>{pressure}</span>
                    </div>
                    <div className="other_info">
                        <span><i className={'wi wi-strong-wind'}></i>Speed : </span>
                        <span>{speed}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
