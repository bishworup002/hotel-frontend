import React, { useState } from 'react';
import { ChevronRight, Keyboard } from 'lucide-react';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(6); // July is 6 (0-indexed)
  const [currentYear, setCurrentYear] = useState(2024);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = (month, year) => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<td key={`empty-${i}`}></td>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isDisabled = (month === 6 && day <= 19) || (month === 6 && (day === 14 || day === 15 || day === 16 || day === 17 || day === 18 || day === 19));
      days.push(
        <td key={day} className={isDisabled ? 'disabled' : ''}>
          {day}
        </td>
      );
    }

    const rows = [];
    let cells = [];

    days.forEach((day, index) => {
      if (index % 7 !== 0) {
        cells.push(day);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(day);
      }
      if (index === days.length - 1) {
        rows.push(cells);
      }
    });

    return rows.map((row, index) => <tr key={index}>{row}</tr>);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <div className="calendar-container">
      <h1>Select check-in date</h1>
      <p>Add your travel dates for exact pricing</p>

      <div className="calendars">
        <div className="month">
          <div className="month-header">
            <span className="month-name">{months[currentMonth]} {currentYear}</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>Su</th>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
              </tr>
            </thead>
            <tbody>
              {renderCalendar(currentMonth, currentYear)}
            </tbody>
          </table>
        </div>
        <div className="month">
          <div className="month-header">
            <span className="month-name">
              {months[(currentMonth + 1) % 12]} {currentMonth === 11 ? currentYear + 1 : currentYear}
            </span>
            <button className="next-month" onClick={handleNextMonth}>
              <ChevronRight size={24} />
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Su</th>
                <th>Mo</th>
                <th>Tu</th>
                <th>We</th>
                <th>Th</th>
                <th>Fr</th>
                <th>Sa</th>
              </tr>
            </thead>
            <tbody>
              {renderCalendar((currentMonth + 1) % 12, currentMonth === 11 ? currentYear + 1 : currentYear)}
            </tbody>
          </table>
        </div>
      </div>

      <div className="footer">
        <span className="keyboard-icon"><Keyboard size={24} /></span>
        <button className="clear-dates">Clear dates</button>
      </div>
    </div>
  );
};

export default Calendar;