import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";


export default function LandingPage () {
    // set up variable for navigation
    const navigate = useNavigate();

    const routeCalendars = () => navigate('/calendarPage', { replace: false });


    return (
        <div className="landing-page-wrapper">
            <h1>Welcome to the website!</h1>
            <button onClick={routeCalendars}>View Calendar</button>
        </div>
    );
}
