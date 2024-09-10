import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";


export default function CalendarPage () {
    // set up variable for navigation
    //const navigate = useNavigate();
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
        console.log(`Selected day: ${day}/${currentMonth + 1}/${currentYear}`);
    };


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
        </div>
    );
}
