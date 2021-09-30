import React from 'react'
import Card from './Card'

const Weather = () => {

    return (
        <>
            <div className="container">
                <div className="content_box">
                    <img src="images/bg.jpg" alt="" />
                    <div className="weather_info">
                        <div className="main">

                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather
