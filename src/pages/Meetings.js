// MeetingPage.js
import React, { useState } from 'react';
import Calendar from 'react-calendar'; // Import the Calendar component
import 'react-calendar/dist/Calendar.css'; // Import the default styles for the calendar
import './meetingPage.css'; // Import your CSS file

const MeetingPage = () => {
  const [meetingCode, setMeetingCode] = useState('');
  const [meetingTitle, setMeetingTitle] = useState('');
  const [upcomingMeetings, setUpcomingMeetings] = useState([
    { id: 1, title: 'Project Kickoff', date: '2024-10-10', time: '10:00 AM' },
    { id: 2, title: 'Team Standup', date: '2024-10-12', time: '09:00 AM' },
    { id: 3, title: 'Sprint Review', date: '2024-10-15', time: '11:00 AM' },
  ]);
  const [date, setDate] = useState(new Date()); // State to manage selected date

  const handleJoinMeeting = (e) => {
    e.preventDefault();
    console.log('Joining meeting with code:', meetingCode);
    setMeetingCode('');
  };

  const handleCreateMeeting = (e) => {
    e.preventDefault();
    console.log('Creating new meeting:', meetingTitle);
    setMeetingTitle('');
  };

  return (
    <div className="meeting-page-container">
      <div className="header">
        <h2 className="header-title">Meetings</h2>
        <div className="meeting-join-container">
          <form onSubmit={handleJoinMeeting}>
            <input
              type="text"
              placeholder="Enter Meeting Code"
              value={meetingCode}
              onChange={(e) => setMeetingCode(e.target.value)}
            />
            <div className='button-container'>
            <button type="submit">Join Now</button>
            <button type="submit">New meeting</button>
            </div>
          </form>
        </div>
      </div>

      <div className="upcoming-meetings-container">
        <h2>Upcoming Meetings</h2>
        <div className="meeting-cards">
          {upcomingMeetings.map((meeting) => (
            <div key={meeting.id} className="meeting-card">
              <h3>{meeting.title}</h3>
              <p>{meeting.date}</p>
              <p>{meeting.time}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="calendar-container">
        <h2>Calendar</h2>
        <Calendar
          onChange={setDate}
          value={date}
          className="calendar" // Apply any additional styling
        />
      </div>
    </div>
  );
};

export default MeetingPage;
