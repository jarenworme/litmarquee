import { useNavigate } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function LandingPage () {
    // set up variable for navigation
    const navigate = useNavigate();

    const routeCalendars = () => navigate('/calendarPage', { replace: false });


    return (
        <div className="landing-page-wrapper">
            <h1>Welcome to the website!</h1>
            <a href="https://www.instagram.com/litmarquee_toronto/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <button onClick={routeCalendars}>View Calendar</button>
        </div>
    );
}
