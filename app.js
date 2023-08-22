import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch train data here using the API endpoint and authorization token
    // Update the 'trains' state with the fetched data
  }, []);

  return (
    <div>
      <h2>All Trains</h2>
      <ul>
        {trains.map(train => (
          <li key={train.trainNumber}>
            <h3>{train.trainName}</h3>
            <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
            <p>Seats Available (Sleeper): {train.seatsAvailable.sleeper}</p>
            <p>Seats Available (AC): {train.seatsAvailable.AC}</p>
            <p>Price (Sleeper): {train.price.sleeper}</p>
            <p>Price (AC): {train.price.AC}</p>
            <p>Delayed By: {train.delayedBy} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainsPage;
