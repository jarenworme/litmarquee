import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function CalendarPage () {
    // set up variable for navigation
    const navigate = useNavigate();

    // state variables to hold the current year and month for initial calendar generation
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // also hold the month and year in two variables that do not change to anchor a limit on switching calendar months
    const currentMonthStatic = new Date().getMonth();
    const currentYearStatic = new Date().getFullYear();

    // Helper function to get the number of days in a month
    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Create an array of days for the current month
    const generateDays = () => {
        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        let days = [];
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }
        return days;
    };

    const navigateHome = () => navigate("/", { replace: false });

    const handleDayClick = (day) => {
        navigate(`/showList/0/${currentMonth + 1}/${day}`, { replace: false });
    };

    const handleChangeMonth = (direction) => {
        if (direction === 0) { // forward in time
            if (currentMonth == 11) {
                setCurrentYear(currentYear + 1);
                setCurrentMonth(0);
            } else {
                setCurrentMonth(currentMonth + 1);
            }
        } else { //backwards in time
            if (currentMonth === 0) {
                setCurrentYear(currentYear - 1);
                setCurrentMonth(11);
            } else {
                setCurrentMonth(currentMonth - 1);
            }      
        }
    }


    return (
        <div className="calendar-page-wrapper">
            <div className="cp-nav-bar">
                <button onClick={navigateHome}>
                    <span>LitMarquee</span>
                    <span>Toronto</span>
                </button>
                <a href="https://www.instagram.com/litmarquee_toronto/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>
            <div className="cp-body">
                <h1>calendar page</h1>
                <h2>{`Month: ${currentMonth + 1}, Year: ${currentYear}`}</h2>
                <div className="calendar-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
                    {generateDays().map((day) => (
                    <button
                        key={day}
                        onClick={() => handleDayClick(day)}
                        style={{ padding: '10px', backgroundColor: '#f0f0f0', border: '1px solid #ccc', cursor: 'pointer' }}
                    >
                        {day}
                    </button>
                    ))}
                </div>
                <button onClick={() => handleChangeMonth(1)} disabled={currentMonth <= currentMonthStatic && currentYear === currentYearStatic}>
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" className="arrow-left" />
                </button>
                <button onClick={() => handleChangeMonth(0)} disabled={currentMonth === 11 && currentYear === currentYearStatic + 1}>
                    <FontAwesomeIcon icon={faArrowRight} size="2x" className="arrow-right" />
                </button>
            </div>
        </div>
    );
}
