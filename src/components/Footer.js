import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,64L40,53.3C80,43,160,21,240,26.7C320,32,400,64,480,64C560,64,640,32,720,21.3C800,11,880,21,960,21.3C1040,21,1120,11,1200,42.7C1280,75,1360,149,1400,186.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>

            <div className="mainContent">
                <div className="leftContent">
                    <h1>Stack India</h1>
                    <p>India has a myriad of landscapes, great heritage and culture, varied flora and fauna. The country is the most preferred tourist destinations for tourists from all across the world for its picturesque landscapes, spectacular waterfalls, habitat of the country's largest tiger reserve and home to the warmest people on earth.</p>
                </div>
                <div className="rightContent">
                    <h1>LEGAL POLICY</h1>
                    <div className="links">
                        <a href>Terms & Conditions</a>
                        <a href>Disclaimer</a>
                        <a href>Privacy Policy</a>
                        <a href>We are Hiring</a>
                        <a href>Share Your Travel Experience</a>
                    </div>

                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
 width:99vw;
 height:40vh;
 background-color: #ffffff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(240)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%234FE'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='540' height='450' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
background-attachment: fixed;

 .mainContent{
     position:absolute;
     margin-top:-23rem;
     
     z-index:1000;
     width:100%;
display:flex;
justify-content:space-around;
 }

 .mainContent .leftContent{
     width:50%;
     margin-left:-10rem;

 }
.mainContent .leftContent h1{
    font-family: "Rancho";
    font-weight:600;
    color:white;
    margin-bottom:2rem;
    font-size:3rem;
    text-shadow: -3px 5px 6px rgba(0,0,0,0.4);
    letter-spacing:1rem;
}

.mainContent .leftContent p{
    font-family: "Rancho";
    font-weight:500;
    font-size:2.5rem;
    color:white;
    /* text-shadow: -3px 5px 6px rgba(0,0,0,0.6); */
    
}
.mainContent .rightContent{
    margin-left:-15rem;
}
.mainContent .rightContent h1{
    font-family: "Rancho";
    font-weight:600;
    color:white;
    margin-bottom:2rem;
    font-size:2rem;
    text-shadow: -3px 5px 6px rgba(0,0,0,0.4);
    letter-spacing:1rem;
}

.mainContent .rightContent .links{
    display:grid;
    margin-top:2rem;
}

.mainContent .rightContent .links a{
    text-decoration:none;
    font-family: "Rancho";
    font-weight:500;
    color:white;
    margin-left:0rem;
    margin-bottom:1rem;
    font-size:1.5rem;
    /* text-shadow: -3px 5px 6px rgba(0,0,0,0.4); */
    letter-spacing:0.1rem;
}


@media (max-width:768px){
    margin-top:13rem;
  height:10vh;
  background-color:blue;

  .mainContent{
     
     margin-top:-12rem;
 }

 .mainContent .leftContent{
     width:50%;
     margin-left:-5rem;

 }
.mainContent .leftContent h1{
    font-family: "Rancho";
    font-weight:600;
    color:white;
    margin-bottom:1rem;
    font-size:2rem;
    text-shadow: -3px 5px 6px rgba(0,0,0,0.4);
    letter-spacing:1rem;
}

.mainContent .leftContent p{
    font-family: "Rancho";
    font-weight:500;
    font-size:1.3rem;
    color:white;
    
    
}
.mainContent .rightContent{
    margin-left:-15rem;
}
.mainContent .rightContent h1{
    font-family: "Rancho";
    font-weight:600;
    color:white;
    
    font-size:1rem;
    text-shadow: -3px 5px 6px rgba(0,0,0,0.4);
    letter-spacing:0.5rem;
}

.mainContent .rightContent .links{
    display:grid;    
}

.mainContent .rightContent .links a{
    
    color:white;
    font-size:1rem; 
    margin:0;
}

}

`
export default Footer