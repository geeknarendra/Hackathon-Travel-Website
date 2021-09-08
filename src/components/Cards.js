import React, {  useState } from 'react'
import Card from "./Card"
import styled from 'styled-components'
import data from '../data'
import SliderCard from './SliderCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import "swiper/components/effect-coverflow/effect-coverflow.min.css"


import SwiperCore, { EffectCoverflow, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
function Cards() {
  const [cities, setCities] = useState(data)

  const [cardCitie, setCardCitie] = useState(cities.splice(0, 6))

  console.log()
  return (
    <Container id="card">
      <h1 className="h1">Popular In India</h1>
      <p className="p">India is a home to the finest architectural heritage, serene ghats, spectacular landscapes and largest tiger reserve</p>
      <CardWrapper>
        {cardCitie.map((city, index) => {
          return <Card key={index} img={city.image} city={city.city} history={city.history} short={city.short} />
        })}
      </CardWrapper>

      <div className="crousel-card">
        <h1>Must Visit Destinations</h1>
        <p>From historical cities to natural splendours, come see the best of India, Dive deeper into India's rich culture and heritage</p>
        <Swiper
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : 3}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}

          pagination={{
            clickable: true
          }}
          className="myswiper"
        >
          <SlideWrapper>

            {cities.map((city, index) => {
              return (<SwiperSlide>
                <SliderCard key={index} img={city.image} city={city.city} history={city.history} />

              </SwiperSlide>
              )
            })}

          </SlideWrapper>
        </Swiper>
      </div>
    </Container>
  )
}


const Container = styled.div`
 width:99vw;
 height:auto;
 /* min-height:40vh; */
text-align:center;
background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%234FE'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
background-attachment: fixed;
background-size: cover;
padding:5rem;

.h1{
    font-family: "Rancho";
    font-weight:600;
    color:#476072;
    margin-bottom:2rem;
    font-size:5rem;
    text-shadow: -3px 5px 6px rgba(0,0,0,0.4);
    letter-spacing:1rem;
}
  
 .p{
    font-family: "Rancho";
    font-weight:500;
    font-size:3rem;
    color:#334257;
    width:50%;
    margin-left:30rem;
    margin-bottom:5rem;
    text-shadow: -3px 5px 6px rgba(0,0,0,0.6);
    
  }

  .crousel-card p{
    font-family: "Rancho";
    font-weight:500;
    font-size:3rem;
    color:#334257;
    width:50%;
    margin-left:30rem;
    margin-bottom:5rem;
    text-shadow: -3px 5px 6px rgba(0,0,0,0.6);
  }

  .crousel-card h1{
    font-family: "Rancho";
    font-weight:600;
    color:#476072;
    margin-bottom:2rem;
    font-size:5rem;
    text-shadow: -3px 5px 6px rgba(0,0,0,0.4);
    letter-spacing:1rem;
  }

  @media (max-width:768px){
    .h1{
      font-size:4rem;
    }
    .crousel-card p,.p{
      margin-left:1rem;
      width:100%;
      font-size:2rem;
    }
    .crousel-card h1{
      font-size:4rem;
    }
  }

  .swiper-container{
    width:95vw;
    margin-left:-1rem;
    margin-bottom:1rem;
  }
  .swiper-slide {
  background-position: center;
  background-size: cover;
  width: 20vw;
  height: 50vh;
  background:transparent;
  margin-left:10px;
  margin-bottom:2rem;
}




.swiper-slide  .card{
  display: block;
  width: 100%;
  
  /* height: 100%; */
  -o-object-fit: cover;
     object-fit: cover;
}
.swiper-slide  .card:hover{
  display: block;
  width: 80%;
  
  /* height: 100%; */
  -o-object-fit: cover;
     object-fit: cover;
}

.swiper-pagination-fraction {
  bottom: 0;
}

.swiper-pagination-bullet {
  width: 25px;
  height: 5px;
  border-radius: 5px; 
}

.swiper-button-prev{
   margin-left:-1rem;
}
.swiper-button-next{
   margin-right:2rem
}

.card p{
  margin-left:0;
  font-size:1.5rem;
  color:white;
  width:100%;
}

@media (max-width: 768px) {
  .swiper-container{
    width:95vw;

  }
  .swiper-slide {
    width: 10vw;
    height:40vh;

  }
}

`

const CardWrapper = styled.div`
  display:grid;
  grid-template-columns:repeat(3,auto);

  @media (max-width:768px){
    grid-template-columns:repeat(1,auto);
  }
`
const SlideWrapper = styled(CardWrapper)`
  
  .swiper-container {
  width: 70%;
  position: absolute;
  left: 50%;
  bottom: -16vw;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
  z-index: 2;
  padding-bottom: 3vw;
}

`
export default Cards
