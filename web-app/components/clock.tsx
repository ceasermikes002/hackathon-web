"use client"
import React, { useEffect, useState } from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const intervalID = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      // Cleanup the interval on unmount to avoid memory leaks
      return () => clearInterval(intervalID);
    }, []);
  
    const hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');
    
    // Determine if it's AM or PM
    const amOrPm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    const hours12 = (hours % 12) || 12;
  
    return (
      <div className="digital-clock">
        {hours12}:&nbsp;{minutes}:&nbsp;{seconds}{amOrPm}
      </div>
    );
}

export default DigitalClock;
