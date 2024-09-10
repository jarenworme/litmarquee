import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import SHOWS from "../database";

export default function ShowList () {
    // set up variable for navigation
    const navigate = useNavigate();

    // Access the year month and day props passed in from the Calendar page
    const { yearP, monthP, dayP } = useParams();

    // State array to hold arrays of events from SHOWS based on the parameters given
    const [showList, setShowList] = useState([]);

    useEffect(() => {
        if(yearP && monthP && dayP) {
            setShowList(SHOWS[yearP][monthP][dayP]);
        }

    }, [yearP, monthP, dayP])

    const testFunc = () => {
        console.log(yearP, monthP, dayP);
        console.log(SHOWS[yearP][monthP][dayP]);
        console.log(showList);}

    const navigateHome = () => navigate("/", { replace: false });

    const navigateCalendar = () => navigate('/calendarPage', { replace: false });

    return (
        <div className="show-list-wrapper">
            <div className="sl-nav-bar">
                <button onClick={navigateHome}>
                    <span>LitMarquee</span>
                    <span>Toronto</span>
                </button>
                <button onClick={navigateCalendar}>
                    <FontAwesomeIcon icon={faCalendarDays} />
                </button>
                <a href="https://www.instagram.com/litmarquee_toronto/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
            <div className="sl-body">
                <h1>show list page</h1>
                <button onClick={navigateCalendar}>back</button>
                <div className="show-list-container">
                    {showList.length === 0 ?
                    <div>
                        <h2>Sorry, we can't find any shows schedules for that day.</h2>
                    </div>
                    : showList.map((item, _) => (
                        <div key={item[0]} className="show-card">
                            <div>
                                <h4>{item[0]}</h4>
                            </div>
                            <div>
                                <h4>{item[1]}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
