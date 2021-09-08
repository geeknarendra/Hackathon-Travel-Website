import React from 'react'
import Tilt from 'react-parallax-tilt';
import Fade from 'react-reveal/Fade';
import './css/Card.css'

function SliderCard({ img, city, history }) {
    return (
        <Fade top>
            <Tilt className="tilt" options={{ max: 45, perspective: 1000, transition: true }}>
                <div className="card Slider">
                    <img src={img} alt={city} />
                    <div className="info">
                        <h3>{city}</h3>
                        <p>{history}</p>
                    </div>
                </div>
            </Tilt>
        </Fade>
    )
}

export default SliderCard
