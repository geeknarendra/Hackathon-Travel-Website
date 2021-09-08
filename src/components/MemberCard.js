import React from 'react';
import './css/member.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Tilt from 'react-parallax-tilt';
export default function MemberCard({ name, image, linkedIn, github, instagram }) {

    return (
        <Tilt>
            <div className="mem-card">
                <img src={image} alt="person-img" />
                <h2>{name}</h2>
                <div className="links">
                    <a href={linkedIn}>
                        <LinkedInIcon style={{ fontSize: 50, color: '#476072' }} />
                    </a>
                    <a href={github}>
                        <GitHubIcon style={{ fontSize: 40, color: '#476072' }} />
                    </a>
                    <a href={instagram}>
                        <InstagramIcon style={{ fontSize: 50, color: '#476072' }} />
                    </a>

                </div>
            </div>
        </Tilt>

    )
}
