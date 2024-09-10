import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SHOWS from "../database";


export default function CalendarPage () {
    // set up variable for navigation
    const navigate = useNavigate();

    // state variables to hold the current year and month for initial calendar generation
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

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
            <button onClick={() => handleChangeMonth(0)}>next month</button>
            <button onClick={() => handleChangeMonth(1)}>previous month</button>
        </div>
    );
}
