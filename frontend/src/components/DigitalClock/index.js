import { useState, useEffect } from "react";
import './index.css';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
    }, [])

    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let amPm = time.getHours() > 12 ? 'PM' : 'AM'

    hour = hour > 12 ? hour - 12 : hour;

    hour = hour < 10 ? `0${hour}` : hour;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(time);
    let day = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate();
    let dayWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(time);
    let year = time.getFullYear();
    return (
        <div className="digital-clock">
            <div className="clock-date-bar">
                {dayWeek}, {month}  {day} , {year}
            </div>
            <div className="clock-hour-bar">
                <span>{hour}</span>:
                <span>{minutes}</span>:
                <span>{seconds}</span>
                <span>{amPm}</span>
            </div>
        </div>
    );
}

export default DigitalClock;